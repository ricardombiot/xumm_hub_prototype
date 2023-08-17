
from flask import Blueprint, render_template, request
from flask import json
from flask.json import jsonify

from edgedb_conn import get_conn
from queries.quotation_insert_async_edgeql import quotation_insert
from queries.quotation_select_async_edgeql import quotation_select
from queries.quotation_select_destine_for_job_async_edgeql import quotation_select_destine_for_job
from queries.quotation_update_async_edgeql import quotation_update
from queries.quotation_select_by_id_async_edgeql import quotation_select_by_id
from queries.job_update_approved_async_edgeql import job_update_approved
from queries.quotation_update_approved_async_edgeql import quotation_update_approved
from queries.quotation_update_confirmed_async_edgeql import quotation_update_confirmed
from queries.quotation_update_done_async_edgeql import quotation_update_done

from web.app.api_errors import NotAuthorizationError
from web.app.auth.optional_auth_middleware import guest_or_user_middleware
from web.app.auth.user_session import session_user_id
from web.app.auth.auth_middleware import auth_middleware, require_user_middleware
from web.app.escrow.checks_create_escrow import check_escrow_create

api_quotations = Blueprint('api_quotations', __name__)
api_quotations_secure = Blueprint('api_quotations_secure', __name__)

@api_quotations.before_request
def apply_auth_middleware():
    guest_or_user_middleware()

@api_quotations_secure.before_request
def apply_auth_middleware_secure():
    require_user_middleware()


@api_quotations_secure.errorhandler(NotAuthorizationError)
def handle_not_authorization_error(error):
    response = jsonify({"error": str(error)})
    response.status_code = 400
    return response


@api_quotations_secure.post("/api/quotations")
async def admin_list_quotation_by_job():
    user_id = session_user_id(request)
    criteria_search = json.loads(request.data)
    #print(criteria_search)
    # Only will be able to take the quotations if its owner of job (payer_id == user_id)
    
    job_id = criteria_search['job_id']
    #print(f"user_id: {user_id}")
    #page = criteria_search['page']
    conn = get_conn()
    result = await quotation_select(conn, job_id=job_id, payer_id=user_id)
    
    return jsonify({"result": result})

@api_quotations_secure.get('/api/quotation/get_by_job/<job_id>')
async def get_by_job(job_id):
    quotation = await get_my_quotation_for_job(request, job_id)
    
    return jsonify({"result": quotation})
   
async def get_my_quotation_for_job(request, job_id):
    
    destine_id = session_user_id(request)
    conn = get_conn()
    quotation = await quotation_select_destine_for_job(conn, job_id=job_id, destine_id=destine_id)
    
    return quotation 


@api_quotations_secure.post('/api/quotation/create')
async def register_quotation():
    data = json.loads(request.data)
    
    destine_id = session_user_id(request)
    quotation_description = data['description']
    quotation_total_amount = data['total_amount']
    job_id = data['job_id']
    delta_days = data['delta_days']
    
    # @TODO owner job cannot add quote.
    
    quotation = await get_my_quotation_for_job(request, job_id)
    #print(quotation)
    if quotation != None :
        
        conn = get_conn()
        result = await quotation_update(conn, 
                        quotation_id=quotation.id, 
                        quotation_description=quotation_description,
                        quotation_total_amount=quotation_total_amount,
                        delta_days=delta_days)
        
        return jsonify({"result": result})
        
    else:
        conn = get_conn()
        result = await quotation_insert(conn, 
                        destine_id=destine_id, 
                        quotation_description=quotation_description,
                        quotation_total_amount=quotation_total_amount,
                        job_id=job_id,
                        delta_days=delta_days)
        
        return jsonify({"result": result})



@api_quotations_secure.post('/api/quotation/approved')
async def approved_quotation():
    data = json.loads(request.data)
    quotation_id = data['quotation_id']
    
    payer_id = session_user_id(request)

    conn = get_conn()
    quotation = await quotation_select_by_id(conn, quotation_id=quotation_id)
    if quotation != None :
        if str(quotation.job.payer.id) != payer_id :
            raise NotAuthorizationError("You arent the job owner.")
        
        if quotation.job.approved_quotation != None :
            raise NotAuthorizationError("Job have already one quote approved.")
        
        conn = get_conn()
        _result_update_quote = await quotation_update_approved(conn, payer_id=payer_id, quotation_id=quotation_id)
        _result_update_job = await job_update_approved(conn, payer_id=payer_id, job_id=quotation.job.id, approved_quotation_id=quotation_id)
        
        return jsonify({"result": "Approved!"})
    else:
        raise NotAuthorizationError("Dont exits quotation")
    
@api_quotations_secure.get("/api/quotation/<quotation_id>")
async def admin_get_quotation(quotation_id):
    # @TODO da toda la información para la pagina de quote,
    payer_or_destine_id = session_user_id(request)
    
    conn = get_conn()
    quotation = await quotation_select_by_id(conn, quotation_id=quotation_id)
    print(quotation)
    if quotation != None :
        if str(quotation.job.payer.id) == payer_or_destine_id or str(quotation.destine.id) == payer_or_destine_id :
            
            
            quotation_partial = {
                "id": quotation.id,
                "description": quotation.description,
                "total_amount": quotation.total_amount,
                "delta_days": quotation.delta_days,
                "job" : {
                    "id": quotation.job.id,
                    "payer" : {
                        "id": str(quotation.job.payer.id),
                        "name": quotation.job.payer.name
                    }
                },
                "destine": {
                    "id": quotation.destine.id,
                    "name": quotation.destine.name
                },
                
                "escrow_state": str(quotation.escrow_state),
                "state": str(quotation.state),
                "escrow_checked_at": str(quotation.escrow_checked_at),
                "txs": quotation.txs
            }
            
            return jsonify({"result": quotation_partial})
        
            
    raise NotAuthorizationError("You arent the job owner.")



@api_quotations_secure.post('/api/quotation/done')
async def done_quotation():
    data = json.loads(request.data)
    quotation_id = data['quotation_id']
    
    destine_id = session_user_id(request)

    conn = get_conn()
    quotation = await quotation_select_by_id(conn, quotation_id=quotation_id)
    if quotation != None :
        if str(quotation.destine.id) != destine_id :
            raise NotAuthorizationError("You arent the destine owner.")
        
        
        conn = get_conn()
        _result_update_quote = await quotation_update_done(conn, destine_id=destine_id, quotation_id=quotation_id)

        return jsonify({"result": "Done!"})
    else:
        raise NotAuthorizationError("Dont exits quotation")



@api_quotations_secure.post('/api/quotation/confirm')
async def confirm_quotation():
    data = json.loads(request.data)
    quotation_id = data['quotation_id']
    
    payer_id = session_user_id(request)

    conn = get_conn()
    quotation = await quotation_select_by_id(conn, quotation_id=quotation_id)
    if quotation != None :
        if str(quotation.job.payer.id) != payer_id :
            raise NotAuthorizationError("You arent the payer owner.")
        
        
        conn = get_conn()
        _result_update_quote = await quotation_update_confirmed(conn, payer_id=payer_id, quotation_id=quotation_id)

        return jsonify({"result": "Done!"})
    else:
        raise NotAuthorizationError("Dont exits quotation")





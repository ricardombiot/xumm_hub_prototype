
from flask import Blueprint, render_template, request
from flask import json
from flask.json import jsonify

from edgedb_conn import get_conn
from queries.quotation_insert_async_edgeql import quotation_insert
from queries.quotation_select_async_edgeql import quotation_select
from queries.quotation_save_escrow_xumm_payload_uuid_async_edgeql import quotation_save_escrow_xumm_payload_uuid
from queries.quotation_select_for_escrow_async_edgeql import quotation_select_for_escrow
from web.app.escrow.finished_escrow import escrow_finish_payload_by_quotation
from web.app.api_errors import NotAuthorizationError

from web.app.escrow.create_escrow import escrow_create_payload_by_quotation
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

@api_quotations_secure.get("/api/quotation/<quotation_id>")
async def admin_get_quotation(quotation_id):
    # @TODO da toda la información para la pagina de quote,
    
    return jsonify({"result": None})


@api_quotations_secure.post("/api/quotation/finish_escrow")
async def admin_finish_escrow():
    data = json.loads(request.data)
    user_id = session_user_id(request)
    # Should be user_id (Destine)
    quotation_id = data['quotation_id']
    result = await escrow_finish_payload_by_quotation(user_id, quotation_id)
    return jsonify({"result": result})

@api_quotations_secure.post("/api/quotation/create_escrow")
async def admin_create_escrow():
    data = json.loads(request.data)
    user_id = session_user_id(request)
    # Should be the job owner (Payer)
    quotation_id = data['quotation_id']
    job_id = data['job_id']
    delta_days = data['delta_days']
    
    result = await escrow_create_payload_by_quotation(user_id, quotation_id)
    return jsonify({"result": result})
    
    
@api_quotations_secure.post("/api/quotation/create_escrow/save_xumm_payload")  
async def admin_quotation_save_escrow_xumm_payload_uuid():
    data = json.loads(request.data)
    user_id = session_user_id(request)
    
    quotation_id = data['quotation_id']
    xumm_payload_uuid = data['xumm_payload_uuid']
    conn = get_conn()
    result = await quotation_save_escrow_xumm_payload_uuid(conn, payer_id=user_id, quotation_id=quotation_id, escrow_xumm_payload_uuid=xumm_payload_uuid)
    
    if result == None :
        raise NotAuthorizationError("User havent priviligies.")
    else:
        return jsonify({"result": result})
   
   
@api_quotations_secure.post("/api/quotation/escrow/checks")  
async def admin_quotation_checks():
    data = json.loads(request.data)
    user_id = session_user_id(request)
    
    quotation_id = data['quotation_id']
    conn = get_conn()
    result = await quotation_select_for_escrow(conn, quotation_id=quotation_id, payer_id=user_id)
    
    if result == None :
        raise NotAuthorizationError("User havent priviligies.")
    else:
        action = "Checked"
        escrow_state = str(result.escrow_state)
        escrow_xumm_payload_uuid = result.escrow_xumm_payload_uuid
        if escrow_state == "WAITING_XUMM_SIGN":
            result = await check_escrow_create(user_id, quotation_id, escrow_xumm_payload_uuid)
            if result == True:
                action = "SuccessCheck"
            else:
                action = "RejectCheck"

        return jsonify({"result": {
            "_action": action,
            "state": escrow_state
        }})
        

@api_quotations_secure.post("/api/quotations")
async def admin_list_quotation_by_job():
    user_id = session_user_id(request)
    criteria_search = json.loads(request.data)
    print(criteria_search)
    # Only will be able to take the quotations if its owner of job (payer_id == user_id)
    
    job_id = criteria_search['job_id']
    print(f"user_id: {user_id}")
    #page = criteria_search['page']
    conn = get_conn()
    result = await quotation_select(conn, job_id=job_id, payer_id=user_id)
    
    return jsonify({"result": result})

@api_quotations_secure.post('/api/quotation/create')
async def register_quotation():
    data = json.loads(request.data)
    
    # @TODO destine_id from AUTH.
    destine_id = session_user_id(request)
    quotation_description = data['description']
    quotation_total_amount = data['total_amount']
    job_id = data['job_id']
    
    conn = get_conn()
    result = await quotation_insert(conn, 
                    destine_id=destine_id, 
                    quotation_description=quotation_description,
                    quotation_total_amount=quotation_total_amount,
                    job_id=job_id)
    
    return jsonify({"result": result})
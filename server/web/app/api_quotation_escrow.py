from flask import Blueprint, request
from flask import json
from flask.json import jsonify

from edgedb_conn import get_conn

from queries.quotation_save_escrow_xumm_payload_uuid_async_edgeql import quotation_save_escrow_xumm_payload_uuid
from queries.quotation_select_for_escrow_async_edgeql import quotation_select_for_escrow
from queries.quotation_save_escrow_finished_xumm_payload_uuid_async_edgeql import quotation_save_escrow_finished_xumm_payload_uuid
from queries.quotation_select_for_escrow_finished_async_edgeql import quotation_select_for_escrow_finished
from web.app.escrow.checks_finished_escrow import check_escrow_finished
from web.app.escrow.finished_escrow import escrow_finish_payload_by_quotation
from web.app.escrow.create_escrow import escrow_create_payload_by_quotation
from web.app.auth.auth_middleware import auth_middleware, require_user_middleware
from web.app.escrow.checks_create_escrow import check_escrow_create

from web.app.api_errors import NotAuthorizationError
from web.app.auth.optional_auth_middleware import guest_or_user_middleware
from web.app.auth.user_session import session_user_id
from web.app.auth.auth_middleware import auth_middleware, require_user_middleware
from web.app.escrow.checks_create_escrow import check_escrow_create

api_quotations_escrow = Blueprint('api_quotations_escrow', __name__)
api_quotations_escrow_secure = Blueprint('api_quotations_escrow_secure', __name__)

@api_quotations_escrow.before_request
def apply_auth_middleware():
    guest_or_user_middleware()

@api_quotations_escrow_secure.before_request
def apply_auth_middleware_secure():
    require_user_middleware()


@api_quotations_escrow_secure.errorhandler(NotAuthorizationError)
def handle_not_authorization_error(error):
    response = jsonify({"error": str(error)})
    response.status_code = 400
    return response

@api_quotations_escrow_secure.post("/api/quotation/finish_escrow")
async def admin_finish_escrow():
    data = json.loads(request.data)
    user_id = session_user_id(request)
    # Should be user_id (Destine)
    quotation_id = data['quotation_id']
    result = await escrow_finish_payload_by_quotation(user_id, quotation_id)
    return jsonify({"result": result})

@api_quotations_escrow_secure.post("/api/quotation/create_escrow")
async def admin_create_escrow():
    data = json.loads(request.data)
    user_id = session_user_id(request)
    # Should be the job owner (Payer)
    quotation_id = data['quotation_id']
    job_id = data['job_id']
    delta_days = data['delta_days']
    
    result = await escrow_create_payload_by_quotation(user_id, quotation_id)
    return jsonify({"result": result})


@api_quotations_escrow_secure.post("/api/quotation/finished_escrow/save_xumm_payload")  
async def admin_quotation_save_escrow_finished_xumm_payload_uuid():
    data = json.loads(request.data)
    destine_id = session_user_id(request)
    
    quotation_id = data['quotation_id']
    finished_xumm_payload_uuid = data['finished_xumm_payload_uuid']
    conn = get_conn()
    result = await quotation_save_escrow_finished_xumm_payload_uuid(conn, destine_id=destine_id, quotation_id=quotation_id, finished_xumm_payload_uuid=finished_xumm_payload_uuid)
    
    if result == None :
        raise NotAuthorizationError("User havent priviligies.")
    else:
        return jsonify({"result": result}) 
    
    
@api_quotations_escrow_secure.post("/api/quotation/create_escrow/save_xumm_payload")  
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
   
   
@api_quotations_escrow_secure.post("/api/quotation/escrow/checks")  
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

@api_quotations_escrow_secure.post("/api/quotation/escrow/checks_finished")  
async def admin_quotation_checks_finished():
    data = json.loads(request.data)
    destine_id = session_user_id(request)
    
    quotation_id = data['quotation_id']
    conn = get_conn()
    result = await quotation_select_for_escrow_finished(conn, quotation_id=quotation_id, destine_id=destine_id)
    
    if result == None :
        raise NotAuthorizationError("User havent priviligies.")
    else:
        action = "Checked"
        escrow_state = str(result.escrow_state)
        escrow_finished_xumm_payload_uuid = result.escrow_finished_xumm_payload_uuid
        if escrow_state == "WAITING_XUMM_SIGN_FINISH":
            result = await check_escrow_finished(destine_id=destine_id, quotation_id=quotation_id, xumm_uuid=escrow_finished_xumm_payload_uuid)
            if result == True:
                action = "SuccessCheck"
            else:
                action = "RejectCheck"

        return jsonify({"result": {
            "_action": action,
            "state": escrow_state
        }})    

from flask import Blueprint, request
from flask import json
from flask.json import jsonify

from edgedb_conn import get_conn
from web.app.transfer.checks_transfer import checks_direct_transfer
from web.app.transfer.create_transfer import direct_transfer_by_quotation

from web.app.api_errors import NotAuthorizationError
from web.app.auth.optional_auth_middleware import guest_or_user_middleware
from web.app.auth.user_session import session_user_id
from web.app.auth.auth_middleware import auth_middleware, require_user_middleware

api_quotations_direct_transfer = Blueprint('api_quotations_direct_transfer', __name__)
api_quotations_direct_transfer_secure = Blueprint('api_quotations_direct_transfer_secure', __name__)

@api_quotations_direct_transfer.before_request
def apply_auth_middleware():
    guest_or_user_middleware()

@api_quotations_direct_transfer_secure.before_request
def apply_auth_middleware_secure():
    require_user_middleware()


@api_quotations_direct_transfer_secure.errorhandler(NotAuthorizationError)
def handle_not_authorization_error(error):
    response = jsonify({"error": str(error)})
    response.status_code = 400
    return response

@api_quotations_direct_transfer_secure.post("/api/quotation/direct_transfer")
async def admin_direct_transfer():
    data = json.loads(request.data)
    user_id = session_user_id(request)

    quotation_id = data['quotation_id']
    amount = data['amount']
    result = await direct_transfer_by_quotation(user_id, quotation_id, amount)
    return jsonify({"result": result})

@api_quotations_direct_transfer_secure.post("/api/quotation/direct_transfer/checks")  
async def admin_direct_transfer_checks():
    data = json.loads(request.data)
    user_id = session_user_id(request)
    
    direct_transfer_id = data['direct_transfer_id']
    xumm_payload_uuid = data['xumm_payload_uuid']
    result = await checks_direct_transfer(user_id, direct_transfer_id, xumm_payload_uuid)
    return jsonify({"result": result})

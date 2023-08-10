
from flask import Blueprint, render_template, request
from flask import json
from flask.json import jsonify

from edgedb_conn import get_conn
from queries.quotation_insert_async_edgeql import quotation_insert
from web.app.auth.optional_auth_middleware import guest_or_user_middleware
from web.app.auth.user_session import session_user_id
from web.app.auth.auth_middleware import auth_middleware, require_user_middleware

api_quotations = Blueprint('api_quotations', __name__)

api_quotations_secure = Blueprint('api_quotations_secure', __name__)

@api_quotations.before_request
def apply_auth_middleware():
    guest_or_user_middleware()

@api_quotations_secure.before_request
def apply_auth_middleware_secure():
    require_user_middleware()

@api_quotations_secure.post('/api/quotation/create')
async def register_quotation():
    data = json.loads(request.data)
    
    # @TODO destine_id from AUTH.
    destine_id = session_user_id()
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
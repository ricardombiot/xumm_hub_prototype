
from flask import Blueprint, render_template, request
from flask import json
from flask.json import jsonify

from edgedb_conn import get_conn
from queries.user_select_profile_priv_async_edgeql import user_select_profile_priv
from queries.user_update_profile_async_edgeql import user_update_profile

from web.app.api_errors import NotAuthorizationError
from web.app.auth.optional_auth_middleware import guest_or_user_middleware
from web.app.auth.user_session import session_user_id
from web.app.auth.auth_middleware import auth_middleware, require_user_middleware

api_user = Blueprint('api_user', __name__)
api_user_secure = Blueprint('api_user_secure', __name__)

@api_user.before_request
def apply_auth_middleware():
    guest_or_user_middleware()

@api_user_secure.before_request
def apply_auth_middleware_secure():
    require_user_middleware()


@api_user_secure.errorhandler(NotAuthorizationError)
def handle_not_authorization_error(error):
    response = jsonify({"error": str(error)})
    response.status_code = 400
    return response


@api_user_secure.get('/api/user/profile/priv')
async def get_priv_profile():
    user_id = session_user_id(request)
    
    conn = get_conn()
    result = await user_select_profile_priv(conn, user_id=user_id)
    return jsonify({"result": result})


@api_user_secure.post('/api/user/profile/priv')
async def update_priv_profile():
    data = json.loads(request.data)
    user_id = session_user_id(request)


    email = data['email']
    name = data['name']
    last_name = data['last_name']
    city = data['city']
    full_address = data['full_address']
    postal_code = data['postal_code']
    country = data['country']
    phone = data['phone']
    bio = data['bio']
    
    conn = get_conn()
    result = await user_update_profile(conn, 
                                       user_id=user_id,
                                       email=email,
                                       name=name,
                                       last_name=last_name,
                                       city=city,
                                       postal_code=postal_code,
                                       full_address=full_address,
                                       country=country,
                                       phone=phone,
                                       bio=bio
                                       )
    return jsonify({"result": result})
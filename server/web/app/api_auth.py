from flask import Blueprint, render_template, request
from flask import json
from flask.json import jsonify
from web.app.auth.auth_middleware import auth_middleware
from web.app.api_errors import NotAuthorizationError

from web.app.auth.xumm_jwt_reader import checks_auth_by_xumm_token
from web.app.auth.token import build_token, verify_token

api_auth = Blueprint('api_auth', __name__)

from dotenv import load_dotenv
load_dotenv()

@api_auth.get('/api/auth/access_by_xumm')
async def access_by_xumm_login_or_register():
    headers = request.headers
    token = headers.get("Authorization")

    if token is None:
        raise NotAuthorizationError("Require authorization")

    xumm_jwt = token.replace("Bearer ", "")
    is_valid, info_from_xumm = checks_auth_by_xumm_token(xumm_jwt)
    
    if is_valid :
        token, payload = await build_token(info_from_xumm)
        #print(token)
        return jsonify({"result": {
            "token": str(token),
            "payload": payload
        }})
    else:
        response = jsonify({"error": "Unvalid Xumm Auth."})
        response.status_code = 400
        return response
    
   
@api_auth.route('/api/auth/ping')
@auth_middleware
def ping():
    info = request.session_info
    return jsonify({"result": info})
    
    
    

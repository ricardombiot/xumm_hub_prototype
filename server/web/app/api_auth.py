from flask import Blueprint, render_template, request
from flask import json
from flask.json import jsonify
from web.app.api_errors import NotAuthorizationError

from web.app.auth.xumm_jwt_reader import checks_auth_by_xumm_token
from web.app.auth.token import build_token, verify_token

api_auth = Blueprint('api_auth', __name__)

from dotenv import load_dotenv
load_dotenv()

@api_auth.get('/api/auth/access_by_xumm')
async def access_by_xumm_login_or_register():
    headers = request.headers
    xumm_jwt = headers.get("X-Xumm-Jwt")

    is_valid, info_from_xumm = checks_auth_by_xumm_token(xumm_jwt)
    
    if is_valid :
        token = build_token(info_from_xumm)
        print(token)
        return jsonify({"result": {
            "token": str(token)
        }})
    else:
        response = jsonify({"error": "Unvalid Xumm Auth."})
        response.status_code = 400
        return response
    
@api_auth.get('/api/auth')
async def ping():
    headers = request.headers
    token = headers.get("Authorization")
    if token == None:
        raise NotAuthorizationError("Require authorization")
        
    token = token.replace("Bearer ","")
    result = verify_token(token)
    
    if result == None:
        raise NotAuthorizationError("Invalid Token Authorization")
    
    return jsonify({"result": result})
    
    

    
    
    
    

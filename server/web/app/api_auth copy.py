import xumm
import os 
from flask import Blueprint, render_template, request
from flask import json
from flask.json import jsonify


from auth.xumm_jwt_reader import checks_auth_by_xumm_token

api_auth = Blueprint('api_auth', __name__)

from dotenv import load_dotenv
load_dotenv()

#API_XUMM_KEY = os.environ.get("API_XUMM_KEY")
#API_XUMM_SECRET = os.environ.get("API_XUMM_SECRET")

#def is_authorized(token):
#    sdk = xumm.XummSdk(API_XUMM_KEY, API_XUMM_SECRET)
#    res = sdk.verify_user_token(token)
   
#    print(res) ## Why always is NONE?
#    return res

#@api_auth.route('/api/auth/<token>')
#async def is_auth(token):
#    return jsonify({"result": is_authorized(token)})

@api_auth.get('/api/auth/access_by_xumm')
async def access_by_xumm_login_or_register():
    headers = request.headers
    xumm_jwt = headers.get("X-Xumm-Jwt")

    is_valid, info = checks_auth_by_xumm_token(xumm_jwt)
    

    token = "dsfdsf"
    

    return jsonify({"result": token})
    
    
    

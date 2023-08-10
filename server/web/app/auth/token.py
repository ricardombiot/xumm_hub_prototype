import os
import jwt
import time
from datetime import datetime, timedelta
from dotenv import load_dotenv

from web.app.auth.user_session import get_or_create_user_id_by_account
load_dotenv()

USERS_JWT_LIFETIME_HOURS = int(os.environ.get("USERS_JWT_LIFETIME_HOURS"))
JWT_SECRET = os.environ.get("JWT_SECRET")


async def build_token(info_from_xumm):
    iat = int(time.time())
    expiration = datetime.now() + timedelta(hours=USERS_JWT_LIFETIME_HOURS) 
    exp = int(expiration.timestamp())
    
    account = info_from_xumm["account"]
    from_xumm_jwt = info_from_xumm["xumm_jwt"]
    user_id = await get_or_create_user_id_by_account(account)
    
    payload = {
        "account": account,
        "user_id": user_id,
        "_from": from_xumm_jwt ,
        "iat": iat,
        "exp": exp
    }
    
    print(payload)
    
    encoded_jwt = jwt.encode(payload, JWT_SECRET, algorithm="HS256")
    return encoded_jwt
    

def verify_token(token):
    payload = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
    
    if payload != None and verificate_jwt_time(payload["iat"], payload["exp"]) :
        return payload
    else:
        return None
        
    

def verificate_jwt_time(iat, exp):
    current_time = int(time.time())
    return iat is not None and exp is not None and current_time >= iat and current_time <= exp

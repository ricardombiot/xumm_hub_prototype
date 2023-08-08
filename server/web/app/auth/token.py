import os
import jwt
import time
from datetime import datetime, timedelta
from dotenv import load_dotenv
load_dotenv()

USERS_JWT_LIFETIME_HOURS = int(os.environ.get("USERS_JWT_LIFETIME_HOURS"))
JWT_SECRET = os.environ.get("JWT_SECRET")


def build_token(info_from_xumm):
    iat = int(time.time())
    expiration = datetime.now() + timedelta(hours=USERS_JWT_LIFETIME_HOURS) 
    exp = int(expiration.timestamp())
    
    payload = {
        "account": info_from_xumm["account"],
        "_from": info_from_xumm["xumm_jwt"],
        "iat": iat,
        "exp": exp
    }
    
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

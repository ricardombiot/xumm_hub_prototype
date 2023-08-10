from flask import request
from web.app.auth.user_session import inject_session_user_info, inject_session_user_info_as_guest
from web.app.auth.token import verify_token

def guest_or_user_middleware():
    headers = request.headers
    token = headers.get("Authorization")
    is_guest = True
    
    if token != None:
        token = token.replace("Bearer ", "")
        payload = verify_token(token)  

        if payload != None: 
            is_guest = False
            inject_session_user_info(request, payload)   
            
    if is_guest:
        inject_session_user_info_as_guest(request)

def optional_auth_middleware(func):
    def wrapper(*args, **kwargs):
        guest_or_user_middleware()
        
        return func(*args, **kwargs)
    
    return wrapper


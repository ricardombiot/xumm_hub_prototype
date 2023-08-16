from flask import request

from web.app.auth.token import verify_token
from web.app.api_errors import NotAuthorizationError
from web.app.auth.user_session import inject_session_user_info

def require_user_middleware():
    headers = request.headers
    token = headers.get("Authorization")

    if token is None:
        raise NotAuthorizationError("Require authorization")

    token = token.replace("Bearer ", "")
    payload = verify_token(token)  

    if payload is None:
        raise NotAuthorizationError("Invalid Token Authorization")
    
    inject_session_user_info(request, payload)


def auth_middleware(func):
    def wrapper(*args, **kwargs):
        require_user_middleware()

        return func(*args, **kwargs)
    
    return wrapper



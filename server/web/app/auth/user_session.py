

from random import randrange
from edgedb_conn import get_conn
from queries.user_select_async_edgeql import user_select
from queries.user_register_async_edgeql import user_register


async def get_or_create_user_id_by_account(account):
    
    conn = get_conn()
    user = await user_select(conn, user_address=account)
    
    if len(user) == 0:
        initial_name = generate_initial_name()
        conn = get_conn()
        id = await user_register(conn, user_address=account, initial_name=initial_name)
        
        return str(id)
    else:
        user = user[0]
        return str(user.id)
    
    
def generate_initial_name():
    ran_num = randrange(10000)
    return f"anonymous{ran_num}"
    
def inject_session_user_info(request, payload):
    #"payload": payload,
    request.session_info = {
        "user_id": payload["user_id"],
        "account": payload["account"],
        "role": "USER"
    }
    
def inject_session_user_info_as_guest(request):
    request.session_info = {
        "user_id": None,
        "account": None,
        "role": "GUEST"
    }
    
def session_user_id(request):
    return request.session_info["user_id"]

def session_account(request):
    return request.session_info["account"]

def session_is_user(request):
    return request.session_info["role"] == "USER"

def session_is_guest(request):
    return request.session_info["role"] == "GUEST"


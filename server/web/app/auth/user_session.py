


from edgedb_conn import get_conn
from queries.user_select_async_edgeql import user_select
from queries.user_register_async_edgeql import user_register


async def get_or_create_user_id_by_account(account):
    
    conn = get_conn()
    user = await user_select(conn, user_address=account)
    
    if len(user) == 0:
        conn = get_conn()
        id = await user_register(conn, user_address=account)
        
        return str(id)
    else:
        user = user[0]
        return str(user.id)
    
    
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
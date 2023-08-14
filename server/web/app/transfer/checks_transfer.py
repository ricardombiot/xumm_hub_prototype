
from edgedb_conn import get_conn
from queries.direct_transfer_select_async_edgeql import direct_transfer_select
from queries.direct_transfer_checks_async_edgeql import direct_transfer_checks
from queries.tx_insert_async_edgeql import tx_insert
from web.app.escrow.read_xumm_payload import load_xumm_payload
from web.app.api_errors import NotAuthorizationError


async def checks_direct_transfer(user_id, direct_transfer_id, xumm_payload_uuid):
    
    conn = get_conn()
    direct_transfer = await direct_transfer_select(conn, direct_transfer_id=direct_transfer_id, owner_id=user_id)
    
    if direct_transfer == None: 
        raise NotAuthorizationError("Ohh... how you know this transfer... mmm")
    
    if direct_transfer.is_checked :
        return True
    
    
    response_xumm = load_xumm_payload(xumm_payload_uuid)

    if response_xumm["response"]["dispatched_result"] != "tesSUCCESS":
        return False
    else:
        
        _ = await direct_transfer_checks(conn, direct_transfer_id=direct_transfer_id, xumm_payload_uuid=xumm_payload_uuid, is_checked=True)
        
        txid = response_xumm["response"]["txid"]
        conn = get_conn()
        _ = await tx_insert(conn, quotation_id=direct_transfer.quotation.id, tx_type="Direct Transfer", ledger_txid=txid)
        
        
        return True
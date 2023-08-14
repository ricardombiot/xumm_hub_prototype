
from edgedb_conn import get_conn
from queries.quotation_select_for_escrow_finished_async_edgeql import quotation_select_for_escrow_finished
from queries.quotation_save_escrow_after_checked_async_edgeql import quotation_save_escrow_after_checked
from queries.quotation_save_escrow_after_checked_finished_async_edgeql import quotation_save_escrow_after_checked_finished
from queries.tx_insert_async_edgeql import tx_insert
from web.app.escrow.read_xrpl_tx import read_transaction_on_xrpl_ledger
from web.app.escrow.read_xumm_payload import load_xumm_payload
from web.app.api_errors import NotAuthorizationError
import json

async def check_escrow_finished(destine_id, quotation_id, xumm_uuid):
    
    conn = get_conn()
    quotation = await quotation_select_for_escrow_finished(conn, quotation_id=quotation_id, destine_id=destine_id)

    if quotation == None :
        raise NotAuthorizationError("User havent priviligies.")
        
    response_xumm = load_xumm_payload(xumm_uuid)
    print(response_xumm)
    ##@TODO If is expired go back state 
    ## i should fixed a few minutes expiration 5 min - 10 min - https://xumm.readme.io/docs/doc-payload-life-cycle
    if response_xumm["response"]["dispatched_result"] != "tesSUCCESS":
        return False

    
    conn = get_conn()
    result = await quotation_save_escrow_after_checked_finished(conn, quotation_id=quotation_id, destine_id=destine_id)
    
    if result == None:
        raise NotAuthorizationError("User havent priviligies.")
    else:
        
        txid = response_xumm["response"]["txid"]
        conn = get_conn()
        _ = await tx_insert(conn, quotation_id=quotation_id, tx_type="Escrow finished", ledger_txid=txid)
        
        return True
        

def check_request_payload(response_xumm, original_payload):    
    check_keys = ["Amount", "Account", "Destination", "Condition"]
    for key in check_keys :
        if response_xumm["payload"]["request_json"][key] != original_payload[key] :
            NotAuthorizationError("Security validation error!! uuid sign xumm not correspond to quotation escrow.")
    
    
def check_info_tx(info_tx, original_payload):
    check_keys = ["Amount", "Account", "Destination", "Condition"]
    for key in check_keys :
        if info_tx["result"][key] != original_payload[key] :
            NotAuthorizationError("Security validation error!! tx not correspond to quotation escrow.")
    


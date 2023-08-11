
from edgedb_conn import get_conn
from queries.quotation_select_for_escrow_async_edgeql import quotation_select_for_escrow
from queries.quotation_save_escrow_after_checked_async_edgeql import quotation_save_escrow_after_checked
from web.app.escrow.read_xrpl_tx import read_transaction_on_xrpl_ledger
from web.app.escrow.read_xumm_payload import load_xumm_payload
from web.app.api_errors import NotAuthorizationError
import json

async def check_escrow_create(user_id, quotation_id, xumm_uuid):
    
    conn = get_conn()
    quotation = await quotation_select_for_escrow(conn, quotation_id=quotation_id, payer_id=user_id)

    if quotation != None :
        response_xumm = load_xumm_payload(xumm_uuid)
        if response_xumm["response"]["dispatched_result"] != "tesSUCCESS":
            return False
    
        
        original_payload = json.loads(quotation.escrow_payload)
        check_request_payload(response_xumm, original_payload)
        txid = response_xumm["response"]["txid"]

        info_tx = read_transaction_on_xrpl_ledger(txid)
        check_info_tx(info_tx, original_payload)
        escrow_sequence = info_tx["result"]["Sequence"]
        
        conn = get_conn()
        result = await quotation_save_escrow_after_checked(conn, quotation_id=quotation_id, payer_id=user_id,escrow_sequence=escrow_sequence, escrow_txid=txid)
        
        if result == None:
            raise NotAuthorizationError("User havent priviligies.")
        else:
            return True
        
    else:
        raise NotAuthorizationError("User havent priviligies.")
        
        

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
    


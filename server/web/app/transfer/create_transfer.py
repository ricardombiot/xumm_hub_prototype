
from edgedb_conn import get_conn

import json
from queries.quotation_select_for_trasfer_async_edgeql import quotation_select_for_trasfer

from web.app.api_errors import NotAuthorizationError

async def direct_transfer_by_quotation(user_id, quotation_id, amount):
    
    conn = get_conn()
    quotation = await quotation_select_for_trasfer(conn, quotation_id=quotation_id)

    if quotation == None:
        raise NotAuthorizationError("Quotation should be at least APPROVED, for privacity reasons...")
    else: 
       
        destination = get_destination_by_payer_or_destine(quotation, user_id)
        #@NOTE: Dangeous if someone edit the accounts of ours users, transfer would be send to other place.
        ## Therefore you would should check sometimes and avoid users can login with other wallet. 
        amount = str(int(amount*1000000))
        
        return {
            "TransactionType": 'Payment',
            "Destination": destination,
            "Amount": amount 
        }


def get_destination_by_payer_or_destine(quotation, user_id):
    is_destine = quotation.destine.id == user_id
    is_payer = quotation.job.payer.id == user_id
    
    if is_destine :
        return quotation.job.payer.public_address
    elif is_payer:
        return quotation.destine.public_address
    else:
        raise NotAuthorizationError("Ehh... you arent authorized!")
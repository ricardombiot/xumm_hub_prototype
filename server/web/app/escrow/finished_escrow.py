
from edgedb_conn import get_conn
from queries.quotation_select_for_escrow_destine_async_edgeql import quotation_select_for_escrow_destine
import json

from web.app.api_errors import NotAuthorizationError

async def escrow_finish_payload_by_quotation(user_id, quotation_id):
    
    conn = get_conn()
    quotation = await quotation_select_for_escrow_destine(conn, quotation_id=quotation_id, destine_id=user_id)

    if quotation == None:
        raise NotAuthorizationError("Should finish destine user...")
    else: 
        #@TODO - SHOULD CHECK STATE QUOATION IS CLOSE BY OWNER.
        payload = json.loads(quotation.escrow_payload)

        return {
            "TransactionType": "EscrowFinish",
            "Owner": quotation.job.payer.public_address,
            "Condition": payload["Condition"],
            "Fulfillment": quotation.escrow_fullfilment,
            "OfferSequence": quotation.escrow_sequence
        }
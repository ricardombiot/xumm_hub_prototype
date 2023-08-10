

from os import urandom
from cryptoconditions import PreimageSha256
import time

from queries.quotation_select_for_escrow_async_edgeql import quotation_select_for_escrow
from edgedb_conn import get_conn

 
async def escrow_create_payload_by_quotation(user_id, quotation_id):
    
    conn = get_conn()
    quotation = await quotation_select_for_escrow(conn, quotation_id=quotation_id, payer_id=user_id)

    if quotation != None :
        
        print(quotation)
        
        #Object{total_amount := 50.0, destine := Object{public_address := 'rfqhCQxE9KpqL3F1CuYCzHdsbkRj6mf8wW'}, job := Object{payer := Object{id := UUID('0cff4858-3768-11ee-941e-1304d7536d93'), public_address := 'r9zc2vUJYL5xykjeiRdzQo2QdUfE2Ub9Nm'}}}
        escrow_builder = EscrowCreatePayloadJsonBuilder(
            amount=quotation.total_amount, 
            payer_address=quotation.job.payer.public_address, 
            destine_address=quotation.destine.public_address,
            delta_days=7
        )
        
        payload = escrow_builder.build()
        fullfilment = escrow_builder.get_fullfilment()
        # @TODO save fullfilment on quotation db.
        
        return payload
    else:
        return None

class EscrowCreatePayloadJsonBuilder:
    
    def __init__(self, payer_address, destine_address, amount, delta_days):
        self.account = payer_address
        self.destination = destine_address
        self.amount = str(int(amount*1000000)) # on drops...
        self.calcel_after = calc_cancel_after(delta_days)
        
        condition, fullfilment = calc_condition()
        self.condition = condition
        self.fullfilment = fullfilment
    

        
    def get_fullfilment(self):
        return self.fullfilment
    
    def build(self):
        return {
            "Account": self.account,
            "TransactionType": "EscrowCreate",
            "Amount":self.amount,
            "Destination": self.destination,
            "CancelAfter": self.calcel_after,
            "Condition": self.condition,
            "DestinationTag": 1,
            "SourceTag": 1
        }
    

#async def payload_canditate(paype):
    
    


def ripple_epoch_now():
    millis = int(time.time() * 1000)
    epoch_secs = millis // 1000
    return epoch_secs - 946684800

def calc_cancel_after(delta_days):
    segs = delta_days * 24 * 60 * 60
    return ripple_epoch_now() + segs


def calc_condition():

    secret = urandom(32)

    fulfillment = PreimageSha256(preimage=secret)

    condition = fulfillment.condition_binary.hex().upper()
    fulfillment = fulfillment.serialize_binary().hex().upper()
    return condition, fulfillment
    
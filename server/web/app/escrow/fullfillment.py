from os import urandom
from cryptoconditions import PreimageSha256
from cryptography.fernet import Fernet
import os

from dotenv import load_dotenv
load_dotenv()

SECRET_FULFILLMENT = os.environ.get("SECRET_FULFILLMENT")


def calc_condition():

    secret = urandom(32)

    fulfillment = PreimageSha256(preimage=secret)

    condition = fulfillment.condition_binary.hex().upper()
    fulfillment = fulfillment.serialize_binary().hex().upper()    
    
    fernet = Fernet(SECRET_FULFILLMENT)   
    fulfillment_bytes = bytes(fulfillment, 'utf-8')
    fulfillment_encrypted = fernet.encrypt(fulfillment_bytes) 
    
    return condition, fulfillment_encrypted.decode('utf-8')


def restore_fulfillment(fulfillment_encrypted):
    fernet = Fernet(SECRET_FULFILLMENT)
    fulfillment_encrypted_bytes = bytes(fulfillment_encrypted, 'utf-8')            
    decrypted = fernet.decrypt(fulfillment_encrypted_bytes)
    return decrypted.decode('utf-8')


import requests
import os
from dotenv import load_dotenv
load_dotenv()

USERS_NETWORK = os.environ.get("USERS_NETWORK")
USERS_JWT_LIFETIME_HOURS = os.environ.get("USERS_JWT_LIFETIME_HOURS")

def checks_auth_by_xumm_token(xumm_jwt):
    url = "https://xumm.app/api/v1/jwt/ping"

    headers = {
        "accept": "application/json",
        "Authorization": f"Bearer {xumm_jwt}"
    }
    
    response = requests.get(url, headers=headers)

    info_jwt = response.json()
    #print(info_jwt)
    if info_jwt != None and info_jwt["pong"] == True and info_jwt["network_type"] == USERS_NETWORK:
        info = {
          "account": info_jwt["sub"],
          "xumm_jwt": xumm_jwt,
        }
        return True, info
    else:
        return False, None

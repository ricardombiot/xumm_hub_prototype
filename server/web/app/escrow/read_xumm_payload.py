import requests
import os

API_XUMM_KEY = os.environ.get('API_XUMM_KEY')
API_XUMM_SECRET = os.environ.get('API_XUMM_SECRET')

def load_xumm_payload(uuid):
    url = f'https://xumm.app/api/v1/platform/payload/{uuid}'
    headers = {
        'accept': 'application/json',
        'X-API-Key': API_XUMM_KEY,
        'X-API-Secret': API_XUMM_SECRET 
    }

    response = requests.get(url, headers=headers)
    response_json = response.json()
    return response_json



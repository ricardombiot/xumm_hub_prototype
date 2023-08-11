
import requests


def read_transaction_on_xrpl_ledger(txid):
    url = f'https://s.altnet.rippletest.net:51234'
    headers = {
        'accept': 'application/json'
    }
    request_data = {
        "method": "tx",
        "params": [
            {
                "transaction": txid,
                "binary": False
            }
        ]
    }
    
    response = requests.post(url, headers=headers, json=request_data)
    response = response.json()
    print(response)
    return response


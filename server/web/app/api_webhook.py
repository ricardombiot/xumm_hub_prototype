import json
from flask import Blueprint, jsonify, request

api_webhook = Blueprint('api_webhook', __name__)

@api_webhook.post("/api/webhook")
async def read_webhook():
    data = json.loads(request.data)
    
    print(data)
    
    return jsonify({"result": True})
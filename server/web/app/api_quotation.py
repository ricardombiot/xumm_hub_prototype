
from flask import Blueprint, render_template, request
from flask import json
from flask.json import jsonify

from edgedb_conn import get_conn
from queries.quotation_insert_async_edgeql import quotation_insert
from web.app.auth.auth_middleware import auth_middleware

api_quotations = Blueprint('api_quotations', __name__)


@api_quotations.post('/api/quotation')
@auth_middleware
async def register_job():
    data = json.loads(request.data)
    
    # @TODO destine_id from AUTH.
    destine_id = "26b569ca-3520-11ee-8ea4-0b23e1cf42b7"
    quotation_description = data['description']
    quotation_total_amount = data['total_amount']
    job_id = data['job_id']
    
    conn = get_conn()
    result = await quotation_insert(conn, 
                    destine_id=destine_id, 
                    quotation_description=quotation_description,
                    quotation_total_amount=quotation_total_amount,
                    job_id=job_id)
    
    return jsonify({"result": result})
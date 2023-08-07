from flask import Blueprint, render_template, request
from flask import json
from flask.json import jsonify

from edgedb_conn import get_conn
from queries.jobs_select_async_edgeql import jobs_select
from queries.job_insert_async_edgeql import job_insert

api_jobs = Blueprint('api_jobs', __name__)

@api_jobs.route('/api/jobs')
async def jobs(rest=None):

    conn = get_conn()
    result = await jobs_select(conn)
    
    return jsonify({"result": result})


@api_jobs.post('/api/job')
async def register_job():
    data = json.loads(request.data)
    
    # @TODO payer_id from AUTH.
    payer_id = "26b569ca-3520-11ee-8ea4-0b23e1cf42b7"
    job_title = data['title']
    job_description = data['description']
    
    conn = get_conn()
    result = await job_insert(conn, payer_id=payer_id, job_description=job_description, job_title=job_title)
    
    return jsonify({"result": result})
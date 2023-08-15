from flask import Blueprint, render_template, request
from flask import json
from flask.json import jsonify

from edgedb_conn import get_conn
from queries.jobs_select_async_edgeql import jobs_select
from queries.job_insert_async_edgeql import job_insert
from queries.job_select_one_async_edgeql import job_select_one
from web.app.auth.user_session import session_user_id
from web.app.auth.optional_auth_middleware import optional_auth_middleware, guest_or_user_middleware
from web.app.auth.auth_middleware import auth_middleware, require_user_middleware

api_jobs = Blueprint('api_jobs', __name__)
api_jobs_secure = Blueprint('api_jobs_secure', __name__)

@api_jobs.before_request
def apply_auth_middleware():
    guest_or_user_middleware()

@api_jobs_secure.before_request
def apply_auth_middleware_secure():
    require_user_middleware()

@api_jobs.get('/api/jobs')
async def jobs(rest=None):
    conn = get_conn()
    result = await jobs_select(conn)
    
    return jsonify({"result": result})

@api_jobs.get('/api/job/<job_id>')
async def get_job(job_id):
    conn = get_conn()
    result = await job_select_one(conn, job_id=job_id)
    
    return jsonify({"result": result})

@api_jobs_secure.post('/api/job/create')
async def register_job():
    data = json.loads(request.data)
    
    # @TODO payer_id from AUTH.
    payer_id = session_user_id(request)
    job_title = data['title']
    job_description = data['description']
    job_budget_range = data['budget_range']
    categories_json = json.dumps(data['categories'])
    
    conn = get_conn()
    result = await job_insert(conn, payer_id=payer_id, job_description=job_description, job_title=job_title, job_budget_range=job_budget_range, categories_json=categories_json)
    
    return jsonify({"result": result})
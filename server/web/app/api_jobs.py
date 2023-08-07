from flask import Blueprint, render_template
from flask.json import jsonify

from edgedb_conn import get_conn
from queries.jobs_select_async_edgeql import jobs_select

api_jobs = Blueprint('api_jobs', __name__)

@api_jobs.route('/api/jobs')
async def jobs(rest=None):

    conn = get_conn()
    result = await jobs_select(conn)
    
    return jsonify({"result": result})

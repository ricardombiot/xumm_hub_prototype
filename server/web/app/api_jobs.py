from flask import Blueprint, render_template
from flask.json import jsonify

from edgedb_conn import get_conn
from queries.select_jobs_async_edgeql import select_jobs

api_jobs = Blueprint('api_jobs', __name__)

@api_jobs.route('/api/jobs')
async def jobs(rest=None):

    conn = get_conn()
    result = await select_jobs(conn)
    
    return jsonify({"result": result})

from flask import Flask

app = Flask(__name__,
            static_folder='../static', 
            static_url_path='/static',
            template_folder='../templates')

from web.app.single_page_app_routes import spa_routes
from web.app.api_jobs import api_jobs
from web.app.api_quotation import api_quotations


@app.route("/ping")
def ping():
    return "<p>pong...</p>"

### API                 ###
app.register_blueprint(api_jobs)
app.register_blueprint(api_quotations)

### SPA using Inferno   ###
app.register_blueprint(spa_routes)

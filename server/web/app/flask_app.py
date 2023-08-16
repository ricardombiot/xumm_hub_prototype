from flask import Flask

app = Flask(__name__,
            static_folder='../static', 
            static_url_path='/static',
            template_folder='../templates')

from web.app.single_page_app_routes import spa_routes
<<<<<<< HEAD
from web.app.api_jobs import api_jobs


@app.route("/ping")
def hello_world():
    return "<p>Hello, World!</p>"

### API                 ###
app.register_blueprint(api_jobs)

### SPA using Inferno   ###
app.register_blueprint(spa_routes)
=======
from web.app.api_jobs import api_jobs, api_jobs_secure
from web.app.api_quotation import api_quotations, api_quotations_secure
from web.app.api_quotation_escrow import api_quotations_escrow, api_quotations_escrow_secure
from web.app.api_quotations_direct_transfer import api_quotations_direct_transfer, api_quotations_direct_transfer_secure
from web.app.api_user import api_user, api_user_secure
from web.app.api_auth import api_auth
from web.app.api_errors import api_errors
from web.app.api_webhook import api_webhook

@app.route("/ping")
def ping():
    return "<p>pong...</p>"

### API                 ###
app.register_blueprint(api_jobs)
app.register_blueprint(api_jobs_secure)
app.register_blueprint(api_user)
app.register_blueprint(api_user_secure)
app.register_blueprint(api_quotations)
app.register_blueprint(api_quotations_secure)
app.register_blueprint(api_quotations_escrow)
app.register_blueprint(api_quotations_escrow_secure)
app.register_blueprint(api_quotations_direct_transfer)
app.register_blueprint(api_quotations_direct_transfer_secure)
app.register_blueprint(api_webhook)
app.register_blueprint(api_auth)
app.register_blueprint(api_errors)


### SPA using Inferno   ###
app.register_blueprint(spa_routes)


>>>>>>> 4d4c7b2d81d689e634abaf020c1ee44a03372461

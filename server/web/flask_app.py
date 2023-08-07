from flask import Flask

app = Flask(__name__,
            static_folder='static', 
            static_url_path='/static',
            template_folder='templates')

from app.single_page_app_routes import spa_routes
#from .admin_routes import admin_bp
#from .user_routes import user_bp

#app.register_blueprint(admin_bp, url_prefix='/admin')
#app.register_blueprint(user_bp, url_prefix='/user')

@app.route("/ping")
def hello_world():
    return "<p>Hello, World!</p>"

app.register_blueprint(spa_routes)

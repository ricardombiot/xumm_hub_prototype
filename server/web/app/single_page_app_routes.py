from flask import Blueprint, render_template
import os
spa_routes = Blueprint('spa', __name__)
API_XUMM_KEY = os.environ.get('API_XUMM_KEY')

@spa_routes.route('/')
@spa_routes.route('/<path:rest>')
def fallback(rest=None):
    return render_template(f'inferno_theme.html', API_XUMM_KEY=API_XUMM_KEY)

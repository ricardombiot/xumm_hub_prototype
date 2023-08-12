from flask import Blueprint, render_template

spa_routes = Blueprint('spa', __name__)

@spa_routes.route('/')
@spa_routes.route('/<path:rest>')
def fallback(rest=None):
    return render_template(f'inferno_theme.html')

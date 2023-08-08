from flask import Blueprint, jsonify

class NotAuthorizationError(Exception):
    pass


api_errors = Blueprint('api_errors', __name__)

@api_errors.errorhandler(NotAuthorizationError)
def handle_not_authorization_error(error):
    response = jsonify({"error": str(error)})
    response.status_code = 400
    return response


#@api_errors.errorhandler(Exception)  
#def handle_generic_error(error):
#    response = jsonify({"error": "Sorry, internal error."})
#    response.status_code = 500  
#    return response
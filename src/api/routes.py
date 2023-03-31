from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from bcrypt import gensalt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)



@api.route('/signup', methods=['POST'])
def handle_signup():
    if request.method == 'POST':
        data = request.json
        new_user = User()
        new_user.email = data['email']
        new_user.name = data['name']
        new_user.last_name = data['last_name']
        new_user.phone_number = data['phone_number']
        new_user.password = data['password']
        db.session.add(new_user)
        db.session.commit()

        return jsonify(data), 201

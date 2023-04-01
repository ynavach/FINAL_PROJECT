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
        new_user.hashed_password = data['hashed_password']
        new_user.salt = data['salt']
        db.session.add(new_user)
        db.session.commit()

    return jsonify(data), 201
    

@api.route('/login', methods=['POST'])
def handle_login():
    data = request.json
    # Email validation
    user = User.query.filter_by(email=data['email']).one_or_none()
    if user is None: 
        return jsonify({
            "error": "Datos incorrectos"
        }), 400
    # Hash password validation
    correct_password = check_password_hash(user.hashed_password, data['password'] + user.salt)
    if not correct_password: 
        return jsonify({
            "error": "Datos incorrectos"
        }), 400
    if correct_password:
        jwt_token = create_access_token(identity=user.id)
        return jsonify({
            "jwt_token": jwt_token
        }), 200

@api.route('/private', methods=['GET'])
@jwt_required()
def handle_private():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    return jsonify({
        "user": user.serialize()
    }), 200

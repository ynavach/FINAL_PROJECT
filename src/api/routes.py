import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Pets, Services
from api.utils import generate_sitemap, APIException
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from bcrypt import gensalt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import cloudinary
import cloudinary.uploader
import cloudinary.api

api = Blueprint('api', __name__)

@api.route('/signup', methods=['POST'])
def handle_signup():
    data = request.json
    email = User.query.filter_by(email=data['email']).one_or_none()
    phone = User.query.filter_by(phone_number=data['phone_number']).one_or_none()
    if request.method == 'POST':
        if email is not None or phone is not None: 
            return jsonify({
            "error": "usuario existente"
            }), 400
        else:
            salt = str(gensalt())
            password_hash = generate_password_hash(data['password'] + salt)
            new_user = User()
            new_user.email = data['email']
            new_user.name = data['name']
            new_user.last_name = data['last_name']
            new_user.phone_number = data['phone_number']
            new_user.hashed_password = password_hash
            new_user.salt = salt
            new_user.medic = data['medic']
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


@api.route('/pets' , methods = ['POST'])
@jwt_required()
def handle_create_pets():
    data = request.json
    user_id = get_jwt_identity()
    new_pet = Pets()
    new_pet.name = data['name']
    new_pet.age = data['age']
    new_pet.gender = data['gender']
    new_pet.species = data['species']
    new_pet.race = data['race']
    new_pet.photo = data['photo']
    new_pet.owner_id = user_id
    db.session.add(new_pet)
    db.session.commit()
    return jsonify(data), 201


@api.route("/upload", methods=['POST'])
def upload_file():
    cloudinary.config(cloud_name = 'dmgyyv1j3', api_key='253179481662428', api_secret='NXxWGCzsuF3Tb9zOqqXrXQPwjZE')
    file_to_upload = request.files['file']
    if file_to_upload:
        upload_result = cloudinary.uploader.upload(file_to_upload)
        return jsonify(upload_result)

@api.route("/delete/<id>",methods=['DELETE'])
def handle_delete(id):
    petDelete = Pets.query.get(id)
    db.session.delete(petDelete)
    db.session.commit()
    return "Se ha eliminado con exito su mascota",201

@api.route('/services', methods=['PATCH', 'GET', 'POST', 'DELETE'])
def handle_services():
    if request.method == 'GET':
        servicios = Services.query.all()
        servicios_serializados = [servicio.serialize() for servicio in servicios]
        print(servicios_serializados)
        return jsonify(servicios_serializados), 200

    elif request.method == 'POST':
        new_service = Services(
            name=request.json['name'],
            enabled=request.json["enabled"]
        )
        db.session.add(new_service)
        db.session.commit()
        new_service_dict = new_service.serialize()
        return jsonify(new_service_dict), 201
    elif request.method == 'DELETE':
        Services.query.delete()
        db.session.commit()
        return jsonify({'message': 'Todos los servicios han sido borrados'}), 200

@api.route('/services/<int:id>', methods=['PATCH'])
def handle_patch_service(id):
    service = Services.query.get(id)
    data = request.json
    print(data)
    if data.get("enabled") is not None:
        service.enabled = data["enabled"] 

    db.session.commit()
    return jsonify(), 200
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Pets(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    age = db.Column(db.String(2),unique=False, nullable=False )
    gender = db.Column(db.String(80), unique=False, nullable=False)
    race = db.Column(db.String(80), unique=False, nullable=False)
    species = db.Column(db.String(80), unique=False, nullable=False)
    photo = db.Column(db.String(500), unique=False, nullable=False)
    owner_id = db.Column(db.ForeignKey('user.id'))  
    owner = db.relationship('User',back_populates="pets")

    def _repr_(self):
        return f'<Pets {self.name}>'
    
    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
            "age": self.age,
            "gender": self.gender,
            "race": self.race,
            "species" : self.species,
            "photo": self.photo,           
            "owner_id":self.owner_id
        }

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone_number = db.Column(db.String(120), unique=False, nullable=False)
    salt = db.Column(db.String(500), unique=True, nullable=False)
    hashed_password = db.Column(db.String(500), unique=False, nullable=False)
    medic = db.Column(db.Boolean, unique=False, nullable=False)
    pets = db.relationship('Pets',back_populates="owner")

    def _repr_(self):
        return f'<User {self.email}>'

    def serialize(self):   
        print( {"id": self.id,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "phone_number": self.phone_number,
            "medic": self.medic,
            "pets": [pet.serialize() for pet in self.pets]})     
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "phone_number": self.phone_number,
            "medic": self.medic,
            "pets": [pet.serialize() for pet in self.pets]
        }


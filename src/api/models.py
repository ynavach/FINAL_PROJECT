from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Requested_Service(db.Model):
    __tablename__ = 'requested_service'
    id = db.Column(db.Integer, primary_key=True)
    service_name = db.Column(db.String(80), unique=False, nullable=False)
    date = db.Column(db.Date(), unique=False, nullable=False)
    time = db.Column(db.String(80), unique=False, nullable=False)
    owner_name = db.Column(db.String(80), unique=False, nullable=False)
    pet_name = db.Column(db.String(80), unique=False, nullable=False)
    pet_species = db.Column(db.String(80), unique=False, nullable=False)
    owner_id = db.Column(db.ForeignKey('user.id'))
    pet_id = db.Column(db.ForeignKey('pets.id', ondelete="CASCADE")) 
    owner = db.relationship('User', back_populates="requested_service")
    pets = db.relationship('Pets', back_populates="requested_service")

    def _repr_(self):
        return f'<Requested_Service {self.name}>'
    
    def serialize(self):
        return{
            "id": self.id,
            "service_name": self.service_name,
            "date": self.date,
            "time": self.time,          
            "owner_name": self.owner_name,           
            "pet_name": self.pet_name,
            "pet_species": self.pet_species,          
            "owner_id":self.owner_id,
            "pet_id":self.pet_id
        }

class Pets(db.Model):
    __tablename__ = 'pets'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    age = db.Column(db.String(2),unique=False, nullable=False )
    gender = db.Column(db.String(80), unique=False, nullable=False)
    race = db.Column(db.String(80), unique=False, nullable=False)
    species = db.Column(db.String(80), unique=False, nullable=False)
    photo = db.Column(db.String(500), unique=False, nullable=False)
    owner_id = db.Column(db.ForeignKey('user.id'))  
    owner = db.relationship('User', back_populates="pets")
    requested_service = db.relationship('Requested_Service', back_populates="pets", cascade="all, delete")

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
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone_number = db.Column(db.String(120), unique=False, nullable=False)
    salt = db.Column(db.String(500), unique=True, nullable=False)
    hashed_password = db.Column(db.String(500), unique=False, nullable=False)
    medic = db.Column(db.Boolean, unique=False, nullable=False)
    pets = db.relationship('Pets', back_populates="owner")
    requested_service = db.relationship('Requested_Service', back_populates="owner")

    def _repr_(self):
        return f'<User {self.email}>'

    def serialize(self):    
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "phone_number": self.phone_number,
            "medic": self.medic,
            "pets": [pet.serialize() for pet in self.pets],
            "services": [service.serialize() for service in self.requested_service],
        }

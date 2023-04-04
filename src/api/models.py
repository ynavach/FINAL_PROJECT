from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone_number = db.Column(db.String(120), unique=False, nullable=False)
    salt = db.Column(db.String(500), unique=True, nullable=False)
    hashed_password = db.Column(db.String(500), unique=False, nullable=False)
    medic = db.Column(db.Boolean, unique=False, nullable=False)

    def _repr_(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "phone_number": self.phone_number,
            "medic":self.medic
        }

from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.ext.associationproxy import association_proxy

from config import db, bcrypt


# Models go here!
class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    admin = db.Column(db.Boolean, nullable=False, default=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    _password_hash = db.Column(db.String)
    
    @hybrid_property
    def password_hash(self):
        # return self._password_hash
        raise Exception("Cannot access password hashes")

    @password_hash.setter
    def password_hash(self, password):
        hashed_pw = bcrypt.generate_password_hash(password).decode("utf8")
        self._password_hash = hashed_pw
    

    def __repr__(self):
        return f"User ID: {self.id} /nName: {self.name} /nEmail: {self.email} /nAdmin: {self.admin} /nCreated: {self.created_at} /nLast Updated: {self.updated_at}"

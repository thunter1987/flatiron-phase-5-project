from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.ext.associationproxy import association_proxy

from config import app, db, bcrypt


# Models go here!
class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    _password_hash = db.Column(db.String, nullable=False)
    role = db.Column(db.String, default='basic user')
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    @hybrid_property
    def password_hash(self):
        # return self._password_hash
        raise Exception("Cannot access password hashes")

    @password_hash.setter
    def password_hash(self, password):
        hashed_pw = bcrypt.generate_password_hash(password).decode("utf8")
        self._password_hash = hashed_pw

    def __repr__(self):
        return (
            f'< User ID: {self.id}' /
            f'Username: {self.username}' /
            f'Email: {self.email}' /
            f'Admin: {self.admin}' /
            f'Created: {self.created_at}' /
            f'Last Updated: {self.updated_at} >'
                )



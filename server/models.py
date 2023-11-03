from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.ext.associationproxy import association_proxy

from config import db, bcrypt


# Models go here!
post_reply = db.Table('post_reply',
        db.Column('post_id', db.Integer, db.ForeignKey('posts.id')),
        db.Column('reply_id', db.Integer, db.ForeignKey('replies.id'))
         )
class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    username = db.Column(db.String, nullable=False, unique=True)
    email = db.Column(db.String, unique=True, nullable=False)
    role = db.Column(db.String, default="basic")
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    _password_hash = db.Column(db.String, nullable=False)
    
    posts = db.relationship("Post", backref="poster")
    replies = db.relationship("Reply", backref="poster")
    
    
    @hybrid_property
    def password_hash(self):
        # return self._password_hash
        raise Exception("Cannot access password hashes")

    @password_hash.setter
    def password_hash(self, password):
        hashed_pw = bcrypt.generate_password_hash(password).decode("utf8")
        self._password_hash = hashed_pw
        
    def authenticate(self, provided_password):
        return bcrypt.check_password_hash(self._password_hash, provided_password)

    
    def __repr__(self):
        return f"< User ID: {self.id} / Username: {self.name} / Email: {self.email} / Admin: {self.admin} >"
    
    
class Post(db.Model, SerializerMixin):
    __tablename__ = "posts"
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    tags = db.Column(db.String)
    header = db.Column(db.String(30))
    body = db.Column(db.String)
    replies = db.relationship('Reply', secondary=post_reply, back_populates='post')
    
class Reply(db.Model, SerializerMixin):
    __tablename__ = "replies"
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    post_id = db.Column(db.Integer, db.ForeignKey("posts.id"))
    body = db.Column(db.String)
    post = db.relationship('Post', secondary=post_reply, back_populates='replies')


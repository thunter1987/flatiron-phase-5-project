#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response, jsonify, session

# Local imports
from config import app, db, bcrypt

# Add your model imports
from models import User

# Define routes

@app.route("/")
def index():
    return "Index Page"

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(
        username=data['username'],
        email=data['email'],
        first_name=data['first_name'],
        last_name=data['last_name'],
        password_hash=hashed_password,
        role=data['role']
    )
    db.session.add(new_user)
    db.session.commit()
    session["user_id"] = user.id

    return make_response(
            new_user.to_dict(),
            201,
        )


@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(username=data['username']).first()

    if user and bcrypt.check_password_hash(user.password_hash, data['password']):
        return jsonify({'message': 'Login successful', 'username': user.username, 'role': user.role})
    else:
        return jsonify({'message': 'Invalid credentials'}), 401
    
@app.route("/authorized", methods=["GET"])
def authorized():
    user = User.query.filter(User.id == session.get("user_id")).first()
    if user:
        return user.to_dict(), 200
    else:
        return {"errors": ["Unauthorized"]}, 401
    
@app.route("/logout", methods=["DELETE"])
def logout():
    session['user_id'] = None 
    return {}, 204


if __name__ == '__main__':
    app.run(port=5555, debug=True)

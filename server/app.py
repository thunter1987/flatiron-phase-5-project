#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response, jsonify, session
from flask_restful import Resource
from flask_marshmallow import Marshmallow

# Local imports
from config import app, db, api
from dotenv import load_dotenv

# Add your model imports
from models import User, Post, Reply

load_dotenv()

ma = Marshmallow(app)

# Views go here!


@app.route("/")
def index():
    return "Welcome to the User Database Project"


class Login(Resource):
    def post(self):
        data = request.get_json()
        user = User.query.filter(User.username == data['username']).first()
        
        if user:
            if user.authenticate(data['password']):
                session['user.id'] = user.id
                return user.todict(), 200
        else:
            return {'errors': ['Incorrect credentials provided']}, 401

        # Add new user to DB
        db.session.add(user)
        db.session.commit()

        # Create session
        session["user_id"] = user.id

        response = make_response(
            user.to_dict(),
            201,
        )

        return response


api.add_resource(Login, "/login")

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

if __name__ == "__main__":
    app.run(port=5555, debug=True)

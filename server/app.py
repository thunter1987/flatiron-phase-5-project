#!/usr/bin/env python3

# Standard library imports

# Remote library imports
import bcrypt
from flask import request, make_response, jsonify, session
from flask_restful import Resource

# Local imports
from config import app, db, api
from dotenv import load_dotenv

# Add your model imports
from models import User, Post, Reply

load_dotenv()

# Views go here!


@app.route("/")
def index():
    return "Welcome to the User Database Project"


class Login(Resource):
    def post(self):
        data = request.get_json()
        user = User.query.filter(User.username == data["username"]).first()

        if user:
            if user.authenticate(data["password"]):
                session["user_id"] = user.id
                resp = make_response(user.to_dict())

                return resp
            else:
                return {"errors": ["Incorrect credentials provided"]}, 401
        
        return {"errors": ["Incorrect credentials provided"]}, 401
        
class SignUp(Resource):
    def post(self):
        data = request.get_json()
        if User.query.filter(User.username == data["username"]).first():
            return {"errors": ["Username is Already Taken"]}, 403
            
        user = User(
            first_name = data["firstName"],
            last_name = data["lastName"],
            username = data["username"],
            email = data["email"]
            )
        password = data["password"],
        password2 = data["password2"]
        
        if password != password2:
            return ["Passwords Do Not Match"], 401

        else:
            user.password_hash = password
            db.session.add(user)
            db.session.commit()
            return "Profile Created Successfully"
        
            
                


@app.route(f"/profile/{User.username}")
def user(username):
    return f"<h1>Profile for {username}</h1>"


@app.route("/authorized", methods=["GET"])
def authorized():
    user = User.query.filter(User.id == session.get("user_id")).first()
    if user:
        return user.to_dict(), 200
    else:
        return {"errors": ["Unauthorized"]}, 401


@app.route("/logout", methods=["DELETE"])
def logout():
    session["user_id"] = None
    return {}, 204


api.add_resource(Login, "/login")
api.add_resource(SignUp, "/signup")


if __name__ == "__main__":
    app.run(port=5555, debug=True)

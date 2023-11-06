#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response, jsonify, session
from flask_restful import Resource

# Local imports
from config import app, db, api
from dotenv import load_dotenv
from datetime import datetime, timedelta

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
                session["user.id"] = user.id
                time_date = datetime.now() + timedelta(hours=4)
                expiry_date = datetime.now() + timedelta(days=30)
                resp = make_response(user.to_dict())
                
                resp.set_cookie(
                    key="userId",
                    value='user.id',
                    max_age=time_date,
                    expires=expiry_date,
                    httponly=True,
                    secure=True,
                )
                return resp
            else:
                return {"errors": ["Incorrect credentials provided"]}, 401
        else:
            return {"errors": ["Incorrect credentials provided"]}, 401
        

@app.route("/profile/<string:username>")
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


if __name__ == "__main__":
    app.run(port=5555, debug=True)

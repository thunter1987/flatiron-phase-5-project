#!/usr/bin/env python3

# Standard library imports

# Local imports
from config import api, app, db, bcrypt

# Remote library imports
from flask import jsonify, make_response, request, session
from flask_marshmallow import Marshmallow
from flask_restful import Resource
# Add your model imports
from models import User

ma = Marshmallow(app)

# Views go here!

class Register(Resource):
    def post(self):
        data = request.json
        new_user = User(
            username=data['username'],
            email=data['email'],
            first_name=data['first_name'],
            last_name=data['last_name'],
            password_hash=bcrypt.generate_password_hash(data['password']),
            role=data['role']
        )
        # Add new user to DB
        db.session.add(new_user)
        db.session.commit()

        # Create session
        session["user_id"] = new_user.id
    

        return make_response(
        new_user.to_dict(),
        201,
    )
api.add_resource(Register, '/register')

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


if __name__ == "__main__":
    app.run(port=5555, debug=True)

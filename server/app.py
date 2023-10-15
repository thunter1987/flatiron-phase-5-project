#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response, jsonify, session, render_template

# Local imports
from config import app, db, bcrypt

# Add your model imports
from models import User

# Define routes


@app.route("/")
@app.route('/<int:id>')
def index(id=0):
    return render_template("index.html")

@app.route("/register", methods=["POST"])
def register():
    data = request.json
    hashed_password = bcrypt.generate_password_hash(data["password"]).decode("utf-8")
    new_user = User(
        username=data["username"],
        email=data["email"],
        first_name=data["first_name"],
        last_name=data["last_name"],
        password_hash=hashed_password,
        role=data["role"],
    )
    db.session.add(new_user)
    db.session.commit()
    session["user_id"] = new_user.id

    return make_response(
        new_user.to_dict(),
        201,
    )


@app.route("/login", methods=["POST"])
def login():
    data = request.json
    user = User.query.filter_by(username=data["username"]).first()

    if user:
        if user.authenticate(data["password"]):
            session["user_id"] = user.id
            return make_response(
                {
                    "message": "Login successful",
                    "username": user.username,
                    "role": user.role,
                }
            )

        else:
            return make_response(["message:", " Password incorrect"], 401)
    else:
        return make_response(({"message": "Invalid credentials"}), 401)

@app.route("/check_session", methods=["GET"])
def check_session():
    user = User.query.filter(User.id == session.get("user_id")).first()

    if user:
        return (
            {
                "username": user.username,
                "role": user.role,
            }
        ), 200
    else:
        return make_response(["Message", "Unauthorized"], 401)


@app.route("/logout", methods=["DELETE"])
def logout():
    session["user_id"] = None
    return {}, 204


if __name__ == "__main__":
    app.run(port=5555, debug=True)

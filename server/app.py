#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource
from flask_marshmallow import Marshmallow
# Local imports
from config import app, db, api
# Add your model imports
from models import User
from dotenv import load_dotenv
load_dotenv()

ma = Marshmallow(app)

# Views go here!

@app.route('/')
def index():
    return 'Welcome to the User Database Project'


@app.route('/users')
def get():
    plural_user = {user for user in User}
    return plural_user


if __name__ == '__main__':
    app.run(port=5555, debug=True)


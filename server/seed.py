#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User

if __name__ == "__main__":
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!
        User.query.delete()

        users = []
        for _ in range(20):
            user = User(
                name=fake.name(),
                email=fake.email(),
                admin=rc([0,1]),
            )
            users.append(user)
            
        db.session.add_all(users)
        db.session.commit()

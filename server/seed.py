#!/usr/bin/env python3

# Standard library imports
from random import choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, bcrypt

if __name__ == "__main__":
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!        
        users=[]
        
        def generate_random_role():
            roles = ["basic", "supervisor", "manager", "admin", "master"]
            return rc(roles)

        def seed_users():
            user1 = User(
                    username="thunter1987",
                    email="thunter1987@yahoo.com",
                    first_name="Tony",
                    last_name="Hunter",
                    _password_hash=bcrypt.generate_password_hash("Hunter87").decode(
                        "utf-8"
                    ),
                    role="master"
                )
            users.append(user1)
            
            for _ in range(20):
                user = User(
                    username=fake.name(),
                    email=fake.email(),
                    first_name=fake.first_name(),
                    last_name=fake.last_name(),
                    _password_hash=bcrypt.generate_password_hash('ABC123').decode(
                        "utf-8"
                    ),
                    role=generate_random_role()
                )
                
                users.append(user)
                db.session.add_all(users)
            db.session.commit()
        seed_users()

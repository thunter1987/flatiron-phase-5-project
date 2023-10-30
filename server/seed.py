#!/usr/bin/env python3

# Standard library imports
from random import choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, Post, Reply, post_reply, bcrypt

if __name__ == "__main__":
  users = []
  replies = []
  all_posts = []
  roles = ['basic', 'supervisor', 'manager', 'admin', 'master']
  password1 = "Hunter87"
  password2='password'

  fake = Faker()
  print("Starting seed...")
  with app.app_context():
        # Seed code goes here!
    def generate_random_role():
      return rc(roles)
   
    # user1 = User(
    #     first_name = "Tony" ,
    #     last_name = 'Hunter' ,
    #     username='thunter1987' ,
    #     email='thunter1987@yahoo.com' ,   
    #     role=roles[4],
    #     _password_hash=bcrypt.generate_password_hash(password1.encode('utf-8')).decode('utf-8')
    #     )

    # users.append(user1)
        
    # for _ in range(20):
    #     new_first_name=fake.first_name()
    #     new_last_name=fake.last_name()
    #     new_username=f'{new_first_name[0]}{new_last_name}'
    #     new_user = User(
    #       first_name=new_first_name,
    #       last_name=new_last_name,
    #       username=new_username,
    #       email=f'{new_username}@google.com',
    #       role=generate_random_role(),
    #       _password_hash=bcrypt.generate_password_hash(password2.encode('utf-8')).decode('utf-8')
    #     )                  
    #     for _ in range(5):
    #       posts = fake.sentence(),
    #       replies = fake.sentence(),
    #     users.append(new_user)
    # db.session.add_all(users)
   
      
    for _ in range(10):
      user = User
      for user in users:
        user['post'] = Post(
        tag = fake.word(),
        header = fake.sentence(),
        body = fake.paragraph()
      )
        print(User['posts'])
      db.session.add_all(all_posts)
    
    
    
    # authors = rc(len(users))
    # for _ in range(15):
    #   new_reply = Reply(
    #     body = fake.paragraph(),
    #   )
      
      
      
      

    db.session.commit()

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import "./styles.css";

const Authentication = ({ updateUser }) => {
  const [signUp, setSignUp] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignUpClick = () => setSignUp((signUp) => !signUp);

  /*
    - Finish building the authentication controlled for to handle the:
        - value
        - onchange
        - onsubmit of the form
    - on submit create a POST. 
        - There is a button that toggles the component between login and sign up.
        - if signUp is true use the path '/users' else use '/login' (we will be writing login soon)
        - Complete the post and test our '/users' route 
    - On a successful POST add the user to state (updateUser is passed down from app through props) and redirect to the Home page.
    - return to server/app.py to build the next route
*/

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        signUp
          ? userData
          : {
              name: userData.name,
              email: userData.email,
              password_hash: userData.password,
            }
      ),
    };
    fetch(signUp ? "/users" : "/login", config)
      .then((resp) => resp.json())
      .then((user) => {
        updateUser(user);
        navigate("/");
      });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const userDataCopy = { ...userData };
    userDataCopy[name] = value;

    setUserData(userDataCopy);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          aria-required
          type='text'
          name='name'
          value={userData.name}
          onChange={handleChange}
        />
        {signUp && (
          <>
            <label>Email</label>
            <input
              aria-required
              type='text'
              name='email'
              value={userData.email}
              onChange={handleChange}
            />
            <label>Password</label>
            <input
              aria-required
              type='password'
              name='password'
              value={userData.password}
              onChange={handleChange}
              aria-hidden
            />
          </>
        )}
        <input type='submit' value={signUp ? "Sign Up!" : "Log In!"} />
      </form>

      
    </>
  );
};

export default Authentication;

import React, { useState } from "react";

function SignUp() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
              name: userData.name,
              email: userData.email,
              password_hash: userData.password,
            })
    };
    fetch("/login", config)
      .then((resp) => resp.json())
      .then((user) => {
        setUserData(user);
      });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const userDataCopy = { ...userData };
    userDataCopy[name] = value;

    setUserData(userDataCopy);
  };
  return (
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          aria-required
          type='text'
          name='name'
          value={userData.name}
          onChange={handleChange}
      />
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
        <input type='submit' value="Log In!" />
      </form>
  );
}

export default SignUp;

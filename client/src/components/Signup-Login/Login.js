import { useState } from "react";
import "./styles.css";

export default function Signup() {
  const [signup, setSignup] = useState(false);
  const [userData, setUserData] = useState(
    signup
      ? {
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          password: "",
          password2: "",
        }
      : {
          username: "",
          password: "",
        }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    if (userData.password2 === userData.password) {
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        signup
          ? userData
          : {
              firstName: userData.firstName,
              lastName: userData.lastName,
              username: userData.username,
              email: userData.email,
              password: userData.password,
            }
      ),
    };
    fetch("/login", config).then((resp) => {
      if (resp.ok) {
        console.log(resp);
      }
    });
  };}

  //   .then((user) => {
  // updateUser(user);
  // navigate("/");
  //   });
  // };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const userDataCopy = { ...userData };
    userDataCopy[name] = value;

    setUserData(userDataCopy);
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form className="login-form" onSubmitCapture={handleSubmit}>
        <label>Username</label>
        <input
          required
          type="text"
          name="username"
          value={userData.username}
          placeholder="username"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          required
          type="password"
          name="password"
          value={userData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <input type="submit" value="register" />
        <a href={setSignup(!signup)}>Register for an Account?</a>
        <a href="/signup">Register for an Account?</a>
      </form>
    </div>
  );
}

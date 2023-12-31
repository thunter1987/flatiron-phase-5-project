import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

export default function Signup({ user, setUser, errors, setErrors }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password === userData.password2) {
      console.log(userData);
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      };
      fetch("/signup", config).then((res) => {
        if (res.ok) {
          alert("Signup succesful");
          res.json().then((user) => {
            setUser(user);
            navigate('/')
          });
        } else {
          alert("Passwords Do Not Match");
          setErrors({ Error: "Passwords Do Not Match" });
        }
      });
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const userDataCopy = { ...userData };
    userDataCopy[name] = value;

    setUserData(userDataCopy);
  };

  return (
    <div className="login-page">
      <h1>Signup</h1>
      <form className="login-form" onSubmitCapture={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          aria-required
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <label>Username</label>
        <input
          aria-required
          type="text"
          name="username"
          value={userData.username}
          placeholder="username"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          aria-required
          type="password"
          name="password"
          value={userData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <label>Retype Password</label>
        <input
          aria-required
          type="password"
          name="password2"
          value={userData.passwordConfirm}
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <input type="submit" value="Login" />{" "}
        <a href="/login">Already Have an Account?</a>
      </form>
    </div>
  );
}

import { useState } from "react";
import "./styles.css";

export default function Login({ user, setUser, navigate }) {
  const [errors, setErrors] = useState([]);
  const [signup, setSignup] = useState(false);
  const [userData, setUserData] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
      };
      fetch("/login", config).then((resp) => {
        if (resp.ok) {
          resp.json().then((user) => {
            setUser(user)
            navigate('/')
          })
        } else {
          resp.json().then(data => setErrors(data.errors))
        }
      });
    };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const userDataCopy = { ...userData };
    userDataCopy[name] = value;

    setUserData(userDataCopy);
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form className="login-form" onSubmitCapture={ handleSubmit }>
        <label>Username</label>
        <input
          required
          type="text"
          name="username"
          value={ userData.username }
          placeholder="username"
          onChange={ handleChange }
        />
        <label>Password</label>
        <input
          required
          type="password"
          name="password"
          value={ userData.password }
          placeholder="Password"
          onChange={ handleChange }
        />
        <input type="submit" value="Login" />
        <a href="/signup">Register for an Account?</a>
      </form>
    </div>
  );
}

import { useState } from 'react'
import './styles.css';

export default function Signup() {
  const [signup, setSignup] = useState(true)
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData)
    //   const config = {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(
    //           signUp ? userData : { name: userData.name, email: userData.email, password: userData.password }),
    //   };
    // fetch(signUp ? "/users" : "/login", config)
    //   .then((resp) => resp.json())
    //   .then((user) => {
    //     updateUser(user);
    //     navigate("/");
    //   });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const userDataCopy = { ...userData };
    userDataCopy[name] = value;

    setUserData(userDataCopy);
  };

  return (
    <div className='signup-page'>
      <h1>{signup ? <p>Signup</p> : <p>Login</p>}</h1>
      <form className="signup-form"
        onSubmitCapture={handleSubmit}>
        <label>Username</label>
        <input required
          type='text'
          name="username"
          value={userData.username}
          placeholder="username"
          onChange={handleChange} />
        {signup && (
          <>
            <label>Email</label>
            <input required
              type='text'
              name='email'
              value={userData.email}
              onChange={handleChange}
            />
            <input required
              type='password'
              name="password"
              value={userData.password}
              placeholder="Password"
              onChange={handleChange} />
               <input required
              type='password'
              name="password-confirm"
              value={userData.passwordConfirm}
              placeholder="Confirm Password"
              onChange={handleChange} />
          </>
        )}
        <input type='submit' value={signup ? "Register" : "Login"} />
      </form>
    </div>
  )
}

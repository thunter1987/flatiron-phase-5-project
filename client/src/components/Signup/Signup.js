import { useState } from 'react'
import './styles.css';

export default function Signup() {
  const [signup, setSignup] = useState(true)
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className='signup-page'>
      <h1>{ signup ? <p>Signup</p> : <p>Login</p> }</h1>
      <form className="signup-form">
        <label>Username</label>
        <input type='text' name="username" value={ userData.username } placeholder="username" />
        { signup && (
          <>
            <label>Email</label>
            <input type='text'
              name='email'
              value={ userData.email }
            />
          </>
        ) }
      </form>
    </div>
  )
}

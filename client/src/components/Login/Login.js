import React, {useState} from "react";
import ReactModalLogin from "react-modal-login";
import "./styles.css";

export default function Login() {
  const [signUp, setSignUp] = useState(false)
  const handleSignUpClick = () => setSignUp((signUp) => !signUp);

  return (
    <div className='auth-errors-switch-wrapper'>
      {/* <h2 className='auth-errors'>{"Errors here!!"}</h2> */}
      <h2>{signUp ? "Already a member?" : "Not a member?"}</h2>
      <button onClick={() => this.openModal() }>
        <Login />
        {signUp ? "Log In!" : "Register now!"}
      </button>
      <ReactModalLogin>
        <div>Login</div>
      </ReactModalLogin>
    </div>
  );
}

import "./styles.css";
import { Routes, Route } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Oops! You seem to be lost.</h1>
      <h3>Here are some helpful links:</h3>
      <ul>
        <Routes>
          <Route path='/'>Home</Route>
          <Route path='/signup'>SignUp</Route>
          <Route path='/login'>Login</Route>
        </Routes>
      </ul>
    </div>
  );
}

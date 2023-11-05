import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Signup from "../Signup-Login/Signup";
import Login from "../Signup-Login/Login";
import "./App.css";
import Logout from "../Signup-Login/Logout";
import Profile from "../Profile/Profile";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState();
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    fetch("/authorized")
      .then((resp) => {
        if (resp.ok) {
          resp.json();
          console.log(resp);
        } else {
          resp.json().then(err => setErrors(err))
          return <h1>{errors}</h1>
        }
      })
  };
  return (
    <Router>
      <Navbar user={user} />
      <div className="app">
        <div className="routes">
          <Routes >
            <Route
              exact
              path="/"
              element={<Home user={user} setUser={setUser} />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/login"
              element={<Login user={user} setUser={setUser} />}
            />
            <Route
              path="/profile/:{user.username}"
              element={<Profile user={user} />}
            />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

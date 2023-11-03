import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Signup from "../Signup-Login/Signup";
import Login from "../Signup-Login/Login";
import "./App.css";
import Logout from "../Signup-Login/Logout";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();
  const [errors, setErrors] = useState([]);

  return (
    <Router>
      <Navbar user={user} />
      <div className='app'>
        <div className='routes'>
          <Routes>
            <Route
              exact
              path='/'
              element={<Home user={user} setUser={setUser} />}
            />
            <Route path='/signup' element={<Signup />} />
            <Route
              path='/login'
              element={
                <Login user={user} setUser={setUser} />
              }
            />
            <Route path='/logout' element={<Logout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

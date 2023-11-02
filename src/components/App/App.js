import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Signup from '../Signup-Login/Signup';
import Login from '../Signup-Login/Login'
import './App.css';
import Logout from '../Signup-Login/Logout';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState();
  const [errors, setErrors] = useState([]);
  const navigate = Navigate

  return (
    <Router>
      <Navbar navigate={ navigate } user={ user } />
      <div className='app'>
        <div className='routes'>
          <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route path='/signup' element={ <Signup /> } />
            <Route path='/login' element={ <Login user={ user } setUser={ setUser } navigate={ navigate } /> } />
            <Route path='/logout' element={ <Logout /> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

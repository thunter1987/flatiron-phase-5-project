import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DarkMode from '../DarkModeToggle/DarkMode';
import './styles.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (<>
    <div className="darkmode">
      <DarkMode />
      <div className="navbar">
        Navbar Component
      </div>
    </div>
    <nav className="navbar-links">
      <NavLink to="/">Home</NavLink>
      {(isLoggedIn) ? <NavLink to="/logout">Logout</NavLink> : <NavLink to="/login">Sign In / Register</NavLink>}
    </nav>
  </>
  );
};

export default Navbar;

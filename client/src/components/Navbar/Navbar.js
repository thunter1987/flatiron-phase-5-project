import { NavLink } from 'react-router-dom';
import DarkMode from '../DarkModeToggle/DarkMode';
import './styles.css';

const Navbar = () => {

  return (<>
    <div className="darkmode">
      <DarkMode />
      <div className="navbar">
        Navbar Component
      </div>
    </div>
    <nav className="navbar-links">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Sign In / Register</NavLink>
    </nav>
  </>
  );
};

export default Navbar;

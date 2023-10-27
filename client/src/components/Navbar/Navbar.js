import { NavLink } from 'react-router-dom';
import DarkMode from '../DarkModeToggle/DarkMode';
import './styles.css';

const Navbar = () => {

  return (<>
    <div className="navbar">
      Navbar Component
      <div className="darkmode">
        <DarkMode />
      </div>
    </div>
    <nav className="navbar-links">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/signup">Sign In / Register</NavLink>
    </nav>
  </>
  );
};

export default Navbar;

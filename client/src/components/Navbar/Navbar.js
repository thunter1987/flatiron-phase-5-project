import { NavLink } from 'react-router-dom';
import DarkMode from '../DarkModeToggle/DarkMode';
import './styles.css';

const Navbar = ({ user }) => {

  return (<div className='navbar'>
    <DarkMode />
    <nav>
      <NavLink to="/">Home</NavLink>
      {user ? <NavLink to="/logout">Logout</NavLink> : <NavLink to="/login">Sign In / Register</NavLink>}
    </nav>
  </div>
  );
};

export default Navbar;

import useLocalStorage from 'use-local-storage';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ user }) => {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  document.documentElement.setAttribute("data-theme", theme)

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }


  return (<>
    <div className='toggle-theme-wrapper' >
        <span>Light☀️</span>
        <label className='toggle-theme' htmlFor='checkbox'>
          <input
            type='checkbox'
            id='checkbox'
            onChange={ switchTheme }
            defaultChecked={ theme === "dark" }
          />
          <div className='slider round'></div>
        </label>
        <span>🌒Dark</span>
      </div>

        <nav className='navbar'>
      <NavLink to="/">Home</NavLink>
      { user ? <NavLink to="/logout">Logout</NavLink> : <NavLink to="/login">Sign In / Register</NavLink> }
    </nav>
    </>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <div className="nav-brand">
        <Link to="/">Your Logo</Link>
        <div className="nav-links">
          <div className="nav-hamburger">
            <HamburgerMenu
              isOpen={ isOpen }
              menuClicked={ handleToggle }
              width={ 30 }
              height={ 20 }
              strokeWidth={ 3 }
              rotate={ 0 }
              color="black"
              borderRadius={ 0 }
              animationDuration={ 0.5 }>
              <Link to="/">Home</Link>
              <Link to="/login">Login/Signup</Link>
            </ HamburgerMenu>
            <div className="content">
              <Outlet />
            </div>
          </div >
        </div>
      </div>
    </div>
  );
};

export default Navbar;

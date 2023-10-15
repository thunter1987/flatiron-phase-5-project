import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink to="/">Your Logo</NavLink>
      </div>

      <div className={`nav-links ${isOpen ? 'show' : ''}`}>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/login" end>
          Login/Signup
        </NavLink>
      </div>

      <div className="nav-hamburger">
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={handleToggle}
          width={30}
          height={20}
          strokeWidth={3}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.5}
        />
      </div>
    </div>
  );
};

export default Navbar;
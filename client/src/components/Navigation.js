import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navigation() {
  return (
    <div className='nav'>
      <ul>
        <li>
          <Link to='/' className='home'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/login' className='login'>
            Login
          </Link>
        </li>
        <li>
          <Link to='/logout' className='logout'>
            Logout
          </Link>
        </li>
      </ul>
      <GiHamburgerMenu size={ 25 }/>
    </div>
  );
}

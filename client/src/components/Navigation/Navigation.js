import React from "react";

export default function Navigation() {
  return (<>
    <nav className='nav'>
      <ul>
        <li>
          <a href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/signup" className='signup'>
            Sign Up
          </a>
        </li>
        <li>
          <a href='/login' className='login'>
            Login
          </a>
        </li>
        <li>
          <a href='/logout' className='logout'>
            Logout
          </a>
        </li>
      </ul>
    </nav>
    </>
  );
}

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import LoginPopup from "./components/LoginPopup/LoginPopup";
import SignupPopup from "./components/SignupPopup/SignupPopup";
import Home from "./components/Home/Home";
import useLocalStorage from 'use-local-storage'
import './App.css';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  // eslint-disable-next-line no-unused-vars
  const [userRole, setUserRole] = useState(null);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }


  return (
    <div className="app" data-theme={ theme }>
      <button onClick={ switchTheme }>Switch to { theme === 'light' ? 'dark' : 'light' } Theme</button>
      <Navbar theme={ theme } switchTheme={ switchTheme } />
      <Routes >
        <Route path="/*" element={ <Home /> } />
        <Route path="/login" element={ <LoginPopup setUserRole={ setUserRole } /> } />
        <Route path="/signup" element={ <SignupPopup /> } />
      </Routes>
    </div>
  );
}

export default App;

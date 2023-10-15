import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import SignUp from './components/SignUp/SignUp';
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";

import "./index.css";
import NotFound from "./components/NotFound/NotFound";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <header className={isDarkMode ? "dark-mode" : ""}>
        <Header isDarkMode={isDarkMode} onToggleDarkMode={setIsDarkMode} />
        <Navigation />
        <SignUp />
      </header>
      <Routes>
        <Route exact path="/*" element={ <App /> } />
        <Route path="/signup" element={ <SignUp /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/logout" element={ <Logout /> } />
        <Route path="*" element={ <NotFound /> } />
</Routes>
      
    </>
  );
}

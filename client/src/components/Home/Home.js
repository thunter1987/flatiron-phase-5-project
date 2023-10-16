import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Your App</h1>
      <Link to="/login">Go to Login/Signup</Link>
    </div>
  );
};

export default Home;
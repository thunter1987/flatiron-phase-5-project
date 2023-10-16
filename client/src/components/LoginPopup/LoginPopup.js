// LoginPopup.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPopup.css';

const LoginPopup = ({ setUserRole }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  });

  const navigate = useNavigate()


  const handleUserRole = ((user) => setUserRole(user.role))


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/login', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='login'>
      <button name='login-button' onClick={ () => setShowPopup(!showPopup) }>Login</button>
      <div className={ `login-popup ${showPopup ? 'show' : ''}` }>
        { showPopup && (
          <div className="popup-content">
            <form onSubmit={ handleSubmit }>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={ formData.username }
                  onChange={ handleInputChange }
                  required
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={ formData.password }
                  onChange={ handleInputChange }
                  required
                />
              </label>
              <label>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={ formData.rememberMe }
                  onChange={ handleInputChange }
                />
                Remember me
              </label>

              <button type="submit">Submit</button>
            </form>
          </div>
        ) }
      </div>
    </div>
  );
};

export default LoginPopup;

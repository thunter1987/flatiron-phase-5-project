import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPopup.css';

const SignupPopup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: ''
    });
    const handleOnChange = (e) => {
        if (formData.password === formData.confirm_password) {
            setFormData(...formData, e.target.value)
        }
        else {
            return alert('Passwords must match')
        }
               
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const responseData = await response.json();

            if (response.ok) {
                console.log(responseData);
                // Redirect or perform actions based on user role
                navigate('/');
            } else {
                console.error(responseData.message);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="signup-popup">
            <form onSubmit={ handleSubmit }>
            <label>
                    First Name:
                    <input
                        type="text"
                        name="first_name"
                        value={ formData.first_name }
                        placeholder='First Name'
                        onChange={ handleOnChange }
                        required
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="last_name"
                        value={ formData.last_name }
                        placeholder='Last Name'
                        onChange={ handleOnChange }
                        required
                    />
                </label>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={ formData.username }
                        placeholder='Username'
                        onChange={ handleOnChange }
                        required
                    />
                </label>
                <label>
                    E-Mail Address:
                    <input
                        type="text"
                        name="email"
                        value={ formData.email }
                        placeholder='E-Mail Address'
                        onChange={ handleOnChange }
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password1"
                        value={ formData.password }
                        placeholder='Password'
                        onChange={ handleOnChange }
                        required
                    />
                </label>
                <label>
                    Confirm Password:
                    <input
                        type="password"
                        name="password2"
                        value={ formData.confirm_password }
                        placeholder='Please Confirm Password'
                        onChange={ handleOnChange }
                        required
                    />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SignupPopup;
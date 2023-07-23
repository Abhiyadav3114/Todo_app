import React from 'react';
import './Register.css';
import Navbar from './Navbar';

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic here...
    // After successful registration, redirect to homepage
    window.location.href = './Login';
  };

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <Navbar/>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-row">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-row">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;

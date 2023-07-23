import React from 'react';
import './Login.css';
import Navbar from './Navbar';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here...
    // After successful login, redirect to homepage
    window.location.href = '/';
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1>Login</h1>
        <Navbar/>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-row">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from 'react';
import '../login/Login.css';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <h2 className="login-title">Sign Up</h2>
        <p className="login-subtitle">
          Join our community today! Create an account to unlock exclusive features and personalized experiences.
        </p>

        <form className="login-form">
          <div className="input-row">
            <input type="text" placeholder="Enter First Name" className="login-input" />
            <input type="text" placeholder="Enter Last Name" className="login-input" />
          </div>

          <div className="input-row">
            <input type="email" placeholder="Enter your Email" className="login-input" />
            <div className="password-wrapper">
  <input
    type={showPassword ? 'text' : 'password'}
    placeholder="Enter Pass"
    className="login-input"
  />
  <i
    className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} toggle-password`}
    onClick={togglePasswordVisibility}
  ></i>
</div>

          </div>

          <button type="submit" className="login-btn">Sign Up</button>
          <button type="button" className="signup-btn">Login</button>
        </form>

        <div className="divider-line">
          <span>Or Continue with</span>
        </div>

        <div className="social-login">
          <button className="social-btn"><i className="fab fa-google"></i></button>
          <button className="social-btn"><i className="fab fa-facebook-f"></i></button>
          <button className="social-btn"><i className="fab fa-apple"></i></button>
        </div>
      </div>
    </section>
  );
};

export default Signup;

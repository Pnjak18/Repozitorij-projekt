
import React, {useState} from 'react';

import './Login.css';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(prev => !prev);
    };
    

  return (
    <section className="login-section">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">
          Welcome back! Please log in to access your account.
        </p>

        <form className="login-form">
          <div className="input-wrapper">                       
            <input
              type="email"
              placeholder="Enter your Email"
              className="login-input"
            />
          </div>

          <div className="input-wrapper">            
          <div className="password-wrapper">
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your Password"
                    className="login-input"
                />
                <i
                    className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} toggle-password`}
                    onClick={togglePasswordVisibility}
                ></i>
                </div>

          </div>

          <a href="#" className="forgot-password">Forgot Password?</a>

          <button type="submit" className="login-btn">Login</button>
          <button type="button" className="signup-btn">Sign Up</button>
        </form>

        <div className="divider">Or Continue with</div>

        <div className="social-login">
          <button className="social-btn"><i className="fab fa-google"></i></button>
          <button className="social-btn"><i className="fab fa-facebook-f"></i></button>
          <button className="social-btn"><i className="fab fa-apple"></i></button>
        </div>
      </div>
    </section>
  );
};

export default Login;

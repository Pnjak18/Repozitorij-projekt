// src/components/footer/Footer.js



import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="/img/Logo.png" alt="YourBank Logo" />
          <span>YourBank</span>
        </div>
      </div>

      <div className="footer-nav">
        <a href="/">Home</a>
        <a href="/careers">Careers</a>
        <a href="/about">About</a>
        <a href="/security">Security</a>
      </div>

      <div className="footer-contact">
        <p><i className="fas fa-envelope"></i> hello@yourbank.com</p>
        <p><i className="fas fa-phone-alt"></i> +91 98183 232309</p>
        <p><i className="fas fa-map-marker-alt"></i> Somewhere in the World</p>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
        
        <div className="footer-right">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


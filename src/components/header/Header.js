import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0); // 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${showNavbar ? 'show' : 'hide'} fixed-top`}>

  
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
          {/* Left: Logo */}
          <Link className="navbar-brand" to="/#">
            <img src="img/Logo.png" alt="Logo" />
          </Link>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar content */}
          <div
            className={`collapse navbar-collapse flex-column flex-lg-row align-items-start align-items-lg-center justify-content-lg-between nav-content ${
              showNavbar ? "show" : "hide"
            }`}
            id="navbarNav"
          >
            {/* Center nav links */}
            <ul className="navbar-nav mx-lg-auto flex-column flex-lg-row text-center">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/careers" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Careers</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/security" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Security</NavLink>
              </li>
            </ul>

            {/* Right-side Auth links */}
            <ul className="navbar-nav ms-lg-auto flex-column flex-lg-row text-center">
              <li className="nav-item">
                <NavLink to="/signup" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Sign Up</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </header>
  );
};

export default Header;

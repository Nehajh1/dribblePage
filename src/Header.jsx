import React from "react";
import './Header.css'; 
import Search from './public/logo/search.png';

function Header() {
  return (
    <header className="header">
      {/* Hamburger for mobile */}
      <button className="hamburger">☰</button>
      <input type="checkbox" id="nav-toggle" class="nav-toggle" />
<label for="nav-toggle" class="hamburger">&#9776;</label>
<label for="nav-toggle" class="close-icon">✕</label>

      {/* Logo */}
      <div className="logo1">Dribbble</div>

      {/* Search */}
      <div className="search-section">
        <div className="search-wrapper">
          <input className="search-input" type="text" placeholder="What are you looking for?" />
          <div className="dropdown">
            <div className="dropdown-toggle">
              Shots <span className="arrow">&#9650;</span>
            </div>
            <div className="dropdown-menu">
              <a href="#">Shots</a>
              <a href="#">Designers</a>
              <a href="#">Services</a>
            </div>
          </div>
          <div className="search-icon"><img src={Search} alt="search" /></div>
        </div>
      </div>

      {/* Navigation Links (hidden on mobile) */}
      <nav className="nav-links">
        <a href="#">
          <div className="dropdown">
            <div className="dropdown-toggle">
              Explore <span className="arrow">&#9650;</span>
            </div>
            <div className="dropdown-menu wide">
              <a href="#">🔥 Popular</a>
              <a href="#">✨ New and Noteworthy</a>
              <a href="#">Product Design</a>
              <a href="#">Web Design</a>
              <a href="#">Animation</a>
              <a href="#">Branding</a>
              <a href="#">Illustration</a>
              <a href="#">Mobile</a>
              <a href="#">Typography</a>
              <a href="#">Print</a>
            </div>
          </div>
        </a>
        <a href="#">
          <div className="dropdown">
            <div className="dropdown-toggle">
              Hire a Designer <span className="arrow">&#9650;</span>
            </div>
            <div className="dropdown-menu icon-menu">
              <a href="#"><span className="icon">🔍</span> Browse Freelancers</a>
              <a href="#"><span className="icon">🛒</span> Purchase Services</a>
              <a href="#"><span className="icon">📝</span> Submit a Project Brief</a>
              <a href="#"><span className="icon">📄</span> Post a Full-Time Job</a>
            </div>
          </div>
        </a>
        <a href="#">Find Jobs</a>
        <a href="#">Blog</a>
      </nav>

      {/* Auth Buttons */}
      <div className="auth-buttons">
        <a href="#" className="signup-link">Sign up</a>
        <button className="login-btn">Log in</button>
      </div>
    </header>
  );
}

export default Header;




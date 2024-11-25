import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/">
        <img src="/path-to-your-logo.png" alt="Logo" />
      </Link>
    </div>
    <ul className="navbar-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/availability">Availability</Link></li>
      <li><Link to="/calendar">Calendar</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </ul>
  </nav>
  );
};

export default NavBar;
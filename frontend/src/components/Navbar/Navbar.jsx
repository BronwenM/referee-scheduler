import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { useAuth } from "../../hooks/useAuth";
import Button from "../Button/Button";

// const officialLinks = ['dashboard', 'availability', 'calendar', 'assignments']


const NavBar = () => {
  const {logout, userLoggedIn, getRole} = useAuth();
  const userRole = getRole();
  
  const links = {
    "dashboard": {
      linkName: "Dashboard",
      visibleTo: ['admin', 'assigner', 'official']
    },
    "availability": {
      linkName: "Availability",
      visibleTo: ['official']
    },
    "calendar": {
      linkName: "Calendar",
      visibleTo: ['admin', 'assigner', 'official']
    },
    "profile": {
      linkName: "Profile",
      visibleTo: ['admin', 'assigner', 'official']
    },
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/path-to-your-logo.png" alt="Logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        
        <li>
          <Link to="/dashboard">Home</Link>
        </li>
        <li>
          <Link to="/availability">Availability</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          {userLoggedIn() ? <Button handle={logout} name="Logout"/> : <Link to="/login">Login</Link>}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

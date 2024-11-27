import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { useAuth } from "../../hooks/useAuth";
import Button from "../Button/Button";

const NavBar = () => {
  const {logout, userLoggedIn} = useAuth();

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

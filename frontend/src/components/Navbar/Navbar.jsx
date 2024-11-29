import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { useAuth } from "../../hooks/useAuth";
import Button from "../Button/Button";
import { links } from "../../assets/routes/navRoutes";

//NOTE: Currently all available links are exposed to user in console. Remove to backend?
const NavBar = () => {
  const {logout, userLoggedIn, getRole} = useAuth();
  const userRole = getRole();
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/path-to-your-logo.png" alt="Logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        {links.filter(link => link.visibleTo.includes(userRole)).map(link =>
          <li key={link.id}>
            <Link to={link.linkTo}>{link.linkName}</Link>
          </li>
        )}
        <li>
          {userLoggedIn() ? <Button handle={logout} name="Logout"/> : <Link to="/login">Login</Link>}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

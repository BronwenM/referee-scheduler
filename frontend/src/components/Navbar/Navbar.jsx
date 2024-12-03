import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { useAuth } from "../../hooks/useAuth";
import Button from "../Button/Button";
import { links } from "../../assets/routes/navRoutes";

//NOTE: Currently all available links are exposed to user in console. Remove to backend?
const NavBar = () => {
  const {logout, userLoggedIn, getRole} = useAuth();
  const userRole = getRole();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  }

  return (
      <nav>
        <div className={`navbar ${dropdownOpen ? 'navbar__dropdown' : ''}`}>
          <div className={`navbar__top`}>
            <Link to="/">
              <img src="/path-to-your-logo.png" alt="Logo" />
            </Link>
            <button type="button" className="navbar__dropdown-btn" onClick={toggleDropdown}>+</button>
          </div>
          <ul className='navbar-links'>
            {links.filter(link => link.visibleTo.includes(userRole)).map(link =>
              <li key={link.id}>
                <Link to={link.linkTo}>{link.linkName}</Link>
              </li>
            )}
            <li>
              {userLoggedIn() ? <Button handle={logout} name="Logout"/> : <Link to="/login">Login</Link>}
            </li>
          </ul>

        </div>
        {dropdownOpen && <ul className='navbar-links__dropdown-open'>
          {links.filter(link => link.visibleTo.includes(userRole)).map(link =>
            <li key={link.id}>
              <Link to={link.linkTo} onClick={toggleDropdown}>{link.linkName}</Link>
            </li>
          )}
          <li>
            {userLoggedIn() ? <Button handle={() => {logout(); toggleDropdown()}} name="Logout" /> : <Link to="/login" onClick={toggleDropdown}>Login</Link>}
          </li>
        </ul>}
      </nav>
  );
};

export default NavBar;

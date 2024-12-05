import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { useAuth } from "../../hooks/useAuth";
import Button from "../Button/Button";
import { links } from "../../assets/routes/navRoutes";
import Logo from '../../assets/images/CYB-logo.png';

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
            <Link to="/profile">
              <img src={Logo} alt="Logo" style={{height: "46px"}} />
              Cover Your Bases
            </Link>
            <button type="button" className={`navbar__dropdown-btn ${dropdownOpen ? 'dropdown-open' : ''}`} onClick={toggleDropdown}><i class="fa-solid fa-bars"></i></button>
          </div>
          <ul className='navbar-links'>
            {links.filter(link => link.visibleTo.includes(userRole)).map(link =>
              <li key={link.id}>
                <Link to={link.linkTo}>{link.linkName}</Link>
              </li>
            )}
            <li>
              {userLoggedIn() ? <Button style="navbar__logout-btn" handle={logout} name={<span><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</span>}/> : <Link to="/login">Login</Link>}
            </li>
          </ul>

        </div>
        { <ul className={`navbar-links__dropdown-open ${dropdownOpen ? 'dropdown-open' : ''}`}>
          {links.filter(link => link.visibleTo.includes(userRole)).map(link =>
            <li key={link.id}>
              <Link to={link.linkTo} onClick={toggleDropdown}>{link.linkName}</Link>
            </li>
          )}
          <li>
            {userLoggedIn() ? <Button style="navbar__logout-btn" handle={() => {logout(); toggleDropdown()}} name={<span><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</span>} /> : <Link to="/login" onClick={toggleDropdown}>Login</Link>}
          </li>
        </ul>}
      </nav>
  );
};

export default NavBar;

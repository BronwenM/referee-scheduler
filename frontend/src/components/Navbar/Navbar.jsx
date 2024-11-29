import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { useAuth } from "../../hooks/useAuth";
import Button from "../Button/Button";

// const officialLinks = ['dashboard', 'availability', 'calendar', 'assignments']


const NavBar = () => {
  const {logout, userLoggedIn, getRole} = useAuth();
  const userRole = getRole();
  
  const links = [
    {
      id: 1,
      linkName: "Dashboard",
      linkTo: '/dashboard',
      visibleTo: ['admin', 'assigner', 'official']
    },
    {
      id: 2,
      linkName: "Availability",
      linkTo: '/availability',
      visibleTo: ['official']
    },
    {
      id: 3,
      linkName: "Calendar",
      linkTo: '/calendar',
      visibleTo: ['admin', 'assigner', 'official']
    },
    {
      id: 4,
      linkName: "Profile",
      linkTo: '/profile',
      visibleTo: ['admin', 'assigner', 'official']
    },
    {
      id: 5,
      linkName: "Create Game",
      linkTo: '/new-game',
      visibleTo: ['admin']
    },
    {
      id: 6,
      linkName: "Create Assignment",
      linkTo: '/new-assignment',
      visibleTo: ['admin', 'assigner']
    },
    {
      id: 7,
      linkName: "View Reports",
      linkTo: '/reports',
      visibleTo: ['admin', 'assigner']
    },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/path-to-your-logo.png" alt="Logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        
        {/* <li>
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
        </li> */}
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

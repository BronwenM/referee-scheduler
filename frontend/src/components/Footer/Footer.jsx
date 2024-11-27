import React from 'react';
import { Link } from "react-router-dom";
import './footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <h2>Cover Your Bases</h2>
      <ul className="footer__links">
        <li>
          <Link to="/">Home</Link>
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
      </ul>
      <p>&copy; AMT-BM-SAS 2024</p>
    </footer>
  )
}

export default Footer
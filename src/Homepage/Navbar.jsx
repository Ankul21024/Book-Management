// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Navbar({ userEmail, onLogout }) {
  const handleLogout = () => {
    // Call the onLogout function passed as a prop
    onLogout();
  };

  return (
    <nav>
      <ul>
        <li>Welcome, {userEmail || 'Guest'}</li>
        <Link to="/Bookgrid">
          <li>Home</li>
        </Link>
        <Link to="/cart">
          <li>Manage order</li>
        </Link>
        <Link to="/Register">
          <li>Register</li>
        </Link>
        {userEmail ? (
          <Link to="/" onClick={handleLogout}>
            <li>Logout</li>
          </Link>
        ) : (
          <Link to="/Login">
            <li>Login</li>
          </Link>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

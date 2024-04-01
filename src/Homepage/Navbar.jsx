// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Navbar({ userEmail, onLogout }) {
  const handleLogout = () => {
    // Perform logout logic here
    onLogout();
  };

  return (
    <nav>
      <ul>
        <li>Welcome, {userEmail || 'Guest'}</li> {/* Display "Guest" if userEmail is empty */}
        <Link to="/Bookgrid">
          <li>Home</li>
        </Link>
        <Link to="/Productcard">
          <li>Manage order</li>
        </Link>
        <Link to="/Register">
          <li>Register</li>
        </Link>
        {userEmail ? (
          <li onClick={handleLogout}>Logout</li>
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

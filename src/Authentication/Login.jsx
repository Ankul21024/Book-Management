/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Navbar from "../Homepage/Navbar";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', { // Update the URL to match your backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setMessage(data.message);
      
      if (data.success) {
        // Redirect to /BookGrid if login is successful
        navigate('/BookGrid');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  const handleLogout = () => {
    // Perform logout logic here
    navigate('/Login'); // Redirect to the login page after logout
  };

  return (
    <>
      <Navbar userEmail={email} onLogout={handleLogout} />
      <div className="Alogin">
        <div className="login-page">
          <form onSubmit={handleSubmit}>
            <h2>Log in</h2>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Log In</button>
            {message && <p>{message}</p>}
          </form>
        </div>
        <div />
      </div>
    </>
  );
}

export default LoginPage;

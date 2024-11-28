import React from 'react';
import '../cssfiles/Faculty_login.css'; // Importing CSS file

const FacultyLogin = () => {
  return (
    <div className="container">
      <h1>Faculty Login</h1>
      <form id="faculty-login-form">
        <label htmlFor="faculty-email">Email:</label>
        <input type="email" id="faculty-email" required />
        
        <label htmlFor="faculty-password">Password:</label>
        <input type="password" id="faculty-password" required />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default FacultyLogin;
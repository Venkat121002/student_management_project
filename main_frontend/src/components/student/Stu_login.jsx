import React from 'react';
import '../cssfiles/StuLogin.css';
import { Link } from 'react-router-dom';

const Stu_login = () => {
  return (
    <div className="container">
      <h1>Student Login</h1>
      <form id="student-login-form">
        <label htmlFor="student-email">Email:</label>
        <input type="email" id="student-email" required />

        <label htmlFor="student-password">Password:</label>
        <input type="password" id="student-password" required />

        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to='/student_sigup'>Sign up</Link></p>
    </div>
  );
}

export default Stu_login;
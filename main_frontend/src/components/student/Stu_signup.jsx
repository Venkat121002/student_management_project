import React from 'react';
import '../cssfiles/Signup.css'; // Importing CSS file
import { Link } from 'react-router-dom';

const Stu_Signup = () => {
  return (
    <section className="signup-form">
      <form id="student-signup-form">
        <label htmlFor="full-name">Full Name:</label>
        <input type="text" id="full-name" required placeholder="Enter your full name" />

        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" required placeholder="Enter your email address" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required placeholder="Create a password" />

        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" required placeholder="Confirm your password" />

        <button type="submit">Sign Up</button>
      </form>

      <p className="login-link">Already have an account? <Link to='/student_login'>Log in here</Link>  </p>
    </section>
  );
}

export default Stu_Signup;
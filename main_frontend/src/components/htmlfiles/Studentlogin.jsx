import React from "react";

const StudentLogin = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to handle login, e.g., API call
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log("Email:", email);
        console.log("Password:", password);
        // Implement authentication logic here
    };

    return (
        <div className="container">
            <h1>Student Login</h1>
            <form id="student-login-form" onSubmit={handleSubmit}>
                <label htmlFor="student-email">Email:</label>
                <input type="email" id="student-email" name="email" required />
                
                <label htmlFor="student-password">Password:</label>
                <input type="password" id="student-password" name="password" required />
                
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <a href="#">Sign up</a>
            </p>
        </div>
    );
};

export default StudentLogin;
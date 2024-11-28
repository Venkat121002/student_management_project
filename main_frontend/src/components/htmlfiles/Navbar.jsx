import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import  '../cssfiles/Navbar.css'

function Nav() {
    return (
        <header>
            <nav>
                <ul className="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                    <li><Link to="/student_login">Student Login</Link></li>
                    <li><Link to="/faculty_login">Faculty Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import FacultyDashboard from "./components/FacultyDashboard";
import Nav from "./components/htmlfiles/Navbar";
import Home from "./components/htmlfiles/Home";
import About from "./components/htmlfiles/About";
import Contact from "./components/htmlfiles/Contact";
import Studentlogin from "./components/htmlfiles/Studentlogin";
import FacultyLogin from "./components/faculty/Facultylogin";
import Faculty from "./components/faculty/Faculty_dashbord";
import Stu_dashbord from "./components/student/Stu_dashbord";
import Stu_login from "./components/student/Stu_login";
import Stu_Signup from "./components/student/Stu_signup";

function App() {
    return (
        <Router>
            <Nav/>
            <Routes>
                {/* Redirect '/' to '/faculty' */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={< Contact />} />
                <Route path="/faculty_login" element={< FacultyLogin/>} />
                <Route path="/faculty_dash" element={< Faculty />} />
                <Route path="/student_dash" element={< Stu_dashbord />} />
                <Route path="/student_login" element={< Stu_login/>} />
                <Route path="/student_sigup" element={< Stu_Signup />} />
            </Routes>
        </Router>   
    );
}

export default App;

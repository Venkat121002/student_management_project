import React from "react";
import Student from "./htmlfiles/Student";

const FacultyDashboard = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Welcome to the Faculty Dashboard</h1>
            <p>This is where you can manage student information.</p>
            <Student/>
        </div>
    );
};

export default FacultyDashboard;

import React from "react";
import '../cssfiles/Faculty_dash.css'; // Importing CSS file

const Faculty = () => {
    return (
        <div>
            <nav>
                <ul className="dashboard-nav">
                    <li><a href="faculty_dash.html">Create Student Profile</a></li>
                    <li><a href="view_all_students.html">View All Students</a></li>
                    <li><a href="update_student_details.html">Update Student Details</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Faculty;
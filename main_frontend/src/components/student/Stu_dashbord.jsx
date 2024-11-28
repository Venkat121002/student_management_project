import React from 'react';
import '../cssfiles/StuDashboard.css'; // Importing CSS file

const Stu_dashbord = () => {
  return (
    <div className="dashboard-container">
      <h1>Student Dashboard</h1>

      <section className="personal-details">
        <h2>Your Personal Details</h2>

        <form id="personal-details-form">
          <label htmlFor="profile-pic">Profile Pic:</label>
          <input type="file" id="profile-pic" accept="image/*" />

          <label htmlFor="first-name">First Name:</label>
          <input type="text" id="first-name" required />

          <label htmlFor="last-name">Last Name:</label>
          <input type="text" id="last-name" required />

          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" required />

          <label htmlFor="gender">Gender:</label>
          <select id="gender" required>
            <option value="" disabled selected>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="blood-group">Blood Group:</label>
          <input type="text" id="blood-group" required placeholder="e.g., A+, B-, O+" />

          <label htmlFor="contact-number">Contact Number:</label>
          <input type="tel" id="contact-number" required placeholder="+91-XXXXXXXXXX" />

          <label htmlFor="address">Address:</label>
          <textarea id="address" rows="4" required placeholder="Enter your address here..."></textarea>

          <button type="submit">Update Details</button>
        </form>

        <h3>Your Subjects:</h3>
      </section>
    </div>
  );
}

export default Stu_dashbord;
import React from "react";
import '../cssfiles/Home.css'

const Home = () => {
    return (
        <main>
            <section className="college-info">
                <img src="https://picsum.photos/seed/picsum/600/400" alt="College Image" className="college-image" />
                <div className="college-details">
                    <h2>Welcome to Arasu Engineering College</h2>
                    <p>Arasu Engineering College is committed to providing quality education and fostering innovation in engineering and technology. Our state-of-the-art facilities and experienced faculty ensure that students receive the best possible learning experience.</p>
                    <p>We offer a variety of undergraduate and postgraduate programs designed to equip students with the skills needed to succeed in their careers. Join us to be a part of a vibrant academic community!</p>
                </div>
            </section>
        </main>
    );
};

export default Home;
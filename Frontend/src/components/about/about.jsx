import React from 'react';
import './about.css';

function About() {
    return (
        <section>
            <div className="about-container">
                <h1>About Us</h1>
                <p>Welcome to our application! We are dedicated to connecting creative minds and showcasing innovative projects.</p>
                
                <div className="about-info">
                    <h2>About the sphere</h2>
                    <p>Our application is a platform designed to bring together designers and developers from around the world. Whether you're working on a design masterpiece or developing the next big thing, our platform provides a space to share your work, get feedback, and collaborate with others.</p>
                    
                    <h2>Meet the Team</h2>
                    <div className="team-member">
                        <img src="https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/TheSphere/jkicsldr5dzih432gfyw" alt="Creator" className="profile-pic" />
                        <div className="member-info">
                            <h3>Alejandro Brea</h3>
                            <h4>Founder & Lead Designer</h4>
                            <p>Alex is the creative force behind our application. With a passion for design and technology, Alex has brought together a team of talented individuals to create a platform that fosters creativity and innovation.</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Team Member" className="profile-pic" />
                        <div className="member-info">
                            <h3>Jane Doe</h3>
                            <h4>Lead Developer</h4>
                            <p>Jane is the technical brain of our team. She has extensive experience in software development and is dedicated to ensuring that our platform runs smoothly and efficiently.</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Team Member" className="profile-pic" />
                        <div className="member-info">
                            <h3>John Smith</h3>
                            <h4>Community Manager</h4>
                            <p>John is responsible for building and nurturing our community. He ensures that our users have a positive experience and feel supported in their creative endeavors.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

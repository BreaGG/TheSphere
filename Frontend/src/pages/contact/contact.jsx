import React from 'react';
import './contact.css'

function Contact() {
    return (
        <section>
            <div className="contact-container">
                <h1>Contact Us</h1>
                <p>If you have any questions or feedback, feel free to contact us!</p>
                <div className="contact-info">
                    <h2>Our Address:</h2>
                    <p>123 Main Street, City, Country</p>
                    <h2>Email:</h2>
                    <p>contact@example.com</p>
                    <h2>Phone:</h2>
                    <p>+123-456-7890</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;

import React from 'react';
import './faq.css';

function FAQ() {
    return (
        <section className="faq-container">
            <h1>FAQs</h1>
            <div className="faq-info">
                <div className="faq-item">
                    <h3>What is the purpose of this application?</h3>
                    <p>This application is designed to connect creative professionals with potential clients and collaborators. Users can showcase their projects, find inspiration, and reach out to other creatives in the community.</p>
                </div>
                <div className="faq-item">
                    <h3>How do I create an account?</h3>
                    <p>To create an account, click on the 'Register' button at the top right of the homepage. Fill in the required information and submit the form. You will receive a confirmation email shortly.</p>
                </div>
                <div className="faq-item">
                    <h3>How can I contact support?</h3>
                    <p>If you need assistance, you can reach out to our support team by visiting the 'Contact Us' page. Provide your details and a brief description of your issue, and we will get back to you as soon as possible.</p>
                </div>
                <div className="faq-item">
                    <h3>Can I edit my profile?</h3>
                    <p>Yes, you can edit your profile by navigating to your user profile page and clicking on the 'Edit Profile' button. You can update your personal information, profile picture, and more.</p>
                </div>
                <div className="faq-item">
                    <h3>How do I submit a post?</h3>
                    <p>To submit a post, you must be logged in. Click on the 'Create Post' button, fill in the necessary information, and submit your post. Your post will be visible to the community once approved.</p>
                </div>
            </div>
        </section>
    );
}

export default FAQ;

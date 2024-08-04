import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const AboutUs = () => {
    return (
        <>
            <Header />
            <div className="about-us-container">
                <div className="about-us-half about-us-half-left">
                    <header className="about-us-header">
                        <h1>About Us</h1>
                        <p>Crafting the best video editing experience</p>
                    </header>
                </div>
                <div className="about-us-half about-us-half-right">
                    <section className="about-us-content">
                        <div className="about-us-section">
                            <h2>Our Story</h2>
                            <p>
                                Founded in 2024, our mission has been to deliver cutting-edge video editing tools that empower creators to bring their vision to life. With a passion for innovation and a commitment to excellence, we've grown into a leading provider of video editing solutions.
                            </p>
                        </div>
                        <div className="about-us-section">
                            <h2>Our Team</h2>
                            <p>
                                Our team is composed of talented and dedicated professionals who share a common love for video editing and technology. From developers to designers, everyone at our company works together to create seamless and intuitive tools for our users.
                            </p>
                        </div>
                        <div className="about-us-section">
                            <h2>Our Vision</h2>
                            <p>
                                We envision a world where video editing is accessible to everyone, regardless of their experience level. Our goal is to provide tools that are both powerful and easy to use, enabling anyone to produce high-quality video content.
                            </p>
                        </div>
                        <div className="about-us-section">
                            <h2>Contact Us</h2>
                            <p>
                                We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us at <a href="mailto:contact@videoeditor.com">contact@videoeditor.com</a>.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;

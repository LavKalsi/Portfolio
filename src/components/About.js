// src/components/About.js
import React from 'react';
import '../theme/About.css';
import Image from '../assets/MyPhoto.jpg';

const About = () => {
    const aboutData = {
        name: 'Lav Kalsi',
        description: 'I am a passionate software developer with experience in Android development and data science projects. I love to explore new technologies and apply them in my projects to solve real-world problems.',
        profilePicture: Image, // Replace with the path to your profile picture
    };

    return (
        <div className="about" id="about">
            <div className="about-container">
                <div className="about-details">
                    <h1>About Me</h1>
                    <h2>{aboutData.name}</h2>
                    <p>{aboutData.description}</p>
                </div>
                <div className="about-image">
                    <img src={aboutData.profilePicture} alt="Lav Kalsi" />
                </div>
            </div>
        </div>
    );
};

export default About;

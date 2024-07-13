// src/components/Resume.js
import React from 'react';
import '../theme/Resume.css'; // Import your CSS file
import Res from '../assets/Resume.png';

const Resume = () => {
  return (
    <div className="resume-detail">
      <div className="resume-frame">
        <h2 className="name">Resume</h2>
        <img src={Res} alt="Resume Not Found" className="certificate-image" />
      </div>
    </div>
  );
};

export default Resume;

// src/components/AndroidAppDetail.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../theme/AndroidAppDetail.css';

const AndroidAppDetail = ({ app }) => {
  return (
    <div className="android-app-detail">
      <div className="app-image">
        <div className="phone-frame">
          <img src={app.screenshot} alt={`${app.name} screenshot`} />
        </div>
      </div>
      <div className="app-info">
        <h2>{app.name}</h2>
        <p>{app.description}</p>
        <div className="app-buttons">
          <a href={app.downloadLink} target="_blank" rel="noopener noreferrer" className="btn">
            <i className="fas fa-download"></i> Download
          </a>
          <a href={app.releasesLink} target="_blank" rel="noopener noreferrer" className="btn">
            <i className="fas fa-history"></i> Releases
          </a>
          <a href={app.githubLink} target="_blank" rel="noopener noreferrer" className="btn">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default AndroidAppDetail;

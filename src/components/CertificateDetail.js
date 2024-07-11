import React from 'react';
import { useParams } from 'react-router-dom';
import ExperienceData from './ExperienceData';
import '../theme/CertificateDetail.css';

const CertificateDetail = () => {
  const { id } = useParams();
  const experience = ExperienceData.find(exp => exp.id === parseInt(id, 10));

  if (!experience) {
    return <div>Certificate not found</div>;
  }

  return (
    <div className="certificate-detail">
      <div className="certificate-frame">
        <h2 className="company-name">{experience.company}</h2>
        <img src={experience.certificateImage} alt={`Certificate from ${experience.company}`} className="certificate-image" />
      </div>
    </div>
  );
};

export default CertificateDetail;

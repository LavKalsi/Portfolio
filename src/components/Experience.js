// src/components/Experience.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../theme/Experience.css';
import ExperienceData from '../components/ExperienceData';

const Experience = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    }, { threshold: 0.5 });

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={ref} className="experience-section" id="Experience">
      <div className="experience-container">
        <div className='icon4'>
        <h2>Experience</h2>
        <div class="typewriter">
  <div class="slide"><i></i></div>
  <div class="paper"></div>
  <div class="keyboard"></div>
</div>
        </div>
        <div className="experience-grid">
          {ExperienceData.map((experience) => (
            <div key={experience.id} className="card3 fade-in">
              <img src={experience.companyIcon} alt={`${experience.company} icon`} className="company-icon" />
              <div className="card3-details">
                <p className="text3-title">{experience.company}</p>
                <p className="text3-body">{experience.startDate} - {experience.endDate}</p>
              </div>
              <Link to={`/experience/${experience.id}`}>
                <button className="card3-button">More info</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

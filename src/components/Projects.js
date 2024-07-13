import React, { useEffect, useRef, useState } from 'react';
import '../theme/Projects.css';

import projectImage1 from '../assets/projects/FakeNewsDetector.jpg'; 
import projectImage2 from '../assets/projects/TranslatorApp.png'; 
import projectImage3 from '../assets/projects/TitanicSurvialDetector.png';
import projectImage4 from '../assets/projects/CreditCardFraudDetector.png';
import projectImage5 from '../assets/projects/MovieRatingPredictor.png'; 
import projectImage6 from '../assets/projects/LSApp.png'; 

const projectsData = [
  {
    title: "",
    subtitle: "",
    websiteLink: "https://lavkalsi.github.io/FakeNewsDetector",
    githubLink: "https://github.com/LavKalsi/FakeNewsDetector",
    backgroundImage: projectImage1
  },
  {
    title: "",
    subtitle: "",
    websiteLink: "https://lavkalsi.github.io/LanguageTranslatorApp/",
    githubLink: "https://github.com/LavKalsi/LanguageTranslatorApp",
    backgroundImage: projectImage2
  },
  {
    title: "",
    subtitle: "",
    websiteLink: "https://lavkalsi.github.io/TitanicSurvivalDetector/",
    githubLink: "https://github.com/LavKalsi/TitanicSurvivalDetector",
    backgroundImage: projectImage3
  },
  {
    title: "",
    subtitle: "",
    websiteLink: "https://lavkalsi.github.io/CreditCardFraudDetector/",
    githubLink: "https://github.com/LavKalsi/CreditCardFraudDetector",
    backgroundImage: projectImage4
  },
  {
    title: "",
    subtitle: "",
    websiteLink: "https://lavkalsi.github.io/MovieRatingPredictor/",
    githubLink: "https://github.com/LavKalsi/MovieRatingPredictor",
    backgroundImage: projectImage5
  },
  {
    title: "",
    subtitle: "",
    websiteLink: "https://lavkalsi.github.io/LoginSignupSQLite/",
    githubLink: "https://github.com/LavKalsi/LoginSignupSQLite",
    backgroundImage: projectImage6
  },
 
];

const Projects = () => {
  const ref = useRef(null);
  const [visibleProjects, setVisibleProjects] = useState(3); 

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

  const handleShowMore = () => {
    setVisibleProjects(prevVisibleProjects => prevVisibleProjects + 3); 
  };

  return (
    <section ref={ref} className="projects-section" id="projects">
      <div className='split'>
      <div className='head'>
      <h2>Projects</h2>
      <div className='container2'>
            <svg xmlns="http://www.w3.org/2000/svg" height="200" width="200">
              <g style={{ order: -1 }}>
                <polygon
                  transform="rotate(45 100 100)"
                  strokeWidth="1"
                  stroke="#d3a410"
                  fill="none"
                  points="70,70 148,50 130,130 50,150"
                  id="bounce"
                ></polygon>
                <polygon
                  transform="rotate(45 100 100)"
                  strokeWidth="1"
                  stroke="#d3a410"
                  fill="none"
                  points="70,70 148,50 130,130 50,150"
                  id="bounce2"
                ></polygon>
                <polygon
                  transform="rotate(45 100 100)"
                  strokeWidth="2"
                  stroke=""
                  fill="#414750"
                  points="70,70 150,50 130,130 50,150"
                ></polygon>
                <polygon
                  strokeWidth="2"
                  stroke=""
                  fill="url(#gradiente)"
                  points="100,70 150,100 100,130 50,100"
                ></polygon>
                <defs>
                  <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente">
                    <stop style={{ stopColor: "#1e2026", stopOpacity: 1 }} offset="20%"></stop>
                    <stop style={{ stopColor: "#414750", stopOpacity: 1 }} offset="60%"></stop>
                  </linearGradient>
                </defs>
                <polygon
                  transform="translate(20, 31)"
                  strokeWidth="2"
                  stroke=""
                  fill="#b7870f"
                  points="80,50 80,75 80,99 40,75"
                ></polygon>
                <polygon
                  transform="translate(20, 31)"
                  strokeWidth="2"
                  stroke=""
                  fill="url(#gradiente2)"
                  points="40,-40 80,-40 80,99 40,75"
                ></polygon>
                <defs>
                  <linearGradient y2="100%" x2="0%" y1="-17%" x1="10%" id="gradiente2">
                    <stop style={{ stopColor: "#d3a51000", stopOpacity: 1 }} offset="20%"></stop>
                    <stop style={{ stopColor: "#d3a51054", stopOpacity: 1 }} offset="100%" id="animatedStop"></stop>
                  </linearGradient>
                </defs>
                <polygon
                  transform="rotate(180 100 100) translate(20, 20)"
                  strokeWidth="2"
                  stroke=""
                  fill="#d3a410"
                  points="80,50 80,75 80,99 40,75"
                ></polygon>
                <polygon
                  transform="rotate(0 100 100) translate(60, 20)"
                  strokeWidth="2"
                  stroke=""
                  fill="url(#gradiente3)"
                  points="40,-40 80,-40 80,85 40,110.2"
                ></polygon>
                <defs>
                  <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente3">
                    <stop style={{ stopColor: "#d3a51000", stopOpacity: 1 }} offset="20%"></stop>
                    <stop style={{ stopColor: "#d3a51054", stopOpacity: 1 }} offset="100%" id="animatedStop"></stop>
                  </linearGradient>
                </defs>
                <polygon
      transform="rotate(45 100 100) translate(80, 95)"
      stroke-width="2"
      stroke=""
      fill="#ffe4a1"
      points="5,0 5,5 0,5 0,0"
      id="particles"
    ></polygon>
    <polygon
      transform="rotate(45 100 100) translate(80, 55)"
      stroke-width="2"
      stroke=""
      fill="#ccb069"
      points="6,0 6,6 0,6 0,0"
      id="particles"
    ></polygon>
    <polygon
      transform="rotate(45 100 100) translate(70, 80)"
      stroke-width="2"
      stroke=""
      fill="#fff"
      points="2,0 2,2 0,2 0,0"
      id="particles"
    ></polygon>
    <polygon
      stroke-width="2"
      stroke=""
      fill="#292d34"
      points="29.5,99.8 100,142 100,172 29.5,130"
    ></polygon>
    <polygon
      transform="translate(50, 92)"
      stroke-width="2"
      stroke=""
      fill="#1f2127"
      points="50,50 120.5,8 120.5,35 50,80"
    ></polygon>
              </g>
            </svg>
          </div>
       
      </div>
      <ul className="projects-grid">
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <li className="card" key={index} style={{ backgroundImage: `url(${project.backgroundImage})` }}>
            <div className="text">
              <span>{project.title}</span>
              <p className="subtitle">{project.subtitle}</p>
            </div>
            <div className="icons">
              <a className="btn" href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg> 
              </a>
              <a className="btn" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </li>
        ))}
      </ul>
       
      </div>
      <div className='button8'>
      {visibleProjects < projectsData.length && (
        <button className="show-more" onClick={handleShowMore}>Show More</button>
      )}</div>
    </section>
  );
};

export default Projects;

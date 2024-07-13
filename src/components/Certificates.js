import React, { useEffect, useRef, useState } from 'react';
import '../theme/Certificates.css';
import Gif from '../assets/certificate/certificate.gif';
import cert1 from '../assets/certificate/CourseraPython3Programming.png'; 
import cert2 from '../assets/certificate/InfosysAdvancedCSharp.png';
import cert3 from '../assets/certificate/InfosysReactJS.png'

const CertificatesData = [
  {
    title: "Coursera",
    subtitle: "Python 3 Programming",
    backgroundImage: cert1
  },
  {
    title: "Infosys",
    subtitle: "Advanced CSharp",
    backgroundImage: cert2
  },
  {
    title: "Infosys",
    subtitle: "Learning ReactJS",
    backgroundImage: cert3
  },
];

const Certificates = () => {
  const ref = useRef(null);
  const [visibleCertificates, setVisibleCertificates] = useState(3); // Initially show 6 Certificates on PC and 2 on phones

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

    const currentRef = ref.current; // Store ref.current in a variable

    if (currentRef) {
      observer.observe(currentRef); // Use the variable in the observer
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the variable in the cleanup function
      }
    };
  }, []); // Ensure the effect runs only once

  const handleShowMore = () => {
    setVisibleCertificates(prevVisibleCertificates => prevVisibleCertificates + 3); // Show 2 more Certificates
  };

  return (
    <section ref={ref} className="Certificates-section" id="Certificates">
      <div className='split1'>
        <div className='head2'>
          <h2>Certificates</h2>
          <img src={Gif} alt="Certificate GIF" style={{ width: '300px', height: '200px' }}  />
          {visibleCertificates < CertificatesData.length && (
            <button className="show-more" onClick={handleShowMore}>Show More</button>
          )}
        </div>
        <ul className="Certificates-grid">
          {CertificatesData.slice(0, visibleCertificates).map((certificate, index) => (
            <div key={index} className="card" style={{ backgroundImage: `url(${certificate.backgroundImage})` }}>
              <div className="card__content">
                <p className="card__title">{certificate.title}</p>
                <p className="card__description">{certificate.subtitle}</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certificates;

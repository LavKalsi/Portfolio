import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../theme/HomeScreen.css';
import Spline from '@splinetool/react-spline';
import { Typewriter } from 'react-simple-typewriter';

const HomeScreen = () => {
  const ref = useRef(null);
  const navigate = useNavigate();

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

    observer.observe(ref.current);

    const currentRef = ref.current;
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleNavigateToResume = () => {
    navigate('/resume');
  };

  return (
    <header ref={ref} className="home-header" id="home">
      <div className="empty"> <Spline scene="https://prod.spline.design/tUzFIiuNsaCJLPFh/scene.splinecode" />
      </div>
      <div className="container">
        <div className="home-text">
          <h1>Hi, I am <span className="highlight">Lav Kalsi</span></h1>
          <h2>A passionate <span className="typed-text">
          <Typewriter
            words={['Android Developer', 'Website Developer', 'Programmer']}
            loop={0} 
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></span></h2>
          <p>Welcome to my portfolio website. I am skilled in various technologies and passionate about developing efficient and scalable applications.</p>
          <div className="button-group">
            <a className="btn-primary" href="https://drive.google.com/uc?export=download&id=1gEaHb0pPytUBAB3UenmutHTLMQQ2F-cm" >Download Resume</a>
            <button className="btn-secondary" onClick={handleNavigateToResume}>Go to Resume</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeScreen;

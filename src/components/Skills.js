import React, { useEffect, useRef } from 'react';
import Marquee from "react-fast-marquee";

import '../theme/Skills.css';

const skillsData = [
    { name: 'Python', image: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
    { name: 'Java', image: 'https://cdn-icons-png.flaticon.com/512/226/226777.png' },
    { name: 'VS Code', image: 'https://cdn-icons-png.flaticon.com/512/906/906324.png' },
    { name: 'PHP', image: 'https://cdn-icons-png.flaticon.com/512/919/919830.png' },
    { name: 'JavaScript', image: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
    { name: 'CSS', image: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
    { name: 'C', image: 'https://cdn-icons-png.flaticon.com/512/6132/6132221.png' },
    { name: 'C++', image: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png' },
    { name: 'React', image: 'https://cdn-icons-png.flaticon.com/512/919/919851.png' },
    { name: 'Node.js', image: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
    { name: 'HTML', image: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
];

function useIntersectionObserver() {
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        }, { threshold: 0.5 });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return observerRef;
}

function Skills() {
    const containerRef = useRef(null);
    const observerRef = useIntersectionObserver();

    useEffect(() => {
        const currentContainer = containerRef.current;
        const observer = observerRef.current;

        if (currentContainer && observer) {
            observer.observe(currentContainer);
        }

        return () => {
            if (currentContainer && observer) {
                observer.unobserve(currentContainer);
            }
        };
    }, [observerRef]);

    return (
        <div ref={containerRef} className="skills" id='skills'>

            <div className="skillsHeader">
                <h2>Skills</h2>
            
            <div><div class="code-loader">
  <span>&#123;</span><span>&#125;</span>
</div>
</div>
</div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id}>
                                <img src={skill.image} alt={skill.name} />
                                <h3>{skill.name}</h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills;

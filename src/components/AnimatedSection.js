// components/AnimatedSection.js
import React, { useEffect, useRef } from 'react';
import './styles.css'; // Import your CSS file

const AnimatedSection = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          sectionRef.current.classList.add('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="fade-in-slide-up">
      {children}
    </div>
  );
};

export default AnimatedSection;

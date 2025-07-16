import React, { useEffect, useRef } from 'react';
import romarProfile from '@/assets/Romar.jpg';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.stat-card');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 portfolio-gradient-text">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold text-portfolio-text mb-4">
              Web Developer with Experience
            </h3>
            <p className="text-portfolio-text-secondary mb-6 leading-relaxed">
              I'm a passionate full-stack developer with extensive knowledge and years of experience, working in dynamic environments where I can leverage my skills to build innovative solutions.
            </p>
            <p className="text-portfolio-text-secondary mb-8 leading-relaxed">
              My expertise spans both frontend and backend development, with a focus on creating scalable, efficient, and user-friendly applications using modern technologies.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="stat-card portfolio-card rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-portfolio-accent mb-2">02+</div>
                <div className="text-portfolio-text-secondary text-sm">Years of Experience</div>
              </div>
              <div className="stat-card portfolio-card rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-portfolio-accent mb-2">20+</div>
                <div className="text-portfolio-text-secondary text-sm">Projects Completed</div>
              </div>
              <div className="stat-card portfolio-card rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-portfolio-accent mb-2">5+</div>
                <div className="text-portfolio-text-secondary text-sm">Technologies Mastered</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              <img 
                src={romarProfile} 
                alt="Developer at work" 
                className="w-full max-w-md h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
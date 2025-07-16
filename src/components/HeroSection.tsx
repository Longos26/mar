import React from 'react';
import romarProfile from '@/assets/Romar.jpg';

interface HeroSectionProps {
  onOpenResume: () => void;
}

const HeroSection = ({ onOpenResume }: HeroSectionProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative portfolio-hero-gradient py-8">
      <div className="max-w-6xl w-full px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-fade-in-up">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white to-portfolio-text-secondary bg-clip-text text-transparent">
                Hi, I'm Romar
              </span>
            </h1>
            <p className="text-xl text-portfolio-accent mb-4 font-medium">
              Full-Stack Developer
            </p>
            <p className="text-portfolio-text-secondary mb-8 leading-relaxed max-w-2xl">
              Full-Stack Developer | Open-Source Enthusiast | Problem Solver
              <br /><br />
              Passionate about building clean, scalable web applications and creating solutions that make an impact. 
              Currently working with JavaScript, React, Next.js, Node.js, and MongoDB.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-portfolio-accent hover:bg-portfolio-accent-hover text-white font-medium rounded-full transition-all duration-300 hover:-translate-y-1"
              >
                Contact Me
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-transparent border border-portfolio-border text-portfolio-text-secondary hover:bg-portfolio-secondary hover:text-portfolio-text font-medium rounded-full transition-all duration-300"
              >
                View Projects
              </button>
              <button
                onClick={onOpenResume}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30 flex items-center gap-2 justify-center"
              >
                📄 View Resume
              </button>
            </div>
          </div>

          {/* Right Content - Profile Card */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="portfolio-card rounded-3xl p-8 text-center max-w-sm w-full hover:shadow-2xl hover:shadow-portfolio-accent/20">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full border-4 border-portfolio-accent overflow-hidden bg-portfolio-card">
                <img 
                  src={romarProfile} 
                  alt="Romar Longos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-portfolio-text mb-2">
                Romar
              </h3>
              <p className="text-portfolio-text-secondary mb-4">
                Longos26
              </p>
              <p className="text-portfolio-text-muted text-sm leading-relaxed">
                To leverage my skills and knowledge, and passion in a dynamic and challenging environment, where I can contribute
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React, { useEffect, useRef } from 'react';
import jeepneyManagement from '@/assets/t.png';
import ecommercePlatform from '@/assets/q.jpeg';
import kioskSystem from '@/assets/w.jpeg';
import posTealerin from '@/assets/e.jpeg';

const ProjectsSection = () => {
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

    const elements = sectionRef.current?.querySelectorAll('.project-card');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Jeepney Management System',
      description: 'A full-stack boundary management system for jeepney operators, built with TypeScript (TSX), Node.js, and MongoDB. Includes features like driver and unit management, tax and billing tracking, and financial reporting.',
      image: jeepneyManagement,
      technologies: [
        { name: 'React (TSX)', type: 'react' },
        { name: 'Node.js', type: 'nodejs' },
        { name: 'MongoDB', type: 'mongodb' }
      ]
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      image: ecommercePlatform,
      technologies: [
        { name: 'React', type: 'react' },
        { name: 'Node.js', type: 'nodejs' },
        { name: 'MongoDB', type: 'mongodb' }
      ]
    },
    {
      title: 'Kiosk for Citizen\'s Charter',
      description: 'Interactive digital kiosk system providing easy access to Citizens Charter information for public service.',
      image: kioskSystem,
      technologies: [
        { name: 'React', type: 'react' },
        { name: 'MongoDB', type: 'mongodb' },
        { name: 'Express', type: 'other' }
      ]
    },
    {
      title: 'Point of Sale for Tealerin',
      description: 'Custom POS system for milk tea shop with order management, sales tracking, and inventory features.',
      image: posTealerin,
      technologies: [
        { name: 'JavaScript', type: 'javascript' },
        { name: 'Next.js', type: 'other' },
        { name: 'MongoDB', type: 'mongodb' }
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 portfolio-gradient-text">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card portfolio-card rounded-2xl overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-portfolio-text mb-2">
                  {project.title}
                </h3>
                <p className="text-portfolio-text-secondary text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`portfolio-tech-tag tech-${tech.type} text-xs py-1 px-2`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
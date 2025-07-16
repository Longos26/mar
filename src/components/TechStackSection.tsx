import React, { useEffect, useRef } from 'react';
import { 
  Code, 
  Monitor, 
  Server, 
  Zap, 
  Palette,
  Database,
  Globe,
  Settings,
  Cloud,
  GitBranch,
  FileText,
  Layers,
  Box,
  Smartphone,
  Layout,
  Terminal,
  Cpu,
  Workflow
} from 'lucide-react';

const TechStackSection = () => {
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

    const elements = sectionRef.current?.querySelectorAll('.tech-category');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const techCategories = [
    {
      title: '🎯 Core',
      technologies: [
        { name: 'JavaScript', type: 'javascript', icon: Code },
        { name: 'TypeScript', type: 'typescript', icon: FileText },
        { name: 'Node.js', type: 'nodejs', icon: Server }
      ]
    },
    {
      title: '🎨 Frontend',
      technologies: [
        { name: 'React', type: 'react', icon: Layers },
        { name: 'Next.js', type: 'other', icon: Globe },
        { name: 'TailwindCSS', type: 'other', icon: Palette },
        { name: 'Svelte', type: 'other', icon: Zap },
        { name: 'Angular', type: 'other', icon: Layout }
      ]
    },
    {
      title: '🔧 Backend',
      technologies: [
        { name: 'Express', type: 'other', icon: Server },
        { name: 'MongoDB', type: 'mongodb', icon: Database },
        { name: 'MySQL', type: 'mysql', icon: Database },
        { name: 'Firebase', type: 'other', icon: Cloud },
        { name: 'Supabase', type: 'other', icon: Database }
      ]
    },
    {
      title: '⚡ Learning',
      technologies: [
        { name: 'Docker', type: 'other', icon: Box },
        { name: 'GraphQL', type: 'other', icon: Workflow },
        { name: 'AWS', type: 'other', icon: Cloud }
      ]
    },
    {
      title: '🎨 UI/UX',
      technologies: [
        { name: 'Figma', type: 'other', icon: Smartphone },
        { name: 'LucidChart', type: 'other', icon: GitBranch }
      ]
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'javascript':
        return 'text-yellow-500';
      case 'typescript':
        return 'text-blue-500';
      case 'nodejs':
        return 'text-green-500';
      case 'react':
        return 'text-blue-400';
      case 'mongodb':
        return 'text-green-600';
      case 'mysql':
        return 'text-blue-600';
      default:
        return 'text-purple-500';
    }
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Tech Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="tech-category bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:bg-gray-750 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech, techIndex) => {
                  const IconComponent = tech.icon;
                  return (
                    <span
                      key={techIndex}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors duration-200 border border-gray-600`}
                    >
                      <IconComponent size={16} className={getIconColor(tech.type)} />
                      {tech.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default TechStackSection;
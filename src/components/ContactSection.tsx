import React from 'react';
import { Mail, Globe, Facebook, Linkedin, Briefcase } from 'lucide-react';

const ContactSection = () => {
  const contacts = [
    {
      title: 'Email',
      subtitle: 'romarlongos26@gmail.com',
      href: 'mailto:romarlongos26@gmail.com',
      icon: Mail,
      bgColor: 'bg-red-600'
    },
    {
      title: 'Facebook',
      subtitle: 'Romar Longos',
      href: 'https://www.facebook.com/Mar026.me',
      icon: Facebook,
      bgColor: 'bg-blue-600'
    },
    {
      title: 'Indeed Profile',
      subtitle: 'Professional Profile',
      href: 'https://profile.indeed.com/p/romarl-1g4q2y1',
      icon: Briefcase,
      bgColor: 'bg-indigo-600'
    },
    {
      title: 'LinkedIn',
      subtitle: 'Professional Network',
      href: 'https://www.linkedin.com/in/romar-longos-41639b363',
      icon: Linkedin,
      bgColor: 'bg-blue-700'
    },
    {
      title: 'Website',
      subtitle: 'mar026.me',
      href: 'https://mar026.me',
      icon: Globe,
      bgColor: 'bg-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Get In Touch
          </h3>
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborating on interesting projects, 
            or just having a conversation about technology and development. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contacts.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 border border-gray-700 rounded-2xl p-6 flex items-center gap-4 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 rounded-full ${contact.bgColor} flex items-center justify-center text-white flex-shrink-0`}>
                  <IconComponent size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium mb-1">
                    {contact.title}
                  </div>
                  <div className="text-gray-400 text-sm truncate">
                    {contact.subtitle}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import React from 'react';
import { X } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-auto"
      onClick={handleBackdropClick}
    >
      <div className="portfolio-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-portfolio-accent hover:bg-portfolio-accent-hover text-white rounded-full flex items-center justify-center transition-colors duration-300"
        >
          <X size={20} />
        </button>

        <div className="text-portfolio-text leading-relaxed">
          <h1 className="text-3xl font-bold text-center mb-4">Romar Longos</h1>
          <p className="text-center text-portfolio-text-secondary mb-6">
            Olongapo City, Philippines 2200<br />
            romarlongos26@gmail.com | +63 970 203 3292
          </p>
          
          <h2 className="text-2xl font-semibold text-portfolio-accent mb-3 mt-6">Professional Summary</h2>
          <p className="text-portfolio-text-secondary mb-4">
            I am a motivated and detail-oriented Computer Science student with hands-on experience in software development, data entry, and digital marketing. Proficient in designing and building practical systems such as kiosks, point-of-sale solutions, and management platforms. Eager to contribute technical expertise and creativity to dynamic teams while continuously learning and expanding professional capabilities.
          </p>
          
          <h2 className="text-2xl font-semibold text-portfolio-accent mb-3 mt-6">Skills</h2>
          <ul className="list-disc list-inside text-portfolio-text-secondary mb-4 space-y-1">
            <li>Programming Languages: PHP, Python, JavaScript (React)</li>
            <li>Web & App Development: HTML, CSS, React, PHP</li>
            <li>Database Management: MySQL, MongoDB, SQL</li>
            <li>Design Tools: Figma, Canva</li>
            <li>Office Tools: Microsoft Word, Excel, PowerPoint</li>
            <li>Languages: English (Expert), Filipino (Native)</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-portfolio-accent mb-3 mt-6">Project Experience</h2>
          <div className="space-y-4 text-portfolio-text-secondary">
            <div>
              <p className="font-semibold text-portfolio-text">Citizens Charter Kiosk</p>
              <p className="text-sm text-portfolio-text-muted">Barangay Local Government Unit | July 2023 - August 2024</p>
              <p>Designed and developed an interactive kiosk system to provide easy access to the Citizens Charter, streamlining information dissemination for public service. Built user-friendly interfaces ensuring accessibility for senior citizens and residents. Technologies: React JS, MongoDB, Node JS.</p>
            </div>
            <div>
              <p className="font-semibold text-portfolio-text">Point of Sale (POS) System for Tealerin Milk Tea Shop</p>
              <p className="text-sm text-portfolio-text-muted">Freelance | September 2024 - December 2024</p>
              <p>Developed a custom POS system tailored to the daily operations of a milk tea shop, including order management, sales tracking, and inventory. Technologies: React JS, MongoDB, Node JS.</p>
            </div>
            <div>
              <p className="font-semibold text-portfolio-text">Hotel Management System</p>
              <p className="text-sm text-portfolio-text-muted">Freelance | January 2025 - June 2025</p>
              <p>Created a Hotel Management System to handle reservations, guest check-ins/check-outs, and room management. Designed both front-end and back-end functionalities. Technologies: React JS, MongoDB, Node JS.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-portfolio-accent mb-3 mt-6">Work Experience</h2>
          <div className="space-y-4 text-portfolio-text-secondary">
            <div>
              <p className="font-semibold text-portfolio-text">Junior Web Developer</p>
              <p className="text-sm text-portfolio-text-muted">Barangay Local Government Unit - Olongapo City | July 2023 - August 2024</p>
              <p>Maintained and encoded citizen records, including senior citizens' information. Ensured accuracy and confidentiality in data handling.</p>
            </div>
            <div>
              <p className="font-semibold text-portfolio-text">Advertising Assistant</p>
              <p className="text-sm text-portfolio-text-muted">Maxim - Olongapo City | October 2022 - January 2023</p>
              <p>Designed social media posts, promotional content, and printed flyers. Increased online engagement and local customer reach through effective digital campaigns.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-portfolio-accent mb-3 mt-6">Education</h2>
          <div className="space-y-2 text-portfolio-text-secondary">
            <div>
              <p className="font-semibold text-portfolio-text">Bachelor of Science in Computer Science (3rd Year)</p>
              <p className="text-sm text-portfolio-text-muted">Gordon College, Olongapo City | Ongoing</p>
            </div>
            <div>
              <p className="font-semibold text-portfolio-text">Senior High School</p>
              <p className="text-sm text-portfolio-text-muted">Subic Bay College Inc. | 2020 - 2021</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-portfolio-accent mb-3 mt-6">Certifications</h2>
          <ul className="list-disc list-inside text-portfolio-text-secondary space-y-1">
            <li>Cisco Networking and Cybersecurity Certification (issued: August 20, 2024)</li>
            <li>DICT Python Course (issued: September 19, 2024)</li>
            <li>AWS Cloud Computing Certification (issued: November 27, 2024)</li>
            <li>The Worlds of Software Engineering Concepts, Challenges and Careers (issued: May 10, 2025)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
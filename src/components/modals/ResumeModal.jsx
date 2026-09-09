import React from 'react';
import { X, Download, Printer, Mail, MapPin, Globe, Award, GraduationCap, Briefcase, Code2, CheckCircle2, FileText } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon } from '../BrandIcons';
import { portfolioData } from '../../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const { brand, contact, experience, projectsShowcase } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in print:p-0 print:bg-white">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto no-scrollbar border border-[#E8D9CF] shadow-2xl relative text-left print:max-h-none print:shadow-none print:border-none print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar (Hidden on Print) */}
        <div className="sticky top-0 z-30 bg-[#FDFBF8]/95 backdrop-blur-md px-3 sm:px-6 py-2.5 sm:py-4 border-b border-[#EEDDD2] flex items-center justify-between print:hidden">
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#8E323F]"></span>
            <span className="font-sans-clean font-extrabold text-[10px] sm:text-xs tracking-wider uppercase text-[#8E323F]">
              Curriculum Vitae • Vaidehi Hariyani
            </span>
          </div>

          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <a
              href={brand.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#8E323F] hover:bg-[#752632] text-white text-[10px] sm:text-xs font-sans-clean font-bold transition-all flex items-center space-x-1 sm:space-x-1.5 shadow-xs cursor-pointer active:scale-95"
              title="Download official PDF from Google Drive"
            >
              <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Download CV (Drive)</span>
            </a>

            <button
              onClick={handlePrint}
              className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white hover:bg-[#FAF2ED] text-[#8E323F] border border-[#E8D9CF] text-[10px] sm:text-xs font-sans-clean font-bold transition-all flex items-center space-x-1 sm:space-x-1.5 shadow-xs cursor-pointer active:scale-95"
              title="Print or Save as PDF"
            >
              <Printer className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FAF0EA] hover:bg-[#F2DFD4] text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* CV Content Container */}
        <div className="p-4 sm:p-10 space-y-5 sm:space-y-7 font-sans-clean text-[#2C2325]">
          {/* Header */}
          <div className="border-b border-[#EEDDD2] pb-4 sm:pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div>
              <h1 className="font-serif-luxury text-2xl sm:text-4xl font-extrabold text-[#8E323F]">
                {brand.name}
              </h1>
              <p className="font-sans-clean font-bold text-xs sm:text-base text-[#A13E50] mt-0.5 sm:mt-1">
                Frontend Developer & Aspiring MERN Stack Engineer
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 sm:mt-3 text-[11px] sm:text-xs text-[#6B5A57]">
                <span className="flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-[#8E323F]" /> {brand.location}
                </span>
                <span>•</span>
                <span className="flex items-center">
                  <Mail className="w-3.5 h-3.5 mr-1 text-[#8E323F]" /> {contact.email}
                </span>
              </div>
            </div>

            {/* Links & Status */}
            <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs">
              <a 
                href={contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8E323F] hover:underline font-bold flex items-center"
              >
                <Github className="w-3.5 h-3.5 mr-1.5" /> github.com/hariyanivaidehi
              </a>
              <a 
                href={contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0077B5] hover:underline font-bold flex items-center"
              >
                <LinkedinIcon className="w-3.5 h-3.5 mr-1.5" /> LinkedIn Profile
              </a>
              <span className="bg-[#FAF0EA] text-[#8E323F] font-bold px-2.5 py-0.5 rounded-full text-[10px] mt-1">
                🟢 Open for Immediate Opportunities
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="font-serif-luxury text-lg font-bold text-[#8E323F] uppercase tracking-wider mb-2 flex items-center">
              <FileText className="w-4 h-4 mr-2 text-[#8E323F]" />
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#5C4F4E] leading-relaxed">
              Passionate, detail-oriented <strong>Frontend Developer</strong> with dedicated hands-on experience in <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and modern JavaScript (ES6+), actively expanding into full-stack engineering with the <strong>MERN Stack (MongoDB, Express.js, React.js, Node.js)</strong>. Proven ability to build pixel-perfect, responsive web interfaces, architect reusable component libraries, and collaborate through Git version control during a 6-month industry internship.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="font-serif-luxury text-lg font-bold text-[#8E323F] uppercase tracking-wider mb-3 flex items-center">
              <Code2 className="w-4 h-4 mr-2 text-[#8E323F]" />
              Technical Competencies & Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-[#FAF4F0] border border-[#F0E2D8]">
                <strong className="text-[#8E323F] block font-bold text-xs uppercase mb-1">Frontend Engineering</strong>
                <p className="text-[#5C4F4E] leading-relaxed">
                  React.js, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Vite, Responsive Design, State Management, Custom Hooks
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FAF4F0] border border-[#F0E2D8]">
                <strong className="text-[#8E323F] block font-bold text-xs uppercase mb-1">MERN Stack (Aspirations)</strong>
                <p className="text-[#5C4F4E] leading-relaxed">
                  Node.js, Express.js, MongoDB, Mongoose, RESTful API Integration, Backend Middleware, JSON Data Modeling
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FAF4F0] border border-[#F0E2D8]">
                <strong className="text-[#8E323F] block font-bold text-xs uppercase mb-1">Developer Tools & Platforms</strong>
                <p className="text-[#5C4F4E] leading-relaxed">
                  Git, GitHub, VS Code, Postman API Client, NPM / Yarn, Chrome DevTools
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FAF4F0] border border-[#F0E2D8]">
                <strong className="text-[#8E323F] block font-bold text-xs uppercase mb-1">Core Engineering Practices</strong>
                <p className="text-[#5C4F4E] leading-relaxed">
                  Modular Component Architecture, Clean Code Discipline, Cross-Browser Compatibility, Mobile-First Styling
                </p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="font-serif-luxury text-lg font-bold text-[#8E323F] uppercase tracking-wider mb-3 flex items-center">
              <Briefcase className="w-4 h-4 mr-2 text-[#8E323F]" />
              Professional Experience
            </h2>

            <div className="border border-[#EADBD1] rounded-2xl p-5 bg-white shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-[#F2E5DC] mb-3">
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-[#2C2325]">
                    {experience.internship.role}
                  </h3>
                  <p className="text-xs text-[#8E323F] font-semibold">
                    {experience.internship.company} • Surat, Gujarat
                  </p>
                </div>
                <span className="text-[11px] font-bold text-[#7A6A68] bg-[#FAF0EA] px-2.5 py-0.5 rounded-full mt-1 sm:mt-0">
                  {experience.internship.duration} (2024 — 2025)
                </span>
              </div>

              <p className="text-xs text-[#5C4F4E] leading-relaxed mb-3">
                {experience.internship.description}
              </p>

              <div className="space-y-1.5">
                {(experience.internship.deliverables || []).map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-[#4A3E3D]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8E323F] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Technical Projects */}
          <div>
            <h2 className="font-serif-luxury text-lg font-bold text-[#8E323F] uppercase tracking-wider mb-3 flex items-center">
              <Code2 className="w-4 h-4 mr-2 text-[#8E323F]" />
              Featured Technical Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {projectsShowcase.projects.map((proj) => (
                <div key={proj.id} className="p-4 rounded-2xl border border-[#EADBD1] bg-[#FDFBF8] flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#2C2325]">{proj.title}</h4>
                    <span className="text-[10px] text-[#8E323F] font-semibold block mt-0.5">{proj.category}</span>
                    <p className="text-[11px] text-[#5C4F4E] mt-2 leading-relaxed line-clamp-3">
                      {proj.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#F2E5DC] text-[10px] font-bold text-[#7A6A68]">
                    {proj.techStack.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-serif-luxury text-lg font-bold text-[#8E323F] uppercase tracking-wider mb-3 flex items-center">
              <GraduationCap className="w-4 h-4 mr-2 text-[#8E323F]" />
              Education & Academics
            </h2>

            <div className="p-4 rounded-2xl border border-[#E8D7CD] bg-[#FAF2ED] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="font-bold text-sm text-[#2C2325]">{experience.education.degree}</h4>
                <p className="text-xs text-[#7A6A68]">
                  {experience.education.college} ({experience.education.university})
                </p>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs font-bold text-[#8E323F] block">{experience.education.score}</span>
                <span className="text-[11px] text-[#7A6A68]">{experience.education.period}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer (Hidden on Print) */}
        <div className="bg-[#FAF2ED] px-6 py-4 rounded-b-3xl border-t border-[#EEDDD2] flex flex-col sm:flex-row items-center justify-between gap-3 print:hidden">
          <span className="text-xs text-[#7A6A68]">
            Format: Official Curriculum Vitae • Updated 2026
          </span>

          <div className="flex items-center space-x-2.5">
            <a
              href={brand.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#8E323F] hover:bg-[#752632] text-white rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official CV (Drive)</span>
            </a>
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-white hover:bg-[#F5ECE5] text-[#2C2325] border border-[#E8D9CF] rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center space-x-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white hover:bg-[#F5ECE5] text-[#2C2325] border border-[#E8D9CF] rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Code2 } from 'lucide-react';
import { GithubIcon as Github } from "../BrandIcons";

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto no-scrollbar border border-[#E8D9CF] shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#8E323F] flex items-center justify-center transition-colors cursor-pointer shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-[#FAF2ED] to-[#FCEEE9] p-4 sm:p-8 rounded-t-3xl border-b border-[#F0E2D8]">
          <span className="text-[9px] sm:text-xs font-sans-clean font-bold tracking-widest text-[#8E323F] uppercase bg-white px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-xs">
            Project Breakdown & Technical Specs
          </span>
          <h3 className="font-project-title text-xl sm:text-4xl font-extrabold text-[#1C1516] mt-2 sm:mt-3">
            {project.title}
          </h3>
          <p className="font-sans-clean text-[11px] sm:text-sm font-semibold text-[#A13E50] mt-0.5 sm:mt-1">
            {project.tagline}
          </p>

          <div className="mt-2.5 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
            {project.techStack.map((t, idx) => (
              <span key={idx} className="bg-white/90 font-sans-clean font-bold text-[10px] sm:text-xs text-[#8E323F] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg border border-[#F0E0D6] shadow-xs">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Project Screenshot / Media */}
        <div className="bg-[#1C1719] p-3 sm:p-6 flex items-center justify-center">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-w-2xl w-full">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto object-cover max-h-[380px]"
            />
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-8 space-y-4 sm:space-y-6 font-sans-clean text-xs sm:text-sm text-[#4A3E3D]">
          {/* Overview */}
          <div>
            <h4 className="font-sans-clean font-extrabold text-[11px] sm:text-xs uppercase tracking-wider text-[#8E323F] mb-1 sm:mb-1.5 flex items-center">
              <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 text-[#8E323F]" />
              Project Overview & Features
            </h4>
            <p className="text-[#5C4F4E] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Deliverables & Highlights */}
          <div>
            <h4 className="font-sans-clean font-extrabold text-xs uppercase tracking-wider text-[#8E323F] mb-3 flex items-center">
              <Layers className="w-4 h-4 mr-1.5 text-[#8E323F]" />
              Core Features & Technical Implementations
            </h4>
            <div className="space-y-2">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 bg-[#FAF4F0] p-3 rounded-xl border border-[#F2E5DC]">
                  <CheckCircle2 className="w-4 h-4 text-[#8E323F] flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-[#2C2325]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-[#F0E2D8] flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-[#7A6A68]">
              {project.liveUrl ? "Live web application deployed & open-source code available." : "Source code available on GitHub repository."}
            </p>
            <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-end">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#FAF0EA] hover:bg-[#F3E2D8] text-[#8E323F] font-bold rounded-xl border border-[#E8D8CD] shadow-xs transition-all cursor-pointer text-xs uppercase tracking-wider flex items-center justify-center space-x-2 active:scale-95"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Launch Live Demo</span>
                </a>
              )}

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#8E323F] hover:bg-[#752632] text-white font-bold rounded-xl shadow-md transition-all cursor-pointer text-xs uppercase tracking-wider flex items-center justify-center space-x-2 active:scale-95"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

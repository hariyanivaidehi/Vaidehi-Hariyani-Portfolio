import React from 'react';
import { ExternalLink, Eye } from "lucide-react";
import { GithubIcon as Github } from "../BrandIcons";
import { portfolioData } from '../../data/portfolioData';

export default function Slide6ContentGrids({ isActive = true, onSelectProject }) {
  const { projectsShowcase } = portfolioData;

  return (
    <div className="w-full pt-16 sm:pt-24 pb-8 sm:pb-16 px-3.5 sm:px-8 lg:px-16 xl:px-24">
      {/* Section Header */}
      <div 
        className={`w-full text-left border-b border-[#EEDDD2] pb-2.5 sm:pb-3.5 mb-6 sm:mb-12 transition-all duration-700 ease-out ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <span className="text-[9px] sm:text-xs font-sans-clean uppercase font-bold tracking-widest text-[#111111]">
          {projectsShowcase.headerTag}
        </span>
        <h2 className="font-serif-luxury text-xl sm:text-3xl lg:text-5xl font-extrabold text-[#111111] tracking-tight mt-0.5 sm:mt-1">
          {projectsShowcase.title}
        </h2>
        <p className="font-sans-clean text-[11px] sm:text-base font-semibold text-[#8E323F] mt-0.5">
          {projectsShowcase.subtitle}
        </p>
      </div>

      {/* Sticky Stacked Cards Deck Wrapper */}
      <div className="stack-wrapper w-full flex flex-col items-center">
        {projectsShowcase.projects.map((project, idx) => {
          // Dynamic sticky top offset for authentic physical card stacking
          const topOffset = `calc(7vh + ${idx * 16}px)`;
          const zIndex = 10 + idx;

          return (
            <div
              key={project.id}
              style={{
                top: topOffset,
                zIndex: zIndex,
              }}
              onClick={() => onSelectProject && onSelectProject(project)}
              className="sticky-project-card group relative w-[95vw] sm:w-[92vw] lg:w-[86vw] xl:w-[82vw] max-w-6xl h-auto sm:h-[76vh] sm:min-h-[560px] sm:max-h-[700px] mb-[10vh] sm:mb-[18vh] last:mb-8 bg-white cursor-pointer rounded-[20px] sm:rounded-[28px] overflow-hidden flex flex-col border-0 outline-none shadow-xl"
            >
              {/* Top: Project Picture / Screenshot - Exact 16:9 on mobile to eliminate blank gap */}
              <div className="relative w-full aspect-[16/9] sm:aspect-auto sm:h-[58%] bg-[#FDFBF9] p-2 sm:p-4 flex items-center justify-center overflow-hidden border-b border-[#F2E5DC]/80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain object-center group-hover:scale-[1.015] transition-transform duration-500 ease-out rounded-xl"
                />
              </div>

              {/* Bottom: Project Content Details - Snug gap on mobile, justify-between only on desktop */}
              <div className="w-full sm:h-[42%] bg-white px-4 py-3 sm:px-8 sm:py-4 flex flex-col gap-2.5 sm:gap-0 sm:justify-between text-left">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-1">
                    <h3 className="font-project-title text-base sm:text-2xl lg:text-4xl font-extrabold tracking-tight text-[#1C1516] group-hover:text-[#8E323F] transition-colors duration-200 leading-snug">
                      {project.title}
                    </h3>
                    <span className="text-[10px] sm:text-xs font-sans-clean font-bold text-[#8E323F] line-clamp-1">
                      {project.category} • {project.tagline}
                    </span>
                  </div>
                  <p className="font-sans-clean text-[11px] sm:text-xs md:text-sm text-[#5C4F4E] mt-1 leading-snug sm:leading-relaxed line-clamp-2 max-w-3xl">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2.5 sm:px-3 py-0.5 rounded-full text-[9px] sm:text-xs font-sans-clean font-bold bg-[#FAF0EA] text-[#8E323F] border border-[#F0E0D6]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-0.5 sm:pt-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject && onSelectProject(project);
                    }}
                    className="btn-luxury-shine px-3.5 sm:px-6 py-1.5 sm:py-2 bg-[#8E323F] hover:bg-[#752632] text-white rounded-full text-[11px] sm:text-xs font-sans-clean font-extrabold uppercase tracking-wider transition-all flex items-center space-x-1.5 sm:space-x-2 shadow-md hover:shadow-xl cursor-pointer active:scale-95"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Full Specs</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="btn-luxury-shine px-3 sm:px-5 py-1.5 sm:py-2 bg-[#FAF0EA] hover:bg-[#F3E2D8] text-[#2C2325] hover:text-[#8E323F] rounded-full text-[11px] sm:text-xs font-sans-clean font-bold transition-all flex items-center space-x-1.5 border border-[#E8D8CD] shadow-xs hover:shadow-md cursor-pointer active:scale-95"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="btn-luxury-shine px-3 sm:px-5 py-1.5 sm:py-2 bg-[#FAF0EA] hover:bg-[#F3E2D8] text-[#2C2325] hover:text-[#8E323F] rounded-full text-[11px] sm:text-xs font-sans-clean font-bold transition-all flex items-center space-x-1.5 border border-[#E8D8CD] shadow-xs hover:shadow-md cursor-pointer active:scale-95"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

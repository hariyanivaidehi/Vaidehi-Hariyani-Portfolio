import React from 'react';

export default function VerticalNav({ activeIndex, onNavigate, totalSlides }) {
  const sections = [
    { title: "Intro", label: "01. Introduction" },
    { title: "Services", label: "02. What I Bring" },
    { title: "Toolkit", label: "03. Tech Stack" },
    { title: "Experience", label: "04. Verified Experience" },
    { title: "Projects", label: "05. Featured Projects" },
    { title: "Connect", label: "06. Let's Connect" },
  ];

  return (
    <nav 
      aria-label="Section Navigation"
      className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end space-y-3 pointer-events-auto"
    >
      {sections.map((sec, idx) => {
        const isActive = activeIndex === idx;
        return (
          <button
            key={idx}
            onClick={() => onNavigate(idx)}
            className="group flex items-center space-x-2.5 py-1 focus:outline-none cursor-pointer"
            title={sec.label}
          >
            {/* Tooltip on hover */}
            <span
              className={`text-[11px] font-sans-clean font-bold tracking-wider uppercase transition-all duration-300 px-2.5 py-1 rounded-full whitespace-nowrap shadow-xs ${
                isActive
                  ? 'opacity-100 translate-x-0 bg-[#8E323F] text-white'
                  : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 bg-white/95 text-[#8E323F] border border-[#F0DCD3]'
              }`}
            >
              {sec.label}
            </span>

            {/* Dot Indicator */}
            <div className="relative flex items-center justify-center">
              {isActive && (
                <span className="absolute w-6 h-6 rounded-full bg-[#8E323F]/20 animate-ping" />
              )}
              <div
                className={`transition-all duration-300 rounded-full border-2 ${
                  isActive
                    ? 'w-3.5 h-3.5 bg-[#8E323F] border-white shadow-md scale-110'
                    : 'w-2.5 h-2.5 bg-[#D9C4B8] border-transparent group-hover:bg-[#8E323F] group-hover:scale-125'
                }`}
              />
            </div>
          </button>
        );
      })}
    </nav>
  );
}

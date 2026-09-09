import React from 'react';
import { portfolioData } from '../../data/portfolioData';

export default function Slide2Services({ isActive = true }) {
  const { services } = portfolioData;

  return (
    <div className="w-full h-auto sm:min-h-screen flex flex-col justify-start sm:justify-between pt-16 sm:pt-24 pb-6 sm:pb-12 px-3.5 sm:px-8 lg:px-16 xl:px-24 overflow-x-hidden">
      {/* Slide Header */}
      <div 
        className={`w-full text-center sm:text-left border-b border-[#EEDDD2] pb-2.5 sm:pb-3.5 transition-all duration-700 ease-out ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <span className="text-[9px] sm:text-xs font-sans-clean uppercase font-bold tracking-widest text-[#111111]">
          {services.headerTag}
        </span>
        <h2 className="font-serif-luxury text-xl sm:text-3xl lg:text-5xl font-extrabold text-[#111111] tracking-tight mt-0.5 sm:mt-1">
          {services.title}
        </h2>
        <p className="font-sans-clean text-[11px] sm:text-base text-[#7A6A68] mt-0.5 sm:mt-1">
          {services.subtitle}
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div 
        className={`w-full grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-6 items-stretch my-3 sm:my-auto py-2 sm:py-6 transition-all duration-700 delay-100 ease-out ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        {services.pillars.map((pillar, idx) => (
          <div 
            key={idx}
            className="card-hover-lift bg-white p-3.5 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#EADBD1] shadow-lg flex flex-col justify-between text-left group hover:border-[#8E323F]/40 cursor-default"
          >
            <div>
              <div className="flex items-center justify-between mb-1.5 sm:mb-3">
                <span className="font-serif-luxury font-black text-xl sm:text-3xl text-[#8E323F]/30 group-hover:text-[#8E323F] transition-colors">
                  {pillar.number}
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-sans-clean font-bold tracking-wider bg-[#FAF0EA] text-[#8E323F] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#F0E0D5]">
                  {pillar.highlight}
                </span>
              </div>

              <h3 className="font-serif-luxury font-bold text-base sm:text-xl text-[#2C2325] group-hover:text-[#8E323F] transition-colors">
                {pillar.title}
              </h3>
              <p className="font-sans-clean text-[10px] sm:text-xs font-semibold text-[#A13E50] mt-0.5">
                {pillar.tagline}
              </p>

              <p className="font-sans-clean text-[11px] sm:text-sm text-[#5C4F4E] mt-1.5 sm:mt-3 leading-snug sm:leading-relaxed">
                {pillar.description}
              </p>
            </div>

          </div>
        ))}
      </div>

      {/* Slide Footer */}
      <div 
        className={`w-full border-t border-[#EEDDD2] mt-6 sm:mt-0 pt-2.5 text-[10px] sm:text-[11px] text-[#8E7672] flex flex-col sm:flex-row justify-between items-center gap-1 transition-all duration-700 delay-200 ease-out ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <span>Technical Services & Capabilities</span>
        <span>React.js • Redux • REST APIs • Tailwind CSS • Bootstrap • MySQL • AI Workflows</span>
      </div>
    </div>
  );
}

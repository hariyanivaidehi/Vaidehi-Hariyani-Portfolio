import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { ReactLogo, NodejsLogo, MongodbLogo } from '../TechLogos';

export default function Slide7Platforms({ isActive = true }) {
  const { platforms } = portfolioData;

  const columnIcons = [ReactLogo, NodejsLogo, MongodbLogo];

  return (
    <div className="w-full min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-16 xl:px-24 overflow-x-hidden">
      {/* Slide Header */}
      <div 
        className={`w-full text-center sm:text-left border-b border-[#EEDDD2] pb-3.5 transition-all duration-700 ease-out ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <span className="text-[10px] sm:text-xs font-sans-clean uppercase font-bold tracking-widest text-[#111111]">
          {platforms.badge}
        </span>
        <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight mt-1">
          {platforms.title}
        </h2>
        <p className="font-sans-clean text-xs sm:text-base font-semibold text-[#A13E50] tracking-wide mt-1">
          {platforms.subtitle}
        </p>
      </div>

      {/* 3 Architecture Columns */}
      <div 
        className={`w-full grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch my-auto py-4 sm:py-6 transition-all duration-700 delay-100 ease-out ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        {platforms.columns.map((col, idx) => {
          const IconComponent = columnIcons[idx] || Sparkles;

          return (
            <div 
              key={idx}
              className="bg-white p-5 sm:p-7 rounded-3xl border border-[#EADBD1] shadow-xl hover:shadow-2xl transition-all duration-500 ease-out text-left flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FAF0EA] flex items-center justify-center p-2 shadow-xs group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold px-3 py-1 rounded-full bg-[#FAF2ED] text-[#8E323F] border border-[#F0E0D5]">
                    {col.stat}
                  </span>
                </div>

                <h3 className="font-serif-luxury font-bold text-lg sm:text-2xl text-[#2C2325]">
                  {col.name}
                </h3>
                <p className="text-xs font-sans-clean font-bold text-[#8E323F] mt-0.5">
                  {col.role}
                </p>

                <p className="text-xs sm:text-sm font-sans-clean text-[#5C4F4E] mt-3 leading-relaxed">
                  {col.sub}
                </p>

                
              </div>

              <div className="pt-4 mt-4 border-t border-[#F2E5DC] flex items-center justify-between text-xs font-sans-clean font-bold text-[#8E323F]">
                <span>Architecture Layer</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide Footer */}
      <div 
        className={`w-full border-t border-[#EEDDD2] pt-2.5 text-[10px] sm:text-[11px] text-[#8E7672] flex flex-col sm:flex-row justify-between items-center gap-1 transition-all duration-700 delay-200 ease-out ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <span>Full Stack Modern Architecture</span>
        <span>Client-Side Optimization • Secure API Contracts • Resilient Schemas</span>
      </div>
    </div>
  );
}

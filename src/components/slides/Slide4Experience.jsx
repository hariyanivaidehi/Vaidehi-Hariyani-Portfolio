import React from 'react';
import { Award, CheckCircle2, Eye, GraduationCap, Building2, Calendar } from "lucide-react";
import { portfolioData } from '../../data/portfolioData';

export default function Slide4Experience({ isActive = true, onOpenCertificate }) {
  const { experience } = portfolioData;
  const { internship, education } = experience;

  return (
    <div className="w-full h-auto sm:min-h-screen flex flex-col justify-start sm:justify-between pt-16 sm:pt-24 pb-6 sm:pb-12 px-3.5 sm:px-8 lg:px-16 xl:px-24 overflow-x-hidden">
      {/* Slide Header */}
      <div 
        className={`w-full text-center sm:text-left border-b border-[#EEDDD2] pb-2.5 sm:pb-3.5 transition-all duration-700 ease-out ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <span className="text-[9px] sm:text-xs font-sans-clean uppercase font-bold tracking-widest text-[#111111]">
          {experience.headerTag}
        </span>
        <h2 className="font-serif-luxury text-xl sm:text-3xl lg:text-5xl font-extrabold text-[#111111] tracking-tight mt-0.5 sm:mt-1">
          {experience.title}
        </h2>
        <p className="font-sans-clean text-[11px] sm:text-base font-semibold text-[#A13E50] mt-0.5">
          {experience.subtitle}
        </p>
      </div>

      {/* Main Grid: Internship Certificate Showcase & Education */}
      <div 
        className={`w-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 xl:gap-14 items-center my-3 sm:my-auto py-2 sm:py-6 transition-all duration-700 delay-100 ease-out ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        {/* Left Column: Verified Internship Certificate Showcase */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div 
            onClick={onOpenCertificate}
            className="card-hover-lift group relative cursor-pointer w-full max-w-2xl bg-white p-3 sm:p-5 rounded-2xl sm:rounded-3xl border-2 border-[#E8D9CF] shadow-xl hover:border-[#8E323F]/40 text-left"
          >
            {/* Certificate Header Banner */}
            <div className="flex items-center justify-between pb-2.5 border-b border-[#F2E5DC] mb-2.5">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FAF0EA] text-[#8E323F] flex items-center justify-center font-bold flex-shrink-0">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <h4 className="font-sans-clean font-extrabold text-[11px] sm:text-sm text-[#2C2325]">
                    {internship.company} — {internship.role}
                  </h4>
                  <p className="text-[9px] sm:text-[10px] text-[#7A6A68]">{internship.duration} • Verified Certificate</p>
                </div>
              </div>
              <span className="text-[8px] sm:text-[10px] uppercase font-bold bg-[#FAF0EA] text-[#8E323F] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
                {internship.badge}
              </span>
            </div>

            {/* Real Certificate Image with Eye Hover Overlay */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#EAE0D8] bg-[#F7F2EE] aspect-[4/3] sm:aspect-[16/10]">
              <img 
                src={internship.certificateImage} 
                alt="Abox Agency Frontend Developer Internship Certificate" 
                className="w-full h-full object-contain p-1.5 sm:p-2 group-hover:scale-[1.03] transition-transform duration-500"
              />

              {/* Eye Overlay on Hover */}
              <div className="absolute inset-0 bg-[#8E323F]/65 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white space-y-1.5 sm:space-y-2 p-3 sm:p-4">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white text-[#8E323F] flex items-center justify-center shadow-2xl animate-bounce-gentle">
                  <Eye className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <span className="font-sans-clean font-extrabold text-[10px] sm:text-sm uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
                  Click to Expand Certificate
                </span>
              </div>
            </div>

            {/* Bottom Caption */}
            <div className="mt-2 sm:mt-3 flex items-center justify-between text-[9px] sm:text-[11px] font-sans-clean text-[#7A6A68]">
              <span>Issued to: <strong className="text-[#8E323F]">Vaidehi Hariyani</strong></span>
              <span className="flex items-center text-[#8E323F] font-bold">
                <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" /> Click to view
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Experience Details & Education */}
        <div className="lg:col-span-5 space-y-3 sm:space-y-4 text-left">
          {/* Internship Experience Card */}
          <div className="bg-white p-3.5 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#EADBD1] shadow-lg">
            <div className="flex items-center justify-between mb-1.5 sm:mb-2.5">
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-[#8E323F] bg-[#FAF0EA] px-2.5 sm:px-3 py-0.5 rounded-full">
                6-Month Experience
              </span>
              <span className="text-[10px] sm:text-xs text-[#7A6A68] font-semibold flex items-center">
                <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 text-[#8E323F]" /> 2024 — 2025
              </span>
            </div>

            <h3 className="font-serif-luxury font-bold text-base sm:text-2xl text-[#2C2325]">
              {internship.role}
            </h3>
            <p className="font-sans-clean text-[11px] sm:text-xs font-semibold text-[#8E323F] mt-0.5 flex items-center">
              <Building2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" /> {internship.company}
            </p>

            <p className="font-sans-clean text-[11px] sm:text-sm text-[#5C4F4E] mt-2 sm:mt-3 leading-snug sm:leading-relaxed">
              {internship.description}
            </p>

            {/* Contributions */}
            <div className="mt-2.5 sm:mt-3.5 space-y-1.5 sm:space-y-2 border-t border-[#F2E5DC] pt-2 sm:pt-3">
              <span className="text-[9px] sm:text-[10px] uppercase font-sans-clean font-extrabold tracking-wider text-[#8E323F] block">
                Key Contributions:
              </span>
              {(internship.deliverables || internship.contributions || []).map((item, idx) => (
                <div key={idx} className="flex items-start space-x-1.5 sm:space-x-2 text-[11px] sm:text-xs text-[#4A3E3D]">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8E323F] mt-0.5 flex-shrink-0" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-[#FAF2ED] p-3 sm:p-5 rounded-2xl sm:rounded-3xl border border-[#E8D7CD] shadow-sm flex items-center justify-between gap-2.5 sm:gap-3">
            <div className="flex items-center space-x-2.5 sm:space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-white text-[#8E323F] flex items-center justify-center shadow-xs flex-shrink-0">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-0.5">
                  <span className="text-[8px] sm:text-[9px] uppercase font-sans-clean font-bold tracking-wider text-[#8E323F]">
                    Academic Background
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-sans-clean font-extrabold text-[#8E323F] bg-white px-2 py-0.5 rounded-full border border-[#E8D7CD] shadow-2xs">
                    {education.score || "CGPA 7.3 / 10"}
                  </span>
                </div>
                <h4 className="font-serif-luxury font-bold text-xs sm:text-base text-[#2C2325]">
                  {education.degree}
                </h4>
                <p className="font-sans-clean text-[10px] sm:text-xs text-[#7A6A68]">
                  {education.college} • {education.period || "2022 — 2025"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div 
        className={`w-full border-t border-[#EEDDD2] mt-6 sm:mt-0 pt-2.5 text-[10px] sm:text-[11px] text-[#8E7672] flex flex-col sm:flex-row justify-between items-center gap-1 transition-all duration-700 delay-200 ease-out ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <span>Verified Professional Background • React.js • Redux • REST APIs • Tailwind CSS</span>
        <span>Abox Agency Certified Frontend Developer</span>
      </div>
    </div>
  );
}

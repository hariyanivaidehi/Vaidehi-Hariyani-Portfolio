import React from 'react';
import { TrendingUp, GitBranch } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Slide5Analytics({ isActive = true }) {
  const { metrics } = portfolioData;
  const { dashboard } = metrics;

  return (
    <div className="w-full min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-16 xl:px-24 overflow-x-hidden">
      {/* Slide Header */}
      <div 
        className={`w-full text-center sm:text-left border-b border-[#EEDDD2] pb-3.5 transition-all duration-700 ease-out ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <span className="text-[10px] sm:text-xs font-sans-clean uppercase font-extrabold tracking-widest text-[#111111]">
          {metrics.headerTag}
        </span>
        <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight mt-1">
          {metrics.title}
        </h2>
      </div>

      {/* Main Grid: Responsive Horizontal Span */}
      <div 
        className={`w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 xl:gap-16 items-center my-auto py-4 sm:py-6 transition-all duration-700 delay-100 ease-out ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        {/* Left Column: 3 Core Pillars */}
        <div className="lg:col-span-5 space-y-3 sm:space-y-4 text-left">
          {metrics.pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-white/90 p-4 sm:p-5 rounded-2xl border border-[#EFE1D7] shadow-sm hover:shadow-md transition-all group hover:-translate-y-0.5"
            >
              <span className="text-[10px] font-sans-clean font-extrabold tracking-widest text-[#8E323F] uppercase block mb-1">
                Standard 0{idx + 1}
              </span>
              <h3 className="font-sans-clean font-extrabold text-xs sm:text-sm text-[#2C2325] tracking-wide uppercase group-hover:text-[#8E323F] transition-colors">
                {pillar.title}
              </h3>
              <p className="font-sans-clean text-xs text-[#615250] mt-1 font-semibold leading-relaxed uppercase">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: Code Quality & GitHub Dashboard Card */}
        <div className="lg:col-span-7 bg-white p-5 sm:p-8 rounded-3xl border border-[#EADBD1] shadow-2xl text-left">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F2E5DC] pb-3.5 mb-4 sm:mb-5">
            <div>
              <span className="text-[10px] font-sans-clean uppercase font-bold tracking-wider text-[#7A6A68]">
                Engineering Insights
              </span>
              <h4 className="font-sans-clean font-extrabold text-base sm:text-xl text-[#2C2325]">
                {dashboard.headline}
              </h4>
            </div>
            <div className="flex items-center space-x-1.5 text-xs font-sans-clean font-bold text-[#8E323F] bg-[#FAF0EA] px-3 py-1 rounded-full">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{dashboard.badge || 'Active Contributor'}</span>
            </div>
          </div>

          {/* 4 Metrics Highlight Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-6">
            {(dashboard.breakdown || []).slice(0, 4).map((st, idx) => (
              <div key={idx} className="bg-[#FAF4F0] p-3 rounded-2xl border border-[#F0E2D8] text-center">
                <span className="font-sans-clean font-black text-base sm:text-xl text-[#8E323F] block">
                  {st.value}
                </span>
                <span className="text-[10px] sm:text-[11px] font-sans-clean font-bold text-[#6B5A57] uppercase tracking-wider block mt-0.5">
                  {st.label}
                </span>
              </div>
            ))}
          </div>

          {/* Performance & Quality Breakdown */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between text-xs font-sans-clean">
              <span className="font-bold text-[#2C2325]">Component Modularization & Clean Hierarchy</span>
              <span className="font-extrabold text-[#8E323F]">98%</span>
            </div>
            <div className="w-full bg-[#FAF0EA] h-2 rounded-full overflow-hidden">
              <div className="bg-[#8E323F] h-full rounded-full w-[98%]"></div>
            </div>

            <div className="flex items-center justify-between text-xs font-sans-clean pt-1">
              <span className="font-bold text-[#2C2325]">Responsive Cross-Device Precision</span>
              <span className="font-extrabold text-[#8E323F]">100%</span>
            </div>
            <div className="w-full bg-[#FAF0EA] h-2 rounded-full overflow-hidden">
              <div className="bg-[#8E323F] h-full rounded-full w-[100%]"></div>
            </div>

            <div className="flex items-center justify-between text-xs font-sans-clean pt-1">
              <span className="font-bold text-[#2C2325]">Git Version Control Discipline</span>
              <span className="font-extrabold text-[#8E323F]">95%</span>
            </div>
            <div className="w-full bg-[#FAF0EA] h-2 rounded-full overflow-hidden">
              <div className="bg-[#8E323F] h-full rounded-full w-[95%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div 
        className={`w-full border-t border-[#EEDDD2] pt-2.5 text-[10px] sm:text-[11px] text-[#8E7672] flex flex-col sm:flex-row justify-between items-center gap-1 transition-all duration-700 delay-200 ease-out ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <span>Strict Development Standards</span>
        <span>Mobile-First • Accessible • Maintainable Architecture</span>
      </div>
    </div>
  );
}

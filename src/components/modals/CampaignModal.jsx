import React from 'react';
import { X, CheckCircle2, TrendingUp, Sparkles, Target, Layers } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function CampaignModal({ isOpen, onClose, onOpenContact }) {
  if (!isOpen) return null;
  const { campaign } = portfolioData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#E8D9CF] shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#FAF0EA] hover:bg-[#F2DFD4] text-[#8E323F] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Header */}
        <div className="relative bg-gradient-to-r from-[#FAF2ED] to-[#FCEEE9] p-6 sm:p-8 rounded-t-3xl border-b border-[#F0E2D8]">
          <span className="text-[10px] sm:text-xs font-sans-clean font-bold tracking-widest text-[#8E323F] uppercase bg-white px-3 py-1 rounded-full shadow-xs">
            ✦ Full Project Case Study
          </span>
          <h3 className="font-serif-luxury text-2xl sm:text-4xl font-extrabold text-[#8E323F] mt-3">
            {campaign.client}
          </h3>
          <p className="font-sans-clean text-xs sm:text-sm font-semibold text-[#A13E50] mt-1">
            {campaign.tagline}
          </p>

          {/* Results Badge Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5">
            <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl text-center border border-[#F0E0D6]">
              <span className="text-[10px] text-[#7A6A68] uppercase font-bold block">Organic Reach</span>
              <span className="font-sans-clean font-extrabold text-sm sm:text-base text-[#8E323F]">{campaign.results.reach}</span>
            </div>
            <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl text-center border border-[#F0E0D6]">
              <span className="text-[10px] text-[#7A6A68] uppercase font-bold block">Engagement</span>
              <span className="font-sans-clean font-extrabold text-sm sm:text-base text-[#8E323F]">{campaign.results.engagementRate}</span>
            </div>
            <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl text-center border border-[#F0E0D6]">
              <span className="text-[10px] text-[#7A6A68] uppercase font-bold block">Waitlist Adds</span>
              <span className="font-sans-clean font-extrabold text-sm sm:text-base text-[#8E323F]">{campaign.results.waitlistSignups}</span>
            </div>
            <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl text-center border border-[#F0E0D6]">
              <span className="text-[10px] text-[#7A6A68] uppercase font-bold block">Saves Rate</span>
              <span className="font-sans-clean font-extrabold text-sm sm:text-base text-[#8E323F]">{campaign.results.savesRate}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 font-sans-clean text-xs sm:text-sm text-[#4A3E3D]">
          {/* Overview & Objective */}
          <div>
            <h4 className="font-sans-clean font-extrabold text-xs uppercase tracking-wider text-[#8E323F] mb-1.5 flex items-center">
              <Target className="w-4 h-4 mr-1.5 text-[#8E323F]" />
              Project Architecture & Scope
            </h4>
            <p className="text-[#5C4D4B] leading-relaxed">
              {campaign.objective}
            </p>
          </div>

          {/* Strategy Pillars */}
          <div>
            <h4 className="font-sans-clean font-extrabold text-xs uppercase tracking-wider text-[#8E323F] mb-3 flex items-center">
              <Sparkles className="w-4 h-4 mr-1.5 text-[#8E323F]" />
              Engineering Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {campaign.pillars.map((pillar, idx) => (
                <div key={idx} className="bg-[#FAF4F0] p-3.5 rounded-xl border border-[#F0E2D8]">
                  <span className="font-bold text-xs text-[#2C2325] block mb-1">
                    0{idx + 1}. {pillar.name}
                  </span>
                  <p className="text-[11px] sm:text-xs text-[#6B5A57] leading-normal">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="font-sans-clean font-extrabold text-xs uppercase tracking-wider text-[#8E323F] mb-2.5 flex items-center">
              <Layers className="w-4 h-4 mr-1.5 text-[#8E323F]" />
              Key Deliverables
            </h4>
            <div className="space-y-2">
              {campaign.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2 bg-white p-2.5 rounded-lg border border-[#F2E5DC]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-[#2C2325]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="pt-4 border-t border-[#F0E2D8] flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-[#7A6A68]">
              Interested in clean React architecture and scalable web development?
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#8E323F] hover:bg-[#752632] text-white font-bold rounded-xl shadow-md transition-all cursor-pointer text-xs uppercase tracking-wider"
            >
              Get In Touch →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

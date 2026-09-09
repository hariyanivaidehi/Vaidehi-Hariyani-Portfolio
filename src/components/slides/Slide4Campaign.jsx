import React from 'react';
import { Sparkles, ExternalLink, Eye } from "lucide-react";
import { GithubIcon as Github } from "../BrandIcons";
import { portfolioData } from '../../data/portfolioData';

export default function Slide4Campaign({ onOpenCampaign }) {
  const { campaign } = portfolioData;

  return (
    <div className="w-full h-full min-h-screen flex flex-col justify-between pt-20 pb-10 px-6 sm:px-12 lg:px-20 xl:px-28">
      {/* Slide Header */}
      <div className="w-full text-center sm:text-left border-b border-[#EEDDD2] pb-3.5">
        <span className="text-[10px] sm:text-xs font-sans-clean uppercase font-bold tracking-widest text-[#8E323F]">
          Featured Case Study
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#8E323F] tracking-tight mt-1">
          {campaign.title}
        </h2>
        <p className="font-sans-clean text-xs sm:text-base font-bold text-[#A13E50] tracking-widest uppercase mt-0.5">
          {campaign.client}
        </p>
      </div>

      {/* Centerpiece: Realistic MacBook Mockup for WebShop */}
      <div className="w-full my-auto py-6 flex flex-col items-center justify-center">
        <div 
          onClick={onOpenCampaign}
          className="group relative cursor-pointer w-full max-w-4xl transition-transform duration-500 hover:scale-[1.01]"
        >
          {/* Screen Bezel */}
          <div className="bg-[#1C1C1E] p-3 sm:p-5 rounded-t-3xl shadow-2xl border-2 border-[#3A3A3C]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#3A3A3C] mx-auto mb-2.5"></div>
            
            <div className="relative aspect-[16/9] bg-[#ECE5DE] rounded-xl overflow-hidden border border-black/20">
              <img 
                src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1400&q=80" 
                alt="WebShop E-Commerce Storefront" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30 flex flex-col justify-between p-6 sm:p-10 text-white text-left">
                <div className="flex items-center justify-between">
                  <span className="font-sans-clean text-xs uppercase tracking-widest bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full font-bold">
                    WebShop App
                  </span>
                  <span className="text-xs sm:text-sm font-sans-clean flex items-center text-[#FFDDE2] font-semibold">
                    <Sparkles className="w-4 h-4 mr-1.5" /> React.js & Tailwind CSS
                  </span>
                </div>

                <div>
                  <h4 className="font-serif-luxury text-2xl sm:text-4xl font-black tracking-tight text-white">
                    Modern E-Commerce Storefront
                  </h4>
                  <p className="text-xs sm:text-base text-white/90 font-sans-clean mt-1.5">
                    Dynamic Filtering • Interactive Cart Drawer • Responsive Checkout UI
                  </p>
                </div>
              </div>

              {/* Hover Callout Overlay */}
              <div className="absolute inset-0 bg-[#8E323F]/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-[#8E323F] px-7 py-3.5 rounded-full font-sans-clean font-bold text-xs sm:text-sm shadow-2xl flex items-center space-x-2 animate-bounce-gentle">
                  <Eye className="w-4 h-4" />
                  <span>Click to view full project breakdown</span>
                </span>
              </div>
            </div>
          </div>

          {/* Laptop Base */}
          <div className="relative bg-[#C5C5C7] h-4 sm:h-5 rounded-b-2xl shadow-lg border-t border-[#8E8E93] mx-auto w-[104%] -left-[2%]">
            <div className="w-20 h-1.5 bg-[#8E8E93] rounded-full mx-auto mt-0.5"></div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-6 flex items-center space-x-5">
          <button
            onClick={onOpenCampaign}
            className="inline-flex items-center space-x-2 text-sm sm:text-base font-sans-clean font-bold text-[#8E323F] hover:text-[#A13E50] underline decoration-[#8E323F] decoration-2 underline-offset-4 cursor-pointer transition-colors"
          >
            <span>"{campaign.callout}"</span>
            <ExternalLink className="w-4 h-4" />
          </button>

          <a
            href={campaign.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs font-sans-clean font-bold bg-white text-[#2C2325] px-3.5 py-1.5 rounded-lg border border-[#E8D5CA] hover:border-[#8E323F] transition-all shadow-xs"
          >
            <Github className="w-3.5 h-3.5 text-[#8E323F]" />
            <span>GitHub Repo</span>
          </a>
        </div>
      </div>

      <div className="w-full border-t border-[#EEDDD2] pt-3 text-[11px] text-[#8E7672] flex justify-between">
        <span>Featured Case Study</span>
        <span>WebShop E-Commerce Platform</span>
      </div>
    </div>
  );
}

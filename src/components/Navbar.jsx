import React, { useState } from 'react';
import { Send, Menu, X } from "lucide-react";
import { GithubIcon as Github } from "./BrandIcons";
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ 
  activeIndex, 
  onNavigate, 
  onOpenContact, 
  onOpenResume 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { name: "About", idx: 0 },
    { name: "Services", idx: 1 },
    { name: "Tech Stack", idx: 2 },
    { name: "Experience", idx: 3 },
    { name: "Projects", idx: 4 },
    { name: "Connect", idx: 5 },
  ];

  const handleNavClick = (idx) => {
    onNavigate(idx);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#FBF8F5]/92 backdrop-blur-md border-b border-[#EEDDD2] transition-all">
      <div className="w-full px-3 sm:px-8 lg:px-16 xl:px-24 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand Logo with GitHub Avatar Thumbnail */}
        <div 
          onClick={() => handleNavClick(0)}
          className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group"
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#8E323F] shadow-sm group-hover:scale-105 transition-transform flex-shrink-0">
            <img 
              src="/github_avatar.png" 
              alt="Vaidehi Hariyani" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <span className="font-serif-luxury font-extrabold text-[11px] sm:text-base text-[#8E323F] tracking-wide block leading-none">
              VAIDEHI HARIYANI
            </span>
            <span className="text-[7.5px] sm:text-[10px] uppercase font-sans-clean font-bold tracking-widest text-[#7A6A68]">
              Frontend Developer
            </span>
          </div>
        </div>

        {/* Section Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3">
          {sections.map((sec) => {
            const isActive = activeIndex === sec.idx;
            return (
              <button
                key={sec.idx}
                onClick={() => handleNavClick(sec.idx)}
                className={`relative px-3 py-2 text-xs font-sans-clean transition-all cursor-pointer font-bold ${
                  isActive
                    ? 'text-[#8E323F]'
                    : 'text-[#5C4F4E] hover:text-[#8E323F]'
                }`}
              >
                <span>{sec.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-[#8E323F] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons & Mobile Hamburger */}
        <div className="flex items-center space-x-1.5 sm:space-x-2.5">
          <a
            href={portfolioData.brand.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white hover:bg-[#FAF2ED] text-[#8E323F] text-[10px] sm:text-xs font-sans-clean font-extrabold tracking-wider transition-all border border-[#8E323F]/30 hover:border-[#8E323F] cursor-pointer flex items-center space-x-1 shadow-2xs"
            title="View & Download CV (Google Drive)"
          >
            <span>CV</span>
          </a>

          <a
            href={portfolioData.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 rounded-full bg-white text-[#2C2325] hover:text-[#8E323F] border border-[#E8D9CF] shadow-xs transition-colors cursor-pointer"
            title="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>

          <button
            onClick={onOpenContact}
            className="px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#8E323F] hover:bg-[#752632] text-white text-[10px] sm:text-xs font-sans-clean font-extrabold tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center space-x-1 sm:space-x-1.5"
          >
            <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="hidden sm:inline">Contact</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-xl text-[#8E323F] bg-[#FAF0EA] hover:bg-[#F2DFD4] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF8F5] border-b border-[#EEDDD2] px-4 py-4 shadow-xl animate-fade-in">
          <div className="grid grid-cols-2 gap-2">
            {sections.map((sec) => {
              const isActive = activeIndex === sec.idx;
              return (
                <button
                  key={sec.idx}
                  onClick={() => handleNavClick(sec.idx)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-sans-clean font-bold transition-all text-left flex items-center justify-between border ${
                    isActive
                      ? 'bg-[#FAF0EA] text-[#8E323F] border-[#8E323F]/30 font-extrabold shadow-xs'
                      : 'bg-white text-[#5C4F4E] hover:text-[#8E323F] hover:bg-[#FAF0EA] border-[#EFE1D7]'
                  }`}
                >
                  <span>{sec.name}</span>
                  {isActive && <span className="text-[10px] text-[#8E323F]">●</span>}
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-3 border-t border-[#EEDDD2] flex items-center justify-between text-xs font-sans-clean">
            <span className="text-[#7A6A68]">Quick Actions:</span>
            <div className="flex items-center space-x-2">
              <a
                href={portfolioData.brand.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-1.5 bg-white hover:bg-[#FAF2ED] text-[#8E323F] border border-[#8E323F]/40 rounded-full font-bold text-xs cursor-pointer shadow-xs"
              >
                CV (Drive)
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="px-4 py-1.5 bg-[#8E323F] hover:bg-[#752632] text-white rounded-full font-bold text-xs cursor-pointer shadow-xs"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

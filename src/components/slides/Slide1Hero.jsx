import React, { useState, useEffect } from 'react';
import { Send, ArrowRight, FileText } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Slide1Hero({ isActive = true, onOpenContact, onOpenResume }) {
  const { hero } = portfolioData;
  const fullName = hero.mainHeadline || "Vaidehi Hariyani";

  // Smooth fluid reveal animation for "Vaidehi Hariyani"
  const [isNameRevealed, setIsNameRevealed] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setIsNameRevealed(true), 120);
      return () => clearTimeout(timer);
    } else {
      setIsNameRevealed(false);
    }
  }, [isActive]);

  // Dynamic Typewriter for Roles in large fonts:
  const roles = [
    "Frontend Developer..",
    "Aspiring MERN Stack Developer..",
    "Learner..."
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const currentRoleString = roles[roleIndex];
    let timer;

    if (!isDeleting) {
      if (displayedRole.length < currentRoleString.length) {
        timer = setTimeout(() => {
          setDisplayedRole(currentRoleString.slice(0, displayedRole.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (displayedRole.length > 0) {
        timer = setTimeout(() => {
          setDisplayedRole(currentRoleString.slice(0, displayedRole.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [isActive, displayedRole, isDeleting, roleIndex]);

  const topTags = [
    "REACT.JS SPECIALIST",
    "REDUX STATE MANAGEMENT",
    "REST API INTEGRATION",
    "MERN STACK DEVELOPMENT"
  ];

  return (
    <div className="w-full min-h-[100dvh] h-[100dvh] sm:min-h-screen flex flex-col justify-between pt-16 sm:pt-24 pb-3 sm:pb-12 px-3.5 sm:px-8 lg:px-16 xl:px-24 overflow-hidden">
      {/* Top category tags (Centered below Navbar - No stars) */}
      <div 
        className={`w-full flex items-center justify-center flex-wrap gap-y-1 gap-x-2 sm:gap-x-5 text-center text-[9px] sm:text-xs font-sans-clean font-bold tracking-wider sm:tracking-widest text-[#8E323F] uppercase border-b border-[#EEDDD2] pb-2 sm:pb-3 transition-all duration-700 ease-out ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        {topTags.map((tag, idx) => (
          <React.Fragment key={idx}>
            <span className="hover:text-[#A13E50] transition-colors">{tag}</span>
            {idx < topTags.length - 1 && <span className="text-[#C8B2A7] mx-0.5 sm:mx-1">•</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Main Hero Content - Editorial Luxury Layout with Fluid Reveal */}
      <div 
        className={`w-full max-w-5xl mx-auto flex flex-col justify-center items-center text-center my-auto py-1 sm:py-6 transition-all duration-700 delay-100 ease-out ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        {/* Name: "Vaidehi Hariyani" in original luxury maroon with smooth fluid write-in animation */}
        <div className="space-y-1 sm:space-y-3">
          <h1 className="font-serif-contrast font-bold text-3xl xs:text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-[#8E323F] tracking-tight leading-[1.05] select-none flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-7">
            {fullName.split(" ").map((word, wIdx) => {
              const wordStartIndex = wIdx === 0 ? 0 : fullName.split(" ")[0].length + 1;
              return (
                <span key={wIdx} className="inline-flex whitespace-nowrap">
                  {word.split("").map((char, cIdx) => {
                    const charIndex = wordStartIndex + cIdx;
                    return (
                      <span
                        key={cIdx}
                        style={{
                          transitionDelay: `${charIndex * 45}ms`,
                          transitionDuration: '750ms',
                          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                          willChange: 'transform, opacity, filter',
                          filter: isNameRevealed ? 'blur(0px)' : 'blur(4px)',
                          transform: isNameRevealed ? 'translateY(0px) scale(1)' : 'translateY(24px) scale(0.95)',
                          opacity: isNameRevealed ? 1 : 0,
                        }}
                        className="inline-block"
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </h1>

          {/* Dynamic Typewriter Role in BLACK FONT (Cleanly responsive) */}
          <div className="min-h-[2.25rem] sm:min-h-[3.5rem] flex items-center justify-center">
            <div className="inline-flex items-center text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#111111] tracking-wide">
              <span>{displayedRole}</span>
              <span className="inline-block w-1 sm:w-1.5 h-[1.1em] bg-[#111111] ml-1.5 sm:ml-2 animate-typewriter-cursor align-middle rounded-full" />
            </div>
          </div>
        </div>

        {/* Introduction Bio Narrative - Clean Luxury Typography with Dedicated Top & Bottom Spacing */}
        <div className="w-full max-w-2xl sm:max-w-3xl mx-auto my-4 xs:my-5 sm:my-8 px-3 sm:px-6 text-center">
          <div className="space-y-2.5 sm:space-y-3.5 font-sans-clean text-[13px] sm:text-[15px] md:text-base leading-relaxed sm:leading-loose text-[#2C2325]">
            <p>
              A passionate <span className="font-bold text-[#8E323F]">BCA graduate</span> whose coding journey began with fundamental C programs and has now evolved into modern web development. Currently proficient in <span className="font-bold text-[#8E323F]">React.js</span> and <span className="font-bold text-[#8E323F]">Tailwind CSS</span> with hands-on internship experience in building responsive user interfaces.
            </p>
            <p className="text-[#5C4F4E]">
              Highly motivated and actively learning <span className="font-bold text-[#2C2325]">Node.js, Express.js, and MongoDB</span> with a clear ambition to grow into a skilled <span className="font-bold text-[#8E323F]">MERN Stack Developer</span> who can build complete full-stack applications and make a real impact.
            </p>
          </div>
        </div>

        {/* Action Row: Explore Work, View CV, Get in Touch */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1 sm:pt-2 w-full">
          <a
            href="#section-4"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('section-4')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-luxury-shine group px-4 sm:px-7 py-2.5 sm:py-3.5 bg-[#8E323F] hover:bg-[#752632] text-white rounded-full font-sans-clean font-extrabold text-[11px] sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center space-x-1.5 sm:space-x-2 active:scale-95"
          >
            <span>Explore Featured Work</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>

          <a
            href={portfolioData.brand.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-shine px-4 sm:px-7 py-2.5 sm:py-3.5 bg-white hover:bg-[#FAF2ED] text-[#8E323F] rounded-full font-sans-clean font-bold text-[11px] sm:text-sm uppercase tracking-wider border border-[#8E323F]/30 hover:border-[#8E323F] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center space-x-1.5 sm:space-x-2 active:scale-95"
          >
            <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>View & Download CV</span>
          </a>
        </div>
      </div>

      {/* Slide Footer */}
      <div 
        className={`w-full border-t border-[#EEDDD2] mt-auto pt-2 pb-1 sm:pb-0 text-[10px] sm:text-[11px] font-medium text-[#6B5450] flex flex-col sm:flex-row justify-between items-center gap-1 transition-all duration-700 delay-200 ease-out ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <span className="font-semibold text-[#5A4340]">Vaidehi Hariyani • Frontend Portfolio</span>
        <span>Scroll to explore technical projects & capabilities</span>
      </div>
    </div>
  );
}

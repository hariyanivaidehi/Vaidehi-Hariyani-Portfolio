import React from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Share2, HelpCircle } from 'lucide-react';

export default function SlideController({ 
  currentSlide, 
  totalSlides, 
  onPrev, 
  onNext, 
  isFullscreen, 
  toggleFullscreen 
}) {
  const progressPercent = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <aside aria-label="Slide Controls" className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[90vw]">
      <div className="flex items-center space-x-2 bg-[#2C2325]/90 text-white backdrop-blur-md px-4 py-2 rounded-full shadow-2xl border border-white/10 font-sans-clean">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className={`p-1.5 rounded-full transition-all cursor-pointer ${
            currentSlide === 0
              ? 'opacity-30 cursor-not-allowed'
              : 'hover:bg-white/20 active:scale-95'
          }`}
          title="Previous Slide (Left Arrow)"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Counter */}
        <div className="px-2 text-xs font-medium tracking-wider flex items-center space-x-2">
          <span>{currentSlide + 1}</span>
          <span className="text-white/40">/</span>
          <span className="text-white/70">{totalSlides}</span>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className={`p-1.5 rounded-full transition-all cursor-pointer ${
            currentSlide === totalSlides - 1
              ? 'opacity-30 cursor-not-allowed'
              : 'hover:bg-white/20 active:scale-95 text-[#F5B5BF]'
          }`}
          title="Next Slide (Right Arrow or Space)"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="h-4 w-px bg-white/20 mx-1"></div>

        {/* Progress Bar mini */}
        <div className="hidden sm:block w-20 h-1.5 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#E8A5AF] transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Keyboard hint */}
        <span className="hidden md:inline-block text-[10px] text-white/50 pl-1">
          Use ← → keys
        </span>
      </div>
    </aside>
  );
}

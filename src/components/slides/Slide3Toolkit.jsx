import React from 'react';
import { Code2, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { 
  ReactLogo, 
  TailwindLogo, 
  JavaScriptLogo, 
  Html5Logo, 
  Css3Logo, 
  NodejsLogo, 
  ExpressLogo, 
  MongodbLogo, 
  ReduxLogo, 
  GitLogo, 
  ViteLogo, 
  PostmanLogo, 
  FigmaLogo, 
  PythonLogo, 
  PhpLogo, 
  BootstrapLogo
} from '../TechLogos';

export default function Slide3Toolkit({ isActive = true }) {
  const { toolkit } = portfolioData;

  const getToolIcon = (iconName) => {
    switch (iconName) {
      case "React": return <ReactLogo className="w-5 h-5" />;
      case "Tailwind": return <TailwindLogo className="w-5 h-5" />;
      case "JavaScript": return <JavaScriptLogo className="w-5 h-5" />;
      case "HTML5": return <Html5Logo className="w-5 h-5" />;
      case "Nodejs": return <NodejsLogo className="w-5 h-5" />;
      case "Express": return <ExpressLogo className="w-5 h-5" />;
      case "MongoDB": return <MongodbLogo className="w-5 h-5" />;
      case "Redux": return <ReduxLogo className="w-5 h-5" />;
      case "Git": return <GitLogo className="w-5 h-5" />;
      case "Vite": return <ViteLogo className="w-5 h-5" />;
      case "Postman": return <PostmanLogo className="w-5 h-5" />;
      case "Figma": return <FigmaLogo className="w-5 h-5" />;
      case "Python": return <PythonLogo className="w-5 h-5" />;
      case "PHP": return <PhpLogo className="w-5 h-5" />;
      case "Bootstrap": return <BootstrapLogo className="w-5 h-5" />;
      case "Antigravity": return <Sparkles className="w-5 h-5 text-[#8E323F]" />;
      default: return <Code2 className="w-5 h-5 text-[#8E323F]" />;
    }
  };

  return (
    <div className="w-full h-auto sm:min-h-screen flex flex-col justify-start sm:justify-between pt-16 sm:pt-24 pb-6 sm:pb-12 px-3.5 sm:px-8 lg:px-16 xl:px-24 overflow-x-hidden">
      {/* Slide Header */}
      <div 
        className={`w-full text-center sm:text-left border-b border-[#EEDDD2] pb-2 sm:pb-3.5 transition-all duration-700 ease-out ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <span className="text-[9px] sm:text-xs font-sans-clean uppercase font-bold tracking-widest text-[#111111]">
          Stack & Technologies
        </span>
        <h2 className="font-serif-luxury text-xl sm:text-3xl lg:text-5xl font-extrabold text-[#111111] tracking-tight mt-0.5 sm:mt-1">
          {toolkit.title}
        </h2>
      </div>

      {/* Main Grid: Responsive Horizontal Span */}
      <div 
        className={`w-full grid grid-cols-1 lg:grid-cols-12 gap-2.5 sm:gap-4 lg:gap-12 xl:gap-16 items-center my-3 sm:my-auto py-1 sm:py-6 transition-all duration-700 delay-100 ease-out ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        {/* Left: GitHub Girl Developer Illustration */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center mb-0.5 sm:mb-0">
          <div className="absolute w-28 h-28 sm:w-80 sm:h-80 rounded-full bg-[#FCECE6] blur-2xl -z-10 animate-pulse-glow-soft"></div>

          <div className="relative z-10 w-24 h-24 xs:w-28 xs:h-28 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 aspect-square flex items-center justify-center group animate-float-slow">
            <div className="relative w-full h-full flex items-center justify-center p-1 sm:p-2">
              <img 
                src="/developer.svg" 
                alt="Vaidehi Hariyani Developer Girl" 
                className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-108 transition-transform duration-700 ease-out" 
              />
            </div>
          </div>

          <p className="font-serif-luxury italic text-[9px] sm:text-sm text-[#8E323F] font-bold mt-0.5 sm:mt-2 bg-white/95 px-3 py-0.5 sm:px-5 sm:py-1.5 rounded-full shadow-xs border border-[#F0E2D8] flex items-center justify-center">
            <span>Crafting Scalable Frontends with Clean Code</span>
          </p>
        </div>

        {/* Right: Tech Stack Grid with Real SVG Logos */}
        <div className="lg:col-span-6 bg-white p-3 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#F0E4DC] shadow-xl text-left card-hover-lift">
          <div className="flex flex-wrap items-center justify-between gap-1.5 border-b border-[#F2E5DC] pb-2 sm:pb-3.5 mb-2.5 sm:mb-5">
            <div>
              <h3 className="font-sans-clean font-extrabold text-xs sm:text-base tracking-wider text-[#8E323F] uppercase">
                {toolkit.badge}
              </h3>
              <p className="text-[10px] sm:text-xs text-[#7A6A68] mt-0.5">Core Languages, Frameworks & Developer Tools</p>
            </div>
            <span className="text-[9px] sm:text-xs font-sans-clean font-bold bg-[#FAF0EA] text-[#8E323F] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#F0E0D5]">
              12+ Technologies
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5 sm:gap-3.5 font-sans-clean text-xs sm:text-sm">
            {toolkit.tools.map((t, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between p-1.5 sm:p-3 rounded-lg sm:rounded-xl bg-[#FAF4F0] hover:bg-[#F5ECE5] hover:scale-[1.02] hover:shadow-2xs transition-all duration-300 border border-[#F0E2D8]/80 group cursor-default"
              >
                <div className="flex items-center space-x-1.5 sm:space-x-3 overflow-hidden">
                  <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-white shadow-xs flex items-center justify-center p-1 sm:p-1.5 group-hover:scale-110 transition-transform flex-shrink-0">
                    {getToolIcon(t.icon)}
                  </div>
                  <div className="truncate">
                    <span className="font-bold text-[#2C2325] block text-[10px] sm:text-sm leading-tight truncate">
                      {t.name}
                    </span>
                    <span className="text-[8.5px] text-[#7A6A68] hidden xs:block truncate">
                      {t.category}
                    </span>
                  </div>
                </div>
                <span className="text-[7.5px] sm:text-[10px] font-bold px-1 sm:px-2 py-0.5 rounded-full bg-white text-[#8E323F] border border-[#EBDCD2] flex-shrink-0 ml-1">
                  {t.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div 
        className={`w-full border-t border-[#EEDDD2] mt-6 sm:mt-0 pt-2.5 text-[9px] sm:text-[11px] text-[#8E7672] flex flex-col sm:flex-row justify-between items-center gap-1 transition-all duration-700 delay-200 ease-out ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <span>Production Tech Stack & Frameworks</span>
        <span>Version Control • REST APIs • Responsive Systems</span>
      </div>
    </div>
  );
}

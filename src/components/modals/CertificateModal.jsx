import React from 'react';
import { X, Award, CheckCircle2, Building2, Calendar, Download } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function CertificateModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const { internship } = portfolioData.experience;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto no-scrollbar border border-[#E8D9CF] shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#111111] flex items-center justify-center transition-colors cursor-pointer shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#FAF2ED] to-[#FCEEE9] p-4 sm:p-7 rounded-t-3xl border-b border-[#F0E2D8]">
          <div className="flex items-center space-x-2">
            <span className="text-[9px] sm:text-[10px] font-sans-clean font-bold tracking-widest text-[#111111] uppercase bg-white px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-xs">
              Verified Industry Credential
            </span>
            <span className="text-[11px] sm:text-xs text-[#7A6A68] font-semibold">
              Abox Agency
            </span>
          </div>
          <h3 className="font-serif-luxury text-xl sm:text-3xl font-extrabold text-[#111111] mt-1.5 sm:mt-2">
            {internship.certificateTitle}
          </h3>
          <p className="font-sans-clean text-[11px] sm:text-sm text-[#7A6A68] mt-0.5 sm:mt-1">
            Awarded to <strong className="text-[#8E323F]">Vaidehi Hariyani</strong> for outstanding performance during the 6-Month Frontend Development Internship.
          </p>
        </div>

        {/* Certificate High-Res Viewer */}
        <div className="p-3 sm:p-6 bg-[#261E20] flex items-center justify-center">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 max-w-3xl w-full bg-white">
            <img 
              src={internship.certificateImage} 
              alt="Abox Agency Frontend Internship Certificate" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Certificate Details Body */}
        <div className="p-4 sm:p-8 space-y-3.5 sm:space-y-4 font-sans-clean text-xs sm:text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
            <div className="bg-[#FAF4F0] p-2.5 sm:p-3.5 rounded-xl border border-[#F0E2D8]">
              <span className="text-[9px] sm:text-[10px] uppercase font-bold text-[#7A6A68] block">Organization</span>
              <span className="font-bold text-xs sm:text-sm text-[#2C2325]">{internship.company}</span>
            </div>
            <div className="bg-[#FAF4F0] p-2.5 sm:p-3.5 rounded-xl border border-[#F0E2D8]">
              <span className="text-[9px] sm:text-[10px] uppercase font-bold text-[#7A6A68] block">Domain / Role</span>
              <span className="font-bold text-xs sm:text-sm text-[#2C2325]">{internship.role}</span>
            </div>
            <div className="bg-[#FAF4F0] p-2.5 sm:p-3.5 rounded-xl border border-[#F0E2D8]">
              <span className="text-[9px] sm:text-[10px] uppercase font-bold text-[#7A6A68] block">Duration</span>
              <span className="font-bold text-xs sm:text-sm text-[#2C2325]">{internship.duration}</span>
            </div>
          </div>

          <p className="text-xs text-[#5C4F4E] leading-relaxed">
            {internship.description}
          </p>

          <div className="pt-4 border-t border-[#F0E2D8] flex items-center justify-between">
            <span className="text-[11px] text-[#7A6A68]">
              Candidate: Vaidehi Hariyani • Surat, Gujarat
            </span>
            <a
              href={internship.certificateImage}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="px-4 py-2 bg-[#8E323F] hover:bg-[#752632] text-white rounded-xl font-bold text-xs flex items-center space-x-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Certificate</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

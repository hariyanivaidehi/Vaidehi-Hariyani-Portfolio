import React, { useState } from 'react';
import { Mail, Copy, Check, Send, CheckCircle2, MapPin } from "lucide-react";
import { GithubIcon as Github } from "../BrandIcons";
import { LinkedinIcon } from '../BrandIcons';
import { portfolioData } from '../../data/portfolioData';

export default function Slide8Connect({ isActive = true, onOpenContact }) {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full h-auto sm:min-h-screen flex flex-col justify-start sm:justify-between pt-16 sm:pt-24 pb-6 sm:pb-12 px-3.5 sm:px-8 lg:px-16 xl:px-24 overflow-x-hidden">
      {/* Slide Header */}
      <div 
        className={`w-full text-center sm:text-left border-b border-[#EEDDD2] pb-2.5 sm:pb-3.5 transition-all duration-700 ease-out ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-6xl font-extrabold text-[#111111] tracking-tight">
          {contact.title}
        </h2>
        <p className="font-sans-clean text-[11px] sm:text-base font-semibold text-[#8E323F] tracking-wide mt-0.5 sm:mt-1">
          {contact.subtitle}
        </p>
      </div>

      {/* Main Grid: Responsive Horizontal Span */}
      <div 
        className={`w-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 xl:gap-16 items-center my-3 sm:my-auto py-2 sm:py-6 transition-all duration-700 delay-100 ease-out ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        {/* Left: Editorial Collaboration Checklist Magazine Card */}
        <div className="lg:col-span-6 bg-white p-3.5 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#EADBD1] shadow-xl text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#FAF0EA] text-[#8E323F] text-[9px] sm:text-xs font-sans-clean font-extrabold px-3 sm:px-5 py-1 sm:py-2 rounded-bl-2xl">
            Open for Opportunities
          </div>

          <h3 className="font-serif-luxury text-base sm:text-3xl font-bold text-[#8E323F] mb-1 sm:mb-1.5">
            {contact.cardTitle}
          </h3>
          <p className="font-sans-clean text-[11px] sm:text-base text-[#7A6A68] mb-3 sm:mb-6">
            {contact.cardTagline}
          </p>

          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-8 font-sans-clean text-[11px] sm:text-sm text-[#4A3E3D]">
            {contact.checklist.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2.5 sm:space-x-3">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8E323F] flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#FAF2ED] p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-[#E8D7CD] flex items-center space-x-2 sm:space-x-2.5">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8E323F]" />
            <span className="font-sans-clean text-[11px] sm:text-sm text-[#2C2325] font-semibold">
              {contact.location}
            </span>
          </div>
        </div>

        {/* Right: Direct Channels & Actions Card */}
        <div className="lg:col-span-6 space-y-3 sm:space-y-5 text-left">
          <div className="bg-white p-3.5 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#EADBD1] shadow-xl">
            <span className="text-[9px] font-sans-clean uppercase font-bold tracking-wider text-[#7A6A68] block mb-0.5 sm:mb-1">
              Direct Contact
            </span>
            <h4 className="font-serif-luxury text-base sm:text-2xl font-bold text-[#2C2325] mb-1 sm:mb-2">
              Ready to collaborate or discuss a project?
            </h4>
            <p className="font-sans-clean text-[11px] sm:text-sm text-[#5C4F4E] mb-3 sm:mb-5 leading-snug sm:leading-relaxed">
              Feel free to send a direct message, connect on LinkedIn, or explore open-source code repositories directly on GitHub.
            </p>

            {/* Copyable Email Box */}
            <div className="bg-[#FAF4F0] p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-[#EFE1D7] flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3.5 sm:mb-5">
              <div className="flex items-center space-x-2 sm:space-x-2.5 overflow-hidden">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8E323F] flex-shrink-0" />
                <span className="font-sans-clean font-bold text-[11px] sm:text-sm text-[#2C2325] truncate">
                  {contact.email}
                </span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl bg-white text-[#111111] hover:bg-[#111111] hover:text-white border border-[#E8D9CF] text-[10px] sm:text-xs font-sans-clean font-bold transition-all shadow-xs flex items-center justify-center space-x-1 cursor-pointer self-end sm:self-auto"
              >
                {copied ? <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Launch Inquiries Modal Button */}
            <button
              onClick={onOpenContact}
              className="w-full py-2.5 sm:py-4 bg-[#8E323F] hover:bg-[#752632] text-white rounded-xl sm:rounded-2xl font-sans-clean font-extrabold text-[11px] sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center space-x-2 active:scale-98 mb-2.5 sm:mb-4"
            >
              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Send a Direct Message</span>
            </button>

            {/* Social Links Row */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-0.5 sm:pt-1">
              <a
                href={contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 sm:py-3 px-2.5 sm:px-3 rounded-xl sm:rounded-2xl border border-[#E8D9CF] bg-white hover:bg-[#FAF2ED] text-[#2C2325] hover:text-[#8E323F] transition-all flex items-center justify-center space-x-1.5 sm:space-x-2 shadow-xs cursor-pointer"
              >
                <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="font-sans-clean font-bold text-[11px] sm:text-xs">GitHub</span>
              </a>

              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 sm:py-3 px-2.5 sm:px-3 rounded-xl sm:rounded-2xl border border-[#E8D9CF] bg-white hover:bg-[#FAF2ED] text-[#2C2325] hover:text-[#8E323F] transition-all flex items-center justify-center space-x-1.5 sm:space-x-2 shadow-xs cursor-pointer"
              >
                <LinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0077B5]" />
                <span className="font-sans-clean font-bold text-[11px] sm:text-xs">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div 
        className={`w-full border-t border-[#EEDDD2] mt-6 sm:mt-0 pt-2.5 text-[10px] sm:text-[11px] text-[#8E7672] flex justify-center items-center transition-all duration-700 delay-200 ease-out ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <span>© 2026 Vaidehi Hariyani • All Rights Reserved</span>
      </div>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Slide1Hero from './components/slides/Slide1Hero';
import Slide2Services from './components/slides/Slide2Services';
import Slide3Toolkit from './components/slides/Slide3Toolkit';
import Slide4Experience from './components/slides/Slide4Experience';
import Slide6ContentGrids from './components/slides/Slide6ContentGrids';
import Slide8Connect from './components/slides/Slide8Connect';
import CertificateModal from './components/modals/CertificateModal';
import ProjectDetailModal from './components/modals/ProjectDetailModal';
import ContactModal from './components/modals/ContactModal';
import ResumeModal from './components/modals/ResumeModal';

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -400, y: -400 });

  // Ambient Mouse Glow Tracker for Luxury Aesthetic
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerRef = useRef(null);
  const totalSections = 6;

  const scrollToSection = (index) => {
    const el = document.getElementById(`section-${index}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === 'Space') {
        if (activeSection < totalSections - 1) {
          e.preventDefault();
          scrollToSection(activeSection + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (activeSection > 0) {
          e.preventDefault();
          scrollToSection(activeSection - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  // Scroll & Intersection Observer to track active section
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPos = container.scrollTop;
      const height = container.clientHeight;
      const index = Math.round(scrollPos / height);
      if (index >= 0 && index < totalSections && index !== activeSection) {
        setActiveSection(index);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            const id = entry.target.id;
            const idx = parseInt(id.replace('section-', ''), 10);
            if (!isNaN(idx)) {
              setActiveSection(idx);
            }
          }
        });
      },
      {
        root: container,
        threshold: [0.2, 0.5]
      }
    );

    for (let i = 0; i < totalSections; i++) {
      const el = document.getElementById(`section-${i}`);
      if (el) observer.observe(el);
    }

    return () => {
      container.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [activeSection]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#FBF8F5] text-[#2C2728] flex flex-col relative font-sans-clean">
      {/* Ambient Mouse Follower Light Aura (Ultra Aesthetic Luxury Glow) */}
      <div 
        className="pointer-events-none fixed w-[550px] h-[550px] rounded-full bg-gradient-to-r from-[#8E323F]/8 via-[#B76E79]/6 to-transparent blur-3xl transition-transform duration-150 ease-out z-10 hidden md:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Top Navbar */}
      <Navbar
        activeIndex={activeSection}
        onNavigate={scrollToSection}
        onOpenContact={() => setIsContactModalOpen(true)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Fullscreen Snap Scroll Container */}
      <div 
        ref={containerRef}
        className="snap-container snap-y snap-proximity md:snap-y-proximity h-screen w-full overflow-y-scroll scroll-smooth no-scrollbar"
      >
        {/* Section 0: Hero & Introduction (Full screen on mobile so no other section is visible) */}
        <section id="section-0" className="snap-section min-h-[100dvh] h-[100dvh] sm:min-h-screen w-full flex flex-col items-center justify-between relative bg-gradient-to-b from-[#FBF8F5] to-[#F8F2EC]">
          <Slide1Hero 
            isActive={activeSection === 0}
            onOpenContact={() => setIsContactModalOpen(true)}
            onOpenResume={() => setIsResumeModalOpen(true)} 
          />
        </section>

        {/* Section 1: Services */}
        <section id="section-1" className="snap-section h-auto sm:min-h-screen w-full flex flex-col items-center justify-start sm:justify-center relative bg-[#FDFBF8]">
          <Slide2Services 
            isActive={activeSection === 1}
          />
        </section>

        {/* Section 2: Tech Stack & Toolkit */}
        <section id="section-2" className="snap-section h-auto sm:min-h-screen w-full flex flex-col items-center justify-start sm:justify-center relative bg-gradient-to-b from-[#FDFBF8] to-[#FAF4EE]">
          <Slide3Toolkit 
            isActive={activeSection === 2}
          />
        </section>

        {/* Section 3: Experience & Internship Certificate */}
        <section id="section-3" className="snap-section h-auto sm:min-h-screen w-full flex flex-col items-center justify-start sm:justify-center relative bg-[#FAF2EC]">
          <Slide4Experience 
            isActive={activeSection === 3}
            onOpenCertificate={() => setIsCertificateModalOpen(true)} 
          />
        </section>

        {/* Section 4: Projects Showcase - Sticky Stacked Cards */}
        <section id="section-4" className="w-full relative bg-gradient-to-b from-[#FDFBF8] via-[#FAF3EC] to-[#F8F0E8]">
          <Slide6ContentGrids 
            isActive={activeSection === 4}
            onSelectProject={(project) => setSelectedProject(project)} 
          />
        </section>

        {/* Section 5: Let's Connect */}
        <section id="section-5" className="snap-section h-auto sm:min-h-screen w-full flex flex-col items-center justify-start sm:justify-center relative bg-gradient-to-b from-[#FAF4EE] to-[#FBF8F5]">
          <Slide8Connect 
            isActive={activeSection === 5}
            onOpenContact={() => setIsContactModalOpen(true)}
            onOpenResume={() => setIsResumeModalOpen(true)} 
          />
        </section>
      </div>

      {/* Interactive Modals */}
      <CertificateModal
        isOpen={isCertificateModalOpen}
        onClose={() => setIsCertificateModalOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

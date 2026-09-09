import React from 'react';
import Slide1Hero from './slides/Slide1Hero';
import Slide2Services from './slides/Slide2Services';
import Slide3Toolkit from './slides/Slide3Toolkit';
import Slide4Campaign from './slides/Slide4Campaign';
import Slide6ContentGrids from './slides/Slide6ContentGrids';
import Slide7Platforms from './slides/Slide7Platforms';
import Slide8Connect from './slides/Slide8Connect';

export default function ContinuousView({ 
  onOpenCampaign, 
  onSelectPost, 
  onOpenContact 
}) {
  return (
    <div className="max-w-5xl mx-auto space-y-16 sm:space-y-24 py-10 px-4 sm:px-6">
      {/* Slide 1 */}
      <section id="hero" className="bg-white/70 p-6 sm:p-10 rounded-3xl border border-[#EEDDD2] shadow-sm">
        <Slide1Hero onNext={() => {}} onOpenContact={onOpenContact} />
      </section>

      {/* Slide 2 */}
      <section id="services" className="bg-white/70 p-6 sm:p-10 rounded-3xl border border-[#EEDDD2] shadow-sm">
        <Slide2Services onNext={() => {}} />
      </section>

      {/* Slide 3 */}
      <section id="toolkit" className="bg-white/70 p-6 sm:p-10 rounded-3xl border border-[#EEDDD2] shadow-sm">
        <Slide3Toolkit onNext={() => {}} />
      </section>

      {/* Slide 4 */}
      <section id="campaign" className="bg-white/70 p-6 sm:p-10 rounded-3xl border border-[#EEDDD2] shadow-sm">
        <Slide4Campaign onNext={() => {}} onOpenCampaign={onOpenCampaign} />
      </section>


      {/* Slide 6 */}
      <section id="content" className="bg-white/70 p-6 sm:p-10 rounded-3xl border border-[#EEDDD2] shadow-sm">
        <Slide6ContentGrids onNext={() => {}} onSelectPost={onSelectPost} />
      </section>

      {/* Slide 7 */}
      <section id="platforms" className="bg-white/70 p-6 sm:p-10 rounded-3xl border border-[#EEDDD2] shadow-sm">
        <Slide7Platforms onNext={() => {}} />
      </section>

      {/* Slide 8 */}
      <section id="connect" className="bg-white/70 p-6 sm:p-10 rounded-3xl border border-[#EEDDD2] shadow-sm">
        <Slide8Connect onOpenContact={onOpenContact} />
      </section>
    </div>
  );
}

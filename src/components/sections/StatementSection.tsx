import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export const StatementSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#070707] text-cream font-hn px-6 py-20 sm:px-12 sm:py-28 lg:px-20 lg:py-36 flex flex-col justify-between border-t border-cream/15 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-cream/[0.02] blur-[140px] pointer-events-none" />

      {/* Top Header Eyebrow / Minimal Classification */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-10 border-b border-cream/15">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-cream animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#e2e0d8] font-medium">
            01 // Statement &amp; Philosophy
          </span>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-cream/60">
          Rishikesh Sahu &mdash; Full-Stack &amp; Autonomous AI
        </div>
      </div>

      {/* Core Highlight: Big, Bold Editorial Statement Headline */}
      <div className="my-14 sm:my-20 max-w-5xl">
        <span className="block text-[11px] uppercase tracking-[0.28em] text-cream/50 mb-6 font-mono">
          Core Thesis
        </span>
        <ScrollReveal
          baseOpacity={0.12}
          enableBlur={true}
          baseRotation={2}
          blurStrength={6}
          textClassName="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[-0.03em] leading-[1.12] text-cream"
        >
          Architecting resilient web platforms and intelligent autonomous agents.
        </ScrollReveal>

        {/* Refined Secondary Narrative: Compact, Breathable, Scaled Down */}
        <p className="mt-8 sm:mt-10 text-base sm:text-lg lg:text-xl text-cream/70 font-light leading-[1.75] max-w-2xl">
          From practical academic ecosystems like <span className="text-cream font-normal">BNN CS Study Hub</span> to voice-enabled desktop intelligence like <span className="text-cream font-normal">JARVIS</span>, I focus on turning ambitious technical ideas into reliable, high-speed production software.
        </p>
      </div>

      {/* Bottom Minimalist Pillars: Compact, Sleek, No Clutter */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-cream/15">
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-cream/45">
            01 / Architecture
          </span>
          <p className="text-xs sm:text-sm text-cream/90 font-light uppercase tracking-wider">
            Full-Stack Platforms
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-cream/45">
            02 / Intelligence
          </span>
          <p className="text-xs sm:text-sm text-cream/90 font-light uppercase tracking-wider">
            Autonomous AI Agents
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-cream/45">
            03 / Performance
          </span>
          <p className="text-xs sm:text-sm text-cream/90 font-light uppercase tracking-wider">
            Zero-Bloat Engineering
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-cream/45">
            04 / Origin
          </span>
          <p className="text-xs sm:text-sm text-cream/90 font-light uppercase tracking-wider">
            Mumbai, India
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatementSection;

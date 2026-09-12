import React from 'react';
import FlowArt, { FlowSection } from '../ui/story-scroll';
import { Github, ArrowUpRight, Layers, Terminal, Cpu } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <div className="w-full bg-[#F5F0E8] text-black font-hn">
      <FlowArt aria-label="Featured Engineering Projects">
        {/* ========================================================================= */}
        {/* Project 01: BNN CS Study Hub (Flagship Academic Platform) */}
        {/* ========================================================================= */}
        <FlowSection
          aria-label="BNN CS Study Hub"
          style={{ backgroundColor: '#F5F0E8', color: '#0a0a0a' }}
        >
          {/* Top Classification Eyebrow */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/15 pb-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-black/70">
                01 // Flagship Platform &mdash; Academic Hub
              </p>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-black/40">
              Live &bull; FYCS &amp; SYCS Ecosystem
            </span>
          </div>

          {/* Main Content Layout */}
          <div className="my-auto py-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Refined Editorial Typography */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest bg-blue-600/10 text-blue-700 border border-blue-600/20 font-semibold">
                    Production Platform
                  </span>
                  <span className="text-[11px] font-mono text-black/40">2024 &ndash; 2025</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-[4.2rem] font-black uppercase tracking-tight leading-[0.98] font-hn text-black">
                  BNN CS
                  <br />
                  <span className="text-black/40">STUDY</span> HUB
                </h2>

                <p className="mt-5 max-w-xl text-sm sm:text-base text-black/75 leading-relaxed font-normal">
                  A centralized academic web ecosystem engineered for Computer Science undergraduates at BNN College.
                  Replaces chaotic group chats with verified syllabus tracking, practical code archives, past papers, and intelligent study resources.
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap items-center gap-2 mt-6">
                  {['React 19', 'Tailwind CSS', 'Firebase Firestore', 'Vercel CDN', 'Google Auth'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-black/[0.04] border border-black/10 text-black/80 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <a
                    href="https://github.com/rishiuttamsahu-lang/FYCS-Study-Hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white font-semibold text-xs uppercase tracking-wider hover:bg-black/85 hover:scale-105 transition-all shadow-md"
                  >
                    <span>Source Repository</span>
                    <Github className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://github.com/rishiuttamsahu-lang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/20 text-black text-xs uppercase tracking-wider hover:border-black hover:bg-black/5 transition-all font-medium"
                  >
                    <span>Architecture Overview</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Project Image */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="w-full rounded-2xl overflow-hidden border border-black/10 shadow-md bg-white">
                  <img
                    src="/assets/projects/bnn-study-hub.png"
                    alt="BNN CS Study Hub Interface"
                    className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Highlights Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-black/15 text-xs text-black/65">
            <div>
              <span className="text-black font-semibold">01 / Curated Syllabus:</span> Semester-wise verified theory and practical lab manuals.
            </div>
            <div>
              <span className="text-black font-semibold">02 / Google Auth &amp; Cloud:</span> Firebase Firestore data layer with authenticated access.
            </div>
            <div>
              <span className="text-black font-semibold">03 / Continuous Delivery:</span> Automated Vercel build pipelines with instant edge caching.
            </div>
          </div>
        </FlowSection>

        {/* ========================================================================= */}
        {/* Project 02: JARVIS — Autonomous AI Desktop Agent */}
        {/* ========================================================================= */}
        <FlowSection
          aria-label="JARVIS AI Agent"
          style={{ backgroundColor: '#ECE7DF', color: '#0a0a0a' }}
        >
          {/* Top Classification Eyebrow */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/15 pb-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-black/70">
                02 // Flagship Systems &mdash; Autonomous AI &amp; Voice
              </p>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-black/40">
              R&amp;D Project &bull; Voice Engine
            </span>
          </div>

          {/* Main Content Layout */}
          <div className="my-auto py-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Refined Editorial Typography */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest bg-emerald-600/10 text-emerald-800 border border-emerald-600/20 font-semibold">
                    Autonomous Intelligence
                  </span>
                  <span className="text-[11px] font-mono text-black/40">AI &bull; Voice &bull; Robotics</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-[4.2rem] font-black uppercase tracking-tight leading-[0.98] font-hn text-black">
                  JARVIS
                  <br />
                  <span className="text-emerald-800/70">DESKTOP</span> AGENT
                </h2>

                <p className="mt-5 max-w-xl text-sm sm:text-base text-black/75 leading-relaxed font-normal">
                  A multimodal autonomous desktop intelligence uniting conversational voice interaction with local operating system control.
                  Executes voice commands, controls background system processes, and runs automated browser research with Playwright.
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap items-center gap-2 mt-6">
                  {['Python 3', 'Playwright', 'LLM Multimodal Loop', 'Speech Synthesis', 'Process API'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-black/[0.04] border border-black/10 text-black/80 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <a
                    href="https://github.com/rishiuttamsahu-lang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white font-semibold text-xs uppercase tracking-wider hover:bg-black/85 hover:scale-105 transition-all shadow-md"
                  >
                    <span>System Architecture</span>
                    <Terminal className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://github.com/rishiuttamsahu-lang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/20 text-black text-xs uppercase tracking-wider hover:border-black hover:bg-black/5 transition-all font-medium"
                  >
                    <span>Pipeline Documentation</span>
                    <Cpu className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Project Image */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="w-full rounded-2xl overflow-hidden border border-black/10 shadow-md bg-white">
                  <img
                    src="/assets/projects/jarvis.png"
                    alt="JARVIS AI Agent Interface"
                    className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-cover object-center hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Highlights Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-black/15 text-xs text-black/65">
            <div>
              <span className="text-black font-semibold">01 / Voice Synthesis:</span> Low-latency speech recognition and realistic voice feedback synthesis.
            </div>
            <div>
              <span className="text-black font-semibold">02 / Browser Automation:</span> Headless navigation, document scraping, and automated form fills.
            </div>
            <div>
              <span className="text-black font-semibold">03 / Process Control:</span> System command execution, file indexing, and diagnostic monitoring.
            </div>
          </div>
        </FlowSection>

        {/* ========================================================================= */}
        {/* Project 03: Siyaram Mitra Mandal Digital Portal */}
        {/* ========================================================================= */}
        <FlowSection
          aria-label="Siyaram Mitra Mandal"
          style={{ backgroundColor: '#F7F3ED', color: '#0a0a0a' }}
        >
          {/* Top Classification Eyebrow */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/15 pb-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-amber-600 animate-pulse" />
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-black/70">
                03 // Community Systems &mdash; Digital Infrastructure
              </p>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-black/40">
              Community Portal &bull; Events
            </span>
          </div>

          {/* Main Content Layout */}
          <div className="my-auto py-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Refined Editorial Typography */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest bg-amber-600/10 text-amber-800 border border-amber-600/20 font-semibold">
                    Community Portal
                  </span>
                  <span className="text-[11px] font-mono text-black/40">Public Web Experience</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-[4.2rem] font-black uppercase tracking-tight leading-[0.98] font-hn text-black">
                  SIYARAM
                  <br />
                  <span className="text-amber-800/70">MANDAL</span> PORTAL
                </h2>

                <p className="mt-5 max-w-xl text-sm sm:text-base text-black/75 leading-relaxed font-normal">
                  Digital communications and cultural coordination hub for Siyaram Mitra Mandal.
                  Delivers festival schedules, committee announcements, digital donation receipts, and a zero-latency responsive media gallery.
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap items-center gap-2 mt-6">
                  {['React', 'Tailwind CSS', 'Cloudflare Workers', 'Image Optimization', 'Mobile-First'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-black/[0.04] border border-black/10 text-black/80 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <a
                    href="https://github.com/rishiuttamsahu-lang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white font-semibold text-xs uppercase tracking-wider hover:bg-black/85 hover:scale-105 transition-all shadow-md"
                  >
                    <span>Community Project</span>
                    <Github className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://github.com/rishiuttamsahu-lang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/20 text-black text-xs uppercase tracking-wider hover:border-black hover:bg-black/5 transition-all font-medium"
                  >
                    <span>Gallery System</span>
                    <Layers className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Project Image */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="w-full rounded-2xl overflow-hidden border border-black/10 shadow-md bg-white">
                  <img
                    src="/assets/projects/siyaram-mandal.png"
                    alt="Siyaram Mitra Mandal Web Experience"
                    className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Highlights Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-black/15 text-xs text-black/65">
            <div>
              <span className="text-black font-semibold">01 / Event Notices:</span> Real-time schedule broadcasting for community celebrations.
            </div>
            <div>
              <span className="text-black font-semibold">02 / Media Showcase:</span> High-fidelity photo gallery with client-side responsive image compression.
            </div>
            <div>
              <span className="text-black font-semibold">03 / Mobile Speed:</span> Zero barrier accessibility optimized for low-bandwidth mobile networks.
            </div>
          </div>
        </FlowSection>

        {/* ========================================================================= */}
        {/* Project 04: ChromaGrab & Developer Tools Suite */}
        {/* ========================================================================= */}
        <FlowSection
          aria-label="Developer Utilities"
          style={{ backgroundColor: '#F2EDE4', color: '#0a0a0a' }}
        >
          {/* Top Classification Eyebrow */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/15 pb-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-purple-600 animate-pulse" />
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-black/70">
                04 // Developer Primitives &mdash; Client-Side Utilities
              </p>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-black/40">
              WebAssembly &bull; Canvas API
            </span>
          </div>

          {/* Main Content Layout */}
          <div className="my-auto py-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Refined Editorial Typography */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest bg-purple-600/10 text-purple-800 border border-purple-600/20 font-semibold">
                    High-Speed Utilities
                  </span>
                  <span className="text-[11px] font-mono text-black/40">Zero-Server Uploads</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-[4.2rem] font-black uppercase tracking-tight leading-[0.98] font-hn text-black">
                  CHROMAGRAB
                  <br />
                  <span className="text-purple-800/70">&amp; DEV TOOLS</span>
                </h2>

                <p className="mt-5 max-w-xl text-sm sm:text-base text-black/75 leading-relaxed font-normal">
                  A high-throughput suite of client-side developer utilities running locally inside the browser.
                  Zero server data collection, zero network latency, and instant execution powered by the Canvas API and WebAssembly.
                </p>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <a
                    href="https://github.com/rishiuttamsahu-lang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white font-semibold text-xs uppercase tracking-wider hover:bg-black/85 hover:scale-105 transition-all shadow-md"
                  >
                    <span>View Tools on GitHub</span>
                    <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Project Image */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="w-full rounded-2xl overflow-hidden border border-black/10 shadow-md bg-white">
                  <img
                    src="/assets/projects/chromagrab.png"
                    alt="ChromaGrab Developer Tools Interface"
                    className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Highlights Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-black/15 text-xs text-black/65">
            <div>
              <span className="text-black font-semibold">01 / Privacy First:</span> 100% of data processing executes locally in browser memory.
            </div>
            <div>
              <span className="text-black font-semibold">02 / Zero Latency:</span> Web Workers and Canvas pipelines provide instantaneous output.
            </div>
            <div>
              <span className="text-black font-semibold">03 / Open Source:</span> Complete source code available publicly on GitHub.
            </div>
          </div>
        </FlowSection>
      </FlowArt>
    </div>
  );
};

export default ProjectsSection;

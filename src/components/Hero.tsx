import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const navItems = ['Story', 'Jobs', 'Message'];
const socialItems = ['Instagram', 'TikTok', 'YouTube'];

export const Hero: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Lock document body scroll while mobile drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  return (
    <section id="hero-main" className="relative h-[100dvh] w-full overflow-hidden bg-black text-cream font-hn select-none">
      {/* 1. Background Image (full-bleed, behind everything, z: default) */}
      <img
        src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85"
        alt=""
        className="absolute inset-0 h-full w-full object-cover anim-fade-in"
      />

      {/* 2. Marquee Name (z-10, scrolling Rishikesh — Sahu) */}
      <div
        className="absolute inset-x-0 top-[16vh] sm:top-[14vh] z-10 overflow-hidden anim-fade-up pointer-events-none"
        style={{ animationDelay: '500ms' }}
      >
        <div className="marquee flex w-max whitespace-nowrap font-hn text-[14vh] sm:text-[23vh] leading-none text-cream tracking-tight">
          <span className="pr-[6vw]">
            Rishikesh &mdash; Sahu&nbsp;
          </span>
          <span className="pr-[6vw]">
            Rishikesh &mdash; Sahu&nbsp;
          </span>
        </div>
      </div>

      {/* 3. Horizontal Cream Rule (z-10, above footer) */}
      <div
        className="absolute inset-x-6 sm:inset-x-10 bottom-[5.5rem] sm:bottom-28 z-10 h-0.5 bg-cream anim-line"
        style={{ animationDelay: '1200ms' }}
      />

      {/* 4. Desktop Footer (sm:z-10) / Mobile Footer (z-30) */}
      <footer className="absolute inset-x-0 bottom-0 z-30 sm:z-10 flex items-end justify-between px-6 pb-5 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-hn">
        {/* Footer Left: 3 lines */}
        <div
          className="flex flex-col text-left anim-fade-up text-cream"
          style={{ animationDelay: '1400ms' }}
        >
          <span>Visuals Composer</span>
          <span>Digital Crafter</span>
          <span>Obsessed by The Office</span>
        </div>

        {/* Footer Right: right-aligned */}
        <div
          className="flex flex-col text-right anim-fade-up text-cream"
          style={{ animationDelay: '1550ms' }}
        >
          <span>A homage to</span>
          <span>Marcus Holloway</span>
        </div>
      </footer>

      {/* 5. Front Portrait (cutout overlay, above marquee, pointer-events none, z-20) */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none z-20">
        <img
          src="/assets/projects/Profile.png"
          alt="Portrait"
          className="h-[70vh] sm:h-[78vh] lg:h-[83vh] w-auto max-w-none object-contain object-bottom anim-rise-in"
          style={{ animationDelay: '300ms' }}
        />
      </div>

      {/* 6. Header (z-30) */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        {/* Top-Left Brand Logo */}
        <a
          href="#"
          className="font-hn text-lg tracking-wide text-cream transition-opacity duration-300 hover:opacity-60 anim-fade-up"
          style={{ animationDelay: '800ms' }}
        >
          Rishi
        </a>

        {/* Right Cluster (Desktop: hidden sm:flex) */}
        <div className="hidden sm:flex items-start gap-16 lg:gap-24">
          {/* Year */}
          <span
            className="text-sm text-cream font-hn anim-fade-up"
            style={{ animationDelay: '900ms' }}
          >
            2025
          </span>

          {/* Nav Links Column */}
          <nav className="flex flex-col gap-0.5 text-sm font-hn">
            {navItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className="text-cream transition-opacity duration-300 hover:opacity-60 anim-fade-up"
                style={{ animationDelay: `${1000 + index * 80}ms` }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social Links Column */}
          <div className="flex flex-col gap-0.5 text-sm font-hn">
            {socialItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className="text-cream transition-opacity duration-300 hover:opacity-60 anim-fade-up"
                style={{ animationDelay: `${1150 + index * 80}ms` }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Hamburger Trigger (Mobile only: sm:hidden, z-50) */}
        <button
          type="button"
          aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="sm:hidden relative z-50 flex items-center justify-center h-10 w-10 focus:outline-none anim-fade-up"
          style={{ animationDelay: '900ms' }}
        >
          <div className="flex flex-col justify-between h-4 w-6">
            <span
              className={`h-[2px] w-full bg-cream rounded-full transition-transform duration-500 ease-drawer-ease ${isDrawerOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
            />
            <span
              className={`h-[2px] w-full bg-cream rounded-full transition-opacity duration-300 ${isDrawerOpen ? 'opacity-0' : 'opacity-100'
                }`}
            />
            <span
              className={`h-[2px] w-full bg-cream rounded-full transition-transform duration-500 ease-drawer-ease ${isDrawerOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
            />
          </div>
        </button>
      </header>

      {/* 7. Mobile Drawer (z-40 overlay + panel, sm:hidden) */}
      <div
        className={`sm:hidden fixed inset-0 z-40 transition-opacity duration-500 ${isDrawerOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsDrawerOpen(false)}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Slide-in Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-[#141414] px-8 py-10 flex flex-col justify-between transition-transform duration-[600ms] ease-drawer-ease ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Close Button: Lucide X (size 26, strokeWidth 1.5) */}
          <button
            type="button"
            aria-label="Close drawer"
            onClick={() => setIsDrawerOpen(false)}
            className={`absolute right-6 top-6 z-50 text-cream p-1 transition-all duration-300 focus:outline-none ${isDrawerOpen
                ? 'rotate-0 opacity-100 delay-[300ms]'
                : 'rotate-90 opacity-0 pointer-events-none'
              }`}
          >
            <X size={26} strokeWidth={1.5} />
          </button>

          {/* Top section: Site Index + Nav Links */}
          <div className="pt-12">
            <span
              className={`block text-xs uppercase tracking-[0.2em] text-cream/50 mb-8 transition-all duration-500 ${isDrawerOpen
                  ? 'translate-y-0 opacity-100 delay-[250ms]'
                  : 'translate-y-4 opacity-0'
                }`}
            >
              Site Index
            </span>
            <div className="flex flex-col gap-5">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setIsDrawerOpen(false)}
                  className={`text-4xl text-cream font-hn transition-all duration-500 hover:opacity-60 ${isDrawerOpen
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-6 opacity-0'
                    }`}
                  style={{
                    transitionDelay: isDrawerOpen ? `${300 + index * 80}ms` : '0ms',
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom section: Find Me + Socials */}
          <div className="pb-4">
            <span
              className={`block text-xs uppercase tracking-[0.2em] text-cream/50 mb-4 transition-all duration-500 ${isDrawerOpen
                  ? 'translate-y-0 opacity-100 delay-[500ms]'
                  : 'translate-y-4 opacity-0'
                }`}
            >
              Find Me
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {socialItems.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setIsDrawerOpen(false)}
                  className={`text-sm text-cream font-hn transition-all duration-500 hover:opacity-60 ${isDrawerOpen
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-4 opacity-0'
                    }`}
                  style={{
                    transitionDelay: isDrawerOpen ? `${550 + index * 60}ms` : '0ms',
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

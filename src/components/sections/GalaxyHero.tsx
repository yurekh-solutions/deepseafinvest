'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Phone } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';

export function GalaxyHero() {
  return (
    <section className='flex flex-col items-center bg-[#020617] bg-[url("/image.png")] bg-cover bg-center bg-no-repeat text-white pb-40 px-4 relative min-h-screen'>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none" />

      {/* Navbar integrated into hero */}
      <div className="relative z-10 w-full">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-2 px-4 py-2 mt-16 md:mt-24 rounded-full bg-red-500/15 backdrop-blur-md border border-red-500/30">
          <Sparkles className="w-3.5 h-3.5 text-red-400" />
          <span className="text-xs text-red-100 font-medium tracking-wide">
            QUALIFIED & UNBIASED WEALTH MANAGEMENT
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl text-center max-w-4xl mt-8 text-white font-semibold leading-tight">
          Wealth Management{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
            Simplified
          </span>
        </h1>

        <p className="text-sm md:text-base text-white/70 text-center max-w-xl mt-6 leading-relaxed">
          Mumbai-Based Trusted Wealth Management since 2011. Expert guidance for
          High Yield Bonds, Mutual Funds, Insurance, Equity & Alternative
          Investments.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-10">
          <Link
            href="/contact"
            className="bg-red-500/20 backdrop-blur-md border border-red-500/40 hover:border-red-500/70 hover:bg-red-500/30 flex items-center gap-3 px-3 py-2 pr-6 rounded-full transition-all cursor-pointer group"
          >
            <div className="size-10 rounded-full border-2 border-red-500/60 group-hover:border-red-500 flex items-center justify-center bg-red-500/15 transition-colors">
              <Sparkles className="w-4 h-4 text-red-400" />
            </div>
            <span className="text-slate-100 text-sm font-medium">
              Explore Services
            </span>
          </Link>

          <a
            href="tel:+919136242706"
            className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 hover:bg-white/15 flex items-center gap-3 px-3 py-2 pr-6 rounded-full transition-all cursor-pointer group"
          >
            <div className="size-10 rounded-full border-2 border-white/30 group-hover:border-white/50 flex items-center justify-center bg-white/10 transition-colors">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <span className="text-slate-100 text-sm font-medium">
              Book a Free Call
            </span>
          </a>
        </div>

        <p className="mt-16 md:mt-20 text-xs md:text-sm text-white/50 tracking-wider text-center px-4">
          TRUSTED BY 500+ CLIENTS ACROSS INDIA & SINGAPORE:
        </p>

        <div className="flex flex-row items-center justify-center gap-3 md:gap-8 mx-auto mt-4 flex-wrap px-4 max-w-sm sm:max-w-none">
          {[
            'Marine Engineers',
            'Business Owners',
            'IT Professionals',
            'Doctors',
            'Pilots',
          ].map(role => (
            <div
              key={role}
              className="text-white/50 text-xs md:text-sm font-medium hover:text-white/70 transition-colors whitespace-nowrap"
            >
              {role}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

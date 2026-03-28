'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '13+', label: 'Years of Excellence' },
  { value: '₹100Cr+', label: 'Assets Managed' },
  { value: '2', label: 'Global Offices' },
];

const highlights = [
  'Qualified & Unbiased Advice',
  'SEBI Registered Advisors',
  'Multi-Asset Portfolio',
  'Transparent Operations',
  'Personalized Solutions',
  'Mumbai & Singapore Offices',
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-section-gradient" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-navy-700/30 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* ── LEFT: Content ── */}
          <div className="flex flex-col justify-center">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/15 backdrop-blur-sm border border-red-500/30 rounded-full mb-6 w-fit">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-sm font-semibold tracking-wide">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              On a mission to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                simplify wealth
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4 mb-10">
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                DEEPSEA FINVEST is a Mumbai-based Trusted Wealth Management
                Firm, part of the esteemed DEEPSEA Group founded in 2011. We
                deliver Qualified & Unbiased Wealth Management across High Yield
                Bonds, Mutual Funds, Insurance, Equity & Alternative
                Investments.
              </p>
              <p className="text-white/60 text-base leading-relaxed">
                We understand the unique financial challenges of Marine
                Engineers, NRIs, Doctors & Business Owners. With offices in
                Mumbai & Singapore, we serve a diverse global clientele with
                expert, personalised guidance across all financial asset
                classes.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-2 gap-2 mb-10">
              {highlights.map(item => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-white/75"
                >
                  <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats – big numbers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 mb-10">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`bg-[#0a1628]/80 backdrop-blur-sm p-5 ${i === 0 ? 'rounded-tl-2xl rounded-bl-2xl' : ''} ${i === stats.length - 1 ? 'rounded-tr-2xl rounded-br-2xl' : ''}`}
                >
                  <dd className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </dd>
                  <dt className="text-white/50 text-xs md:text-sm">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm border border-red-500/40 hover:border-red-500/70 hover:bg-red-500/30 px-7 py-3.5 rounded-full text-white font-semibold transition-all group w-fit"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Image mosaic ── */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[560px] lg:h-[640px]">
            {/* Large left image – spans 2 rows */}
            <div className="row-span-2 relative rounded-2xl overflow-hidden glass-card-elevated group">
              <Image
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop"
                alt="Financial Markets Trading Screen"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass-card px-4 py-2 rounded-xl">
                  <p className="text-white font-semibold text-sm">
                    High Yield Bonds
                  </p>
                  <p className="text-red-400 text-xs font-medium">
                    8–15% Market Yield
                  </p>
                </div>
              </div>
            </div>

            {/* Top-right image */}
            <div className="relative rounded-2xl overflow-hidden glass-card-elevated group">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
                alt="Analytics Dashboard Fintech"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 via-transparent to-transparent" />
            </div>

            {/* Bottom-right image */}
            <div className="relative rounded-2xl overflow-hidden glass-card-elevated group">
              <Image
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop"
                alt="Wealth Management Planning"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="glass-card px-3 py-2 rounded-xl">
                  <p className="text-white font-semibold text-xs">
                    SEBI Registered
                  </p>
                  <p className="text-white/50 text-xs">Qualified Advisors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

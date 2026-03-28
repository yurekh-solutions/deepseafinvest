'use client';

import React from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';

const services = [
  { label: 'Insurance', href: '/insurance/why-life-insurance' },
  { label: 'Fixed Income', href: '/fixed-income/fixed-income-products' },
  { label: 'Mutual Funds', href: '/mutual-funds/why-mutual-funds' },
  { label: 'Equity', href: '/equity' },
  { label: 'Alternates', href: '/alternates' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const mobileMenu = (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#0a1628',
      }}
      className="flex flex-col"
    >
      {/* Top bar - Logo left, Close right */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-2"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white p-1">
            <Image
              src="/logo.png"
              alt="DEEPSEA FINVEST"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-white font-bold text-base leading-tight">
              DEEP<span className="text-red-500">SEA</span>
            </div>
            <div className="text-red-500 font-semibold text-xs">FINVEST</div>
          </div>
        </Link>
        <button
          onClick={() => setMobileOpen(false)}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Nav Links + CTA */}
      <div className="px-4 py-4">
        {services.map(service => (
          <Link
            key={service.label}
            href={service.href}
            onClick={() => setMobileOpen(false)}
            className="block text-white/70 hover:text-white hover:bg-white/5 text-lg font-medium py-3 px-4 rounded-xl transition-all"
          >
            {service.label}
          </Link>
        ))}

        {/* CTA Button */}
        <a
          href="tel:+919136242706"
          onClick={() => setMobileOpen(false)}
          className="flex items-center justify-center gap-2 mt-4 py-3.5 rounded-full bg-red-500/20 border border-red-500/40 hover:bg-red-500/30 text-white font-semibold transition-all"
        >
          <Phone className="w-4 h-4 text-red-400" />
          Book a Free Call
        </a>
      </div>
    </div>
  );

  return (
    <>
      <nav className="flex items-center justify-between px-4 py-4 md:px-16 lg:px-24 xl:px-32 md:py-5 w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden bg-white p-1 shadow-lg shadow-black/20">
            <Image
              src="/logo.png"
              alt="DEEPSEA FINVEST - Mumbai Wealth Management"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="text-white font-bold text-base md:text-lg tracking-tight leading-tight">
              DEEP<span className="text-red-500">SEA</span>
            </div>
            <div className="text-red-500 font-semibold text-xs md:text-sm tracking-wide">
              FINVEST
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 px-6 lg:px-9 py-4">
          {services.map(service => (
            <Link
              key={service.label}
              href={service.href}
              className="text-white/90 hover:text-red-400 transition-colors font-medium text-sm"
            >
              {service.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="tel:+919136242706"
          className="bg-red-500/20 backdrop-blur-sm border border-red-500/30 hover:border-red-500/60 hover:bg-red-500/30 hidden md:flex items-center gap-3 px-2 py-1 pr-4 rounded-full transition-all cursor-pointer group"
        >
          <div className="size-10 rounded-full border-2 border-red-500/60 group-hover:border-red-500 flex items-center justify-center transition-colors bg-red-500/10">
            <Phone className="w-4 h-4 text-red-400" />
          </div>
          <span className="text-slate-100 text-sm font-medium">
            Book a call
          </span>
        </a>

        {/* Hamburger Button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden bg-red-500/20 backdrop-blur-sm hover:bg-red-500/30 text-white p-2.5 rounded-full transition border border-red-500/30"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </nav>

      {/* Mobile Menu via Portal - renders directly on body */}
      {mounted && mobileOpen && createPortal(mobileMenu, document.body)}
    </>
  );
}

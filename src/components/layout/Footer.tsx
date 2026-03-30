'use client';

import Link from 'next/link';
import Image from 'next/image';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const footerLinks = {
  services: [
    { label: 'Life Insurance', href: '/insurance/why-life-insurance' },
    { label: 'Fixed Income', href: '/fixed-income/fixed-income-products' },
    { label: 'Mutual Funds', href: '/mutual-funds/why-mutual-funds' },
    { label: 'Equity Investments', href: '/equity' },
    { label: 'Alternative Investments', href: '/alternates' },
  ],
  quickLinks: [
    { label: 'About Us', href: '/#about' },
    { label: 'Why Choose Us', href: '/#why-choose-us' },
    { label: 'Start Your Journey', href: '/start-your-journey' },
    { label: 'Financial Planning', href: '/start-financial-planning' },
    { label: 'Contact Us', href: '/contact' },
  ],
  calculators: [
    { label: 'SIP Calculator', href: '/mutual-funds/sip-calculator' },
    { label: 'Goal Calculator', href: '/mutual-funds/goal-calculator' },
    { label: 'Retirement Planner', href: '/mutual-funds/retirement-planner' },
    { label: 'FD Calculator', href: '/fixed-income/fd-calculator' },
    { label: 'Premium Calculator', href: '/insurance/premium-calculator' },
  ],
  legal: [
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-conditions' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', href: '#', label: 'LinkedIn' },
  { name: 'Twitter', href: '#', label: 'Twitter' },
  { name: 'Facebook', href: '#', label: 'Facebook' },
  { name: 'Instagram', href: '#', label: 'Instagram' },
];

export function Footer() {
  const whatsappNumber = SITE_CONFIG.phoneRaw;
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-navy-gradient" />
      <div className="absolute top-0 left-1/4 w-96 h-96 glass-orb-red opacity-20 animate-float" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 glass-orb opacity-10 animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 glass-orb opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CTA Section */}
        <GlassCard
          className="p-6 md:p-8 lg:p-12 mb-12 md:mb-16 text-center overflow-hidden relative"
          elevated
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10" />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
              Ready to Start Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Financial Journey?
              </span>
            </h2>
            <p className="text-white/70 text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
              Get in touch with us today and discover how we can help you
              achieve your financial goals with qualified and unbiased wealth
              management.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-red-500/20 backdrop-blur-sm border border-red-500/40 hover:border-red-500/70 hover:bg-red-500/30 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 transition-all"
              >
                Chat on WhatsApp
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`tel:+${SITE_CONFIG.phoneRaw}`}
                className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:bg-white/15 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="h-4 w-4 md:h-5 md:w-5" />
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </GlassCard>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white p-1 shadow-lg shadow-black/20">
                <Image
                  src="/logo.png"
                  alt="DEEPSEA FINVEST - Wealth Management Mumbai"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="flex items-baseline">
                  <span className="text-white font-bold text-2xl tracking-tight">
                    DEEP
                  </span>
                  <span className="text-accent-red font-bold text-2xl tracking-tight">
                    SEA
                  </span>
                </div>
                <div className="text-accent-red font-bold text-lg tracking-tight -mt-1">
                  FINVEST
                </div>
              </div>
            </Link>
            <p className="text-white/60 mb-6 max-w-sm leading-relaxed">
              Qualified & Unbiased Wealth Management across Various Financial
              Asset Classes. Mumbai-Based Trusted Wealth Management Firm since
              2011.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-glass-white flex items-center justify-center text-white/70 hover:text-white hover:bg-glass-white-light hover:scale-110 transition-all duration-200 text-sm font-semibold"
                >
                  {social.name.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
              <span className="w-1 h-6 bg-accent-red rounded-full mr-2" />
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
              <span className="w-1 h-6 bg-accent-red rounded-full mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Calculators */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
              <span className="w-1 h-6 bg-accent-red rounded-full mr-2" />
              Calculators
            </h3>
            <ul className="space-y-3">
              {footerLinks.calculators.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
              <span className="w-1 h-6 bg-accent-red rounded-full mr-2" />
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start text-white/60 hover:text-white transition-colors group"
                >
                  <Mail className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${SITE_CONFIG.phoneRaw}`}
                  className="flex items-start text-white/60 hover:text-white transition-colors group"
                >
                  <Phone className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start text-white/60">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    {SITE_CONFIG.address.company}
                    <br />
                    {SITE_CONFIG.address.line4}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glass-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} DEEPSEA FINVEST. All rights reserved.
              | Founded in 2011
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/50 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-glass-white rounded-lg">
            <p className="text-white/40 text-xs text-center leading-relaxed">
              <strong className="text-white/60">Disclaimer:</strong> Mutual fund
              investments are subject to market risks. Please read all scheme
              related documents carefully before investing. Past performance is
              not indicative of future returns.
            </p>
          </div>

          {/* Developer Credit */}
          <div className="mt-4 text-center">
            <p className="text-white/30 text-xs">
              Designed & Developed by{' '}
              <a
                href="https://yurekh.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors underline underline-offset-2"
              >
                YurekhSolutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

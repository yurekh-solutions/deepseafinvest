'use client';

import { ReactNode } from 'react';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { Navbar } from '@/components/layout/Navbar';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  showCta?: boolean;
  bgImage?: string;
}

export function PageLayout({ children, title, subtitle, showCta = true, bgImage }: PageLayoutProps) {
  const whatsappLink = `https://wa.me/919136242706`;
  
  return (
    <div className="min-h-screen bg-navy-gradient">
      {/* Navbar */}
      <div className="relative z-20 bg-gradient-to-b from-navy-900 to-transparent">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-28 overflow-hidden -mt-20 pt-28">
        {bgImage ? (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/75 via-[#0a1628]/65 to-[#0a1628]" />
          </>
        ) : (
          <div className="absolute inset-0 bg-hero-gradient" />
        )}
        <div className="absolute top-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>
    </div>
  );
}

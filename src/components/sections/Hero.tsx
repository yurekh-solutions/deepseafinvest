'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Play,
  TrendingUp,
  Shield,
  PiggyBank,
  BarChart3,
  Users,
  Building2,
} from 'lucide-react';

const stats = [
  { value: '500+', label: 'Happy Clients', icon: Users },
  { value: '13+', label: 'Years Experience', icon: Building2 },
  { value: '₹100Cr+', label: 'Assets Managed', icon: TrendingUp },
];

const services = [
  {
    icon: Shield,
    title: 'Insurance',
    description: 'Life & General Coverage',
    href: '/insurance/why-life-insurance',
    color: 'from-blue-500 to-blue-600',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop',
  },
  {
    icon: PiggyBank,
    title: 'Fixed Income',
    description: 'Bonds & FDs',
    href: '/fixed-income/fixed-income-products',
    color: 'from-green-500 to-green-600',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
  },
  {
    icon: TrendingUp,
    title: 'Mutual Funds',
    description: 'SIP & Lumpsum',
    href: '/mutual-funds/why-mutual-funds',
    color: 'from-purple-500 to-purple-600',
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
  },
  {
    icon: BarChart3,
    title: 'Equity',
    description: 'Stock Investments',
    href: '/equity',
    color: 'from-orange-500 to-orange-600',
    image:
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop',
  },
];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-black/40" />

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-96 h-96 bg-gradient-to-br from-accent-red/20 to-transparent rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-40 right-[5%] w-[500px] h-[500px] bg-gradient-to-br from-navy-700/40 to-transparent rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-navy-800/30 to-transparent rounded-full blur-[150px]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Floating Shapes */}
        <div className="absolute top-32 right-[20%] w-20 h-20 border border-white/10 rounded-xl rotate-12 animate-float" />
        <div className="absolute bottom-32 left-[15%] w-16 h-16 border border-accent-red/20 rounded-full animate-float-delayed" />
        <div className="absolute top-[60%] right-[10%] w-12 h-12 bg-gradient-to-br from-accent-red/10 to-transparent rounded-lg rotate-45 animate-float-slow" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-red"></span>
              </span>
              <span className="text-white/80 text-sm font-medium">
                Trusted Wealth Partner Since 2011
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1]">
                Wealth Management
              </h1>
              <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]">
                <span className="text-gradient-red">Simplified</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
              Expert financial guidance across Insurance, Mutual Funds, Fixed
              Income & Equity. Mumbai-based with global reach in Singapore.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="glass-button px-8 py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 group"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#services"
                className="glass-button-secondary px-8 py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 group"
              >
                <Play className="w-5 h-5" />
                Watch Overview
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-accent-red" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Service Cards with Images */}
          <div
            className={`relative ${mounted ? 'animate-slide-right' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-accent-red/20 to-navy-700/20 rounded-full blur-[100px]" />

            {/* Main Featured Card */}
            <div className="relative glass-card-elevated rounded-3xl overflow-hidden card-hover-lift">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  fill
                  className="object-cover transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 glass-card rounded-full text-xs font-medium text-white">
                  Featured
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${services[activeService].color} flex items-center justify-center`}
                >
                  {(() => {
                    const IconComponent = services[activeService].icon;
                    return <IconComponent className="w-7 h-7 text-white" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {services[activeService].title}
                  </h3>
                  <p className="text-white/60">
                    {services[activeService].description}
                  </p>
                </div>
                <Link
                  href={services[activeService].href}
                  className="inline-flex items-center gap-2 text-accent-red font-medium hover:gap-3 transition-all"
                >
                  Explore More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Service Indicators */}
              <div className="flex gap-2 p-6 pt-0">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === activeService
                        ? 'w-8 bg-accent-red'
                        : 'w-4 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Small Service Cards */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {services
                .filter((_, i) => i !== activeService)
                .slice(0, 2)
                .map((service, index) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="glass-card rounded-2xl p-4 card-hover-lift group"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-3`}
                    >
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-white text-sm">
                      {service.title}
                    </h4>
                    <p className="text-white/50 text-xs mt-1">
                      {service.description}
                    </p>
                  </Link>
                ))}
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 glass-card-elevated p-4 rounded-2xl animate-float hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <div className="text-white font-bold">8-15%</div>
                  <div className="text-white/60 text-sm">Avg. Returns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-sm">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent-red rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  TrendingUp, 
  LineChart, 
  Building2, 
  PieChart, 
  Landmark, 
  Shield,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'High Yield Bonds',
    description: 'Our Forte - 8-15% market yield opportunities with direct exchange purchase at best available market yield. Corporate bonds, NCDs & Government securities.',
    href: '/fixed-income/fixed-income-products',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: LineChart,
    title: 'Market Linked Debentures',
    description: 'MLDs - Equity-linked structured products combining debt structure with equity-linked returns. Tax-efficient wealth creation strategy.',
    href: '/fixed-income/fixed-income-products',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: Building2,
    title: 'Unlisted Shares & Pre-IPO',
    description: 'Pre-IPO Opportunities in NSE, MSEI, CSK & more. Invest in promising companies before they go public for potential high returns.',
    href: '/equity',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: PieChart,
    title: 'Mutual Funds & SIP',
    description: 'Professional trading platforms with seamless demat services. Diversified portfolios through SIP, lumpsum & goal-based investing strategies.',
    href: '/mutual-funds/why-mutual-funds',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: Landmark,
    title: 'Alternative Investments',
    description: 'AIFs and Commercial real estate strategies with exclusive premium investment opportunities. PMS, REITS & structured products for HNIs.',
    href: '/alternates',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: Shield,
    title: 'Insurance & Legacy Planning',
    description: 'Comprehensive life & general insurance coverage, will writing & succession planning to secure your family\'s financial future.',
    href: '/insurance/why-life-insurance',
    image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=1200&auto=format&fit=crop',
  },
];
export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-section-gradient" />
      
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/15 backdrop-blur-sm border border-red-500/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Our Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Offerings</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Comprehensive wealth management solutions across various financial asset classes for professionals, NRIs & HNIs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Link key={service.title} href={service.href} className="group">
              <article className="glass-card rounded-2xl overflow-hidden card-hover-lift h-full">
                {/* Image */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} - DEEPSEA FINVEST`}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-red-500/15 backdrop-blur-sm border border-red-500/30 flex items-center justify-center shadow-lg">
                    <service.icon className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
                  </div>

                  {/* Featured Badge for first card */}
                  {index === 0 && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-red-500/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-3 md:mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex items-center text-red-400 font-medium text-sm group-hover:gap-3 transition-all">
                    Learn More 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm border border-red-500/40 hover:border-red-500/70 hover:bg-red-500/30 px-6 md:px-8 py-3 md:py-4 rounded-full text-white font-semibold transition-all"
          >
            Explore All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  BadgeCheck, 
  HeartHandshake, 
  Brain, 
  GraduationCap, 
  Users, 
  Wallet,
  ArrowRight,
  Star,
  Quote
} from 'lucide-react';

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Qualified & Unbiased',
    description: 'SEBI registered advisors providing conflict-free expert guidance.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Care',
    description: 'Tailored investment solutions for your unique financial goals.',
  },
  {
    icon: Brain,
    title: 'Strategic Expertise',
    description: 'Deep market knowledge and data-driven investment insights.',
  },
  {
    icon: GraduationCap,
    title: 'Expert Knowledge',
    description: 'Continuous market research & analysis for better returns.',
  },
  {
    icon: Users,
    title: 'Industry Partners',
    description: 'Collaborations with leading financial institutions.',
  },
  {
    icon: Wallet,
    title: 'All-in-One Solutions',
    description: 'Complete wealth management across all asset classes.',
  },
];

const testimonials = [
  {
    quote: "DEEPSEA FINVEST helped me build a diversified portfolio delivering consistent returns. Their expertise in high yield bonds is unmatched.",
    author: "Rajesh Kumar",
    role: "Marine Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&q=80",
  },
  {
    quote: "Professional, transparent, and always available. They truly understand the needs of NRIs and seafarers like me.",
    author: "Priya Sharma",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face&q=80",
  },
  {
    quote: "I've grown my wealth by 3x in 5 years with their guidance. The bond investments have been phenomenal.",
    author: "Anil Mehta",
    role: "IT Professional",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face&q=80",
  },
  {
    quote: "Their financial planning helped me secure my family's future. Best investment decision I ever made.",
    author: "Dr. Sunita Rao",
    role: "Doctor",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face&q=80",
  },
  {
    quote: "Best wealth management firm in Mumbai. The team is knowledgeable and always puts clients first.",
    author: "Vikram Singh",
    role: "Pilot",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&q=80",
  },
  {
    quote: "The SIP and mutual fund recommendations have significantly outperformed my expectations. Highly recommended!",
    author: "Meena Patel",
    role: "NRI - Singapore",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&q=80",
  },
  {
    quote: "Their pre-IPO investment picks gave phenomenal returns. Very trustworthy and transparent team.",
    author: "Arjun Nair",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&h=80&fit=crop&crop=face&q=80",
  },
  {
    quote: "Insurance planning gave me complete peace of mind. Professional and efficient service every time.",
    author: "Kavya Reddy",
    role: "Marine Engineer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face&q=80",
  },
];

const row1 = testimonials.slice(0, 4);
const row2 = testimonials.slice(4, 8);

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-72 mx-3 glass-card rounded-2xl p-5 border border-white/10 hover:border-red-500/30 transition-colors duration-300">
      <div className="flex items-center gap-1 mb-3">
        {[1,2,3,4,5].map((s) => (
          <Star key={s} className="w-3 h-3 fill-red-400 text-red-400" />
        ))}
      </div>
      <Quote className="w-5 h-5 text-red-500/40 mb-2" />
      <p className="text-white/70 text-xs leading-relaxed mb-4 line-clamp-4">
        {t.quote}
      </p>
      <div className="flex items-center gap-3 pt-3 border-t border-white/10">
        <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-red-500/30">
          <Image src={t.image} alt={t.author} fill className="object-cover" />
        </div>
        <div>
          <p className="text-white font-semibold text-xs">{t.author}</p>
          <p className="text-white/40 text-xs">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-20 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-section-gradient" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-navy-700/30 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/15 backdrop-blur-sm border border-red-500/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Your Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Partner</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Expert financial guidance tailored for Marine Engineers, NRIs, Doctors & Business Owners.
          </p>
        </div>

        {/* Reasons + Image */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-center mb-20">
          {/* Reasons - 3 col */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {reasons.map((reason) => (
              <div key={reason.title} className="glass-card p-4 rounded-xl card-hover-lift group">
                <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center mb-3 group-hover:bg-red-500/25 transition-colors">
                  <reason.icon className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="font-bold text-white text-sm mb-1">{reason.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>

          {/* Image - 2 col */}
          <div className="lg:col-span-2 relative">
            <div className="glass-card-elevated rounded-2xl md:rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=700&auto=format&fit=crop"
                alt="Expert Financial Planning - DEEPSEA FINVEST"
                width={600}
                height={520}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="grid grid-cols-3 gap-2 glass-card rounded-xl p-3">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">500+</div>
                    <div className="text-white/50 text-xs">Clients</div>
                  </div>
                  <div className="text-center border-x border-white/10">
                    <div className="text-xl font-bold text-red-400">13+</div>
                    <div className="text-white/50 text-xs">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">₹100Cr+</div>
                    <div className="text-white/50 text-xs">AUM</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 glass-card px-3 py-2 rounded-xl animate-float hidden md:flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-red-400" />
              <span className="text-white text-xs font-semibold">SEBI Registered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/15 backdrop-blur-sm border border-red-500/30 rounded-full mb-4">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium">Client Stories</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Clients Say</span>
          </h3>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-4 mb-14">
        {/* Row 1 - left */}
        <div className="overflow-hidden marquee-fade">
          <div className="marquee-track">
            {[...row1, ...row1].map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} />
            ))}
          </div>
        </div>
        {/* Row 2 - right */}
        <div className="overflow-hidden marquee-fade">
          <div className="marquee-track-reverse">
            {[...row2, ...row2].map((t, i) => (
              <TestimonialCard key={`r2-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm border border-red-500/40 hover:border-red-500/70 hover:bg-red-500/30 px-8 py-4 rounded-full text-white font-semibold transition-all"
          >
            Start Your Journey Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

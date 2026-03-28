import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { Compass, Target, Shield, TrendingUp, MessageCircle, Phone } from 'lucide-react';

const journeySteps = [
  {
    icon: Compass,
    title: 'Discover',
    description: 'Understand your current financial situation and identify your goals.',
  },
  {
    icon: Target,
    title: 'Plan',
    description: 'Create a personalized roadmap to achieve your short and long-term objectives.',
  },
  {
    icon: Shield,
    title: 'Protect',
    description: 'Secure your family and assets with appropriate insurance coverage.',
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    description: 'Invest wisely to build wealth and achieve financial independence.',
  },
];

const services = [
  { title: 'Investment Planning', description: 'Tailored investment strategies for your goals' },
  { title: 'Insurance Solutions', description: 'Comprehensive protection for life and assets' },
  { title: 'Tax Planning', description: 'Optimize your tax liability legally' },
  { title: 'Retirement Planning', description: 'Secure your golden years with proper planning' },
  { title: 'Goal-Based Investing', description: 'Achieve specific milestones with targeted investments' },
  { title: 'Portfolio Review', description: 'Regular monitoring and rebalancing of investments' },
];

export default function StartYourJourneyPage() {
  return (
    <PageLayout
      title="Start Your Journey"
      subtitle="Begin your path to financial freedom with expert guidance"
      bgImage="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=2000&auto=format&fit=crop"
    >
      {/* Hero Description */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-white/70 text-lg leading-relaxed">
          Every financial journey is unique. At DEEPSEA FINVEST, we understand your aspirations 
          and help you navigate the path to financial success. Whether you are just starting out 
          or looking to optimize your existing portfolio, we are here to guide you every step of the way.
        </p>
      </div>

      {/* Journey Steps */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {journeySteps.map((step, index) => (
          <GlassCard key={step.title} className="p-6 text-center" hover>
            <div className="w-16 h-16 bg-accent-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <step.icon className="h-8 w-8 text-accent-red" />
            </div>
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">{index + 1}</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
            <p className="text-white/60 text-sm">{step.description}</p>
          </GlassCard>
        ))}
      </div>

      {/* Services */}
      <GlassCard className="p-8 mb-16" elevated>
        <h2 className="text-2xl font-bold text-white mb-8 text-center">How We Can Help</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-white/60 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* CTA */}
      <GlassCard className="p-8 md:p-12 text-center" elevated>
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin?</h2>
        <p className="text-white/70 mb-8 max-w-2xl mx-auto">
          Take the first step towards financial freedom. Schedule a free consultation with our 
          experts and discover how we can help you achieve your goals.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/919136242706"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button-primary px-8 py-4 rounded-xl font-semibold inline-flex items-center"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Chat on WhatsApp
          </a>
          <a
            href="tel:+919136242706"
            className="glass-button-secondary px-8 py-4 rounded-xl font-semibold inline-flex items-center"
          >
            <Phone className="mr-2 h-5 w-5" />
            Schedule a Call
          </a>
        </div>
      </GlassCard>
    </PageLayout>
  );
}

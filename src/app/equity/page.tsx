import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { TrendingUp, Shield, PieChart, BarChart3, Target, Lightbulb } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Equity Investment Advisory — Stock Market | DEEPSEA FINVEST Mumbai',
  description: 'Expert equity investment advisory, portfolio management and stock recommendations in Mumbai. Research-backed large cap, mid cap and small cap strategies. DEEPSEA FINVEST.',
  keywords: 'equity investment Mumbai, stock advisory India, portfolio management, stock market investment, large cap mid cap small cap, equity advisory SEBI, wealth management stocks',
};

const services = [
  {
    icon: TrendingUp,
    title: 'Stock Advisory',
    description: 'Research-backed stock recommendations for long-term wealth creation.',
    features: ['Fundamental analysis', 'Technical research', 'Sector reports', 'Buy/sell recommendations'],
  },
  {
    icon: PieChart,
    title: 'Portfolio Management',
    description: 'Customized equity portfolios aligned with your risk profile and goals.',
    features: ['Risk profiling', 'Asset allocation', 'Regular rebalancing', 'Performance tracking'],
  },
  {
    icon: BarChart3,
    title: 'Trading Services',
    description: 'Execute trades seamlessly with our partnered brokerage platforms.',
    features: ['Low brokerage', 'Advanced platforms', 'Real-time data', 'Research support'],
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Protect your portfolio with hedging strategies and stop-loss mechanisms.',
    features: ['Stop-loss setup', 'Hedging strategies', 'Risk monitoring', 'Alert systems'],
  },
];

const investmentApproach = [
  {
    icon: Target,
    title: 'Goal-Based Investing',
    description: 'Align your equity investments with specific financial goals and timelines.',
  },
  {
    icon: Lightbulb,
    title: 'Research Driven',
    description: 'Our recommendations are backed by thorough fundamental and technical analysis.',
  },
  {
    icon: Shield,
    title: 'Risk-First Approach',
    description: 'We prioritize capital preservation while seeking optimal returns.',
  },
];

export default function EquityPage() {
  return (
    <PageLayout
      title="Equity Investments"
      subtitle="Build wealth through strategic stock market investments"
      bgImage="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2000&auto=format&fit=crop"
    >
      {/* Introduction */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-white/70 text-lg leading-relaxed">
          Equity investments offer the potential for high returns by owning shares of publicly traded companies. 
          At DEEPSEA FINVEST, we provide comprehensive equity advisory services to help you navigate 
          the stock market with confidence and achieve your wealth creation goals.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {services.map((service) => (
          <GlassCard key={service.title} className="p-6" hover>
            <div className="w-14 h-14 bg-accent-red/20 rounded-xl flex items-center justify-center mb-4">
              <service.icon className="h-7 w-7 text-accent-red" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
            <p className="text-white/60 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center text-white/50 text-sm">
                  <span className="w-1.5 h-1.5 bg-accent-red rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>

      {/* Investment Approach */}
      <GlassCard className="p-8 mb-16" elevated>
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Investment Approach</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {investmentApproach.map((item) => (
            <div key={item.title} className="text-center p-6">
              <div className="w-16 h-16 bg-accent-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-8 w-8 text-accent-red" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Market Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <GlassCard className="p-6 text-center">
          <div className="text-3xl font-bold text-accent-red mb-2">Large Cap</div>
          <p className="text-white/60 text-sm mb-3">Blue-chip companies with stable returns</p>
          <span className="text-green-400 text-sm">Expected: 12-15% p.a.</span>
        </GlassCard>
        <GlassCard className="p-6 text-center">
          <div className="text-3xl font-bold text-accent-red mb-2">Mid Cap</div>
          <p className="text-white/60 text-sm mb-3">Growing companies with higher potential</p>
          <span className="text-green-400 text-sm">Expected: 15-18% p.a.</span>
        </GlassCard>
        <GlassCard className="p-6 text-center">
          <div className="text-3xl font-bold text-accent-red mb-2">Small Cap</div>
          <p className="text-white/60 text-sm mb-3">Emerging companies with high growth</p>
          <span className="text-green-400 text-sm">Expected: 18-25% p.a.</span>
        </GlassCard>
      </div>
    </PageLayout>
  );
}

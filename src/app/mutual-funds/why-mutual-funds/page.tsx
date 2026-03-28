import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { TrendingUp, Users, Shield, PieChart, Clock, DollarSign } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Invest in Mutual Funds? | DEEPSEA FINVEST Mumbai',
  description: 'Discover why mutual funds are the smartest investment for Indians. Professional management, diversification, SEBI-regulated, tax benefits under Sec 80C. Start with ₹500/month. DEEPSEA FINVEST.',
  keywords: 'why invest mutual funds, mutual fund benefits India, SEBI regulated mutual funds, tax saving mutual funds, diversified investment India, professional fund management, SIP investment Mumbai',
};

const benefits = [
  {
    icon: TrendingUp,
    title: 'Professional Management',
    description: 'Expert fund managers handle your investments with research-backed decisions.',
  },
  {
    icon: Users,
    title: 'Diversification',
    description: 'Spread risk across multiple securities, sectors, and asset classes.',
  },
  {
    icon: Shield,
    title: 'Regulated & Transparent',
    description: 'SEBI-regulated with daily NAV disclosure and portfolio transparency.',
  },
  {
    icon: PieChart,
    title: 'Affordable Access',
    description: 'Start with as low as ₹500 and access premium stocks and bonds.',
  },
  {
    icon: Clock,
    title: 'Liquidity',
    description: 'Easy redemption with funds credited to your account within 1-3 days.',
  },
  {
    icon: DollarSign,
    title: 'Tax Efficiency',
    description: 'Tax benefits under Section 80C and favorable capital gains taxation.',
  },
];

const fundTypes = [
  { name: 'Equity Funds', description: 'High growth potential for long-term wealth creation', risk: 'High', returns: '12-15%' },
  { name: 'Debt Funds', description: 'Stable returns with lower risk than equity', risk: 'Low-Medium', returns: '6-8%' },
  { name: 'Hybrid Funds', description: 'Balance of equity and debt for moderate investors', risk: 'Medium', returns: '8-11%' },
  { name: 'Index Funds', description: 'Passive tracking of market indices at low cost', risk: 'Medium-High', returns: '10-13%' },
];

export default function WhyMutualFundsPage() {
  return (
    <PageLayout
      title="Why Mutual Funds?"
      subtitle="The smart way to grow your wealth with professional management and diversification"
      bgImage="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=2000&auto=format&fit=crop"
    >
      {/* Introduction */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-white/70 text-lg leading-relaxed">
          Mutual funds pool money from multiple investors to invest in a diversified portfolio of stocks, 
          bonds, or other securities. They offer an easy and affordable way to access professional 
          investment management and build long-term wealth.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {benefits.map((benefit) => (
          <GlassCard key={benefit.title} className="p-6" hover>
            <div className="w-14 h-14 bg-accent-red/20 rounded-xl flex items-center justify-center mb-4">
              <benefit.icon className="h-7 w-7 text-accent-red" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
            <p className="text-white/60">{benefit.description}</p>
          </GlassCard>
        ))}
      </div>

      {/* Fund Types */}
      <GlassCard className="p-8 mb-16" elevated>
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Types of Mutual Funds</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {fundTypes.map((fund) => (
            <div key={fund.name} className="p-6 bg-white/5 rounded-xl">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-white">{fund.name}</h3>
                <span className={`text-xs px-2 py-1 rounded ${
                  fund.risk === 'High' ? 'bg-red-500/20 text-red-400' :
                  fund.risk === 'Low-Medium' ? 'bg-green-500/20 text-green-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {fund.risk} Risk
                </span>
              </div>
              <p className="text-white/60 text-sm mb-3">{fund.description}</p>
              <div className="flex justify-between text-sm">
                <span className="text-white/40">Expected Returns</span>
                <span className="text-accent-red font-semibold">{fund.returns} p.a.</span>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <GlassCard className="p-6 text-center">
          <div className="text-3xl md:text-4xl font-bold text-accent-red mb-2">₹40L+</div>
          <p className="text-white/60 text-sm">Crores AUM Managed</p>
        </GlassCard>
        <GlassCard className="p-6 text-center">
          <div className="text-3xl md:text-4xl font-bold text-accent-red mb-2">5000+</div>
          <p className="text-white/60 text-sm">Happy Investors</p>
        </GlassCard>
        <GlassCard className="p-6 text-center">
          <div className="text-3xl md:text-4xl font-bold text-accent-red mb-2">25+</div>
          <p className="text-white/60 text-sm">AMC Partners</p>
        </GlassCard>
        <GlassCard className="p-6 text-center">
          <div className="text-3xl md:text-4xl font-bold text-accent-red mb-2">15+</div>
          <p className="text-white/60 text-sm">Years Experience</p>
        </GlassCard>
      </div>
    </PageLayout>
  );
}

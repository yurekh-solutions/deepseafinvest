import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { TrendingUp, Calendar, Shield, PiggyBank, Clock, BarChart3 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why SIP? Benefits of Systematic Investment Plan | DEEPSEA FINVEST',
  description: 'Learn why SIP is the best way to invest in mutual funds. Rupee cost averaging, power of compounding, start with ₹500/month. Expert SIP advisory by DEEPSEA FINVEST Mumbai.',
  keywords: 'why SIP investment, SIP benefits India, systematic investment plan, rupee cost averaging, power of compounding SIP, SIP mutual fund Mumbai, start SIP 500 rupees',
};

const benefits = [
  {
    icon: PiggyBank,
    title: 'Disciplined Investing',
    description: 'Automated monthly investments instill financial discipline and consistent wealth building.',
  },
  {
    icon: BarChart3,
    title: 'Rupee Cost Averaging',
    description: 'Buy more units when prices are low and fewer when high, reducing average cost per unit.',
  },
  {
    icon: TrendingUp,
    title: 'Power of Compounding',
    description: 'Earn returns on your returns, creating exponential wealth growth over time.',
  },
  {
    icon: Calendar,
    title: 'Flexible & Convenient',
    description: 'Start with ₹500/month, choose any date, and modify or pause anytime.',
  },
  {
    icon: Shield,
    title: 'No Market Timing Needed',
    description: 'Eliminate the stress of timing the market - invest regularly regardless of market conditions.',
  },
  {
    icon: Clock,
    title: 'Long-Term Wealth',
    description: 'Ideal for achieving long-term goals like retirement, child education, or home buying.',
  },
];

export default function WhySIPPage() {
  return (
    <PageLayout
      title="Why SIP?"
      subtitle="Systematic Investment Plan - The smarter way to invest in mutual funds"
      bgImage="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2000&auto=format&fit=crop"
    >
      {/* Introduction */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-white/70 text-lg leading-relaxed">
          A Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly in mutual funds. 
          It is the most disciplined and hassle-free way to build wealth over time, making it perfect 
          for both beginners and experienced investors.
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

      {/* SIP vs Lump Sum */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <GlassCard className="p-8" elevated>
          <h3 className="text-2xl font-bold text-white mb-6">SIP Investment</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <span className="text-white/70">No need to time the market</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <span className="text-white/70">Rupee cost averaging benefits</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <span className="text-white/70">Builds investment discipline</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <span className="text-white/70">Start with small amounts</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <span className="text-white/70">Reduces market volatility impact</span>
            </li>
          </ul>
        </GlassCard>

        <GlassCard className="p-8" elevated>
          <h3 className="text-2xl font-bold text-white mb-6">Lump Sum Investment</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-yellow-400 text-xs">!</span>
              </div>
              <span className="text-white/70">Requires market timing expertise</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-yellow-400 text-xs">!</span>
              </div>
              <span className="text-white/70">Higher risk if market corrects</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-yellow-400 text-xs">!</span>
              </div>
              <span className="text-white/70">Requires large capital upfront</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <span className="text-white/70">Better in consistently rising markets</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <span className="text-white/70">Immediate full deployment</span>
            </li>
          </ul>
        </GlassCard>
      </div>

      {/* Example Calculation */}
      <GlassCard className="p-8" elevated>
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Power of Compounding Example</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white/5 rounded-xl">
            <p className="text-white/60 mb-2">Monthly Investment</p>
            <p className="text-3xl font-bold text-white">₹10,000</p>
          </div>
          <div className="p-6 bg-white/5 rounded-xl">
            <p className="text-white/60 mb-2">Investment Period</p>
            <p className="text-3xl font-bold text-white">20 Years</p>
          </div>
          <div className="p-6 bg-white/5 rounded-xl">
            <p className="text-white/60 mb-2">Expected Returns</p>
            <p className="text-3xl font-bold text-white">12% p.a.</p>
          </div>
        </div>
        <div className="mt-8 p-6 bg-accent-red/10 rounded-xl text-center">
          <p className="text-white/60 mb-2">Estimated Corpus</p>
          <p className="text-4xl md:text-5xl font-bold text-accent-red">₹99.9 Lakhs</p>
          <p className="text-white/40 text-sm mt-2">Total Investment: ₹24 Lakhs | Wealth Gain: ₹75.9 Lakhs</p>
        </div>
      </GlassCard>
    </PageLayout>
  );
}

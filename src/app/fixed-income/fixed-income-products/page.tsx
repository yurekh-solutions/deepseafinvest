import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { Building2, Landmark, TrendingUp, Shield, Wallet, Percent } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fixed Income Products — Bonds, FD, Debentures | DEEPSEA FINVEST',
  description: 'Invest in high-yield fixed income products: corporate FDs, government bonds, tax-free bonds, debentures and PPF. Stable returns with capital protection. DEEPSEA FINVEST Mumbai.',
  keywords: 'fixed income investment India, corporate fixed deposits, high yield bonds, government bonds, tax free bonds, debentures, PPF, stable returns, capital protection Mumbai',
};

const products = [
  {
    icon: Building2,
    title: 'Corporate Fixed Deposits',
    description: 'Higher returns than bank FDs with flexible tenure options from reputed companies.',
    returns: '7.5% - 9.5%',
    tenure: '1 - 5 years',
    minInvestment: '₹25,000',
  },
  {
    icon: Landmark,
    title: 'Bank Fixed Deposits',
    description: 'Safe and secure investment option with guaranteed returns and deposit insurance.',
    returns: '5.5% - 7.5%',
    tenure: '7 days - 10 years',
    minInvestment: '₹1,000',
  },
  {
    icon: TrendingUp,
    title: 'Government Bonds',
    description: 'Sovereign-backed securities offering safety and stable returns for conservative investors.',
    returns: '6.5% - 7.5%',
    tenure: '5 - 40 years',
    minInvestment: '₹1,000',
  },
  {
    icon: Shield,
    title: 'Tax-Free Bonds',
    description: 'Earn tax-free interest income with AAA-rated PSU bonds for high-net-worth individuals.',
    returns: '5.5% - 6.5%',
    tenure: '10 - 20 years',
    minInvestment: '₹10,000',
  },
  {
    icon: Wallet,
    title: 'Debentures',
    description: 'Secured and unsecured debentures offering higher yields than traditional deposits.',
    returns: '8% - 11%',
    tenure: '1 - 10 years',
    minInvestment: '₹1,00,000',
  },
  {
    icon: Percent,
    title: 'Public Provident Fund',
    description: 'Tax-efficient long-term savings scheme with sovereign guarantee and EEE tax status.',
    returns: '7.1% (Variable)',
    tenure: '15 years',
    minInvestment: '₹500/year',
  },
];

export default function FixedIncomeProductsPage() {
  return (
    <PageLayout
      title="Fixed Income Products"
      subtitle="Stable returns and capital preservation through secure fixed-income investments"
      bgImage="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2000&auto=format&fit=crop"
    >
      {/* Introduction */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-white/70 text-lg leading-relaxed">
          Fixed income investments provide stability and predictable returns to your portfolio. 
          At DEEPSEA FINVEST, we offer a curated selection of fixed income products that balance 
          safety, liquidity, and returns based on your financial goals.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {products.map((product) => (
          <GlassCard key={product.title} className="p-6" hover>
            <div className="w-14 h-14 bg-accent-red/20 rounded-xl flex items-center justify-center mb-4">
              <product.icon className="h-7 w-7 text-accent-red" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
            <p className="text-white/60 mb-4">{product.description}</p>
            
            <div className="space-y-2 pt-4 border-t border-glass-border">
              <div className="flex justify-between text-sm">
                <span className="text-white/40">Returns</span>
                <span className="text-accent-red font-semibold">{product.returns}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/40">Tenure</span>
                <span className="text-white/70">{product.tenure}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/40">Min Investment</span>
                <span className="text-white/70">{product.minInvestment}</span>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Why Fixed Income */}
      <div className="grid md:grid-cols-2 gap-8">
        <GlassCard className="p-8" elevated>
          <h3 className="text-2xl font-bold text-white mb-6">Why Fixed Income?</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-accent-red rounded-full mt-2 mr-3" />
              <div>
                <h4 className="text-white font-semibold">Capital Protection</h4>
                <p className="text-white/60 text-sm">Principal amount is protected with guaranteed returns</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-accent-red rounded-full mt-2 mr-3" />
              <div>
                <h4 className="text-white font-semibold">Regular Income</h4>
                <p className="text-white/60 text-sm">Steady interest payouts for income needs</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-accent-red rounded-full mt-2 mr-3" />
              <div>
                <h4 className="text-white font-semibold">Portfolio Stability</h4>
                <p className="text-white/60 text-sm">Reduces overall portfolio volatility</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-accent-red rounded-full mt-2 mr-3" />
              <div>
                <h4 className="text-white font-semibold">Tax Efficiency</h4>
                <p className="text-white/60 text-sm">Various tax-saving options available</p>
              </div>
            </li>
          </ul>
        </GlassCard>

        <GlassCard className="p-8" elevated>
          <h3 className="text-2xl font-bold text-white mb-6">Who Should Invest?</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-accent-red rounded-full mt-2 mr-3" />
              <div>
                <h4 className="text-white font-semibold">Retirees</h4>
                <p className="text-white/60 text-sm">Seeking regular income with capital safety</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-accent-red rounded-full mt-2 mr-3" />
              <div>
                <h4 className="text-white font-semibold">Conservative Investors</h4>
                <p className="text-white/60 text-sm">Risk-averse individuals prioritizing safety</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-accent-red rounded-full mt-2 mr-3" />
              <div>
                <h4 className="text-white font-semibold">Goal-Based Savers</h4>
                <p className="text-white/60 text-sm">Short to medium term financial goals</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-accent-red rounded-full mt-2 mr-3" />
              <div>
                <h4 className="text-white font-semibold">Portfolio Balancers</h4>
                <p className="text-white/60 text-sm">Diversifying equity-heavy portfolios</p>
              </div>
            </li>
          </ul>
        </GlassCard>
      </div>
    </PageLayout>
  );
}

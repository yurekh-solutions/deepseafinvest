import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import {
  Building,
  Gem,
  Sprout,
  Bitcoin,
  Briefcase,
  TrendingUp,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alternative Investments — Real Estate, Gold, REITs | DEEPSEA FINVEST',
  description:
    'Diversify your portfolio with alternative investments: REITs, real estate, gold, commodities, private equity and more. Beat inflation with non-correlated assets. DEEPSEA FINVEST Mumbai.',
  keywords:
    'alternative investments India, REIT investment, gold investment, real estate investment, private equity India, commodities portfolio, diversification beyond stocks Mumbai',
};

const alternatives = [
  {
    icon: Building,
    title: 'Real Estate',
    description:
      'Invest in commercial and residential properties for rental income and capital appreciation.',
    features: [
      'REITs',
      'Fractional ownership',
      'Rental yields',
      'Capital appreciation',
    ],
    returns: '8-12% p.a.',
  },
  {
    icon: Gem,
    title: 'Gold & Precious Metals',
    description:
      'Hedge against inflation with gold investments through various instruments.',
    features: [
      'Digital gold',
      'Sovereign Gold Bonds',
      'Gold ETFs',
      'Physical gold',
    ],
    returns: '6-10% p.a.',
  },
  {
    icon: Sprout,
    title: 'PMS & AIFs',
    description:
      'Portfolio Management Services and Alternative Investment Funds for HNIs.',
    features: [
      'Customized portfolios',
      'Professional management',
      'Diverse strategies',
      'Tax efficiency',
    ],
    returns: '12-20% p.a.',
  },
  {
    icon: Bitcoin,
    title: 'Digital Assets',
    description:
      'Exposure to cryptocurrencies and blockchain-based investments (high risk).',
    features: [
      'Crypto funds',
      'Blockchain ETFs',
      'Regulated exposure',
      'Risk management',
    ],
    returns: 'Highly Variable',
  },
  {
    icon: Briefcase,
    title: 'Private Equity',
    description: 'Invest in unlisted companies with high growth potential.',
    features: [
      'Pre-IPO opportunities',
      'Start-up investments',
      'Long-term horizon',
      'High return potential',
    ],
    returns: '15-25% p.a.',
  },
  {
    icon: TrendingUp,
    title: 'Structured Products',
    description:
      'Customized investment solutions combining debt and equity features.',
    features: [
      'Capital protection',
      'Market-linked returns',
      'Flexible tenures',
      'Tailored solutions',
    ],
    returns: '8-15% p.a.',
  },
];

export default function AlternatesPage() {
  return (
    <PageLayout
      title="Alternative Investments"
      subtitle="Diversify beyond traditional assets with alternative investment opportunities"
      bgImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop"
    >
      {/* Introduction */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-white/70 text-lg leading-relaxed">
          Alternative investments provide diversification beyond traditional
          stocks, bonds, and cash. These assets can offer unique return
          profiles, inflation protection, and reduced correlation with
          conventional markets. At DEEPSEA FINVEST, we curate alternative
          investment opportunities suitable for sophisticated investors.
        </p>
      </div>

      {/* Alternatives Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {alternatives.map(alt => (
          <GlassCard key={alt.title} className="p-6" hover>
            <div className="w-14 h-14 bg-accent-red/20 rounded-xl flex items-center justify-center mb-4">
              <alt.icon className="h-7 w-7 text-accent-red" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {alt.title}
            </h3>
            <p className="text-white/60 mb-4">{alt.description}</p>

            <ul className="space-y-1 mb-4">
              {alt.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-white/50 text-sm flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-accent-red rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-glass-border">
              <span className="text-white/40 text-sm">Expected Returns: </span>
              <span className="text-accent-red font-semibold">
                {alt.returns}
              </span>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Who Should Invest */}
      <div className="grid md:grid-cols-2 gap-8">
        <GlassCard className="p-8" elevated>
          <h3 className="text-2xl font-bold text-white mb-6">
            Who Should Consider?
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent-red rounded-full mt-2" />
              <div>
                <h4 className="text-white font-semibold">HNIs & UHNIs</h4>
                <p className="text-white/60 text-sm">
                  High net worth individuals seeking portfolio diversification
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent-red rounded-full mt-2" />
              <div>
                <h4 className="text-white font-semibold">
                  Sophisticated Investors
                </h4>
                <p className="text-white/60 text-sm">
                  Those who understand complex investment structures
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent-red rounded-full mt-2" />
              <div>
                <h4 className="text-white font-semibold">
                  Long-term Investors
                </h4>
                <p className="text-white/60 text-sm">
                  Investors with 5+ year investment horizon
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent-red rounded-full mt-2" />
              <div>
                <h4 className="text-white font-semibold">
                  Risk Tolerant Investors
                </h4>
                <p className="text-white/60 text-sm">
                  Those comfortable with higher risk for potentially higher
                  returns
                </p>
              </div>
            </li>
          </ul>
        </GlassCard>

        <GlassCard className="p-8" elevated>
          <h3 className="text-2xl font-bold text-white mb-6">Benefits</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent-red rounded-full mt-2" />
              <div>
                <h4 className="text-white font-semibold">
                  Portfolio Diversification
                </h4>
                <p className="text-white/60 text-sm">
                  Low correlation with traditional markets
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent-red rounded-full mt-2" />
              <div>
                <h4 className="text-white font-semibold">Inflation Hedge</h4>
                <p className="text-white/60 text-sm">
                  Protection against currency devaluation
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent-red rounded-full mt-2" />
              <div>
                <h4 className="text-white font-semibold">Enhanced Returns</h4>
                <p className="text-white/60 text-sm">
                  Potential for higher risk-adjusted returns
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent-red rounded-full mt-2" />
              <div>
                <h4 className="text-white font-semibold">
                  Unique Opportunities
                </h4>
                <p className="text-white/60 text-sm">
                  Access to non-traditional asset classes
                </p>
              </div>
            </li>
          </ul>
        </GlassCard>
      </div>
    </PageLayout>
  );
}

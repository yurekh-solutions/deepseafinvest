import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { Star, TrendingUp, Shield, Award } from 'lucide-react';

const favouriteFunds = [
  {
    category: 'Large Cap Equity',
    name: 'Top Large Cap Funds',
    description: 'Stable blue-chip companies with consistent track record',
    returns: '12-14%',
    risk: 'Moderate',
    icon: Star,
    features: ['Proven track record', 'Stable returns', 'Dividend income'],
  },
  {
    category: 'Flexi Cap/Multi Cap',
    name: 'Best Flexi Cap Funds',
    description: 'Dynamic allocation across market caps for optimal returns',
    returns: '14-16%',
    risk: 'Moderate-High',
    icon: TrendingUp,
    features: ['Flexibility', 'Diversified portfolio', 'High growth potential'],
  },
  {
    category: 'Index Funds',
    name: 'Recommended Index Funds',
    description: 'Low-cost passive tracking of market indices',
    returns: '11-13%',
    risk: 'Market-linked',
    icon: Award,
    features: ['Low expense ratio', 'No fund manager risk', 'Market returns'],
  },
  {
    category: 'Debt Funds',
    name: 'Top Debt Funds',
    description: 'Stable income with capital preservation',
    returns: '6-8%',
    risk: 'Low',
    icon: Shield,
    features: ['Stability', 'Liquidity', 'Better than FD returns'],
  },
];

export default function OurFavouriteFundsPage() {
  return (
    <PageLayout
      title="Our Favourite Funds"
      subtitle="Curated selection of top-performing mutual funds across categories"
      bgImage="https://images.unsplash.com/photo-1516321165247-4aa89a48be55?q=80&w=2000&auto=format&fit=crop"
    >
      {/* Introduction */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-white/70 text-lg leading-relaxed">
          Our team of experts has carefully analyzed hundreds of mutual funds to
          bring you our top picks. These funds have been selected based on
          consistent performance, fund manager expertise, expense ratios, and
          risk-adjusted returns.
        </p>
      </div>

      {/* Funds Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {favouriteFunds.map(fund => (
          <GlassCard key={fund.category} className="p-6" hover>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-accent-red/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <fund.icon className="h-7 w-7 text-accent-red" />
              </div>
              <div className="flex-grow">
                <p className="text-accent-red text-sm font-medium mb-1">
                  {fund.category}
                </p>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {fund.name}
                </h3>
                <p className="text-white/60 mb-4">{fund.description}</p>

                <div className="flex gap-4 mb-4">
                  <div>
                    <span className="text-white/40 text-xs block">Returns</span>
                    <span className="text-accent-red font-semibold">
                      {fund.returns}
                    </span>
                  </div>
                  <div>
                    <span className="text-white/40 text-xs block">Risk</span>
                    <span className="text-white/70">{fund.risk}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {fund.features.map(feature => (
                    <span
                      key={feature}
                      className="text-xs bg-white/10 text-white/60 px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Selection Criteria */}
      <GlassCard className="p-8" elevated>
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Our Selection Criteria
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-accent-red">5+</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Years Track Record
            </h3>
            <p className="text-white/60 text-sm">
              Consistent performance over market cycles
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-accent-red">4★</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              High Ratings
            </h3>
            <p className="text-white/60 text-sm">
              Top-rated by credible agencies
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-accent-red">&lt;1%</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Low Expense
            </h3>
            <p className="text-white/60 text-sm">
              Cost-efficient fund management
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-accent-red">AUM</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Size Matters
            </h3>
            <p className="text-white/60 text-sm">
              Sufficient corpus for stability
            </p>
          </div>
        </div>
      </GlassCard>
    </PageLayout>
  );
}

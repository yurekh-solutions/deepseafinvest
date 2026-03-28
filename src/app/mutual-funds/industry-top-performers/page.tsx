import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { Trophy, TrendingUp, Star } from 'lucide-react';

const topPerformers = [
  {
    category: 'Large Cap Funds',
    funds: [
      { name: 'Canara Robeco Bluechip', returns: '18.5%', rating: 5 },
      { name: 'Mirae Asset Large Cap', returns: '17.2%', rating: 5 },
      { name: 'Axis Bluechip Fund', returns: '16.8%', rating: 4 },
    ],
  },
  {
    category: 'Mid Cap Funds',
    funds: [
      { name: 'Kotak Emerging Equity', returns: '22.3%', rating: 5 },
      { name: 'PGIM India Midcap', returns: '21.5%', rating: 5 },
      { name: 'Edelweiss Mid Cap', returns: '20.1%', rating: 4 },
    ],
  },
  {
    category: 'Small Cap Funds',
    funds: [
      { name: 'Nippon India Small Cap', returns: '28.5%', rating: 5 },
      { name: 'Quant Small Cap', returns: '26.2%', rating: 5 },
      { name: 'Axis Small Cap', returns: '24.8%', rating: 4 },
    ],
  },
  {
    category: 'Flexi Cap Funds',
    funds: [
      { name: 'Parag Parikh Flexi Cap', returns: '19.8%', rating: 5 },
      { name: 'Canara Robeco Flexi Cap', returns: '18.5%', rating: 5 },
      { name: 'UTI Flexi Cap', returns: '17.2%', rating: 4 },
    ],
  },
];

export default function IndustryTopPerformersPage() {
  return (
    <PageLayout
      title="Industry Top Performers"
      subtitle="Best performing mutual funds across categories"
      bgImage="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=2000&auto=format&fit=crop"
    >
      {/* Disclaimer */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-white/50 text-sm">
          *Returns shown are historical 5-year annualized returns as of{' '}
          {new Date().toLocaleDateString('en-IN', {
            month: 'long',
            year: 'numeric',
          })}
          . Past performance does not guarantee future results. Please consult a
          financial advisor before investing.
        </p>
      </div>

      {/* Top Performers Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {topPerformers.map(category => (
          <GlassCard key={category.category} className="p-6" elevated>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent-red/20 rounded-xl flex items-center justify-center">
                <Trophy className="h-6 w-6 text-accent-red" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {category.category}
              </h3>
            </div>

            <div className="space-y-4">
              {category.funds.map((fund, index) => (
                <div
                  key={fund.name}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-accent-red/20 rounded-full flex items-center justify-center text-accent-red text-sm font-bold">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-white font-medium">{fund.name}</p>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: fund.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 text-yellow-500 fill-yellow-500"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-green-400">
                      <TrendingUp className="h-4 w-4" />
                      <span className="font-semibold">{fund.returns}</span>
                    </div>
                    <span className="text-white/40 text-xs">5Y Returns</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Note */}
      <GlassCard className="p-8 text-center" elevated>
        <h3 className="text-xl font-bold text-white mb-4">
          Want Detailed Analysis?
        </h3>
        <p className="text-white/70 mb-6">
          Get personalized fund recommendations based on your risk profile and
          financial goals. Our experts analyze 100+ parameters before
          recommending any fund.
        </p>
        <a
          href="https://wa.me/919136242706"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button-primary px-8 py-3 rounded-xl font-semibold inline-flex items-center"
        >
          Get Personalized Advice
        </a>
      </GlassCard>
    </PageLayout>
  );
}

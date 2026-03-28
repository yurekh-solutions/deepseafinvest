import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { Shield, TrendingUp, PiggyBank, Award, Clock, Users } from 'lucide-react';

const products = [
  {
    icon: Shield,
    title: 'Term Life Insurance',
    description: 'Pure protection plan offering high coverage at affordable premiums.',
    benefits: ['High sum assured', 'Low premiums', 'Rider options', 'Tax benefits'],
    idealFor: 'Primary earners with dependents',
  },
  {
    icon: TrendingUp,
    title: 'ULIP (Unit Linked)',
    description: 'Market-linked investment combined with life insurance protection.',
    benefits: ['Market returns', 'Fund switching', 'Partial withdrawal', 'Life cover'],
    idealFor: 'Long-term wealth creators',
  },
  {
    icon: PiggyBank,
    title: 'Endowment Plans',
    description: 'Guaranteed returns with life insurance coverage and bonus additions.',
    benefits: ['Guaranteed returns', 'Bonus additions', 'Loan facility', 'Maturity benefits'],
    idealFor: 'Risk-averse investors',
  },
  {
    icon: Award,
    title: 'Whole Life Insurance',
    description: 'Lifetime coverage with savings component and guaranteed benefits.',
    benefits: ['Lifetime coverage', 'Cash value', 'Dividend earnings', 'Estate planning'],
    idealFor: 'Estate planning needs',
  },
  {
    icon: Clock,
    title: 'Money Back Policy',
    description: 'Regular payouts during policy term with maturity and death benefits.',
    benefits: ['Regular payouts', 'Survival benefits', 'Death coverage', 'Liquidity'],
    idealFor: 'Regular income seekers',
  },
  {
    icon: Users,
    title: 'Child Plans',
    description: 'Secure your child\'s future education and milestones with guaranteed benefits.',
    benefits: ['Education funding', 'Waiver of premium', 'Milestone payouts', 'Life cover'],
    idealFor: 'Parents planning for children',
  },
];

export default function LifeInsuranceProductsPage() {
  return (
    <PageLayout
      title="Life Insurance Products"
      subtitle="Comprehensive life insurance solutions tailored to your unique needs"
      bgImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop"
    >
      {/* Introduction */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-white/70 text-lg leading-relaxed">
          Choose from our wide range of life insurance products designed to provide financial 
          security and help you achieve your long-term goals. Our expert advisors will help 
          you select the perfect plan for your needs.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {products.map((product) => (
          <GlassCard key={product.title} className="p-6 flex flex-col" hover>
            <div className="w-14 h-14 bg-accent-red/20 rounded-xl flex items-center justify-center mb-4">
              <product.icon className="h-7 w-7 text-accent-red" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
            <p className="text-white/60 mb-4 flex-grow">{product.description}</p>
            <div className="space-y-3">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Key Benefits</p>
                <div className="flex flex-wrap gap-2">
                  {product.benefits.map((benefit, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-glass-border">
                <p className="text-accent-red text-sm">
                  <span className="text-white/40">Ideal for:</span> {product.idealFor}
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Comparison Table */}
      <GlassCard className="p-8 overflow-x-auto" elevated>
        <h2 className="text-2xl font-bold text-white mb-6">Quick Comparison</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-glass-border">
              <th className="pb-4 text-white font-semibold">Product</th>
              <th className="pb-4 text-white font-semibold">Protection</th>
              <th className="pb-4 text-white font-semibold">Returns</th>
              <th className="pb-4 text-white font-semibold">Liquidity</th>
            </tr>
          </thead>
          <tbody className="text-white/70">
            <tr className="border-b border-glass-border/50">
              <td className="py-4">Term Insurance</td>
              <td className="py-4 text-accent-red">High</td>
              <td className="py-4">None</td>
              <td className="py-4">Low</td>
            </tr>
            <tr className="border-b border-glass-border/50">
              <td className="py-4">ULIP</td>
              <td className="py-4">Medium</td>
              <td className="py-4 text-accent-red">Market-linked</td>
              <td className="py-4 text-accent-red">High</td>
            </tr>
            <tr className="border-b border-glass-border/50">
              <td className="py-4">Endowment</td>
              <td className="py-4">Medium</td>
              <td className="py-4">Guaranteed</td>
              <td className="py-4">Medium</td>
            </tr>
            <tr>
              <td className="py-4">Money Back</td>
              <td className="py-4">Medium</td>
              <td className="py-4">Guaranteed</td>
              <td className="py-4 text-accent-red">High</td>
            </tr>
          </tbody>
        </table>
      </GlassCard>
    </PageLayout>
  );
}

import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { TrendingUp, Shield, PieChart, BarChart3 } from 'lucide-react';

const fundCategories = [
  {
    name: 'Equity Funds',
    description: 'Invest primarily in stocks for long-term capital appreciation',
    risk: 'High',
    returns: '12-15%',
    icon: TrendingUp,
    subCategories: ['Large Cap', 'Mid Cap', 'Small Cap', 'Multi Cap', 'Sectoral'],
  },
  {
    name: 'Debt Funds',
    description: 'Invest in fixed income securities for stable returns',
    risk: 'Low-Medium',
    returns: '6-8%',
    icon: Shield,
    subCategories: ['Liquid', 'Short Duration', 'Corporate Bond', 'Gilt', 'Credit Risk'],
  },
  {
    name: 'Hybrid Funds',
    description: 'Mix of equity and debt for balanced risk-return',
    risk: 'Medium',
    returns: '8-11%',
    icon: PieChart,
    subCategories: ['Aggressive Hybrid', 'Conservative Hybrid', 'Balanced Advantage', 'Arbitrage'],
  },
  {
    name: 'Solution Oriented',
    description: 'Designed for specific financial goals',
    risk: 'Varies',
    returns: '8-14%',
    icon: BarChart3,
    subCategories: ['Retirement Fund', 'Childrens Fund', 'ELSS (Tax Saver)'],
  },
];

export default function FundsAtGlancePage() {
  return (
    <PageLayout
      title="Funds at a Glance"
      subtitle="Overview of mutual fund categories to help you choose the right investment"
      bgImage="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2000&auto=format&fit=crop"
    >
      {/* Introduction */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-white/70 text-lg leading-relaxed">
          Mutual funds are categorized based on their investment objective, asset allocation, and risk profile. 
          Understanding these categories helps you select funds that align with your financial goals and risk tolerance.
        </p>
      </div>

      {/* Fund Categories */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {fundCategories.map((category) => (
          <GlassCard key={category.name} className="p-6" hover>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-accent-red/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <category.icon className="h-7 w-7 text-accent-red" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded ${
                    category.risk === 'High' ? 'bg-red-500/20 text-red-400' :
                    category.risk === 'Low-Medium' ? 'bg-green-500/20 text-green-400' :
                    category.risk === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {category.risk} Risk
                  </span>
                </div>
                <p className="text-white/60 mb-4">{category.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white/40 text-sm">Expected Returns</span>
                  <span className="text-accent-red font-semibold">{category.returns} p.a.</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.subCategories.map((sub) => (
                    <span key={sub} className="text-xs bg-white/10 text-white/60 px-2 py-1 rounded">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Selection Guide */}
      <GlassCard className="p-8" elevated>
        <h2 className="text-2xl font-bold text-white mb-6 text-center">How to Choose?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-accent-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-accent-red font-bold">1</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Define Your Goal</h3>
            <p className="text-white/60 text-sm">Identify what you are investing for and your time horizon</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-accent-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-accent-red font-bold">2</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Assess Risk</h3>
            <p className="text-white/60 text-sm">Understand your risk tolerance and capacity</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-accent-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-accent-red font-bold">3</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Select Category</h3>
            <p className="text-white/60 text-sm">Choose funds that match your profile</p>
          </div>
        </div>
      </GlassCard>
    </PageLayout>
  );
}

import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { Shield, Heart, Users, TrendingUp, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Life Insurance? | DEEPSEA FINVEST Mumbai',
  description:
    'Understand why life insurance is essential for financial security. Explore term insurance, ULIPs, endowment plans and whole life policies. Expert guidance from DEEPSEA FINVEST, Mumbai.',
  keywords:
    'why life insurance, life insurance benefits, term insurance India, ULIP investment, life cover Mumbai, financial protection family, insurance planning',
};

const benefits = [
  {
    icon: Shield,
    title: 'Financial Protection',
    description:
      "Secure your family's financial future against unforeseen circumstances.",
  },
  {
    icon: Heart,
    title: 'Peace of Mind',
    description:
      'Ensure your loved ones are taken care of even in your absence.',
  },
  {
    icon: Users,
    title: 'Family Security',
    description: 'Provide a safety net for your dependents and loved ones.',
  },
  {
    icon: TrendingUp,
    title: 'Wealth Creation',
    description: 'Build long-term wealth while ensuring protection.',
  },
];

const features = [
  'Comprehensive coverage options tailored to your needs',
  'Flexible premium payment terms',
  'Tax benefits under Section 80C and 10(10D)',
  'Riders for enhanced protection',
  'Loan facility against policy',
  'Guaranteed returns on select plans',
];

export default function WhyLifeInsurancePage() {
  return (
    <PageLayout
      title="Why Life Insurance?"
      subtitle="Protect what matters most - your family's financial security and peace of mind"
      bgImage="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=2000&auto=format&fit=crop"
    >
      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {benefits.map(benefit => (
          <GlassCard key={benefit.title} className="p-6" hover>
            <div className="w-12 h-12 bg-accent-red/20 rounded-xl flex items-center justify-center mb-4">
              <benefit.icon className="h-6 w-6 text-accent-red" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {benefit.title}
            </h3>
            <p className="text-white/60">{benefit.description}</p>
          </GlassCard>
        ))}
      </div>

      {/* Content Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Why Life Insurance is Essential
          </h2>
          <p className="text-white/70 mb-6 leading-relaxed">
            Life insurance is not just a financial product; it is a promise to
            protect your loved ones when they need it the most. In today&apos;s
            uncertain world, having adequate life insurance coverage is crucial
            for ensuring your family&apos;s financial stability.
          </p>
          <p className="text-white/70 mb-6 leading-relaxed">
            At DEEPSEA FINVEST, we understand that every individual has unique
            needs. That&apos;s why we offer a comprehensive range of life
            insurance solutions tailored to your specific requirements,
            lifestyle, and financial goals.
          </p>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent-red mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <GlassCard className="p-8" elevated>
          <h3 className="text-2xl font-bold text-white mb-4">
            Types of Life Insurance
          </h3>
          <div className="space-y-4">
            <div className="border-b border-glass-border pb-4">
              <h4 className="text-lg font-semibold text-white mb-2">
                Term Insurance
              </h4>
              <p className="text-white/60 text-sm">
                Pure protection plan with high coverage at affordable premiums
              </p>
            </div>
            <div className="border-b border-glass-border pb-4">
              <h4 className="text-lg font-semibold text-white mb-2">
                Whole Life Insurance
              </h4>
              <p className="text-white/60 text-sm">
                Lifetime coverage with savings component
              </p>
            </div>
            <div className="border-b border-glass-border pb-4">
              <h4 className="text-lg font-semibold text-white mb-2">
                Endowment Plans
              </h4>
              <p className="text-white/60 text-sm">
                Combination of insurance and savings with guaranteed returns
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">ULIPs</h4>
              <p className="text-white/60 text-sm">
                Market-linked investment with insurance coverage
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </PageLayout>
  );
}

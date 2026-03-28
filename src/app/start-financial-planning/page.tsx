import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import {
  CheckCircle,
  FileText,
  MessageCircle,
  Phone,
  Calendar,
  User,
} from 'lucide-react';

const processSteps = [
  {
    icon: User,
    title: 'Initial Consultation',
    description:
      'Free 30-minute session to understand your financial situation and goals.',
  },
  {
    icon: FileText,
    title: 'Financial Analysis',
    description:
      'Comprehensive review of your income, expenses, assets, and liabilities.',
  },
  {
    icon: Calendar,
    title: 'Plan Creation',
    description: 'Customized financial plan with actionable recommendations.',
  },
  {
    icon: CheckCircle,
    title: 'Implementation',
    description: 'Execute the plan with our guidance and ongoing support.',
  },
];

const whatToExpect = [
  'Comprehensive financial health assessment',
  'Goal-based investment strategy',
  'Risk profiling and asset allocation',
  'Tax optimization recommendations',
  'Insurance gap analysis',
  'Retirement readiness evaluation',
  'Debt management strategy',
  'Emergency fund planning',
];

export default function StartFinancialPlanningPage() {
  return (
    <PageLayout
      title="Start Financial Planning"
      subtitle="Get a comprehensive financial plan tailored to your life goals"
      bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop"
    >
      {/* Introduction */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-white/70 text-lg leading-relaxed">
          Financial planning is the foundation of a secure future. Our certified
          financial planners work with you to create a comprehensive roadmap
          that addresses your unique needs, from wealth creation to retirement
          planning and everything in between.
        </p>
      </div>

      {/* Process Steps */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Our Process
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <GlassCard key={step.title} className="p-6 relative" hover>
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent-red rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>
              <div className="w-12 h-12 bg-accent-red/20 rounded-xl flex items-center justify-center mb-4 mt-2">
                <step.icon className="h-6 w-6 text-accent-red" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-white/60 text-sm">{step.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* What to Expect */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        <GlassCard className="p-8" elevated>
          <h3 className="text-2xl font-bold text-white mb-6">What to Expect</h3>
          <ul className="space-y-4">
            {whatToExpect.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent-red flex-shrink-0" />
                <span className="text-white/70">{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard className="p-8" elevated>
          <h3 className="text-2xl font-bold text-white mb-6">
            Who Needs Financial Planning?
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-lg">
              <p className="text-white font-semibold mb-1">
                Young Professionals
              </p>
              <p className="text-white/60 text-sm">
                Start early to maximize compounding benefits
              </p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <p className="text-white font-semibold mb-1">Growing Families</p>
              <p className="text-white/60 text-sm">
                Plan for education, home, and family security
              </p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <p className="text-white font-semibold mb-1">Pre-Retirees</p>
              <p className="text-white/60 text-sm">
                Ensure a comfortable and secure retirement
              </p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <p className="text-white font-semibold mb-1">Business Owners</p>
              <p className="text-white/60 text-sm">
                Separate personal and business finances
              </p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* CTA */}
      <GlassCard className="p-8 md:p-12 text-center max-w-3xl mx-auto" elevated>
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Plan Your Future?
        </h2>
        <p className="text-white/70 mb-8">
          Book your free consultation today and take the first step towards
          financial clarity and confidence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/919136242706"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button-primary px-8 py-4 rounded-xl font-semibold inline-flex items-center"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Book on WhatsApp
          </a>
          <a
            href="tel:+919136242706"
            className="glass-button-secondary px-8 py-4 rounded-xl font-semibold inline-flex items-center"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Us
          </a>
        </div>
      </GlassCard>
    </PageLayout>
  );
}

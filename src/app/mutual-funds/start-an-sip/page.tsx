import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import {
  CheckCircle,
  FileText,
  User,
  Banknote,
  Play,
  MessageCircle,
} from 'lucide-react';

const steps = [
  {
    icon: User,
    title: 'Complete KYC',
    description:
      'Submit your PAN card, address proof, and a passport-size photograph.',
    duration: '1-2 days',
  },
  {
    icon: FileText,
    title: 'Select Funds',
    description:
      'Choose from our curated list of top-performing mutual funds based on your goals.',
    duration: 'Same day',
  },
  {
    icon: Banknote,
    title: 'Set Up Auto-Debit',
    description: 'Link your bank account for automatic monthly investments.',
    duration: 'Instant',
  },
  {
    icon: Play,
    title: 'Start Investing',
    description: 'Your SIP begins on your chosen date. Track progress anytime.',
    duration: 'Immediate',
  },
];

const documents = [
  'PAN Card (Mandatory)',
  'Aadhaar Card',
  'Passport-size photograph',
  'Cancelled cheque or bank statement',
  'Address proof (if different from Aadhaar)',
];

export default function StartAnSIPPage() {
  return (
    <PageLayout
      title="Start an SIP"
      subtitle="Begin your investment journey in 4 simple steps"
      bgImage="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2000&auto=format&fit=crop"
    >
      {/* Steps */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
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
              <p className="text-white/60 text-sm mb-3">{step.description}</p>
              <span className="text-accent-red text-xs">{step.duration}</span>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Documents Required */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        <GlassCard className="p-8" elevated>
          <h3 className="text-2xl font-bold text-white mb-6">
            Documents Required
          </h3>
          <ul className="space-y-4">
            {documents.map((doc, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent-red flex-shrink-0" />
                <span className="text-white/70">{doc}</span>
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard className="p-8" elevated>
          <h3 className="text-2xl font-bold text-white mb-6">Why Start Now?</h3>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-lg">
              <p className="text-accent-red font-semibold mb-1">
                Power of Compounding
              </p>
              <p className="text-white/60 text-sm">
                Starting early can double your wealth compared to starting 5
                years later
              </p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <p className="text-accent-red font-semibold mb-1">
                Rupee Cost Averaging
              </p>
              <p className="text-white/60 text-sm">
                Regular investments reduce market volatility impact
              </p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <p className="text-accent-red font-semibold mb-1">
                Financial Discipline
              </p>
              <p className="text-white/60 text-sm">
                Automated investing builds wealth without effort
              </p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* CTA */}
      <GlassCard className="p-8 md:p-12 text-center max-w-3xl mx-auto" elevated>
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Start Your SIP?
        </h2>
        <p className="text-white/70 mb-8">
          Contact us today to begin your investment journey. Our experts will
          guide you through the entire process and help you choose the right
          funds.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/919136242706"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button-primary px-8 py-4 rounded-xl font-semibold inline-flex items-center"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start on WhatsApp
          </a>
        </div>
      </GlassCard>
    </PageLayout>
  );
}

import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { Car, Home, Heart, Plane, Shield, Umbrella } from 'lucide-react';

const insuranceTypes = [
  {
    icon: Car,
    title: 'Motor Insurance',
    description:
      'Comprehensive coverage for your vehicles including cars, bikes, and commercial vehicles.',
    features: [
      'Third-party liability',
      'Own damage cover',
      'Personal accident cover',
      'Add-on riders',
    ],
  },
  {
    icon: Home,
    title: 'Home Insurance',
    description:
      'Protect your home and belongings against natural disasters, theft, and accidents.',
    features: [
      'Building coverage',
      'Content coverage',
      'Natural calamities',
      'Fire protection',
    ],
  },
  {
    icon: Heart,
    title: 'Health Insurance',
    description:
      'Comprehensive health coverage for individuals and families with cashless facilities.',
    features: [
      'Cashless treatment',
      'Pre & post hospitalization',
      'Day care procedures',
      'Annual health checkup',
    ],
  },
  {
    icon: Plane,
    title: 'Travel Insurance',
    description:
      'Travel worry-free with coverage for medical emergencies, trip cancellations, and baggage loss.',
    features: [
      'Medical emergencies',
      'Trip cancellation',
      'Baggage loss',
      'Flight delays',
    ],
  },
  {
    icon: Shield,
    title: 'Personal Accident',
    description:
      'Financial protection against accidental death and disability.',
    features: [
      'Accidental death',
      'Permanent disability',
      'Temporary disability',
      'Medical expenses',
    ],
  },
  {
    icon: Umbrella,
    title: 'Commercial Insurance',
    description:
      'Business protection covering property, liability, and employee-related risks.',
    features: [
      'Property insurance',
      'Liability coverage',
      'Workers compensation',
      'Business interruption',
    ],
  },
];

export default function GeneralInsurancePage() {
  return (
    <PageLayout
      title="General Insurance"
      subtitle="Comprehensive protection for your assets, health, and travels"
      bgImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2000&auto=format&fit=crop"
    >
      {/* Introduction */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-white/70 text-lg leading-relaxed">
          General insurance provides financial protection against unforeseen
          events that could impact your assets, health, and travels. At DEEPSEA
          FINVEST, we offer a wide range of general insurance products to
          safeguard what matters most to you.
        </p>
      </div>

      {/* Insurance Types Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {insuranceTypes.map(type => (
          <GlassCard key={type.title} className="p-6" hover>
            <div className="w-14 h-14 bg-accent-red/20 rounded-xl flex items-center justify-center mb-4">
              <type.icon className="h-7 w-7 text-accent-red" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {type.title}
            </h3>
            <p className="text-white/60 mb-4">{type.description}</p>
            <ul className="space-y-2">
              {type.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-white/50 text-sm flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-accent-red rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>

      {/* Why Choose Us */}
      <GlassCard className="p-8 md:p-12" elevated>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Why Choose DEEPSEA FINVEST for General Insurance?
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-accent-red mb-2">15+</div>
            <p className="text-white/60">Insurance Partners</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent-red mb-2">24/7</div>
            <p className="text-white/60">Claim Support</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent-red mb-2">Fast</div>
            <p className="text-white/60">Claim Settlement</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent-red mb-2">Best</div>
            <p className="text-white/60">Premium Rates</p>
          </div>
        </div>
      </GlassCard>
    </PageLayout>
  );
}

'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { Calculator, Info } from 'lucide-react';

export default function PremiumCalculatorPage() {
  const [age, setAge] = useState(30);
  const [sumAssured, setSumAssured] = useState(1000000);
  const [term, setTerm] = useState(20);
  const [smoker, setSmoker] = useState(false);

  // Simple premium estimation formula
  const estimatedPremium = Math.round(
    (sumAssured / 1000) * (0.5 + (age - 20) * 0.02 + (smoker ? 0.3 : 0)) * (1 / term + 0.05)
  );

  return (
    <PageLayout
      title="Premium Calculator"
      subtitle="Estimate your life insurance premium based on your requirements"
      bgImage="https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2000&auto=format&fit=crop"
    >
      {/* SEO Content Block */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Life Insurance Premium Estimator</h2>
        <p className="text-white/70 leading-relaxed mb-4">
          Life insurance premium depends on several factors including your age, sum assured, health condition, policy type, and tenure. Younger policyholders benefit from significantly lower premiums, making it essential to buy life insurance early in your career to lock in affordable rates.
        </p>
        <p className="text-white/60 leading-relaxed mb-6">
          Our Premium Calculator gives you an instant estimate of your annual life insurance premium based on your profile. Use this as a starting point to compare plans and choose the right coverage for your family&apos;s financial security.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          {[{label:'Premium for age 25', value:'~₹10,000/year'},{label:'Sum assured up to', value:'₹1 Crore+'},{label:'Tax benefit', value:'Sec 80C & 10(10D)'},{label:'Policy types', value:'Term, ULIP, Endowment'}].map(item => (
            <div key={item.label} className="p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white/50 text-xs mb-1">{item.label}</p>
              <p className="text-white font-semibold text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Calculator Form */}
        <GlassCard className="p-8" elevated>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-accent-red/20 rounded-xl flex items-center justify-center">
              <Calculator className="h-6 w-6 text-accent-red" />
            </div>
            <h2 className="text-2xl font-bold text-white">Calculate Premium</h2>
          </div>

          <div className="space-y-6">
            {/* Age */}
            <div>
              <label className="block text-white/70 mb-2">Your Age: {age} years</label>
              <input
                type="range"
                min="18"
                max="65"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
              <div className="flex justify-between text-white/40 text-sm mt-1">
                <span>18</span>
                <span>65</span>
              </div>
            </div>

            {/* Sum Assured */}
            <div>
              <label className="block text-white/70 mb-2">Sum Assured: ₹{sumAssured.toLocaleString()}</label>
              <input
                type="range"
                min="500000"
                max="5000000"
                step="100000"
                value={sumAssured}
                onChange={(e) => setSumAssured(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
              <div className="flex justify-between text-white/40 text-sm mt-1">
                <span>₹5L</span>
                <span>₹50L</span>
              </div>
            </div>

            {/* Policy Term */}
            <div>
              <label className="block text-white/70 mb-2">Policy Term: {term} years</label>
              <input
                type="range"
                min="5"
                max="40"
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
              <div className="flex justify-between text-white/40 text-sm mt-1">
                <span>5</span>
                <span>40</span>
              </div>
            </div>

            {/* Smoker Status */}
            <div>
              <label className="block text-white/70 mb-3">Do you smoke?</label>
              <div className="flex gap-4">
                <button
                  onClick={() => setSmoker(false)}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                    !smoker 
                      ? 'bg-accent-red text-white' 
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  No
                </button>
                <button
                  onClick={() => setSmoker(true)}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                    smoker 
                      ? 'bg-accent-red text-white' 
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Result Card */}
        <div className="space-y-6">
          <GlassCard className="p-8 text-center" elevated>
            <p className="text-white/60 mb-2">Estimated Annual Premium</p>
            <div className="text-5xl font-bold text-white mb-2">
              ₹{estimatedPremium.toLocaleString()}
            </div>
            <p className="text-white/40 text-sm">per year</p>
            
            <div className="mt-6 pt-6 border-t border-glass-border">
              <p className="text-white/60 text-sm">
                Monthly: <span className="text-white font-semibold">₹{Math.round(estimatedPremium / 12).toLocaleString()}</span>
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-accent-red flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-semibold mb-2">Important Note</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  This is an indicative premium estimate. Actual premium may vary based on 
                  medical history, occupation, lifestyle factors, and insurer underwriting 
                  guidelines. Contact us for accurate quotes from multiple insurers.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </PageLayout>
  );
}

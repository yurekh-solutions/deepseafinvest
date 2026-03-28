'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { Calculator, TrendingUp, PiggyBank } from 'lucide-react';

export default function FDCalculatorPage() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(5);
  const [compoundFreq, setCompoundFreq] = useState(4); // Quarterly

  // Compound interest calculation
  const maturityAmount = principal * Math.pow(1 + rate / 100 / compoundFreq, compoundFreq * years);
  const totalInterest = maturityAmount - principal;

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${amount.toLocaleString()}`;
  };

  return (
    <PageLayout
      title="FD Calculator"
      subtitle="Calculate your fixed deposit returns and plan your investments"
      bgImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop"
    >
      {/* SEO Content Block */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Fixed Deposit (FD) Returns Calculator</h2>
        <p className="text-white/70 leading-relaxed mb-4">
          Fixed Deposits are one of India&apos;s most popular and trusted investment instruments. They offer guaranteed returns, capital safety, and flexible tenures — making them ideal for conservative investors seeking predictable income. FDs are backed by the bank or NBFC and offer returns ranging from 5.5% to 9.5% depending on the issuer and tenure.
        </p>
        <p className="text-white/60 leading-relaxed mb-6">
          Use our FD Calculator to compare maturity amounts across different interest rates and tenures. Whether you are looking for a short-term parking option or a multi-year investment, this calculator helps you make an informed decision.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          {[{label:'Bank FD returns', value:'5.5–7.5% p.a.'},{label:'Corporate FD returns', value:'7.5–9.5% p.a.'},{label:'Min deposit', value:'₹1,000'},{label:'Tenure range', value:'7 days –10 years'}].map(item => (
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
            <h2 className="text-2xl font-bold text-white">FD Calculator</h2>
          </div>

          <div className="space-y-6">
            {/* Principal Amount */}
            <div>
              <label className="block text-white/70 mb-2">Investment Amount: {formatCurrency(principal)}</label>
              <input
                type="range"
                min="10000"
                max="10000000"
                step="10000"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
              <div className="flex justify-between text-white/40 text-sm mt-1">
                <span>₹10K</span>
                <span>₹1 Cr</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <label className="block text-white/70 mb-2">Interest Rate: {rate}% p.a.</label>
              <input
                type="range"
                min="3"
                max="12"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
              <div className="flex justify-between text-white/40 text-sm mt-1">
                <span>3%</span>
                <span>12%</span>
              </div>
            </div>

            {/* Time Period */}
            <div>
              <label className="block text-white/70 mb-2">Time Period: {years} years</label>
              <input
                type="range"
                min="1"
                max="20"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
              <div className="flex justify-between text-white/40 text-sm mt-1">
                <span>1 year</span>
                <span>20 years</span>
              </div>
            </div>

            {/* Compounding Frequency */}
            <div>
              <label className="block text-white/70 mb-3">Compounding Frequency</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Monthly', value: 12 },
                  { label: 'Quarterly', value: 4 },
                  { label: 'Half-Yearly', value: 2 },
                  { label: 'Yearly', value: 1 },
                ].map((freq) => (
                  <button
                    key={freq.value}
                    onClick={() => setCompoundFreq(freq.value)}
                    className={`py-2 px-4 rounded-xl font-medium transition-all ${
                      compoundFreq === freq.value
                        ? 'bg-accent-red text-white'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    {freq.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Results */}
        <div className="space-y-6">
          <GlassCard className="p-8" elevated>
            <div className="text-center mb-8">
              <p className="text-white/60 mb-2">Maturity Amount</p>
              <div className="text-4xl md:text-5xl font-bold text-white">
                {formatCurrency(maturityAmount)}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-glass-border">
                <div className="flex items-center gap-2">
                  <PiggyBank className="h-5 w-5 text-white/40" />
                  <span className="text-white/70">Principal Amount</span>
                </div>
                <span className="text-white font-semibold">{formatCurrency(principal)}</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-glass-border">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent-red" />
                  <span className="text-white/70">Total Interest</span>
                </div>
                <span className="text-accent-red font-semibold">{formatCurrency(totalInterest)}</span>
              </div>

              <div className="flex justify-between items-center py-3">
                <span className="text-white/70">Effective Returns</span>
                <span className="text-white font-semibold">
                  {((totalInterest / principal) * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          </GlassCard>

          {/* Year-wise Breakdown Preview */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Year-wise Growth</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {Array.from({ length: Math.min(years, 10) }, (_, i) => {
                const year = i + 1;
                const amount = principal * Math.pow(1 + rate / 100 / compoundFreq, compoundFreq * year);
                return (
                  <div key={year} className="flex justify-between text-sm">
                    <span className="text-white/50">Year {year}</span>
                    <span className="text-white/80">{formatCurrency(amount)}</span>
                  </div>
                );
              })}
              {years > 10 && (
                <p className="text-white/40 text-sm text-center pt-2">... and {years - 10} more years</p>
              )}
            </div>
          </GlassCard>
        </div>
      </div>
    </PageLayout>
  );
}

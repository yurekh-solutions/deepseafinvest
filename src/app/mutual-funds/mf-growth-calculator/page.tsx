'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { Calculator, TrendingUp, PieChart } from 'lucide-react';

export default function MFGrowthCalculatorPage() {
  const [lumpsum, setLumpsum] = useState(100000);
  const [years, setYears] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);

  // Growth calculation
  const futureValue = lumpsum * Math.pow(1 + expectedReturn / 100, years);
  const totalReturns = futureValue - lumpsum;

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${amount.toLocaleString()}`;
  };

  // Generate year-wise data
  const yearWiseData = Array.from({ length: years }, (_, i) => {
    const year = i + 1;
    const value = lumpsum * Math.pow(1 + expectedReturn / 100, year);
    return { year, value };
  });

  return (
    <PageLayout
      title="MF Growth Calculator"
      subtitle="Calculate the growth of your lump sum mutual fund investment"
      bgImage="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2000&auto=format&fit=crop"
    >
      {/* SEO Content Block */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Lump Sum Mutual Fund Growth Calculator
        </h2>
        <p className="text-white/70 leading-relaxed mb-4">
          A lump sum investment in mutual funds is ideal when you have a large
          amount available and want to deploy it immediately to benefit from
          market growth. Unlike SIP, lump sum investing puts your entire corpus
          to work from day one, maximising the compounding effect over the long
          term.
        </p>
        <p className="text-white/60 leading-relaxed mb-6">
          Use our MF Growth Calculator to visualise how a one-time investment
          grows over years at different return rates. This tool helps you
          compare growth across equity, debt and hybrid funds before making an
          informed investment decision.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
          {[
            { label: 'Best for', value: 'Large one-time investment' },
            { label: 'Expected returns', value: '10–18% p.a.' },
            { label: 'Ideal tenure', value: '3–5+ years' },
          ].map(item => (
            <div
              key={item.label}
              className="p-3 rounded-xl bg-white/5 border border-white/10"
            >
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
            <h2 className="text-2xl font-bold text-white">
              Lumpsum Calculator
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-white/70 mb-2">
                Investment Amount: {formatCurrency(lumpsum)}
              </label>
              <input
                type="range"
                min="10000"
                max="10000000"
                step="10000"
                value={lumpsum}
                onChange={e => setLumpsum(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
            </div>

            <div>
              <label className="block text-white/70 mb-2">
                Investment Period: {years} years
              </label>
              <input
                type="range"
                min="1"
                max="30"
                value={years}
                onChange={e => setYears(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
            </div>

            <div>
              <label className="block text-white/70 mb-2">
                Expected Return: {expectedReturn}% p.a.
              </label>
              <input
                type="range"
                min="6"
                max="20"
                step="0.5"
                value={expectedReturn}
                onChange={e => setExpectedReturn(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
            </div>
          </div>
        </GlassCard>

        {/* Results */}
        <div className="space-y-6">
          <GlassCard className="p-8" elevated>
            <div className="text-center mb-6">
              <p className="text-white/60 mb-2">Future Value</p>
              <div className="text-4xl font-bold text-accent-red">
                {formatCurrency(futureValue)}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-glass-border">
                <span className="text-white/70">Initial Investment</span>
                <span className="text-white font-semibold">
                  {formatCurrency(lumpsum)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-glass-border">
                <span className="text-white/70">Total Returns</span>
                <span className="text-accent-red font-semibold">
                  {formatCurrency(totalReturns)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-white/70">Absolute Returns</span>
                <span className="text-white font-semibold">
                  {((totalReturns / lumpsum) * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <PieChart className="h-5 w-5 text-accent-red" />
              Year-wise Growth
            </h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {yearWiseData.map(data => (
                <div key={data.year} className="flex justify-between text-sm">
                  <span className="text-white/50">Year {data.year}</span>
                  <span className="text-white/80">
                    {formatCurrency(data.value)}
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </PageLayout>
  );
}

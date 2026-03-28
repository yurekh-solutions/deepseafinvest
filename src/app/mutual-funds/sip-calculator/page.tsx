'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { Calculator, TrendingUp, Calendar, Target } from 'lucide-react';

export default function SIPCalculatorPage() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [years, setYears] = useState(10);

  // SIP calculation
  const months = years * 12;
  const monthlyRate = expectedReturn / 100 / 12;

  // Future value of SIP formula
  const futureValue =
    monthlyInvestment *
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate);
  const totalInvestment = monthlyInvestment * months;
  const wealthGained = futureValue - totalInvestment;

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
      title="SIP Calculator"
      subtitle="Calculate your mutual fund SIP returns and plan your wealth creation"
      bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
    >
      {/* SEO Content Block */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          SIP Calculator — Plan Your Wealth Creation
        </h2>
        <p className="text-white/70 leading-relaxed mb-4">
          A Systematic Investment Plan (SIP) is the most disciplined and
          effective way to build long-term wealth. By investing a fixed amount
          every month in mutual funds, you harness the power of compounding —
          your returns earn returns, growing your corpus exponentially over
          time.
        </p>
        <p className="text-white/60 leading-relaxed mb-6">
          Our SIP Calculator helps you instantly estimate how much your monthly
          investments will grow over your chosen period at an expected rate of
          return. Whether you are saving for a home, your child&apos;s
          education, or retirement, SIP investing helps you reach your goals
          systematically without market timing stress.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          {[
            { label: 'Start with just', value: '₹500/month' },
            { label: 'Tax benefit under', value: 'Sec 80C' },
            { label: 'Expected returns', value: '12–15% p.a.' },
            { label: 'Minimum tenure', value: '1 Year' },
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
            <h2 className="text-2xl font-bold text-white">SIP Calculator</h2>
          </div>

          <div className="space-y-6">
            {/* Monthly Investment */}
            <div>
              <label className="block text-white/70 mb-2">
                Monthly Investment: {formatCurrency(monthlyInvestment)}
              </label>
              <input
                type="range"
                min="500"
                max="100000"
                step="500"
                value={monthlyInvestment}
                onChange={e => setMonthlyInvestment(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
              <div className="flex justify-between text-white/40 text-sm mt-1">
                <span>₹500</span>
                <span>₹1 Lakh</span>
              </div>
            </div>

            {/* Expected Return */}
            <div>
              <label className="block text-white/70 mb-2">
                Expected Return Rate: {expectedReturn}% p.a.
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
              <div className="flex justify-between text-white/40 text-sm mt-1">
                <span>6%</span>
                <span>20%</span>
              </div>
            </div>

            {/* Time Period */}
            <div>
              <label className="block text-white/70 mb-2">
                Time Period: {years} years
              </label>
              <input
                type="range"
                min="1"
                max="30"
                value={years}
                onChange={e => setYears(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
              <div className="flex justify-between text-white/40 text-sm mt-1">
                <span>1 year</span>
                <span>30 years</span>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Results */}
        <div className="space-y-6">
          <GlassCard className="p-8" elevated>
            <div className="text-center mb-8">
              <p className="text-white/60 mb-2">Estimated Returns</p>
              <div className="text-4xl md:text-5xl font-bold text-accent-red">
                {formatCurrency(futureValue)}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-glass-border">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-white/40" />
                  <span className="text-white/70">Total Investment</span>
                </div>
                <span className="text-white font-semibold">
                  {formatCurrency(totalInvestment)}
                </span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-glass-border">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent-red" />
                  <span className="text-white/70">Wealth Gained</span>
                </div>
                <span className="text-accent-red font-semibold">
                  {formatCurrency(wealthGained)}
                </span>
              </div>

              <div className="flex justify-between items-center py-3">
                <span className="text-white/70">Absolute Returns</span>
                <span className="text-white font-semibold">
                  {((wealthGained / totalInvestment) * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          </GlassCard>

          {/* Investment Tips */}
          <GlassCard className="p-6">
            <div className="flex items-start gap-3">
              <Target className="h-5 w-5 text-accent-red flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-semibold mb-2">
                  SIP Investment Tips
                </h4>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>• Start early to benefit from compounding</li>
                  <li>• Increase SIP amount annually (Step-up SIP)</li>
                  <li>• Stay invested for long-term goals</li>
                  <li>• Don&apos;t stop SIPs during market downturns</li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </PageLayout>
  );
}

'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { Calculator, Target, TrendingUp, Calendar } from 'lucide-react';

export default function GoalCalculatorPage() {
  const [goalAmount, setGoalAmount] = useState(1000000);
  const [years, setYears] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [existingSavings, setExistingSavings] = useState(0);

  // Calculate required monthly SIP
  const months = years * 12;
  const monthlyRate = expectedReturn / 100 / 12;

  // Future value of existing savings
  const futureValueOfSavings =
    existingSavings * Math.pow(1 + expectedReturn / 100, years);

  // Remaining amount needed
  const remainingAmount = Math.max(0, goalAmount - futureValueOfSavings);

  // Required monthly SIP
  const requiredSIP =
    remainingAmount > 0
      ? remainingAmount /
        (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
          (1 + monthlyRate))
      : 0;

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
      title="Goal Calculator"
      subtitle="Calculate how much you need to invest monthly to achieve your financial goals"
      bgImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop"
    >
      {/* SEO Content Block */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Financial Goal Planning Calculator
        </h2>
        <p className="text-white/70 leading-relaxed mb-4">
          Whether your goal is buying a home, funding higher education, or
          building an emergency corpus — a goal-based investment approach
          ensures you stay on track. By working backwards from your target
          amount, you can calculate exactly how much to invest each month to
          reach your goal on time.
        </p>
        <p className="text-white/60 leading-relaxed mb-6">
          Our Goal Calculator factors in inflation, your investment timeline,
          and expected returns to give you a precise monthly SIP figure. Set
          clear financial milestones and let systematic investing do the rest.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
          {[
            { label: 'Accounts for', value: 'Inflation impact' },
            { label: 'Returns assumption', value: '8–15% p.a.' },
            { label: 'Goals covered', value: 'Home, Education, Travel' },
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
            <h2 className="text-2xl font-bold text-white">Goal Planner</h2>
          </div>

          <div className="space-y-6">
            {/* Goal Amount */}
            <div>
              <label className="block text-white/70 mb-2">
                Target Amount: {formatCurrency(goalAmount)}
              </label>
              <input
                type="range"
                min="100000"
                max="10000000"
                step="50000"
                value={goalAmount}
                onChange={e => setGoalAmount(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
              <div className="flex justify-between text-white/40 text-sm mt-1">
                <span>₹1 Lakh</span>
                <span>₹1 Crore</span>
              </div>
            </div>

            {/* Years */}
            <div>
              <label className="block text-white/70 mb-2">
                Time to Goal: {years} years
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

            {/* Expected Return */}
            <div>
              <label className="block text-white/70 mb-2">
                Expected Return: {expectedReturn}% p.a.
              </label>
              <input
                type="range"
                min="6"
                max="18"
                step="0.5"
                value={expectedReturn}
                onChange={e => setExpectedReturn(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
              <div className="flex justify-between text-white/40 text-sm mt-1">
                <span>6%</span>
                <span>18%</span>
              </div>
            </div>

            {/* Existing Savings */}
            <div>
              <label className="block text-white/70 mb-2">
                Existing Savings: {formatCurrency(existingSavings)}
              </label>
              <input
                type="range"
                min="0"
                max="5000000"
                step="25000"
                value={existingSavings}
                onChange={e => setExistingSavings(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
              <div className="flex justify-between text-white/40 text-sm mt-1">
                <span>₹0</span>
                <span>₹50 Lakhs</span>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Results */}
        <div className="space-y-6">
          <GlassCard className="p-8" elevated>
            <div className="text-center mb-8">
              <p className="text-white/60 mb-2">Required Monthly SIP</p>
              <div className="text-4xl md:text-5xl font-bold text-accent-red">
                {formatCurrency(requiredSIP)}
              </div>
              <p className="text-white/40 text-sm mt-2">per month</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-glass-border">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-white/40" />
                  <span className="text-white/70">Goal Amount</span>
                </div>
                <span className="text-white font-semibold">
                  {formatCurrency(goalAmount)}
                </span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-glass-border">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-white/40" />
                  <span className="text-white/70">Future Value of Savings</span>
                </div>
                <span className="text-white font-semibold">
                  {formatCurrency(futureValueOfSavings)}
                </span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-glass-border">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-accent-red" />
                  <span className="text-white/70">Remaining Needed</span>
                </div>
                <span className="text-accent-red font-semibold">
                  {formatCurrency(remainingAmount)}
                </span>
              </div>

              <div className="flex justify-between items-center py-3">
                <span className="text-white/70">Total Investment via SIP</span>
                <span className="text-white font-semibold">
                  {formatCurrency(requiredSIP * months)}
                </span>
              </div>
            </div>
          </GlassCard>

          {/* Goal Examples */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Common Goals
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => {
                  setGoalAmount(2000000);
                  setYears(5);
                }}
                className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <p className="text-white font-medium">Dream Car</p>
                <p className="text-white/50 text-sm">₹20 Lakhs in 5 years</p>
              </button>
              <button
                onClick={() => {
                  setGoalAmount(5000000);
                  setYears(10);
                }}
                className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <p className="text-white font-medium">Higher Education</p>
                <p className="text-white/50 text-sm">₹50 Lakhs in 10 years</p>
              </button>
              <button
                onClick={() => {
                  setGoalAmount(10000000);
                  setYears(15);
                }}
                className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <p className="text-white font-medium">
                  Dream Home Down Payment
                </p>
                <p className="text-white/50 text-sm">₹1 Crore in 15 years</p>
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </PageLayout>
  );
}

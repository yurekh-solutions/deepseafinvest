'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { Calculator, Sun, TrendingUp, PiggyBank } from 'lucide-react';

export default function RetirementPlannerPage() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpenses, setMonthlyExpenses] = useState(50000);
  const [existingCorpus, setExistingCorpus] = useState(500000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [inflation, setInflation] = useState(6);

  const yearsToRetirement = retirementAge - currentAge;
  const yearsInRetirement = 85 - retirementAge; // Assuming life expectancy of 85

  // Future monthly expenses adjusted for inflation
  const futureMonthlyExpenses =
    monthlyExpenses * Math.pow(1 + inflation / 100, yearsToRetirement);

  // Required corpus at retirement (using 4% withdrawal rule approximation)
  const requiredCorpus = futureMonthlyExpenses * 12 * 25;

  // Future value of existing corpus
  const futureValueOfExisting =
    existingCorpus * Math.pow(1 + expectedReturn / 100, yearsToRetirement);

  // Shortfall
  const shortfall = Math.max(0, requiredCorpus - futureValueOfExisting);

  // Required monthly SIP
  const months = yearsToRetirement * 12;
  const monthlyRate = expectedReturn / 100 / 12;
  const requiredSIP =
    shortfall > 0
      ? shortfall /
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
      title="Retirement Planner"
      subtitle="Plan your retirement corpus and secure your golden years"
      bgImage="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2000&auto=format&fit=crop"
    >
      {/* SEO Content Block */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Retirement Corpus Planner
        </h2>
        <p className="text-white/70 leading-relaxed mb-4">
          Retirement planning is not just about saving — it is about building a
          corpus large enough to sustain your lifestyle for 20–30 years without
          active income. With rising inflation and increasing life expectancy,
          early retirement planning through mutual funds and SIPs has never been
          more critical.
        </p>
        <p className="text-white/60 leading-relaxed mb-6">
          Our Retirement Planner calculates how much you need to save each month
          starting today to build your desired retirement corpus. It accounts
          for inflation and post-retirement expenses to give you a realistic
          savings target.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          {[
            { label: 'Plan for', value: '20–30 years post-retirement' },
            { label: 'Inflation adjusted', value: 'Returns' },
            { label: 'Ideal start age', value: '25–35 years' },
            { label: 'Recommended via', value: 'SIP in Mutual Funds' },
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
              Retirement Calculator
            </h2>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white/70 mb-2 text-sm">
                  Current Age: {currentAge}
                </label>
                <input
                  type="range"
                  min="20"
                  max="60"
                  value={currentAge}
                  onChange={e => setCurrentAge(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
                />
              </div>
              <div>
                <label className="block text-white/70 mb-2 text-sm">
                  Retirement Age: {retirementAge}
                </label>
                <input
                  type="range"
                  min="45"
                  max="70"
                  value={retirementAge}
                  onChange={e => setRetirementAge(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/70 mb-2">
                Current Monthly Expenses: {formatCurrency(monthlyExpenses)}
              </label>
              <input
                type="range"
                min="20000"
                max="500000"
                step="5000"
                value={monthlyExpenses}
                onChange={e => setMonthlyExpenses(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
            </div>

            <div>
              <label className="block text-white/70 mb-2">
                Existing Retirement Corpus: {formatCurrency(existingCorpus)}
              </label>
              <input
                type="range"
                min="0"
                max="50000000"
                step="100000"
                value={existingCorpus}
                onChange={e => setExistingCorpus(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white/70 mb-2 text-sm">
                  Expected Return: {expectedReturn}%
                </label>
                <input
                  type="range"
                  min="8"
                  max="15"
                  step="0.5"
                  value={expectedReturn}
                  onChange={e => setExpectedReturn(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
                />
              </div>
              <div>
                <label className="block text-white/70 mb-2 text-sm">
                  Inflation: {inflation}%
                </label>
                <input
                  type="range"
                  min="4"
                  max="10"
                  step="0.5"
                  value={inflation}
                  onChange={e => setInflation(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
                />
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Results */}
        <div className="space-y-6">
          <GlassCard className="p-8" elevated>
            <div className="text-center mb-6">
              <p className="text-white/60 mb-2">Required Monthly SIP</p>
              <div className="text-4xl font-bold text-accent-red">
                {formatCurrency(requiredSIP)}
              </div>
              <p className="text-white/40 text-sm mt-1">
                for {yearsToRetirement} years
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-glass-border text-sm">
                <span className="text-white/70">
                  Required Corpus at Retirement
                </span>
                <span className="text-white font-semibold">
                  {formatCurrency(requiredCorpus)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-glass-border text-sm">
                <span className="text-white/70">Future Value of Existing</span>
                <span className="text-white font-semibold">
                  {formatCurrency(futureValueOfExisting)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-glass-border text-sm">
                <span className="text-white/70">Shortfall</span>
                <span className="text-accent-red font-semibold">
                  {formatCurrency(shortfall)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 text-sm">
                <span className="text-white/70">Future Monthly Expenses</span>
                <span className="text-white font-semibold">
                  {formatCurrency(futureMonthlyExpenses)}/mo
                </span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-start gap-3">
              <Sun className="h-5 w-5 text-accent-red flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-semibold mb-2">
                  Retirement Planning Tips
                </h4>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>
                    • Start early - even small amounts compound significantly
                  </li>
                  <li>• Increase SIP by 10% every year</li>
                  <li>• Diversify across equity and debt funds</li>
                  <li>• Review and rebalance annually</li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </PageLayout>
  );
}

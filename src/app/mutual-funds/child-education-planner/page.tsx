'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { Calculator, GraduationCap, TrendingUp, PiggyBank } from 'lucide-react';

export default function ChildEducationPlannerPage() {
  const [childAge, setChildAge] = useState(5);
  const [educationAge, setEducationAge] = useState(18);
  const [currentCost, setCurrentCost] = useState(2000000);
  const [inflation, setInflation] = useState(8);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [existingSavings, setExistingSavings] = useState(0);

  const yearsToGoal = educationAge - childAge;

  // Future cost of education
  const futureCost = currentCost * Math.pow(1 + inflation / 100, yearsToGoal);

  // Future value of existing savings
  const futureValueOfExisting =
    existingSavings * Math.pow(1 + expectedReturn / 100, yearsToGoal);

  // Shortfall
  const shortfall = Math.max(0, futureCost - futureValueOfExisting);

  // Required monthly SIP
  const months = yearsToGoal * 12;
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
      title="Child Education Planner"
      subtitle="Plan ahead for your child's education and secure their future"
      bgImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000&auto=format&fit=crop"
    >
      {/* SEO Content Block */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Child Education Cost Planner
        </h2>
        <p className="text-white/70 leading-relaxed mb-4">
          Education costs in India are rising at 10–12% per year. Planning early
          for your child&apos;s education is one of the most important financial
          decisions you can make. Whether it is engineering, medicine, MBA, or
          studying abroad, having a dedicated education fund ensures your
          child&apos;s dreams are never limited by finances.
        </p>
        <p className="text-white/60 leading-relaxed mb-6">
          Our Child Education Planner estimates the future cost of education
          accounting for inflation, and calculates the monthly SIP required to
          accumulate that corpus by the time your child is ready for college.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
          {[
            { label: 'Education inflation', value: '10–12% per year' },
            { label: 'Start planning', value: 'As early as possible' },
            { label: 'Best instrument', value: 'Equity Mutual Funds' },
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
            <h2 className="text-2xl font-bold text-white">Education Planner</h2>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white/70 mb-2 text-sm">
                  Child&apos;s Age: {childAge}
                </label>
                <input
                  type="range"
                  min="0"
                  max="15"
                  value={childAge}
                  onChange={e => setChildAge(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
                />
              </div>
              <div>
                <label className="block text-white/70 mb-2 text-sm">
                  Education Age: {educationAge}
                </label>
                <input
                  type="range"
                  min="16"
                  max="25"
                  value={educationAge}
                  onChange={e => setEducationAge(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/70 mb-2">
                Current Education Cost: {formatCurrency(currentCost)}
              </label>
              <input
                type="range"
                min="500000"
                max="10000000"
                step="100000"
                value={currentCost}
                onChange={e => setCurrentCost(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
            </div>

            <div>
              <label className="block text-white/70 mb-2">
                Existing Savings: {formatCurrency(existingSavings)}
              </label>
              <input
                type="range"
                min="0"
                max="5000000"
                step="50000"
                value={existingSavings}
                onChange={e => setExistingSavings(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white/70 mb-2 text-sm">
                  Education Inflation: {inflation}%
                </label>
                <input
                  type="range"
                  min="5"
                  max="15"
                  step="0.5"
                  value={inflation}
                  onChange={e => setInflation(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
                />
              </div>
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
                for {yearsToGoal} years
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-glass-border text-sm">
                <span className="text-white/70">Future Education Cost</span>
                <span className="text-white font-semibold">
                  {formatCurrency(futureCost)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-glass-border text-sm">
                <span className="text-white/70">Future Value of Savings</span>
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
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-start gap-3">
              <GraduationCap className="h-5 w-5 text-accent-red flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-semibold mb-2">
                  Education Planning Tips
                </h4>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>
                    • Start as early as possible - even before the child is born
                  </li>
                  <li>• Consider education inflation (typically 8-10%)</li>
                  <li>• Use SIPs for disciplined savings</li>
                  <li>• Explore dedicated children&apos;s mutual funds</li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </PageLayout>
  );
}

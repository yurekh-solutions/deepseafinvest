'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { Calculator, TrendingUp, Calendar } from 'lucide-react';

export default function RecurringDepositsCalculatorPage() {
  const [monthlyDeposit, setMonthlyDeposit] = useState(5000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(5);

  // RD calculation formula: M = P × (1 + r/n)^(nt) for each deposit
  // Simplified approximation for monthly deposits
  const months = years * 12;
  const monthlyRate = rate / 100 / 12;
  
  // Future value of series formula
  const maturityAmount = monthlyDeposit * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  const totalDeposit = monthlyDeposit * months;
  const totalInterest = maturityAmount - totalDeposit;

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
      title="Recurring Deposit Calculator"
      subtitle="Calculate returns on your monthly savings with RD"
      bgImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2000&auto=format&fit=crop"
    >
      {/* SEO Content Block */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Recurring Deposit (RD) Returns Calculator</h2>
        <p className="text-white/70 leading-relaxed mb-4">
          A Recurring Deposit is the perfect savings instrument for those who want to save regularly with guaranteed returns. By depositing a fixed amount every month, you build a corpus steadily while earning interest similar to a fixed deposit. RDs are risk-free and ideal for short-to-medium term goals.
        </p>
        <p className="text-white/60 leading-relaxed mb-6">
          Our RD Calculator computes the total maturity amount based on your monthly deposit, interest rate, and tenure. It is an excellent way to plan for upcoming expenses like a vacation, gadget purchase, or annual insurance premium.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
          {[{label:'Interest rates', value:'5.5–7.5% p.a.'},{label:'Min monthly deposit', value:'₹100'},{label:'Tenure', value:'6 months –10 years'}].map(item => (
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
            <h2 className="text-2xl font-bold text-white">RD Calculator</h2>
          </div>

          <div className="space-y-6">
            {/* Monthly Deposit */}
            <div>
              <label className="block text-white/70 mb-2">Monthly Deposit: {formatCurrency(monthlyDeposit)}</label>
              <input
                type="range"
                min="500"
                max="100000"
                step="500"
                value={monthlyDeposit}
                onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
              <div className="flex justify-between text-white/40 text-sm mt-1">
                <span>₹500</span>
                <span>₹1 Lakh</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <label className="block text-white/70 mb-2">Interest Rate: {rate}% p.a.</label>
              <input
                type="range"
                min="4"
                max="9"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
              <div className="flex justify-between text-white/40 text-sm mt-1">
                <span>4%</span>
                <span>9%</span>
              </div>
            </div>

            {/* Time Period */}
            <div>
              <label className="block text-white/70 mb-2">Time Period: {years} years ({months} months)</label>
              <input
                type="range"
                min="1"
                max="10"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
              <div className="flex justify-between text-white/40 text-sm mt-1">
                <span>1 year</span>
                <span>10 years</span>
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
                  <Calendar className="h-5 w-5 text-white/40" />
                  <span className="text-white/70">Total Deposit ({months} months)</span>
                </div>
                <span className="text-white font-semibold">{formatCurrency(totalDeposit)}</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-glass-border">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent-red" />
                  <span className="text-white/70">Total Interest Earned</span>
                </div>
                <span className="text-accent-red font-semibold">{formatCurrency(totalInterest)}</span>
              </div>

              <div className="flex justify-between items-center py-3">
                <span className="text-white/70">Wealth Gain</span>
                <span className="text-white font-semibold">
                  {((totalInterest / totalDeposit) * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          </GlassCard>

          {/* RD Benefits */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Benefits of RD</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent-red rounded-full mt-2" />
                <span className="text-white/70 text-sm">Disciplined savings habit with small monthly contributions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent-red rounded-full mt-2" />
                <span className="text-white/70 text-sm">Guaranteed returns unaffected by market fluctuations</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent-red rounded-full mt-2" />
                <span className="text-white/70 text-sm">Loan facility available against RD balance</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent-red rounded-full mt-2" />
                <span className="text-white/70 text-sm">Start with as low as ₹500 per month</span>
              </li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </PageLayout>
  );
}

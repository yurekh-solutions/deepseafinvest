'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { Calculator, Clock, AlertTriangle, TrendingUp } from 'lucide-react';

export default function SIPDelayPage() {
  const [monthlySIP, setMonthlySIP] = useState(10000);
  const [years, setYears] = useState(20);
  const [delayYears, setDelayYears] = useState(5);
  const [expectedReturn, setExpectedReturn] = useState(12);

  // Calculate corpus if started today
  const months = years * 12;
  const monthlyRate = expectedReturn / 100 / 12;
  const corpusIfStartedToday = monthlySIP * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

  // Calculate corpus if delayed
  const delayedMonths = (years - delayYears) * 12;
  const corpusIfDelayed = monthlySIP * ((Math.pow(1 + monthlyRate, delayedMonths) - 1) / monthlyRate) * (1 + monthlyRate);

  // Cost of delay
  const costOfDelay = corpusIfStartedToday - corpusIfDelayed;

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
      title="SIP Delay Calculator"
      subtitle="See how delaying your investments can cost you lakhs"
      bgImage="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=2000&auto=format&fit=crop"
    >
      {/* SEO Content Block */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The True Cost of Delaying Your SIP</h2>
        <p className="text-white/70 leading-relaxed mb-4">
          Every year you delay starting your SIP can cost you lakhs in lost returns. Compounding is time-sensitive — the earlier you begin, the more your money multiplies. A delay of just 5 years can reduce your final corpus by 40–60% depending on your investment horizon.
        </p>
        <p className="text-white/60 leading-relaxed mb-6">
          Our SIP Delay Calculator visually shows the difference between starting today versus waiting. See how much wealth you lose for every year of delay, and make an informed decision to start your investment journey now.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
          {[{label:'5 year delay costs', value:'40–60% corpus'},{label:'Start today with', value:'₹500/month'},{label:'Power of', value:'Compounding'}].map(item => (
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
            <h2 className="text-2xl font-bold text-white">Cost of Delay</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-white/70 mb-2">Monthly SIP Amount: {formatCurrency(monthlySIP)}</label>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={monthlySIP}
                onChange={(e) => setMonthlySIP(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
            </div>

            <div>
              <label className="block text-white/70 mb-2">Investment Period: {years} years</label>
              <input
                type="range"
                min="10"
                max="30"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
            </div>

            <div>
              <label className="block text-white/70 mb-2">Delay by: {delayYears} years</label>
              <input
                type="range"
                min="1"
                max={years - 5}
                value={delayYears}
                onChange={(e) => setDelayYears(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
            </div>

            <div>
              <label className="block text-white/70 mb-2">Expected Return: {expectedReturn}% p.a.</label>
              <input
                type="range"
                min="8"
                max="15"
                step="0.5"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-red"
              />
            </div>
          </div>
        </GlassCard>

        {/* Results */}
        <div className="space-y-6">
          <GlassCard className="p-8" elevated>
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <AlertTriangle className="h-6 w-6 text-yellow-500" />
                <p className="text-white/60">Cost of Delaying</p>
              </div>
              <div className="text-4xl font-bold text-accent-red">
                {formatCurrency(costOfDelay)}
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-green-500/10 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-green-400 text-sm">If Started Today</span>
                </div>
                <p className="text-2xl font-bold text-white">{formatCurrency(corpusIfStartedToday)}</p>
              </div>

              <div className="p-4 bg-red-500/10 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="h-4 w-4 text-red-400" />
                  <span className="text-red-400 text-sm">If Delayed by {delayYears} Years</span>
                </div>
                <p className="text-2xl font-bold text-white">{formatCurrency(corpusIfDelayed)}</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h4 className="text-white font-semibold mb-3">Key Insight</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              By delaying just {delayYears} years, you could lose {formatCurrency(costOfDelay)}. 
              The power of compounding works best when you start early. Even small delays can 
              significantly impact your final corpus.
            </p>
          </GlassCard>
        </div>
      </div>
    </PageLayout>
  );
}

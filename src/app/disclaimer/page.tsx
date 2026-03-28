import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { AlertTriangle } from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <PageLayout
      title="Disclaimer"
      subtitle="Important information about our services and website content"
      showCta={false}
      bgImage="https://images.unsplash.com/photo-1521791055366-0d553872952f?q=80&w=2000&auto=format&fit=crop"
    >
      <div className="max-w-4xl mx-auto">
        <GlassCard className="p-8 md:p-12" elevated>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-yellow-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                Important Disclaimer
              </h2>
              <p className="text-white/60">
                Please read carefully before using our services
              </p>
            </div>
          </div>

          <div className="space-y-8 text-white/70">
            <section>
              <h3 className="text-xl font-semibold text-white mb-3">
                Investment Risk Disclaimer
              </h3>
              <p className="leading-relaxed">
                Investments in securities markets are subject to market risks.
                Past performance is not indicative of future returns. The value
                of investments can go up or down depending on various market
                factors. Please read all scheme-related documents carefully
                before investing.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">
                No Guarantee of Returns
              </h3>
              <p className="leading-relaxed">
                DEEPSEA FINVEST does not guarantee any returns on investments.
                All investment recommendations are based on research and
                analysis, but actual returns may vary. Investors are advised to
                consult their financial advisors before making any investment
                decisions.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">
                AMFI Registration
              </h3>
              <p className="leading-relaxed">
                We are AMFI registered mutual fund distributors. Registration
                does not imply any endorsement by AMFI or guarantee of
                performance. Please verify our registration details on the AMFI
                website.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">
                Information Accuracy
              </h3>
              <p className="leading-relaxed">
                While we strive to provide accurate and up-to-date information,
                we make no representations or warranties of any kind, express or
                implied, about the completeness, accuracy, reliability, or
                suitability of the information contained on this website.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">
                Third-Party Links
              </h3>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites. We have
                no control over the content and nature of these sites. The
                inclusion of any links does not necessarily imply a
                recommendation or endorsement of the views expressed within
                them.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">
                Limitation of Liability
              </h3>
              <p className="leading-relaxed">
                In no event shall DEEPSEA FINVEST be liable for any direct,
                indirect, incidental, special, or consequential damages arising
                out of or in any way connected with the use of our website or
                services.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">
                Governing Law
              </h3>
              <p className="leading-relaxed">
                This disclaimer shall be governed by and construed in accordance
                with the laws of India. Any disputes arising under this
                disclaimer shall be subject to the exclusive jurisdiction of the
                courts in Mumbai, India.
              </p>
            </section>

            <div className="pt-6 border-t border-glass-border">
              <p className="text-white/50 text-sm">
                Last updated:{' '}
                {new Date().toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </PageLayout>
  );
}

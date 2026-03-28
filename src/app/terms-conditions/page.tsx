import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { FileText } from 'lucide-react';

export default function TermsConditionsPage() {
  return (
    <PageLayout
      title="Terms & Conditions"
      subtitle="Terms of use for our website and services"
      showCta={false}
      bgImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop"
    >
      <div className="max-w-4xl mx-auto">
        <GlassCard className="p-8 md:p-12" elevated>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-accent-red/20 rounded-xl flex items-center justify-center">
              <FileText className="h-8 w-8 text-accent-red" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                Terms & Conditions
              </h2>
              <p className="text-white/60">
                Rules and regulations for using our services
              </p>
            </div>
          </div>

          <div className="space-y-8 text-white/70">
            <section>
              <h3 className="text-xl font-semibold text-white mb-3">
                Acceptance of Terms
              </h3>
              <p className="leading-relaxed">
                By accessing and using the DEEPSEA FINVEST website and services,
                you accept and agree to be bound by these Terms and Conditions.
                If you do not agree to these terms, please do not use our
                website or services.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">
                Use of Services
              </h3>
              <p className="leading-relaxed mb-3">
                You agree to use our services only for lawful purposes and in
                accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Use the services in any way that violates applicable laws
                </li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with or disrupt the services</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Transmit any malicious code or viruses</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">
                Account Registration
              </h3>
              <p className="leading-relaxed">
                To access certain features, you may need to create an account.
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account. You agree to notify us immediately of any unauthorized
                use of your account.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">
                Investment Services
              </h3>
              <p className="leading-relaxed">
                Our investment recommendations and advice are based on
                information provided by you and our analysis of market
                conditions. All investments carry risk, and past performance is
                not indicative of future results. You are solely responsible for
                your investment decisions.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">
                Intellectual Property
              </h3>
              <p className="leading-relaxed">
                All content on this website, including text, graphics, logos,
                and software, is the property of DEEPSEA FINVEST and is
                protected by copyright and other intellectual property laws. You
                may not reproduce, distribute, or create derivative works
                without our express written permission.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">
                Fees and Charges
              </h3>
              <p className="leading-relaxed">
                Details of fees and charges for our services are available upon
                request. We reserve the right to modify our fee structure with
                prior notice. All fees are exclusive of applicable taxes unless
                otherwise stated.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">
                Limitation of Liability
              </h3>
              <p className="leading-relaxed">
                To the maximum extent permitted by law, DEEPSEA FINVEST shall
                not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising out of or relating to
                your use of our services.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">
                Indemnification
              </h3>
              <p className="leading-relaxed">
                You agree to indemnify and hold harmless DEEPSEA FINVEST and its
                officers, directors, employees, and agents from any claims,
                damages, losses, or expenses arising out of your use of our
                services or violation of these Terms.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">
                Termination
              </h3>
              <p className="leading-relaxed">
                We reserve the right to terminate or suspend your access to our
                services at any time, without prior notice, for any reason,
                including breach of these Terms.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">
                Governing Law
              </h3>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of India. Any disputes arising under these Terms
                shall be subject to the exclusive jurisdiction of the courts in
                Mumbai, India.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">
                Changes to Terms
              </h3>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes
                will be effective immediately upon posting on this page. Your
                continued use of our services after any changes indicates your
                acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">
                Contact Information
              </h3>
              <p className="leading-relaxed">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="mt-3 p-4 bg-white/5 rounded-lg">
                <p className="text-white">DEEPSEA FINVEST</p>
                <p className="text-white/60">Email: info@deepseafinvest.com</p>
                <p className="text-white/60">Phone: +91 91362 42706</p>
              </div>
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

import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information"
      showCta={false}
      bgImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop"
    >
      <div className="max-w-4xl mx-auto">
        <GlassCard className="p-8 md:p-12" elevated>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-accent-red/20 rounded-xl flex items-center justify-center">
              <Shield className="h-8 w-8 text-accent-red" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
              <p className="text-white/60">Your data security is our priority</p>
            </div>
          </div>

          <div className="space-y-8 text-white/70">
            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Introduction</h3>
              <p className="leading-relaxed">
                DEEPSEA FINVEST (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Information We Collect</h3>
              <p className="leading-relaxed mb-3">We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Personal identification information (Name, email address, phone number, PAN, etc.)</li>
                <li>Financial information (Bank details, investment preferences, risk profile)</li>
                <li>Demographic information (Age, occupation, income range)</li>
                <li>Technical information (IP address, browser type, device information)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">How We Use Your Information</h3>
              <p className="leading-relaxed mb-3">We use the collected information for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Processing your investment transactions</li>
                <li>Providing customer support and responding to inquiries</li>
                <li>Sending important updates and marketing communications</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Improving our services and website experience</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Information Sharing</h3>
              <p className="leading-relaxed">
                We do not sell or rent your personal information to third parties. We may share your 
                information with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Regulatory authorities as required by law</li>
                <li>Service providers who assist in our operations</li>
                <li>AMCs and financial institutions for transaction processing</li>
                <li>Auditors and legal advisors</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Data Security</h3>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. 
                However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Your Rights</h3>
              <p className="leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Cookies</h3>
              <p className="leading-relaxed">
                We use cookies to enhance your browsing experience. You can set your browser to refuse 
                cookies, but some features of our website may not function properly without them.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Changes to This Policy</h3>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the effective date.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-3 p-4 bg-white/5 rounded-lg">
                <p className="text-white">DEEPSEA FINVEST</p>
                <p className="text-white/60">Email: info@deepseafinvest.com</p>
                <p className="text-white/60">Phone: +91 91362 42706</p>
              </div>
            </section>

            <div className="pt-6 border-t border-glass-border">
              <p className="text-white/50 text-sm">
                Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </PageLayout>
  );
}

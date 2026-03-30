'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'contact-form',
          pageSource: 'contact',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout
      title="Contact Us"
      subtitle="Get in touch with us for personalized wealth management solutions"
      bgImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000&auto=format&fit=crop"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <GlassCard className="p-6" elevated>
            <div className="w-12 h-12 bg-red-500/15 border border-red-500/30 rounded-xl flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-red-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <a
              href={`tel:+${SITE_CONFIG.phoneRaw}`}
              className="text-white/70 hover:text-white"
            >
              {SITE_CONFIG.phone}
            </a>
          </GlassCard>

          <GlassCard className="p-6" elevated>
            <div className="w-12 h-12 bg-red-500/15 border border-red-500/30 rounded-xl flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-red-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-white/70 hover:text-white"
            >
              {SITE_CONFIG.email}
            </a>
          </GlassCard>

          <GlassCard className="p-6" elevated>
            <div className="w-12 h-12 bg-red-500/15 border border-red-500/30 rounded-xl flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-red-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
            <div className="text-white/70 space-y-1">
              <p className="font-semibold text-white">
                {SITE_CONFIG.address.company}
              </p>
              <p>{SITE_CONFIG.address.line1}</p>
              <p>{SITE_CONFIG.address.line2}</p>
              <p>{SITE_CONFIG.address.line3}</p>
              <p>{SITE_CONFIG.address.line4}</p>
            </div>
          </GlassCard>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <GlassCard className="p-8" elevated>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Thank You!
                </h3>
                <p className="text-white/70">
                  We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="w-full">
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={e =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-red-500/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={e =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-red-500/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="w-full">
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={e =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-red-500/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Enter subject"
                      value={formData.subject}
                      onChange={e =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-red-500/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-red-500/50 focus:bg-white/8 transition-all min-h-[150px] resize-none"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={e =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-red-500/20 border border-red-500/50 hover:bg-red-500/30 hover:border-red-500/70 disabled:opacity-50 transition-all duration-300 shadow-lg shadow-red-500/20 hover:-translate-y-0.5 w-[300px] mx-auto"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </GlassCard>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-12">
        <GlassCard className="p-6" elevated>
          <h3 className="text-xl font-semibold text-white mb-4">Find Us</h3>
          <div className="w-full h-[400px] rounded-xl overflow-hidden">
            <iframe
              src={SITE_CONFIG.address.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Deepsea Finvest Office Location"
            />
          </div>
        </GlassCard>
      </div>
    </PageLayout>
  );
}

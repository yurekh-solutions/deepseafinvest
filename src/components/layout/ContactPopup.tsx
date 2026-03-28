'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { X, Phone, MessageCircle } from 'lucide-react';

function getDevice(): string {
  if (typeof window === 'undefined') return 'Desktop';
  const ua = navigator.userAgent;
  const isMobile =
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  const browser = ua.includes('Chrome')
    ? 'Chrome'
    : ua.includes('Firefox')
      ? 'Firefox'
      : ua.includes('Safari')
        ? 'Safari'
        : 'Browser';
  return `${isMobile ? 'Mobile' : 'Desktop'} - ${browser}`;
}

async function trackClick(type: 'whatsapp' | 'phone', pageSource: string) {
  try {
    await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Click Lead',
        source: type,
        type,
        pageSource,
        device: getDevice(),
        status: 'new',
      }),
    });
  } catch {}
}

export function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const reopenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  // Auto-show after 3 seconds on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => {
      clearTimeout(timer);
      if (reopenTimerRef.current) clearTimeout(reopenTimerRef.current);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Re-show after 10 seconds
    if (reopenTimerRef.current) clearTimeout(reopenTimerRef.current);
    reopenTimerRef.current = setTimeout(() => setIsOpen(true), 10000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'popup',
          type: 'popup',
          pageSource: pathname || '/',
          device: getDevice(),
        }),
      });
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setIsOpen(false);
          setSubmitted(false);
          setFormData({ name: '', email: '', phone: '' });
          // Don't re-show after successful submission
          if (reopenTimerRef.current) clearTimeout(reopenTimerRef.current);
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Action Buttons - bottom right */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/919136242706?text=${encodeURIComponent('Hello DEEPSEA FINVEST,\n\nI am interested in learning more about your wealth management services.\n\nI would appreciate if you could schedule a free consultation call at your earliest convenience.\n\nThank you.')}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick('whatsapp', pathname || '/')}
          className="flex items-center gap-2 pl-3 pr-4 py-2.5 rounded-full bg-green-500/20 border border-green-500/40 hover:bg-green-500/30 hover:border-green-500/60 backdrop-blur-sm text-white text-sm font-medium shadow-lg shadow-green-500/10 transition-all duration-300 hover:-translate-y-0.5 group"
          aria-label="Chat on WhatsApp"
        >
          <div className="w-8 h-8 rounded-full bg-green-500/30 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="h-4 w-4 text-green-400" />
          </div>
          <span className="text-green-300">WhatsApp</span>
        </a>

        {/* Call Button */}
        <a
          href="tel:+919136242706"
          onClick={() => trackClick('phone', pathname || '/')}
          className="flex items-center gap-2 pl-3 pr-4 py-2.5 rounded-full bg-red-500/20 border border-red-500/40 hover:bg-red-500/30 hover:border-red-500/60 backdrop-blur-sm text-white text-sm font-medium shadow-lg shadow-red-500/10 transition-all duration-300 hover:-translate-y-0.5 group"
          aria-label="Call us"
        >
          <div className="w-8 h-8 rounded-full bg-red-500/30 flex items-center justify-center flex-shrink-0">
            <Phone className="h-4 w-4 text-red-400" />
          </div>
          <span className="text-red-300">Call Us</span>
        </a>
      </div>

      {/* Lead Capture Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-[#0d1e35]/95 backdrop-blur-xl shadow-2xl shadow-black/50 p-6">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all"
              aria-label="Close popup"
            >
              <X className="h-4 w-4" />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="h-7 w-7 text-green-400"
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
                <h3 className="text-xl font-bold text-white mb-1">
                  Thank You!
                </h3>
                <p className="text-white/60 text-sm">
                  We will get back to you shortly.
                </p>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1 h-5 bg-red-500 rounded-full" />
                    <h3 className="text-xl font-bold text-white">
                      Get a Free Consultation
                    </h3>
                  </div>
                  <p className="text-white/50 text-sm pl-3">
                    Fill in your details and we will call you back.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-white/60 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={e =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-white/25 focus:outline-none focus:border-red-500/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/60 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={e =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-white/25 focus:outline-none focus:border-red-500/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/60 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={e =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-white/25 focus:outline-none focus:border-red-500/50 transition-all"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-full font-semibold text-white text-sm bg-red-500/20 border border-red-500/50 hover:bg-red-500/30 hover:border-red-500/70 disabled:opacity-50 transition-all duration-300 shadow-lg shadow-red-500/10 hover:-translate-y-0.5"
                    >
                      {isSubmitting
                        ? 'Submitting...'
                        : 'Request Free Call Back'}
                    </button>
                  </div>
                </form>

                <p className="text-center text-white/30 text-xs mt-4">
                  We respect your privacy. No spam, ever.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

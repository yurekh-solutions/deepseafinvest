'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { GlassCard } from '@/components/glassmorphism/GlassCard';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [, setToken] = useLocalStorage('admin_token', '');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }

      setToken(data.token);
      // Set cookie so middleware allows dashboard access
      document.cookie = `admin_token=${data.token}; path=/; max-age=86400; SameSite=Strict`;
      setSuccess('Login successful! Redirecting to dashboard...');

      // Wait 1.5 seconds to show success message, then redirect
      setTimeout(() => {
        window.location.href = '/admin/dashboard';
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <link rel="icon" href="/logo.png" sizes="any" />
      <link rel="apple-touch-icon" href="/logo.png" />
      <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f172a] to-[#1a365d]">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-gradient-to-tl from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <GlassCard className="w-full max-w-md relative z-10 p-8">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-6">
              <img
                src="/logo.png"
                alt="DeepSea Finvest"
                className="h-16 w-16 object-contain"
              />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">
              DEEP
              <span className="text-red-500">SEA FINVEST</span>
            </h1>
            <p className="text-gray-300 text-lg">Admin Portal</p>
          </div>

          {/* Default Credentials Hint */}
          <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl backdrop-blur-md">
            <p className="text-xs text-blue-200 text-center">
              <span className="font-semibold">Demo Credentials:</span>
              <br />
              Username:{' '}
              <code className="bg-white/10 px-2 py-0.5 rounded mx-1">
                admin
              </code>
              <span className="mx-2">|</span>
              Password:{' '}
              <code className="bg-white/10 px-2 py-0.5 rounded mx-1">
                admin123
              </code>
            </p>
          </div>
          {/* Default Credentials Hint */}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-200">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUsername(e.target.value)
                }
                placeholder="Enter username (admin)"
                required
                disabled={loading}
                autoComplete="username"
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-200">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter password (admin123)"
                required
                disabled={loading}
                autoComplete="current-password"
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all"
              />
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-200 text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 text-green-200 text-sm flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {success}
              </div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 border border-white/20 shadow-lg rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-white"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </div>
          </form>
        </GlassCard>
      </div>
    </>
  );
}

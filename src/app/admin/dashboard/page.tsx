'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Lead {
  _id: string;
  name?: string;
  email?: string;
  phone?: string;
  source: string;
  type: string;
  status: string;
  pageSource?: string;
  device?: string;
  createdAt: string;
}

interface Stats {
  total: number;
  today: number;
  whatsapp: number;
  phone: number;
  forms: number;
  popup: number;
  new: number;
  contacted: number;
  qualified: number;
  converted: number;
  lost: number;
}

function TypeBadge({ type }: { type: string }) {
  const styles: Record<string, string> = {
    form: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
    popup: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    whatsapp: 'bg-green-500/20 text-green-300 border border-green-500/30',
    phone: 'bg-orange-500/20 text-orange-300 border border-orange-500/30',
  };
  const labels: Record<string, string> = {
    form: 'Form',
    popup: 'Popup',
    whatsapp: 'WhatsApp',
    phone: 'Phone',
  };
  return (
    <span
      className={`px-2 py-0.5 rounded text-xs font-medium ${styles[type] || styles.form}`}
    >
      {labels[type] || type}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    new: 'bg-green-500/20 text-green-300',
    contacted: 'bg-blue-500/20 text-blue-300',
    qualified: 'bg-yellow-500/20 text-yellow-300',
    converted: 'bg-purple-500/20 text-purple-300',
    lost: 'bg-red-500/20 text-red-300',
  };
  return (
    <span
      className={`px-2 py-1 rounded text-xs font-medium ${styles[status] || 'bg-gray-500/20 text-gray-300'}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [token, setToken] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem('admin_token');
      const tk = raw ? JSON.parse(raw) : '';
      setToken(tk);
    } catch {
      setToken('');
    }
  }, []);

  const fetchData = useCallback(async (authToken: string) => {
    try {
      setError('');
      const res = await fetch('/api/leads', {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      const allLeads: Lead[] = data.leads || [];

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const s: Stats = {
        total: allLeads.length,
        today: allLeads.filter(l => new Date(l.createdAt) >= today).length,
        whatsapp: allLeads.filter(
          l => l.type === 'whatsapp' || l.source === 'whatsapp'
        ).length,
        phone: allLeads.filter(l => l.type === 'phone' || l.source === 'phone')
          .length,
        forms: allLeads.filter(
          l => l.type === 'form' || l.source === 'contact-form'
        ).length,
        popup: allLeads.filter(l => l.type === 'popup' || l.source === 'popup')
          .length,
        new: allLeads.filter(l => l.status === 'new').length,
        contacted: allLeads.filter(l => l.status === 'contacted').length,
        qualified: allLeads.filter(l => l.status === 'qualified').length,
        converted: allLeads.filter(l => l.status === 'converted').length,
        lost: allLeads.filter(l => l.status === 'lost').length,
      };

      setStats(s);
      setLeads(allLeads.slice(0, 10));
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error fetching data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (!token) {
      router.replace('/admin/login');
      return;
    }
    fetchData(token);
  }, [mounted, token, fetchData]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    document.cookie = 'admin_token=; path=/; max-age=0';
    router.replace('/admin/login');
  };

  if (!mounted || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#0f172a] to-[#1a365d]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-red-500/30 border-t-red-500 rounded-full animate-spin mx-auto mb-3"></div>
          <div className="text-gray-400">Loading Dashboard...</div>
        </div>
      </div>
    );
  }

  const conversionRate =
    stats && stats.total > 0
      ? ((stats.converted / stats.total) * 100).toFixed(1)
      : '0.0';

  return (
    <>
      <link rel="icon" href="/logo.png" sizes="any" />
      <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0f172a] to-[#1a365d] text-white">
        {/* Header */}
        <div className="border-b border-white/10 bg-white/5 backdrop-blur-md px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-10 w-10 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-white">
                  DEEPSEA FINVEST
                </h1>
                <p className="text-xs text-gray-400">Admin Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">Welcome, admin</span>
              <button
                onClick={() => fetchData(token)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                title="Refresh"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
              <button
                onClick={() => router.push('/admin/leads')}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-all"
              >
                Manage Leads
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-sm transition-all border border-white/10"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Page Title */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white">
              Dashboard Overview
            </h2>
            {lastUpdated && (
              <p className="text-sm text-gray-500 mt-1">
                Last updated: {lastUpdated}
              </p>
            )}
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-sm">
              {error}
            </div>
          )}

          {/* Stats Row 1 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {[
              {
                label: 'Total Leads',
                value: stats?.total || 0,
                sub: `${stats?.today || 0} today`,
                icon: '📊',
                color: 'text-white',
              },
              {
                label: 'WhatsApp Clicks',
                value: stats?.whatsapp || 0,
                sub: 'Lead generation',
                icon: '💬',
                color: 'text-green-400',
              },
              {
                label: 'Phone Clicks',
                value: stats?.phone || 0,
                sub: 'Direct calls',
                icon: '📞',
                color: 'text-orange-400',
              },
              {
                label: 'Form Submissions',
                value: stats?.forms || 0,
                sub: 'Inquiries',
                icon: '📝',
                color: 'text-blue-400',
              },
            ].map(stat => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5"
              >
                <div className="flex items-start justify-between mb-3">
                  <p className="text-sm text-gray-400">{stat.label}</p>
                  <span className="text-xl">{stat.icon}</span>
                </div>
                <p className={`text-4xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 mt-2">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Stats Row 2 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {[
              {
                label: 'Popup Leads',
                value: stats?.popup || 0,
                sub: 'From popup form',
                icon: '🎯',
                color: 'text-purple-400',
              },
              {
                label: 'Conversion Rate',
                value: `${conversionRate}%`,
                sub: 'Leads / Converted',
                icon: '📈',
                color: 'text-yellow-400',
              },
              {
                label: 'New (Unread)',
                value: stats?.new || 0,
                sub: 'Needs attention',
                icon: '🔔',
                color: 'text-red-400',
              },
            ].map(stat => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5"
              >
                <div className="flex items-start justify-between mb-3">
                  <p className="text-sm text-gray-400">{stat.label}</p>
                  <span className="text-xl">{stat.icon}</span>
                </div>
                <p className={`text-4xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 mt-2">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Main Content + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Leads Table */}
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <h3 className="font-semibold text-white">Recent Leads</h3>
                <button
                  onClick={() => router.push('/admin/leads')}
                  className="px-3 py-1.5 text-xs bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all"
                >
                  View All
                </button>
              </div>

              {leads.length === 0 ? (
                <div className="p-8 text-center text-gray-500 text-sm">
                  No leads yet. They will appear here once someone submits a
                  form.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/5">
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">
                          Type
                        </th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">
                          Name
                        </th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">
                          Page
                        </th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">
                          Device
                        </th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">
                          Status
                        </th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads.map(lead => (
                        <tr
                          key={lead._id}
                          className="border-b border-white/5 hover:bg-white/3 transition-all"
                        >
                          <td className="py-3 px-4">
                            <TypeBadge type={lead.type || 'form'} />
                          </td>
                          <td className="py-3 px-4 text-gray-300 font-medium">
                            {lead.name || '—'}
                          </td>
                          <td className="py-3 px-4 text-gray-400 text-xs">
                            {lead.pageSource || '/'}
                          </td>
                          <td className="py-3 px-4 text-gray-400 text-xs">
                            {lead.device || 'Unknown'}
                          </td>
                          <td className="py-3 px-4">
                            <StatusBadge status={lead.status} />
                          </td>
                          <td className="py-3 px-4 text-gray-500 text-xs">
                            {new Date(lead.createdAt).toLocaleDateString(
                              'en-IN',
                              {
                                day: '2-digit',
                                month: 'short',
                                hour: '2-digit',
                                minute: '2-digit',
                              }
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="px-4 py-3 border-t border-white/5 text-xs text-gray-500">
                    Showing {leads.length} of {stats?.total || 0} leads
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Pipeline */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-4">Lead Pipeline</h3>
                <div className="space-y-3">
                  {[
                    {
                      label: 'New',
                      count: stats?.new || 0,
                      color: 'bg-green-500',
                    },
                    {
                      label: 'Contacted',
                      count: stats?.contacted || 0,
                      color: 'bg-blue-500',
                    },
                    {
                      label: 'Qualified',
                      count: stats?.qualified || 0,
                      color: 'bg-yellow-500',
                    },
                    {
                      label: 'Converted',
                      count: stats?.converted || 0,
                      color: 'bg-purple-500',
                    },
                    {
                      label: 'Lost',
                      count: stats?.lost || 0,
                      color: 'bg-red-500',
                    },
                  ].map(stage => (
                    <div
                      key={stage.label}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${stage.color}`}
                        ></div>
                        <span className="text-sm text-gray-400">
                          {stage.label}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-white">
                        {stage.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Device Types */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-4">
                  📱 Device Types
                </h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Desktop</span>
                    <span className="text-white font-medium">
                      {leads.filter(l => l.device?.includes('Desktop')).length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mobile</span>
                    <span className="text-white font-medium">
                      {leads.filter(l => l.device?.includes('Mobile')).length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Unknown</span>
                    <span className="text-white font-medium">
                      {leads.filter(l => !l.device).length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-4">
                  🔗 Quick Links
                </h3>
                <div className="space-y-2">
                  {[
                    { label: 'View Website', href: '/' },
                    { label: 'Contact Page', href: '/contact' },
                    {
                      label: 'Mutual Funds',
                      href: '/mutual-funds/why-mutual-funds',
                    },
                    {
                      label: 'Insurance',
                      href: '/insurance/why-life-insurance',
                    },
                    { label: 'Manage Leads', href: '/admin/leads' },
                  ].map(link => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={
                        link.href.startsWith('/admin') ? '_self' : '_blank'
                      }
                      rel="noopener noreferrer"
                      className="block text-sm text-gray-400 hover:text-white transition-colors py-1"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface Lead {
  _id: string;
  name?: string;
  email?: string;
  phone?: string;
  source: string;
  type: string;
  status: string;
  message?: string;
  pageSource?: string;
  device?: string;
  createdAt: string;
  updatedAt: string;
}

const STATUS_COLORS: Record<string, string> = {
  new: 'bg-green-500/20 text-green-300 border border-green-500/30',
  contacted: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
  qualified: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
  converted: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
  lost: 'bg-red-500/20 text-red-300 border border-red-500/30',
};

const TYPE_COLORS: Record<string, string> = {
  form: 'bg-blue-500/20 text-blue-300',
  popup: 'bg-purple-500/20 text-purple-300',
  whatsapp: 'bg-green-500/20 text-green-300',
  phone: 'bg-orange-500/20 text-orange-300',
};

const ITEMS_PER_PAGE = 10;

export default function AdminLeadsPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [token, setToken] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filtered, setFiltered] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem('admin_token');
      setToken(raw ? JSON.parse(raw) : '');
    } catch { setToken(''); }
  }, []);

  const fetchLeads = useCallback(async (authToken: string) => {
    try {
      const res = await fetch('/api/leads', { headers: { Authorization: `Bearer ${authToken}` } });
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setLeads(data.leads || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error');
    } finally { setLoading(false); }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (!token) { router.replace('/admin/login'); return; }
    fetchLeads(token);
  }, [mounted, token, fetchLeads]);

  useEffect(() => {
    let result = [...leads];
    if (search) {
      const s = search.toLowerCase();
      result = result.filter(l =>
        (l.name || '').toLowerCase().includes(s) ||
        (l.email || '').toLowerCase().includes(s) ||
        (l.phone || '').includes(s)
      );
    }
    if (statusFilter !== 'all') result = result.filter(l => l.status === statusFilter);
    if (typeFilter !== 'all') result = result.filter(l => l.type === typeFilter || l.source === typeFilter);
    setFiltered(result);
    setPage(1);
  }, [search, statusFilter, typeFilter, leads]);

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/leads/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status }),
      });
      fetchLeads(token);
    } catch { alert('Failed to update'); }
  };

  const deleteLead = async (id: string) => {
    try {
      await fetch(`/api/leads/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchLeads(token);
      setDeleteId(null);
    } catch { alert('Failed to delete'); }
  };

  const exportCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Type', 'Source', 'Page', 'Device', 'Status', 'Date'];
    const rows = filtered.map(l => [
      l.name || '', l.email || '', l.phone || '', l.type || '',
      l.source || '', l.pageSource || '', l.device || '', l.status,
      new Date(l.createdAt).toLocaleString(),
    ]);
    const csv = [headers, ...rows].map(r => r.map(c => `"${c}"`).join(',')).join('\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    a.download = `leads_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    document.cookie = 'admin_token=; path=/; max-age=0';
    router.replace('/admin/login');
  };

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  if (!mounted || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#0f172a] to-[#1a365d]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-red-500/30 border-t-red-500 rounded-full animate-spin mx-auto mb-3"></div>
          <div className="text-gray-400">Loading Leads...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <link rel="icon" href="/logo.png" sizes="any" />
      <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0f172a] to-[#1a365d] text-white">
        {/* Header */}
        <div className="border-b border-white/10 bg-white/5 backdrop-blur-md px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
              <div>
                <h1 className="text-xl font-bold text-white">DEEPSEA FINVEST</h1>
                <p className="text-xs text-gray-400">Lead Management</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => router.push('/admin/dashboard')}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-all"
              >
                Dashboard
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-sm transition-all border border-white/10"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Filters */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 mb-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Search</label>
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Name, email, or phone..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-red-500/50 transition-all"
                  />
                </div>
              </div>

              {/* Status Filter */}
              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Status</label>
                <select
                  value={statusFilter}
                  onChange={e => setStatusFilter(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50 transition-all appearance-none cursor-pointer"
                  style={{ colorScheme: 'dark' }}
                >
                  <option value="all" className="bg-[#0f172a] text-white">All Statuses</option>
                  <option value="new" className="bg-[#0f172a] text-white">New</option>
                  <option value="contacted" className="bg-[#0f172a] text-white">Contacted</option>
                  <option value="qualified" className="bg-[#0f172a] text-white">Qualified</option>
                  <option value="converted" className="bg-[#0f172a] text-white">Converted</option>
                  <option value="lost" className="bg-[#0f172a] text-white">Lost</option>
                </select>
              </div>

              {/* Type Filter */}
              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Type</label>
                <select
                  value={typeFilter}
                  onChange={e => setTypeFilter(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50 transition-all appearance-none cursor-pointer"
                  style={{ colorScheme: 'dark' }}
                >
                  <option value="all" className="bg-[#0f172a] text-white">All Types</option>
                  <option value="form" className="bg-[#0f172a] text-white">Form</option>
                  <option value="popup" className="bg-[#0f172a] text-white">Popup</option>
                  <option value="whatsapp" className="bg-[#0f172a] text-white">WhatsApp</option>
                  <option value="phone" className="bg-[#0f172a] text-white">Phone</option>
                </select>
              </div>

              {/* Export */}
              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Export</label>
                <button
                  onClick={exportCSV}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Export CSV
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Showing {filtered.length} of {leads.length} leads
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-sm">{error}</div>
          )}

          {/* Table */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden">
            {paginated.length === 0 ? (
              <div className="p-12 text-center text-gray-500 text-sm">No leads found.</div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5">
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Name</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Contact</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Type</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Page</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Device</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Status</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Date</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginated.map((lead) => (
                        <tr key={lead._id} className="border-b border-white/5 hover:bg-white/3 transition-all">
                          <td className="py-3 px-4">
                            <div className="font-medium text-white">{lead.name || '—'}</div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="text-gray-300 text-xs">{lead.email || '—'}</div>
                            <div className="text-gray-400 text-xs">{lead.phone || '—'}</div>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${TYPE_COLORS[lead.type || 'form'] || TYPE_COLORS.form}`}>
                              {(lead.type || 'form').charAt(0).toUpperCase() + (lead.type || 'form').slice(1)}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-400 text-xs">{lead.pageSource || '/'}</td>
                          <td className="py-3 px-4 text-gray-400 text-xs">{lead.device || 'Unknown'}</td>
                          <td className="py-3 px-4">
                            <select
                              value={lead.status}
                              onChange={e => updateStatus(lead._id, e.target.value)}
                              className={`px-2 py-1 rounded text-xs font-medium cursor-pointer border-0 focus:outline-none ${STATUS_COLORS[lead.status] || 'bg-gray-500/20 text-gray-300'}`}
                              style={{ colorScheme: 'dark', backgroundColor: 'transparent' }}
                            >
                              <option value="new" className="bg-[#0f172a] text-white">New</option>
                              <option value="contacted" className="bg-[#0f172a] text-white">Contacted</option>
                              <option value="qualified" className="bg-[#0f172a] text-white">Qualified</option>
                              <option value="converted" className="bg-[#0f172a] text-white">Converted</option>
                              <option value="lost" className="bg-[#0f172a] text-white">Lost</option>
                            </select>
                          </td>
                          <td className="py-3 px-4 text-gray-500 text-xs">
                            {new Date(lead.createdAt).toLocaleDateString('en-IN', {
                              day: '2-digit', month: 'short', year: 'numeric',
                              hour: '2-digit', minute: '2-digit'
                            })}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <button
                                onClick={() => setSelectedLead(lead)}
                                className="px-3 py-1 text-xs bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all"
                              >
                                View
                              </button>
                              <button
                                onClick={() => setDeleteId(lead._id)}
                                className="px-3 py-1 text-xs bg-white/5 hover:bg-red-500/20 hover:text-red-300 text-gray-400 rounded-lg transition-all border border-white/10"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="px-4 py-3 border-t border-white/10 flex items-center justify-between text-sm text-gray-500">
                    <span>Showing {(page - 1) * ITEMS_PER_PAGE + 1} to {Math.min(page * ITEMS_PER_PAGE, filtered.length)} of {filtered.length} leads</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-white"
                      >
                        ←
                      </button>
                      <span>Page {page} of {totalPages}</span>
                      <button
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-white"
                      >
                        →
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* View Modal */}
        {selectedLead && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-[#0d1628]/90 backdrop-blur-xl border border-white/10 rounded-xl max-w-lg w-full p-6">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-lg font-bold text-white">Lead Details</h2>
                <button onClick={() => setSelectedLead(null)} className="text-gray-500 hover:text-white">✕</button>
              </div>
              <div className="space-y-3 text-sm">
                {[
                  ['Name', selectedLead.name || '—'],
                  ['Email', selectedLead.email || '—'],
                  ['Phone', selectedLead.phone || '—'],
                  ['Type', selectedLead.type || 'form'],
                  ['Source', selectedLead.source || '—'],
                  ['Page', selectedLead.pageSource || '—'],
                  ['Device', selectedLead.device || 'Unknown'],
                  ['Status', selectedLead.status],
                  ['Message', selectedLead.message || '—'],
                  ['Created', new Date(selectedLead.createdAt).toLocaleString()],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-3">
                    <span className="text-gray-500 w-20 flex-shrink-0">{k}</span>
                    <span className="text-white">{v}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="mt-5 w-full py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg transition-all text-sm"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Delete Confirm */}
        {deleteId && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-[#0d1628]/90 backdrop-blur-xl border border-white/10 rounded-xl max-w-sm w-full p-6">
              <h2 className="text-lg font-bold text-white mb-2">Delete Lead</h2>
              <p className="text-gray-400 text-sm mb-5">This action cannot be undone.</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setDeleteId(null)}
                  className="flex-1 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg text-sm transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={() => deleteLead(deleteId)}
                  className="flex-1 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm transition-all"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

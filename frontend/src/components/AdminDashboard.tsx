import React, { useState } from 'react';
import axios from 'axios';

const FALLBACK_BACKEND = 'https://santoshshastri-backend-production.up.railway.app';

function resolveBackendUrl(): string {
  const raw = String(import.meta.env.VITE_BACKEND_URL ?? '').trim().replace(/\/+$/, '');
  const isWellFormed = /^https?:\/\/[^\s/]+$/.test(raw);
  return isWellFormed ? raw : FALLBACK_BACKEND;
}

interface Booking {
  id: string;
  name: string;
  phone: string;
  email: string;
  datetime: string;
  service: string;
  created_at: string;
}

function todayStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function meetLinkFor(b: Booking): string {
  return `https://meet.jit.si/SantoshShastri-${b.service.replace(/\s+/g, '')}-${b.id.substring(0, 8)}`;
}

function AdminDashboard() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [onlyToday, setOnlyToday] = useState(true);

  const load = async (u: string, p: string) => {
    setLoading(true);
    setError('');
    try {
      const backendUrl = resolveBackendUrl();
      const res = await axios.get(`${backendUrl}/admin/bookings`, {
        headers: { Authorization: 'Basic ' + btoa(`${u}:${p}`) },
      });
      setBookings(res.data as Booking[]);
      setLoggedIn(true);
    } catch {
      setError('Invalid credentials or network error. Please try again.');
      setLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    load(username, password);
  };

  const visibleBookings = onlyToday
    ? bookings.filter((b) => b.datetime.startsWith(todayStr()))
    : bookings;

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] relative overflow-hidden px-4">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>
        
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl w-full max-w-md shadow-2xl relative z-10 text-center">
          <span className="text-4xl text-amber-500 mb-4 block">ॐ</span>
          <h1 className="text-3xl font-bold text-white mb-2 font-serif">Admin Login</h1>
          <p className="text-amber-200/60 mb-8">Secure Dashboard Access</p>
          
          <form onSubmit={handleLogin} className="flex flex-col gap-5 text-left">
            <div>
              <label className="block text-xs font-bold text-amber-200/80 mb-2 uppercase tracking-wider">Username</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                placeholder="Enter admin username"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-amber-200/80 mb-2 uppercase tracking-wider">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                placeholder="••••••••"
              />
            </div>
            
            {error && <p className="text-red-400 text-sm font-medium mt-1">{error}</p>}
            
            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-amber-900/20 transition-all active:scale-95 text-lg"
            >
              {loading ? 'Authenticating...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f5ee] py-10 px-4 md:px-8">
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          <div className="flex items-center gap-4">
            <span className="text-4xl text-amber-600">ॐ</span>
            <div>
              <h1 className="text-3xl font-bold text-[#800000] font-serif">Admin Dashboard</h1>
              <p className="text-gray-500 font-medium">Manage Bookings &amp; Video Consultations</p>
            </div>
          </div>
          <div className="flex gap-4 items-center bg-white p-2 rounded-2xl shadow-sm border border-gray-200">
            <label className="flex items-center gap-2 cursor-pointer px-4 text-sm font-bold text-gray-700">
              <input 
                type="checkbox" 
                checked={onlyToday} 
                onChange={(e) => setOnlyToday(e.target.checked)} 
                className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
              />
              Show Only Today
            </label>
            <button
              onClick={() => load(username, password)}
              className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition"
            >
              Refresh
            </button>
          </div>
        </div>

        {visibleBookings.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-16 text-center">
            <span className="text-5xl text-gray-300 block mb-4">📅</span>
            <h2 className="text-2xl font-bold text-gray-700">No Bookings Found</h2>
            <p className="text-gray-500">There are no bookings matching this criteria.</p>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-amber-100">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#800000] text-amber-300 uppercase tracking-wider text-xs font-bold">
                    <th className="p-5">Name</th>
                    <th className="p-5">Phone</th>
                    <th className="p-5">Email</th>
                    <th className="p-5">Service</th>
                    <th className="p-5">Date / Time</th>
                    <th className="p-5 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {visibleBookings.map((b) => (
                    <tr key={b.id} className="hover:bg-amber-50/50 transition-colors">
                      <td className="p-5 font-bold text-gray-800">{b.name}</td>
                      <td className="p-5">
                        <a href={`https://wa.me/${b.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>
                          {b.phone}
                        </a>
                      </td>
                      <td className="p-5 text-gray-600">{b.email}</td>
                      <td className="p-5 text-gray-800 font-medium">{b.service}</td>
                      <td className="p-5 text-gray-600">{b.datetime.replace('T', ' ')}</td>
                      <td className="p-5 text-center">
                        <a href={meetLinkFor(b)} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-800 font-bold rounded-lg transition-colors text-sm">
                          Join Video Call
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;

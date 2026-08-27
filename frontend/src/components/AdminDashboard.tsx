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
      setError('Login galat hai ya bookings load nahi ho payi. Dobara try karein.');
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
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1a0505', padding: 16 }}>
        <form onSubmit={handleLogin} style={{ background: '#fff', borderRadius: 12, padding: 32, width: '100%', maxWidth: 360 }}>
          <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4, color: '#800000' }}>Admin Login</h1>
          <p style={{ fontSize: 13, color: '#666', marginBottom: 20 }}>Santosh Shastri — Bookings Dashboard</p>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 4 }}>Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: '10px 12px', border: '1px solid #ccc', borderRadius: 8, marginBottom: 14 }}
          />
          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 4 }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '10px 12px', border: '1px solid #ccc', borderRadius: 8, marginBottom: 14 }}
          />
          {error && <p style={{ color: '#c00', fontSize: 13, marginBottom: 12 }}>{error}</p>}
          <button
            type="submit"
            disabled={loading}
            style={{ width: '100%', padding: '10px 12px', borderRadius: 8, background: '#800000', color: '#fff', fontWeight: 700, border: 'none', cursor: 'pointer' }}
          >
            {loading ? 'Checking…' : 'Login'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f7f3ea', padding: '24px 16px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: '#800000' }}>Bookings — Santosh Shastri</h1>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <label style={{ fontSize: 13, display: 'flex', gap: 6, alignItems: 'center' }}>
              <input type="checkbox" checked={onlyToday} onChange={(e) => setOnlyToday(e.target.checked)} />
              Sirf aaj ka schedule
            </label>
            <button
              onClick={() => load(username, password)}
              style={{ padding: '6px 14px', borderRadius: 8, border: '1px solid #800000', color: '#800000', background: '#fff', cursor: 'pointer', fontSize: 13 }}
            >
              🔄 Refresh
            </button>
          </div>
        </div>

        {visibleBookings.length === 0 ? (
          <p style={{ color: '#666' }}>Koi booking nahi hai.</p>
        ) : (
          <div style={{ overflowX: 'auto', background: '#fff', borderRadius: 12, border: '1px solid #eee' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: '#800000', color: '#FFD700', textAlign: 'left' }}>
                  <th style={{ padding: 10 }}>Naam</th>
                  <th style={{ padding: 10 }}>Phone</th>
                  <th style={{ padding: 10 }}>Email</th>
                  <th style={{ padding: 10 }}>Service</th>
                  <th style={{ padding: 10 }}>Date/Time</th>
                  <th style={{ padding: 10 }}>Video Call</th>
                </tr>
              </thead>
              <tbody>
                {visibleBookings.map((b) => (
                  <tr key={b.id} style={{ borderTop: '1px solid #eee' }}>
                    <td style={{ padding: 10, fontWeight: 600 }}>{b.name}</td>
                    <td style={{ padding: 10 }}>
                      <a href={`https://wa.me/${b.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">{b.phone}</a>
                    </td>
                    <td style={{ padding: 10 }}>{b.email}</td>
                    <td style={{ padding: 10 }}>{b.service}</td>
                    <td style={{ padding: 10 }}>{b.datetime.replace('T', ' ')}</td>
                    <td style={{ padding: 10 }}>
                      <a href={meetLinkFor(b)} target="_blank" rel="noreferrer" style={{ color: '#800000', fontWeight: 700 }}>🎥 Join</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;

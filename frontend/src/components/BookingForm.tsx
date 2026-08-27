import React, { useState } from 'react';
import axios from 'axios';

// Fallback only used if VITE_BACKEND_URL wasn't set at build time.
// IMPORTANT: whichever host you actually deploy the backend to (Railway, Render, or
// api.santoshshastri.site), set VITE_BACKEND_URL to that URL in the frontend's build
// env (Vercel project settings) — it is trusted directly, no need to edit this file.
const FALLBACK_BACKEND = 'https://santoshshastri-backend-production.up.railway.app';

function resolveBackendUrl(): string {
  const raw = String(import.meta.env.VITE_BACKEND_URL ?? '').trim().replace(/\/+$/, '');
  // Any well-formed http(s) URL set at build time is trusted — it comes from our own
  // Vercel project config, not from anything a visitor can influence.
  const isWellFormed = /^https?:\/\/[^\s/]+$/.test(raw);
  return isWellFormed ? raw : FALLBACK_BACKEND;
}

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', datetime: '', service: ''
  });
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const services = [
    'Court Marriage Assistance',
    'Marriage Registration',
    'Ganpati Puja',
    'Satyanarayan Puja',
    'Navgrah Puja',
    'Shanti Kalash Puja',
    'Durga Paath',
    'Rudrabhishek',
    'Janam Kundli Consultation',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const backendUrl = resolveBackendUrl();
      const response = await axios.post(`${backendUrl}/api/book`, formData);
      const meetLink = response.data.meetLink;
      
      setStatus('success');
      setMessage('Redirecting to WhatsApp...');
      
      // WhatsApp redirection
      const waNumber = '919323152991';
      const waText = `Namaste Santosh ji,\n\nMeri nayi booking hai:\nNaam: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nDate/Time: ${formData.datetime}\n\nVideo Call Link: ${meetLink}`;
      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;
      
      window.location.href = waUrl;
      
      setFormData({ name: '', phone: '', email: '', datetime: '', service: '' });
    } catch (err) {
      console.error('Booking submit failed:', err);
      setStatus('error');
      setMessage('Booking failed. Please try again or WhatsApp us directly.');
    }
  };

  return (
    <section className="booking-gradient text-white py-16 px-4" id="booking">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <h2 className="section-title text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
          Book Online Puja / Video Consultation
        </h2>
        <div className="om-divider" style={{ color: '#fbbf24' }}>ॐ</div>
        <p className="text-center text-white/70 mb-8 text-sm">
          Fill in your details and we'll send a Jitsi video‑call link to your email.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-amber-300 mb-1 uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-amber-300 mb-1 uppercase tracking-wider">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-amber-300 mb-1 uppercase tracking-wider">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-amber-300 mb-1 uppercase tracking-wider">Date &amp; Time</label>
              <input
                type="datetime-local"
                name="datetime"
                value={formData.datetime}
                onChange={handleChange}
                required
                className="form-input"
                style={{ colorScheme: 'dark' }}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-amber-300 mb-1 uppercase tracking-wider">Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="" disabled className="text-gray-800">Select Service</option>
                {services.map((s) => (
                  <option key={s} value={s} className="text-gray-800">{s}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-2 w-full py-3 px-6 rounded-xl font-bold text-white text-lg tracking-wide shadow-lg
                       bg-gradient-to-r from-amber-500 to-amber-400
                       hover:from-amber-400 hover:to-yellow-300 hover:text-amber-900
                       disabled:opacity-60 disabled:cursor-not-allowed
                       active:scale-95 transition-all duration-200"
          >
            {status === 'loading' ? '⏳ Submitting...' : '📅 Submit Booking'}
          </button>
        </form>

        {/* Status message */}
        {message && (
          <div className={`mt-5 p-4 rounded-xl text-center font-medium text-sm
            ${status === 'success'
              ? 'bg-green-500/20 border border-green-400/40 text-green-200'
              : 'bg-red-500/20 border border-red-400/40 text-red-200'
            }`}>
            {message}
          </div>
        )}
      </div>
    </section>
  );
}

export default BookingForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FALLBACK_BACKEND = 'https://santoshshastri-backend-production.up.railway.app';

function resolveBackendUrl(): string {
  const raw = String(import.meta.env.VITE_BACKEND_URL ?? '').trim().replace(/\/+$/, '');
  const isWellFormed = /^https?:\/\/[^\s/]+$/.test(raw);
  return isWellFormed ? raw : FALLBACK_BACKEND;
}

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', datetime: '', service: ''
  });
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleServiceSelect = (e: any) => {
      setFormData(prev => ({ ...prev, service: e.detail }));
    };
    window.addEventListener('selectService', handleServiceSelect);
    return () => window.removeEventListener('selectService', handleServiceSelect);
  }, []);

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
    <section className="bg-[#FFFDD0] py-16 px-4" id="booking">
      <div className="max-w-[1400px] w-[95%] mx-auto">
        <div className="rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row bg-[#0f0f0f]">
          
          {/* Left Decorative/Info Area */}
          <div className="w-full md:w-5/12 booking-gradient p-10 md:p-14 text-white relative flex flex-col justify-center">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif leading-tight">
              Book Your <br/><span className="text-amber-400">Online Puja</span>
            </h2>
            <div className="w-16 h-1 bg-amber-400 mb-6 rounded"></div>
            
            <p className="text-white/80 mb-8 leading-relaxed">
              Experience the divine connection from the comfort of your home. Fill out the form, and you'll instantly receive a secure Jitsi Video Call link via WhatsApp to connect with Pandit ji.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-white/90">
                <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">✓</span>
                Instant Video Link Generation
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">✓</span>
                Direct WhatsApp Confirmation
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">✓</span>
                100% Authentic Vedic Rituals
              </li>
            </ul>
          </div>

          {/* Right Form Area */}
          <div className="w-full md:w-7/12 p-8 md:p-12 lg:p-14 bg-white relative">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Enter Details</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all text-gray-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all text-gray-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Date &amp; Time</label>
                  <input
                    type="datetime-local"
                    name="datetime"
                    value={formData.datetime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all text-gray-800"
                  >
                    <option value="" disabled>Select Service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-4 w-full btn-3d py-4 text-lg tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Submitting...' : 'Confirm & Proceed to WhatsApp'}
              </button>
            </form>

            {/* Status message */}
            {message && (
              <div className={`mt-5 p-4 rounded-xl text-center font-medium text-sm
                ${status === 'success'
                  ? 'bg-green-50 border border-green-200 text-green-700'
                  : 'bg-red-50 border border-red-200 text-red-700'
                }`}>
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingForm;

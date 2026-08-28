import React, { useState, useEffect } from 'react';
import axios from 'axios';

function resolveBackendUrl(): string {
  return '';
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

  const inputClasses = "w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-300 transition-all text-gray-800";
  const iconWrapClasses = "pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400";

  return (
    <section className="bg-[#FFFDD0] py-20 px-4" id="booking">
      <div className="max-w-[1400px] w-[95%] mx-auto">
        <div className="rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row bg-[#0f0f0f] border border-amber-900/20">

          {/* Left Decorative/Info Area */}
          <div className="w-full md:w-5/12 booking-gradient p-10 md:p-14 text-white relative flex flex-col justify-center overflow-hidden">
            {/* Decorative pattern + glow */}
            <div className="absolute inset-0 pattern-dots-dark opacity-30 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-maroon-400/30 rounded-full blur-3xl pointer-events-none"></div>

            <span className="relative text-4xl text-amber-400 mb-4">ॐ</span>

            <h2 className="relative text-3xl md:text-4xl font-bold mb-4 font-serif leading-tight">
              Book Your <br /><span className="text-amber-400">Online Puja</span>
            </h2>
            <div className="relative w-16 h-1 bg-amber-400 mb-6 rounded"></div>

            <p className="relative text-white/80 mb-8 leading-relaxed">
              Experience the divine connection from the comfort of your home. Fill out the form, and you'll instantly receive a secure Jitsi Video Call link via WhatsApp to connect with Pandit ji.
            </p>

            <ul className="relative space-y-4">
              <li className="flex items-center gap-3 text-sm text-white/90">
                <span className="w-8 h-8 flex-shrink-0 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shadow-inner">✓</span>
                Instant Video Link Generation
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <span className="w-8 h-8 flex-shrink-0 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shadow-inner">✓</span>
                Direct WhatsApp Confirmation
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <span className="w-8 h-8 flex-shrink-0 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shadow-inner">✓</span>
                100% Authentic Vedic Rituals
              </li>
            </ul>
          </div>

          {/* Right Form Area */}
          <div className="w-full md:w-7/12 p-8 md:p-12 lg:p-14 bg-white relative">
            <h3 className="text-2xl font-bold text-gray-800 mb-1">Enter Details</h3>
            <p className="text-sm text-gray-400 mb-6">Takes less than a minute</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Full Name</label>
                  <div className="relative">
                    <span className={iconWrapClasses}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Phone</label>
                  <div className="relative">
                    <span className={iconWrapClasses}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" /></svg>
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Email</label>
                <div className="relative">
                  <span className={iconWrapClasses}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Date &amp; Time</label>
                  <div className="relative">
                    <span className={iconWrapClasses}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </span>
                    <input
                      type="datetime-local"
                      name="datetime"
                      value={formData.datetime}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Service</label>
                  <div className="relative">
                    <span className={iconWrapClasses}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                    </span>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className={`${inputClasses} appearance-none pr-9 bg-no-repeat bg-[right_0.9rem_center]`}
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")" }}
                    >
                      <option value="" disabled>Select Service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-4 w-full btn-3d py-4 text-lg tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : 'Confirm & Proceed to WhatsApp'}
              </button>
            </form>

            {/* Status message */}
            {message && (
              <div className={`mt-5 p-4 rounded-xl text-center font-medium text-sm flex items-center justify-center gap-2
                ${status === 'success'
                  ? 'bg-green-50 border border-green-200 text-green-700'
                  : 'bg-red-50 border border-red-200 text-red-700'
                }`}>
                <span aria-hidden="true">{status === 'success' ? '✅' : '⚠️'}</span>
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

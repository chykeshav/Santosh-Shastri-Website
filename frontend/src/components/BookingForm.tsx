import React, { useState } from 'react';
import axios from 'axios';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    datetime: '',
    service: ''
  });
  const [message, setMessage] = useState('');

  const services = [
    'Court Marriage Assistance',
    'Marriage Registration',
    'Ganpati Puja',
    'Satyanarayan Puja',
    'Navgrah Puja',
    'Shanti Kalash Puja',
    'Durga Paath',
    'Rudrabhishek',
    'Janam Kundli Consultation'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
      const res = await axios.post(`${backendUrl}/api/book`, formData);
      setMessage('Booking successful! Check your email for the video‑call link.');
      setFormData({ name: '', phone: '', email: '', datetime: '', service: '' });
    } catch (err) {
      console.error(err);
      setMessage('Error submitting booking. Please try again later.');
    }
  };

  return (
    <section className="bg-maroon text-cream py-12 px-4" id="booking">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Book Online Puja / Video Consultation</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 rounded border border-cream text-maroon"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-2 rounded border border-cream text-maroon"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 rounded border border-cream text-maroon"
          />
          <input
            type="datetime-local"
            name="datetime"
            value={formData.datetime}
            onChange={handleChange}
            required
            className="p-2 rounded border border-cream text-maroon"
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="p-2 rounded border border-cream text-maroon"
          >
            <option value="" disabled>Select Service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <button type="submit" className="bg-saffron text-maroon py-2 rounded hover:bg-gold transition">
            Submit Booking
          </button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </section>
  );
}

export default BookingForm;

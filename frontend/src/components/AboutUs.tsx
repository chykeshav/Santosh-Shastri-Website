import React from 'react';
import Footer from './Footer';

function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-grow max-w-4xl mx-auto px-4 py-12 text-gray-800">
        <div className="mb-8">
          <a href="/" className="text-amber-600 font-semibold hover:underline">← Back to Home</a>
        </div>
        <h1 className="text-3xl font-bold text-amber-700 mb-6 font-serif">About Us</h1>
        <div className="space-y-4 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
          <p>Namaste, welcome to Santosh Shastri's official website.</p>
          <p>With years of experience in conducting Vedic rituals, Puja-Paath, and providing Court Marriage Assistance, we strive to bring peace, prosperity, and legal ease to our clients' lives in Mumbai, Maharashtra and beyond.</p>
          <p>Our services include Navgrah Puja, Satyanarayan Puja, Ganpati Puja, Marriage Registration, and personalized Kundli consultations. We believe in preserving traditional Vedic authenticity while offering modern convenience like Video Call consultations.</p>
          <p>For any inquiries, feel free to contact us via WhatsApp or Email.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;

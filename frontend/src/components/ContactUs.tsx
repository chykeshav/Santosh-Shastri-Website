import React from 'react';
import Footer from './Footer';

function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-grow max-w-4xl mx-auto px-4 py-12 text-gray-800">
        <div className="mb-8">
          <a href="/" className="text-amber-600 font-semibold hover:underline">← Back to Home</a>
        </div>
        <h1 className="text-3xl font-bold text-amber-700 mb-6 font-serif">Contact Us</h1>
        <div className="space-y-4 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
          <p>We are here to assist you with all your queries related to Vedic rituals, Puja-Paath, and Court Marriage Assistance.</p>
          
          <div className="mt-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">WhatsApp / Phone</h2>
              <p className="text-lg">+91 93231 52991</p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Email Address</h2>
              <p className="text-lg">soumyamarriagebureau@gmail.com</p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Office Location</h2>
              <p className="text-lg">Mumbai, Maharashtra, India</p>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">For immediate assistance, we recommend reaching out via WhatsApp.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;

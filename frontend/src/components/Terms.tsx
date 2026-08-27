import React from 'react';
import Footer from './Footer';

function Terms() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-grow max-w-4xl mx-auto px-4 py-12 text-gray-800">
        <div className="mb-8">
          <a href="/" className="text-amber-600 font-semibold hover:underline">← Back to Home</a>
        </div>
        <h1 className="text-3xl font-bold text-amber-700 mb-6 font-serif">Terms and Conditions</h1>
        <div className="space-y-4 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
          <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
          <p>Please read these Terms and Conditions carefully before using our website and services.</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">2. Services Provided</h2>
          <p>Santosh Shastri provides various services including Vedic rituals, Puja-Paath, and Court Marriage Assistance. The details of these services are as described on the website.</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">3. Payments and Refunds</h2>
          <p>Payment for services must be made as agreed upon booking. Refund policies depend on the specific service and the timing of cancellation. Please contact us directly for refund requests.</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">4. User Responsibilities</h2>
          <p>Users must provide accurate information when booking services. We reserve the right to refuse service if the provided information is inaccurate or if the request is deemed inappropriate.</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">5. Changes to Terms</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. Your continued use of the service following the posting of any changes to the Terms constitutes acceptance of those changes.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Terms;

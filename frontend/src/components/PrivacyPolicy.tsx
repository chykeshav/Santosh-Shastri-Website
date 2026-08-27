import React from 'react';
import Footer from './Footer';

function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-grow max-w-4xl mx-auto px-4 py-12 text-gray-800">
        <div className="mb-8">
          <a href="/" className="text-amber-600 font-semibold hover:underline">← Back to Home</a>
        </div>
        <h1 className="text-3xl font-bold text-amber-700 mb-6 font-serif">Privacy Policy</h1>
        <div className="space-y-4 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
          <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
          <p>This Privacy Policy describes how we collect, use, and protect your information when you use our website and services.</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">1. Information We Collect</h2>
          <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us. This includes your Name, Phone Number, and Email Address.</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">2. How We Use Your Information</h2>
          <p>We use the information we collect or receive to facilitate account creation and logon process, to send administrative information to you, to fulfill and manage your bookings, and to respond to legal requests and prevent harm.</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">3. Sharing of Information</h2>
          <p>We do not share, sell, rent, or trade any of your information with third parties for their promotional purposes.</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">4. Data Security</h2>
          <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process.</p>
          
          <h2 className="text-xl font-bold mt-6 mb-2">5. Contact Us</h2>
          <p>If you have questions or comments about this notice, you may contact us using the information provided on our website.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;

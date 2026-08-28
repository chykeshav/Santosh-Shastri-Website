import React from 'react';

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.',
  },
  {
    title: '2. Services Provided',
    body: 'Santosh Shastri provides various services including Vedic rituals, Puja-Paath, and Court Marriage Assistance. The details of these services are as described on the website.',
  },
  {
    title: '3. Payments and Refunds',
    body: 'Payment for services must be made as agreed upon booking. Refund policies depend on the specific service and the timing of cancellation. Please contact us directly for refund requests.',
  },
  {
    title: '4. User Responsibilities',
    body: 'Users must provide accurate information when booking services. We reserve the right to refuse service if the provided information is inaccurate or if the request is deemed inappropriate.',
  },
  {
    title: '5. Changes to Terms',
    body: 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. Your continued use of the service following the posting of any changes to the Terms constitutes acceptance of those changes.',
  },
];

function Terms() {
  return (
    <div className="relative flex-grow bg-[#FFFDD0] py-16 px-4 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto">
        <div className="mb-6">
          <a href="/" className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-600 transition">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Home
          </a>
        </div>

        <div className="text-center mb-8">
          <span className="text-3xl text-amber-500 block mb-2">ॐ</span>
          <h1 className="text-3xl md:text-4xl font-bold text-maroon font-serif mb-3">Terms and Conditions</h1>
          <span className="badge-pill">Last Updated: {new Date().toLocaleDateString()}</span>
        </div>

        <div className="card-premium p-6 md:p-10">
          <p className="text-gray-600 leading-relaxed mb-6 pb-6 border-b border-amber-100">
            Please read these Terms and Conditions carefully before using our website and services.
          </p>

          <div className="space-y-7">
            {sections.map((s) => (
              <div key={s.title} className="pl-5 border-l-4 border-amber-300/70">
                <h2 className="text-lg md:text-xl font-bold text-maroon mb-2">{s.title}</h2>
                <p className="text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;

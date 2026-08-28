import React from 'react';

const sections = [
  {
    title: '1. Information We Collect',
    body: 'We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us. This includes your Name, Phone Number, and Email Address.',
  },
  {
    title: '2. How We Use Your Information',
    body: 'We use the information we collect or receive to facilitate account creation and logon process, to send administrative information to you, to fulfill and manage your bookings, and to respond to legal requests and prevent harm.',
  },
  {
    title: '3. Sharing of Information',
    body: 'We do not share, sell, rent, or trade any of your information with third parties for their promotional purposes.',
  },
  {
    title: '4. Data Security',
    body: 'We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process.',
  },
  {
    title: '5. Contact Us',
    body: 'If you have questions or comments about this notice, you may contact us using the information provided on our website.',
  },
];

function PrivacyPolicy() {
  return (
    <div className="relative flex-grow bg-[#FFFDD0] py-16 px-4 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto">
        <div className="mb-6">
          <a href="/" className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-600 transition">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Home
          </a>
        </div>

        <div className="text-center mb-8">
          <span className="text-3xl text-amber-500 block mb-2">ॐ</span>
          <h1 className="text-3xl md:text-4xl font-bold text-maroon font-serif mb-3">Privacy Policy</h1>
          <span className="badge-pill">Last Updated: {new Date().toLocaleDateString()}</span>
        </div>

        <div className="card-premium p-6 md:p-10">
          <p className="text-gray-600 leading-relaxed mb-6 pb-6 border-b border-amber-100">
            This Privacy Policy describes how we collect, use, and protect your information when you use our website and services.
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

export default PrivacyPolicy;

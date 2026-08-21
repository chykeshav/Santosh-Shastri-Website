import React from 'react';

const services = [
  { title: 'Court Marriage Assistance', icon: '⚖️', description: 'Full guidance and paperwork for court marriage in Mumbai.' },
  { title: 'Marriage Registration', icon: '📜', description: 'Official registration of your marriage with all legal formalities.' },
  { title: 'Ganpati Puja', icon: '🐘', description: 'Traditional Ganpati worship ceremony for new beginnings.' },
  { title: 'Satyanarayan Puja', icon: '🪔', description: 'Devotional worship of Lord Satyanarayan for prosperity.' },
  { title: 'Navgrah Puja', icon: '🌟', description: 'Remedial puja for the nine planets to bring harmony.' },
  { title: 'Shanti Kalash Puja', icon: '🏺', description: 'Peace‑bringing Kalash puja for home and family.' },
  { title: 'Durga Paath', icon: '🌺', description: 'Recitation of Durga stotra for divine blessings.' },
  { title: 'Rudrabhishek', icon: '🔱', description: 'Sacred Rudra abhishek ceremony for Lord Shiva.' },
  { title: 'Janam Kundli Consultation', icon: '🔭', description: 'Astrological birth‑chart analysis and life guidance.' },
];

function Services() {
  return (
    <section className="bg-cream py-16 px-4" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-maroon">Our Services</h2>
        <div className="om-divider">ॐ</div>

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {services.map((svc, idx) => (
            <div key={idx} className="service-card group">
              <div className="text-3xl mb-3">{svc.icon}</div>
              <h3 className="text-lg font-semibold text-maroon mb-2 group-hover:text-amber-700 transition-colors">
                {svc.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

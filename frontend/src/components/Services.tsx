import React from 'react';

const services = [
  { title: 'Court Marriage Assistance', description: 'Full guidance and paperwork for court marriage.' },
  { title: 'Marriage Registration', description: 'Official registration of your marriage.' },
  { title: 'Ganpati Puja', description: 'Traditional Ganpati worship ceremony.' },
  { title: 'Satyanarayan Puja', description: 'Devotional worship of Lord Satyanarayan.' },
  { title: 'Navgrah Puja', description: 'Remedial puja for the nine planets.' },
  { title: 'Shanti Kalash Puja', description: 'Peace‑bringing Kalash puja.' },
  { title: 'Durga Paath', description: 'Recitation of Durga stotra for blessings.' },
  { title: 'Rudrabhishek', description: 'Rudra abhishek ceremony.' },
  { title: 'Janam Kundli Consultation', description: 'Astrological birth‑chart analysis.' },
];

function Services() {
  return (
    <section className="bg-cream py-12 px-4" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-maroon mb-8">Our Services</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, idx) => (
            <div key={idx} className="border border-maroon rounded p-4 bg-white hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-maroon mb-2">{svc.title}</h3>
              <p className="text-sm text-gray-700">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

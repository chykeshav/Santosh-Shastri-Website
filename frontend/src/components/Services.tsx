import React from 'react';

const services = [
  {
    title: 'Court Marriage Assistance',
    image: 'https://loremflickr.com/400/300/wedding,india?random=1',
    description: 'Full guidance and paperwork for court marriage in Mumbai.'
  },
  {
    title: 'Marriage Registration',
    image: 'https://loremflickr.com/400/300/law,document?random=2',
    description: 'Official registration of your marriage with all legal formalities.'
  },
  {
    title: 'Ganpati Puja',
    image: 'https://loremflickr.com/400/300/ganesha,idol?random=3',
    description: 'Traditional Ganpati worship ceremony for new beginnings.'
  },
  {
    title: 'Satyanarayan Puja',
    image: 'https://loremflickr.com/400/300/puja,thali?random=4',
    description: 'Devotional worship of Lord Satyanarayan for prosperity.'
  },
  {
    title: 'Navgrah Puja',
    image: 'https://loremflickr.com/400/300/fire,ritual,india?random=5',
    description: 'Remedial puja for the nine planets to bring harmony.'
  },
  {
    title: 'Shanti Kalash Puja',
    image: 'https://loremflickr.com/400/300/copper,pot,flower?random=6',
    description: 'Peace-bringing Kalash puja for home and family.'
  },
  {
    title: 'Durga Paath',
    image: 'https://loremflickr.com/400/300/durga,goddess?random=7',
    description: 'Recitation of Durga stotra for divine blessings.'
  },
  {
    title: 'Rudrabhishek',
    image: 'https://loremflickr.com/400/300/shiva,lingam?random=8',
    description: 'Sacred Rudra abhishek ceremony for Lord Shiva.'
  },
  {
    title: 'Janam Kundli Consultation',
    image: 'https://loremflickr.com/400/300/astrology,horoscope?random=9',
    description: 'Astrological birth-chart analysis and life guidance.'
  },
];

function Services() {
  const handleServiceClick = (title: string) => {
    window.dispatchEvent(new CustomEvent('selectService', { detail: title }));
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-cream py-20 px-4 overflow-hidden" id="services">
      {/* Decorative faint pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none"></div>

      <div className="relative max-w-[1400px] w-[95%] mx-auto">
        <div className="text-center">
          <h2 className="section-title text-maroon mb-0">Our Services</h2>
          <div className="om-divider">ॐ</div>
        </div>

        <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {services.map((svc, idx) => (
            <div
              key={idx}
              onClick={() => handleServiceClick(svc.title)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-amber-100 flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Gradient wash for legibility + brand tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/70 via-maroon-900/0 to-transparent"></div>
                {/* Decorative index number */}
                <span className="absolute top-3 left-3 text-white/90 text-xs font-bold tracking-widest bg-black/25 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                {/* Om chip */}
                <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-amber-600 font-bold shadow-sm">
                  ॐ
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-center text-center">
                <h3 className="text-xl font-bold text-amber-700 mb-2 group-hover:text-amber-500 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{svc.description}</p>
                <div className="mt-5">
                  <span className="btn-3d px-6 py-2 text-xs uppercase tracking-wide group-hover:shadow-lg">
                    Book Now
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

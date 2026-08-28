import React from 'react';

const services = [
  { 
    title: 'Court Marriage Assistance', 
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80', 
    description: 'Full guidance and paperwork for court marriage in Mumbai.' 
  },
  { 
    title: 'Marriage Registration', 
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=400&q=80', 
    description: 'Official registration of your marriage with all legal formalities.' 
  },
  { 
    title: 'Ganpati Puja', 
    image: 'https://images.unsplash.com/photo-1566838318109-a8bffb91d082?auto=format&fit=crop&w=400&q=80', 
    description: 'Traditional Ganpati worship ceremony for new beginnings.' 
  },
  { 
    title: 'Satyanarayan Puja', 
    image: 'https://images.unsplash.com/photo-1601004928169-b593eb42cb1a?auto=format&fit=crop&w=400&q=80', 
    description: 'Devotional worship of Lord Satyanarayan for prosperity.' 
  },
  { 
    title: 'Navgrah Puja', 
    image: 'https://images.unsplash.com/photo-1596495392661-0738a95610fb?auto=format&fit=crop&w=400&q=80', 
    description: 'Remedial puja for the nine planets to bring harmony.' 
  },
  { 
    title: 'Shanti Kalash Puja', 
    image: 'https://images.unsplash.com/photo-1614264627018-c21e6be95221?auto=format&fit=crop&w=400&q=80', 
    description: 'Peace-bringing Kalash puja for home and family.' 
  },
  { 
    title: 'Durga Paath', 
    image: 'https://images.unsplash.com/photo-1601115856488-692abce15975?auto=format&fit=crop&w=400&q=80', 
    description: 'Recitation of Durga stotra for divine blessings.' 
  },
  { 
    title: 'Rudrabhishek', 
    image: 'https://images.unsplash.com/photo-1587837073080-448bc6a2329b?auto=format&fit=crop&w=400&q=80', 
    description: 'Sacred Rudra abhishek ceremony for Lord Shiva.' 
  },
  { 
    title: 'Janam Kundli Consultation', 
    image: 'https://images.unsplash.com/photo-1516244670077-83ab41c7bceb?auto=format&fit=crop&w=400&q=80', 
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
    <section className="bg-cream py-16 px-4" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-maroon">Our Services</h2>
        <div className="om-divider">ॐ</div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {services.map((svc, idx) => (
            <div 
              key={idx} 
              onClick={() => handleServiceClick(svc.title)}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={svc.image} 
                  alt={svc.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-center text-center">
                <h3 className="text-xl font-bold text-amber-700 mb-2 group-hover:text-amber-500 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{svc.description}</p>
                <div className="mt-4">
                  <span className="inline-block px-4 py-2 bg-amber-50 text-amber-700 font-semibold text-xs uppercase tracking-wide rounded-full group-hover:bg-amber-100 transition-colors">
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

import React, { useState } from 'react';

const images = [
  { src: '/images/pandit1.jpg',  alt: 'Pandit Santosh Shastri at temple' },
  { src: '/images/pandit2.png',  alt: 'Pandit Santosh Shastri at puja ceremony' },
  { src: '/images/wedding1.jpg', alt: 'Court Marriage ceremony conducted by Pandit ji' },
  { src: '/images/pandit3.jpg',  alt: 'Pandit Santosh Shastri' },
  { src: '/images/pandit4.png',  alt: 'Pandit Santosh Shastri at home puja' },
];

const Gallery = () => {
  const [enlarged, setEnlarged] = useState<string | null>(null);

  // Fallback to loremflickr if local image fails
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>, idx: number) => {
    const keywords = ['temple,puja', 'flower,puja', 'wedding,mandap', 'shiva,lingam', 'goddess,durga'];
    (e.target as HTMLImageElement).src = `https://loremflickr.com/600/600/${keywords[idx]}?random=${idx}`;
  };

  return (
    <section className="py-20 bg-gray-50" id="gallery">
      <div className="container mx-auto max-w-[1400px] w-[95%] px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#800000] mb-4">
            A Glimpse of Devotion
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-amber-300 w-16"></div>
            <span className="text-2xl text-amber-500">ॐ</span>
            <div className="h-px bg-amber-300 w-16"></div>
          </div>
          <p className="mt-4 text-gray-500 text-lg">Sacred moments from our Vedic rituals and ceremonies.</p>
        </div>

        {/* Bento Box Layout for Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          
          {/* Main Large Image */}
          <div 
            className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer border-[6px] border-white"
            onClick={() => setEnlarged(images[0].src)}
          >
            <img 
              src={images[0].src} 
              alt={images[0].alt} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              onError={(e) => handleError(e, 0)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-semibold text-lg">{images[0].alt}</span>
            </div>
            {/* 3D Hover Overlay Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white shadow-xl">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
              </div>
            </div>
          </div>

          {/* 4 Smaller Images */}
          {images.slice(1).map(({ src, alt }, idx) => (
            <div 
              key={idx + 1}
              className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-2xl shadow-md cursor-pointer border-[4px] border-white"
              onClick={() => setEnlarged(src)}
            >
              <img 
                src={src} 
                alt={alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => handleError(e, idx + 1)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium text-sm line-clamp-2">{alt}</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white shadow-xl">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>

      {/* Lightbox Modal */}
      {enlarged && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300"
          onClick={() => setEnlarged(null)}
        >
          <div className="relative max-w-5xl w-full flex justify-center animate-fadeInUp">
            <img
              src={enlarged}
              alt="Enlarged"
              className="max-h-[85vh] rounded-xl shadow-2xl border-4 border-white/10 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://loremflickr.com/800/600/temple,puja?random=99';
              }}
            />
            <button
              onClick={() => setEnlarged(null)}
              className="absolute -top-12 right-0 md:-right-12 text-white/50 hover:text-white transition bg-white/10 hover:bg-red-500 rounded-full p-2"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

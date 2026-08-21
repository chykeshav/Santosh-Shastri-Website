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

  return (
    <section className="py-16 bg-white" id="gallery">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="section-title text-maroon">Photo Gallery</h2>
        <div className="om-divider">ॐ</div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-8">
          {images.map(({ src, alt }, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer aspect-square bg-gray-100"
              onClick={() => setEnlarged(src)}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).closest('div')!.classList.add('flex','items-center','justify-center');
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {enlarged && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setEnlarged(null)}
        >
          <img
            src={enlarged}
            alt="Enlarged"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
          />
          <button
            onClick={() => setEnlarged(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-amber-400 transition"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;

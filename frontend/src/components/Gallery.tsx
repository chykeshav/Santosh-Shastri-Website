import React from 'react';

const images = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  '/images/photo4.jpg',
  '/images/photo5.jpg',
];

const Gallery = () => (
  <section className="py-8 bg-cream" id="gallery">
    <div className="container mx-auto max-w-6xl px-4">
      <h2 className="text-3xl font-bold text-center text-maroon mb-8">Photo Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Gallery ${idx + 1}`}
            className="w-full h-48 rounded shadow-lg object-cover"
          />
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;

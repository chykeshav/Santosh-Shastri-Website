import React from 'react';

const images = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  '/images/photo4.jpg',
  '/images/photo5.jpg',
];

function Gallery() {
  return (
    <section className="bg-white py-12 px-4" id="gallery">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-maroon mb-8">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Santosh Shastri ${idx + 1}`}
              className="w-full h-48 object-cover rounded shadow-md hover:shadow-lg transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;

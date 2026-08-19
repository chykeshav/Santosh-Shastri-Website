import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="bg-maroon text-cream py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Santosh Shastri – Court Marriage & Puja‑Paath Service</h1>
        <p className="text-xl md:text-2xl mb-6">Trusted Pandit Ji for Court Marriage, Marriage Registration & Vedic Puja Services in Mumbai</p>
        {/* Face photo – place as public/images/pandit-face.jpg */}
        <img src="/images/pandit-face.jpg" alt="Pandit Santosh Shastri" className="mx-auto rounded-full w-48 h-48 object-cover mb-6" />
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://wa.me/919323152991" target="_blank" rel="noopener noreferrer" className="bg-saffron text-maroon py-2 px-6 rounded hover:bg-gold transition">
            WhatsApp – Chat Now
          </a>
          <a href="#booking" className="bg-gold text-maroon py-2 px-6 rounded hover:bg-saffron transition">
            Book Online Video Puja
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

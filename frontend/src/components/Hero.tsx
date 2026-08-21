import React from 'react';

function Hero() {
  return (
    <section className="hero-gradient text-white py-20 px-4 text-center relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-60px] w-64 h-64 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Om symbol */}
        <div className="text-5xl mb-3 animate-fadeInUp" style={{ color: '#D4AF37' }}>ॐ</div>

        <h1 className="text-4xl md:text-5xl font-bold mb-3 animate-fadeInUp delay-100"
            style={{ fontFamily: "'Playfair Display', serif" }}>
          Santosh Shastri
        </h1>
        <p className="text-lg md:text-xl text-amber-200 font-medium mb-2 animate-fadeInUp delay-100">
          Court Marriage &amp; Puja‑Paath Services
        </p>
        <p className="text-white/70 mb-8 animate-fadeInUp delay-200">
          Trusted Pandit Ji for Court Marriage, Marriage Registration &amp; Vedic Puja in Mumbai
        </p>

        {/* Profile photo */}
        <img
          src="/images/pandit-face.jpg"
          alt="Pandit Santosh Shastri"
          className="mx-auto rounded-full w-36 h-36 object-cover mb-8 ring-4 ring-amber-400 ring-offset-4 ring-offset-maroon shadow-2xl animate-fadeInUp delay-200"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeInUp delay-300">
          <a
            href="https://wa.me/919323152991"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp – Chat Now
          </a>
          <a href="#booking" className="btn-secondary">
            📅 Book Online Video Puja
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import React from 'react';

function Hero() {
  return (
    <section className="relative overflow-hidden w-full" id="home">
      
      {/* Full-width Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-95"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto flex flex-col md:flex-row px-4 md:px-8 py-16 md:py-24">
        
        {/* Left Content Area */}
        <div className="w-full md:w-3/5 flex flex-col justify-center text-left md:pr-10">
          <div className="text-5xl mb-4 animate-fadeInUp" style={{ color: '#FCD34D' }}>ॐ</div>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white animate-fadeInUp delay-100 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Santosh Shastri
          </h1>
          
          <h2 className="text-xl md:text-2xl text-amber-300 font-semibold mb-3 animate-fadeInUp delay-100">
            Court Marriage &amp; Puja-Paath Services
          </h2>
          
          <p className="text-white/80 text-lg mb-10 animate-fadeInUp delay-200 max-w-xl leading-relaxed">
            Your trusted Pandit Ji for seamless Court Marriages, Legal Marriage Registrations, and authentic Vedic Pujas in Mumbai.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 animate-fadeInUp delay-300">
            <a
              href="https://wa.me/919323152991"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d px-8 py-4 text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <a 
              href="#booking" 
              className="btn-3d-outline px-8 py-4 text-lg"
            >
              🗓 Book Online Video Puja
            </a>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="w-full md:w-2/5 flex items-center justify-center mt-12 md:mt-0 relative">
          {/* Soft glow behind the image */}
          <div className="absolute w-72 h-72 bg-amber-500/40 rounded-full blur-3xl pointer-events-none"></div>
          
          {/* Pandit Ji Photo */}
          <div className="relative border-4 border-amber-400 rounded-full p-2 bg-white/10 shadow-[0_0_50px_rgba(252,211,77,0.3)] animate-fadeInUp delay-200">
            <img
              src="/images/pandit-face.jpg"
              alt="Pandit Santosh Shastri"
              className="rounded-full w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover border-4 border-[#800000]"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://loremflickr.com/400/400/portrait,indian,man?random=10'; }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;

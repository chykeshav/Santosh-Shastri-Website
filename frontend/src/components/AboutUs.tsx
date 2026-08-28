import React from 'react';

const specialities = ['Navgrah Puja', 'Satyanarayan Puja', 'Ganpati Puja', 'Marriage Registration'];

function AboutUs() {
  return (
    <div className="relative flex-grow bg-[#FFFDD0] py-20 px-4 flex items-center justify-center overflow-hidden">
      {/* Decorative ambient glows */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-maroon-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-[1400px] w-[95%]">
        {/* Premium Contained About Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-amber-100">

          {/* Left Image Area */}
          <div className="w-full md:w-2/5 relative min-h-[320px] md:min-h-[480px]">
            <img
              src="https://loremflickr.com/600/800/temple,india?random=30"
              alt="About Santosh Shastri"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-maroon/10 to-transparent flex items-end p-8">
              <div className="text-white">
                <span className="text-4xl text-amber-400 mb-2 block drop-shadow-lg">ॐ</span>
                <h2 className="text-2xl font-bold font-serif">Trust &amp; Tradition</h2>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="w-full md:w-3/5 p-10 md:p-16 flex flex-col justify-center bg-white relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-maroon leading-tight">
              About Us
            </h1>

            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                <strong className="text-amber-700">Namaste,</strong> welcome to Pandit Santosh Shastri's official website.
              </p>
              <p>
                With decades of profound experience in conducting authentic Vedic rituals, Puja-Paath, and providing expert Court Marriage Assistance, we strive to bring peace, prosperity, and legal ease to our clients' lives in Mumbai and across Maharashtra.
              </p>
              <p>
                Our specialized services include <span className="font-semibold text-gray-800">Navgrah Puja, Satyanarayan Puja, Ganpati Puja, Marriage Registration</span>, and highly personalized <span className="font-semibold text-gray-800">Kundli consultations</span>.
              </p>
              <p>
                We believe in preserving traditional Vedic authenticity while embracing modern convenience, such as our seamless Online Video Call consultations.
              </p>
            </div>

            {/* Speciality chips (visual restyle of the services already listed above) */}
            <div className="flex flex-wrap gap-2 mt-6">
              {specialities.map((s) => (
                <span key={s} className="badge-pill">
                  <span className="text-amber-500">ॐ</span>
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <a href="/#booking" className="btn-3d px-10 py-4 text-lg">
                Book a Service
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutUs;

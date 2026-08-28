import React from 'react';

function AboutUs() {
  return (
    <div className="flex-grow bg-[#FFFDD0] py-16 px-4 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        {/* Premium Contained About Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-amber-100">
          
          {/* Left Image Area */}
          <div className="w-full md:w-2/5 relative min-h-[400px]">
            <img 
              src="https://loremflickr.com/600/800/temple,india?random=30" 
              alt="About Santosh Shastri" 
              className="w-full h-full object-cover" 
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 to-transparent flex items-end p-8">
              <div className="text-white">
                <span className="text-4xl text-amber-400 mb-2 block">ॐ</span>
                <h2 className="text-2xl font-bold font-serif">Trust &amp; Tradition</h2>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="w-full md:w-3/5 p-10 md:p-16 flex flex-col justify-center bg-white relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-maroon">
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

            <div className="mt-10">
              <a href="/#booking" className="inline-block bg-amber-500 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-amber-400 transition-colors">
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

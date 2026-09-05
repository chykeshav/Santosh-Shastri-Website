import React from 'react';

function ContactUs() {
  return (
    <div className="relative flex-grow bg-[#FFFDD0] py-20 px-4 flex items-center justify-center overflow-hidden">
      {/* Decorative ambient glows */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-maroon-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-[1400px] w-[95%]">
        {/* Contact Card in Premium Dark Theme */}
        <div className="bg-[#0f0f0f] text-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-amber-900/20">

          {/* Left Info Area */}
          <div className="w-full md:w-1/2 p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 pattern-dots-dark opacity-20 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>

            <span className="relative block text-4xl text-amber-400 mb-4">ॐ</span>

            <h1 className="relative text-4xl font-bold mb-6 font-serif" style={{ color: '#D4AF37' }}>
              Contact us
            </h1>

            <p className="relative text-gray-400 mb-10 text-lg leading-relaxed">
              We are here to assist you with all your queries related to Vedic rituals, Puja-Paath, and Court Marriage Assistance in Mumbai.
            </p>

            <div className="relative space-y-8 z-10">
              {/* Office Location */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-amber-500 to-maroon-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H7" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-200">Office Address</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Marriage Office, Bandra Family Court,<br className="hidden sm:block" />
                    Anant Kanekar Marg, Bandra East,<br className="hidden sm:block" />
                    Mumbai, Maharashtra - 400051, India
                  </p>
                </div>
              </div>

              {/* Home Location */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-amber-500 to-maroon-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-200">Home Address</h3>
                  <p className="text-gray-400 leading-relaxed">
                    House No. 364, Kalyan Murbad Road,<br className="hidden sm:block" />
                    Near Sairaj Chawl, Mharalpada, Mharal Bk,<br className="hidden sm:block" />
                    Thane, Maharashtra - 421301, India
                  </p>
                </div>
              </div>

              {/* Phone/WhatsApp */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-200">WhatsApp / Call</h3>
                  <a href="https://wa.me/919323152991" className="text-gray-400 hover:text-amber-400 transition">+91 93231 52991</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-200">Email</h3>
                  <a href="mailto:soumyamarriagebureau@gmail.com" className="text-gray-400 hover:text-amber-400 transition block break-all">
                    soumyamarriagebureau@gmail.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-amber-500 to-maroon-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-200">Working Hours</h3>
                  <p className="text-gray-400 leading-relaxed">Monday – Saturday, 10:00 AM – 5:00 PM</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Map Area */}
          <div className="w-full md:w-1/2 bg-gray-900 relative min-h-[320px] md:min-h-0">
            <iframe
              title="Marriage Office, Bandra Family Court, Anant Kanekar Marg, Mumbai — Map"
              src="https://www.google.com/maps?q=Marriage+Office+Bandra+Family+Court+Anant+Kanekar+Marg+Bandra+East+Mumbai+400051&output=embed"
              className="absolute inset-0 w-full h-full grayscale-[35%] contrast-125 opacity-90"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/10 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.google.com/maps?q=Marriage+Office+Bandra+Family+Court+Anant+Kanekar+Marg+Bandra+East+Mumbai+400051"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 block text-center btn-3d-outline py-3.5 text-base"
              >
                Get Directions
              </a>
              <a
                href="https://wa.me/919323152991"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 block text-center btn-3d py-3.5 text-base"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactUs;

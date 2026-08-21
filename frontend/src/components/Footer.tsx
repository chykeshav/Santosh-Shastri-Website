import React from 'react';

function Footer() {
  return (
    <footer className="hero-gradient text-white pt-10 pb-6 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-3xl mb-1" style={{ color: '#D4AF37' }}>ॐ</div>
            <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Santosh Shastri</h3>
            <p className="text-white/60 text-sm">Court Marriage &amp; Puja‑Paath Services<br/>Mumbai, Maharashtra</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-amber-400 font-semibold mb-3 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#services" className="hover:text-amber-400 transition">Our Services</a></li>
              <li><a href="#booking" className="hover:text-amber-400 transition">Book a Puja</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition">Photo Gallery</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-amber-400 font-semibold mb-3 uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="https://wa.me/919323152991" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 hover:text-amber-400 transition">
                  <span>💬</span> WhatsApp: +91 93231 52991
                </a>
              </li>
              <li>
                <a href="mailto:soumyamarriagebureau@gmail.com"
                   className="flex items-center gap-2 hover:text-amber-400 transition">
                  <span>✉️</span> soumyamarriagebureau@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-4 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Santosh Shastri. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

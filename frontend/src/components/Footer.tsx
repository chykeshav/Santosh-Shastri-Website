import React from 'react';

function Footer() {
  return (
    <footer className="bg-maroon text-cream py-6 px-4 text-center mt-auto">
      <div className="max-w-4xl mx-auto">
        <p className="mb-1">Santosh Shastri – Court Marriage & Puja‑Paath Service</p>
        <p className="text-sm">
          <a href="https://wa.me/919323152991" target="_blank" rel="noopener noreferrer" className="underline hover:text-saffron">
            WhatsApp: +91 93231 52991
          </a>
        </p>
        <p className="text-xs mt-2 text-cream/70">© {new Date().getFullYear()} Santosh Shastri. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

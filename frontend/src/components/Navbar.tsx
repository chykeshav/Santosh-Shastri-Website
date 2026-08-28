import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'About', href: '/about-us' },
    { name: 'Contact', href: '/contact-us' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-20">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="/" className="flex items-center gap-2">
              <span className="text-3xl text-amber-500 font-bold">ॐ</span>
              <div className="flex flex-col">
                <span className="font-bold text-xl" style={{ color: '#800000', fontFamily: "'Playfair Display', serif" }}>
                  Santosh Shastri
                </span>
                <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">
                  Marriage &amp; Puja
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => {
              const isActive = path === link.href || (path === '/' && link.href.startsWith('/#'));
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    isActive ? 'text-amber-600 border-b-2 border-amber-600 pb-1' : 'text-gray-700 hover:text-amber-500'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a 
              href="/#booking" 
              className="ml-4 px-6 py-2.5 bg-amber-500 text-white font-bold rounded-lg shadow hover:bg-amber-400 transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-500 focus:outline-none"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#booking"
              onClick={() => setIsOpen(false)}
              className="block mt-4 text-center px-3 py-3 rounded-md text-base font-bold text-white bg-amber-500 hover:bg-amber-400"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

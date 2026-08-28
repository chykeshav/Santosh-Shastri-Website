import React, { useEffect, useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'About', href: '/about-us' },
    { name: 'Contact', href: '/contact-us' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_4px_24px_-4px_rgba(128,0,0,0.18)]' : 'shadow-sm'
      }`}
    >
      <div className="max-w-[1400px] w-full mx-auto px-4">
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="/" className="flex items-center gap-3 group">
              <span className="relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200 shadow-sm group-hover:shadow-md transition-shadow">
                <span className="text-2xl text-amber-600 font-bold">ॐ</span>
              </span>
              <div className="flex flex-col leading-tight">
                <span
                  className="font-bold text-lg md:text-xl text-maroon"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Santosh Shastri
                </span>
                <span className="text-[11px] text-gray-500 font-semibold tracking-[0.15em] uppercase">
                  Marriage &amp; Puja
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1.5 pr-2">
            {links.map((link) => {
              const isActive = path === link.href || (path === '/' && link.href.startsWith('/#'));
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-5 py-2 rounded-xl text-[15px] font-bold transition-all duration-150 tracking-wide ${
                    isActive
                      ? 'bg-amber-100 text-amber-800 shadow-[0_3px_0_0_#f59e0b] -translate-y-[2px]'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-amber-600 hover:shadow-[0_3px_0_0_#d1d5db] hover:-translate-y-[2px] active:shadow-none active:translate-y-[2px]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="w-px h-8 bg-gray-200 mx-4"></div>

            <a href="/#booking" className="relative btn-3d px-8 py-3 text-base shadow-md">
              <span className="absolute -inset-1 rounded-xl bg-amber-400/30 blur-md animate-pulse -z-10"></span>
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              className="relative w-11 h-11 flex items-center justify-center rounded-xl text-maroon bg-amber-50 hover:bg-amber-100 transition-colors focus:outline-none"
            >
              <svg
                className={`h-6 w-6 absolute transition-all duration-200 ${isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 absolute transition-all duration-200 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden bg-white border-t border-amber-100 shadow-lg transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-3 pt-3 pb-5 space-y-1">
          {links.map((link) => {
            const isActive = path === link.href || (path === '/' && link.href.startsWith('/#'));
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isActive ? 'bg-amber-50 text-amber-700' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="/#booking"
            onClick={() => setIsOpen(false)}
            className="block mt-3 text-center px-4 py-3.5 rounded-xl text-base font-bold text-white bg-amber-500 hover:bg-amber-400 shadow-md transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="relative z-50 px-6 py-8 w-full bg-cream border-b border-gray-200">
      <div className="max-w-[1500px] mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <a 
            href="#home" 
            onClick={(e) => handleScroll(e, '#home')}
            className="flex items-center gap-1 animate-fade-in-left group cursor-pointer"
        >
            <div className="relative">
                <span className="font-oswald font-bold text-6xl tracking-tighter text-black transition-all duration-300">
                    VK
                </span>
                <div className="absolute bottom-[5px] -right-4 w-3 h-3 bg-brand-red"></div>
            </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12 animate-fade-in-down" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-xl font-extrabold text-black uppercase tracking-wide hover:text-brand-red transition-colors link-underline"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block animate-fade-in-down" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
             <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="px-9 py-4 bg-brand-red text-white text-base font-bold rounded-full hover:bg-red-700 transition-all hover:scale-105 active:scale-95 duration-300 inline-block"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-black animate-fade-in-left hover:text-brand-red transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center gap-10 md:hidden animate-fade-in-up">
            <button 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 p-2 bg-gray-200 rounded-full hover:bg-gray-300 text-black hover:rotate-90 transition-all duration-300"
            >
                <X size={28} />
            </button>
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-4xl font-oswald font-bold text-black uppercase tracking-tight hover:text-brand-red hover:scale-110 transition-all duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
             onClick={(e) => handleScroll(e, '#contact')}
            className="px-10 py-5 bg-brand-red text-white text-lg font-bold rounded-full mt-4 hover:scale-105 hover:shadow-lg transition-transform"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
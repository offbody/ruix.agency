import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O nama', href: '#about' },
    { name: 'Usluge', href: '#services' },
    { name: 'Proces', href: '#process' },
    { name: 'Benefiti', href: '#benefits' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-white/90 backdrop-blur-md border-slate-200 py-4 text-slate-900' : 'bg-transparent border-transparent py-8 text-white'}`}>
      <div className="w-full px-6 md:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <span className="text-2xl font-bold font-sans tracking-tighter uppercase">
                ruix<span className={scrolled ? 'text-ruix-600' : 'text-ruix-400'}>.agency</span>
              </span>
            </a>
          </div>
          
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-widest transition-colors hover:text-ruix-500 ${scrolled ? 'text-slate-900' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-8 py-3 border border-current rounded-none font-bold uppercase tracking-wider transition-all hover:bg-ruix-600 hover:border-ruix-600 hover:text-white ${scrolled ? 'text-slate-900' : 'text-white'}`}
            >
              Demo
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${scrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950 absolute top-full left-0 w-full h-screen border-t border-slate-800 flex flex-col justify-center items-center">
          <div className="space-y-8 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-4xl font-bold text-white hover:text-ruix-500 transition-colors uppercase tracking-tight"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-block mt-8 bg-ruix-600 text-white px-10 py-4 text-xl font-bold uppercase tracking-wider"
            >
              Zakažite Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
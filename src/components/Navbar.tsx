import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck, Calendar, AlertTriangle } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenCall: () => void;
}

export default function Navbar({ onOpenBooking, onOpenCall }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section highlights
      const sections = ['home', 'services', 'why-us', 'how-it-works', 'industries', 'testimonials', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'industries', label: 'Industries' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Emergency Call Banner */}
      <div id="emergency-banner" className="bg-amber-600 text-white text-xs md:text-sm font-medium py-2 px-4 flex items-center justify-between z-50 relative">
        <div className="flex items-center gap-2 mx-auto md:mx-0">
          <AlertTriangle className="w-4 h-4 animate-pulse text-amber-100" />
          <span><strong>24/7 Emergency Dispatch Available:</strong> Active wasp swarms, rodent sightings, or bedbug outbreaks.</span>
        </div>
        <button 
          onClick={onOpenCall}
          className="hidden md:flex items-center gap-1.5 bg-white text-amber-700 hover:bg-amber-50 px-3 py-1 rounded-full text-xs font-bold transition-all shadow-xs cursor-pointer"
        >
          <Phone className="w-3.5 h-3.5" />
          Priority Call: (800) 555-0199
        </button>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-dark-950/90 text-white shadow-xl backdrop-blur-md py-3' 
            : 'bg-white/95 text-dark-900 border-b border-gray-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => handleLinkClick('home')} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="bg-primary-600 p-2 rounded-xl text-white shadow-md shadow-primary-600/30 group-hover:bg-primary-700 transition-colors">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="font-display font-bold text-lg md:text-xl tracking-tight block leading-none">
                ECO<span className="text-primary-600">SHIELD</span>
              </span>
              <span className={`text-[10px] font-semibold tracking-wider uppercase block ${isScrolled ? 'text-gray-400' : 'text-gray-500'}`}>
                Pest Control
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  activeSection === link.id
                    ? isScrolled 
                      ? 'bg-primary-600/20 text-primary-500' 
                      : 'bg-primary-50 text-primary-700'
                    : isScrolled
                      ? 'text-gray-300 hover:text-white hover:bg-white/5'
                      : 'text-gray-600 hover:text-dark-900 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Nav CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCall}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                isScrolled 
                  ? 'text-white hover:bg-white/5' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Phone className="w-4 h-4 text-primary-600" />
              <span>(800) 555-0199</span>
            </button>
            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-primary-600/20 hover:shadow-primary-600/30 active:scale-95 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Inspection</span>
            </button>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl lg:hidden cursor-pointer hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden border-t mt-3 px-4 py-4 space-y-2 animate-fade-in ${
            isScrolled ? 'bg-dark-950 border-gray-800' : 'bg-white border-gray-100'
          }`}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-primary-600 text-white'
                    : isScrolled
                      ? 'text-gray-300 hover:bg-white/5'
                      : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs">→</span>
              </button>
            ))}
            <div className="pt-4 grid grid-cols-2 gap-3 border-t border-gray-100 dark:border-gray-800">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCall();
                }}
                className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold border ${
                  isScrolled 
                    ? 'border-gray-700 text-white hover:bg-white/5' 
                    : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Phone className="w-4 h-4 text-primary-600" />
                Call Now
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 bg-primary-600 text-white py-3 rounded-xl text-sm font-bold shadow-md shadow-primary-600/20"
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

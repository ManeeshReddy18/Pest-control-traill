import React from 'react';
import { ShieldCheck, Facebook, Instagram, Linkedin, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-950 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Logo & About Column */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={handleScrollToTop}>
              <div className="bg-primary-600 p-2 rounded-xl text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-bold text-lg tracking-tight block leading-none">
                  ECO<span className="text-primary-500">SHIELD</span>
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                  Pest Control
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              We deliver premium, science-backed residential and commercial pest barriers. Safeguarding your family and operations using child & pet-safe formulas.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2 bg-white/5 hover:bg-primary-600 hover:text-white rounded-lg transition-colors text-gray-400" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-primary-600 hover:text-white rounded-lg transition-colors text-gray-400" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-primary-600 hover:text-white rounded-lg transition-colors text-gray-400" aria-label="Linkedin">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary-400">
              Site Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {['services', 'why-us', 'how-it-works', 'industries', 'testimonials', 'faq', 'contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="hover:text-primary-400 transition-colors cursor-pointer capitalize"
                  >
                    {link.replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quicklinks */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary-400">
              Services We Offer
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><button onClick={() => handleLinkClick('services')} className="hover:text-primary-400 transition-colors cursor-pointer">Termite Inspection & Baiting</button></li>
              <li><button onClick={() => handleLinkClick('services')} className="hover:text-primary-400 transition-colors cursor-pointer">Cockroach Nest Flushing</button></li>
              <li><button onClick={() => handleLinkClick('services')} className="hover:text-primary-400 transition-colors cursor-pointer">Bed Bug Heat Treatments</button></li>
              <li><button onClick={() => handleLinkClick('services')} className="hover:text-primary-400 transition-colors cursor-pointer">Rodent Seal-Up Exclusion</button></li>
              <li><button onClick={() => handleLinkClick('services')} className="hover:text-primary-400 transition-colors cursor-pointer">Mosquito Organic Barriers</button></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 text-left space-y-4 text-sm text-gray-400">
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary-400">
              Help Support
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                <span>445 Shield Way, Suite 100, Austin, TX 78701</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-500 shrink-0" />
                <span>(800) 555-0199</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-500 shrink-0" />
                <span>support@ecoshieldpest.com</span>
              </div>
            </div>

            {/* Hours summary */}
            <div className="pt-2 border-t border-gray-800 text-xs text-gray-500">
              <span>Licensed State Operator #TX-88491 <br /></span>
              <span>Fully Insured & Bonded EPA Partner</span>
            </div>
          </div>

        </div>

        {/* Lower Banner Row */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} Eco Shield Pest Control Services. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
            
            {/* Scroll Back to Top Button */}
            <button
              onClick={handleScrollToTop}
              className="bg-white/5 hover:bg-primary-600 text-gray-300 hover:text-white p-2.5 rounded-xl transition-all cursor-pointer shadow-md"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

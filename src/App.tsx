import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import BeforeAfter from './components/BeforeAfter';
import Industries from './components/Industries';
import BookingForm from './components/BookingForm';
import ServiceArea from './components/ServiceArea';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { Phone, MessageSquare, X, ShieldAlert, CheckCircle, Calendar } from 'lucide-react';

export default function App() {
  // Booking preselected service pass down
  const [preselectedServiceId, setPreselectedServiceId] = useState<string>('');
  
  // Custom Phone/Call active popups
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  // Trigger booking form focus & auto selection
  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setPreselectedServiceId(serviceId);
    }
    const element = document.getElementById('booking-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCallModal = () => {
    setIsCallModalOpen(true);
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hello, I would like to schedule a professional pest inspection.");
    window.open(`https://wa.me/18005550199?text=${text}`, '_blank');
  };

  return (
    <div id="app-root" className="min-h-screen bg-white text-dark-900 font-sans selection:bg-primary-500 selection:text-white relative">
      
      {/* Dynamic Header & Sticky Navbar */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenCall={handleOpenCallModal} 
      />

      {/* Main Core Website Modules */}
      <main>
        
        {/* 1. Hero Section */}
        <Hero 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenCall={handleOpenCallModal} 
        />

        {/* 2. Services Section */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* 3. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 4. How It Works Timeline Section */}
        <HowItWorks />

        {/* 5. Before & After Restoration Slider */}
        <BeforeAfter />

        {/* 6. Industries Served Section */}
        <Industries />

        {/* 7. Appointment Booking Module */}
        <BookingForm 
          preselectedServiceId={preselectedServiceId} 
        />

        {/* 8. Zip Code Regional Coverage Checker */}
        <ServiceArea />

        {/* 9. Verified Testimonials Carousel */}
        <Testimonials />

        {/* 10. Interactive Search FAQ Accordion */}
        <FAQ />

        {/* 11. Contact Support & Google Map */}
        <Contact />

      </main>

      {/* Footer Details */}
      <Footer />

      {/* FLOATING ACTION INTERFACES */}

      {/* Floating WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          onClick={handleWhatsAppClick}
          className="relative bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all group active:scale-95 cursor-pointer"
          title="Chat with support"
        >
          {/* Pulsing ring */}
          <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping -z-10 group-hover:animate-none"></span>
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>

      {/* Sticky Mobile "Book Inspection" CTA Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 flex items-center justify-between sm:hidden shadow-2xl">
        <div className="text-left">
          <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wide block">24/7 Service</span>
          <span className="text-xs font-bold text-primary-700 block">Inspection Starts at $79</span>
        </div>
        <div className="flex gap-2">
          <a
            href="tel:18005550199"
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-2.5 rounded-xl flex items-center justify-center border border-gray-200 active:scale-95 transition-all"
            aria-label="Call Emergency Hotline"
          >
            <Phone className="w-5 h-5 text-primary-600" />
          </a>
          <button
            onClick={() => handleOpenBooking()}
            className="bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Inspection</span>
          </button>
        </div>
      </div>

      {/* Call Modal Popup (To prevent iframe limitations of dialers) */}
      {isCallModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 text-center border border-gray-100 shadow-2xl relative animate-scale-up text-left space-y-6">
            
            <button
              onClick={() => setIsCallModalOpen(false)}
              className="absolute top-4 right-4 bg-gray-100 text-gray-500 hover:text-dark-900 p-2 rounded-full cursor-pointer transition-colors"
              aria-label="Close call modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto shadow-md">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-display font-extrabold text-dark-900">
                  Priority Dispatch Hotline
                </h3>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  You are being connected directly to our standby licensed technician coordinator.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-center space-y-2">
              <span className="text-[10px] font-extrabold text-primary-600 uppercase tracking-widest block">Direct Dial Line</span>
              <a
                href="tel:18005550199"
                className="text-2xl font-black text-primary-700 hover:text-primary-800 transition-colors block"
              >
                (800) 555-0199
              </a>
              <span className="text-[10px] text-gray-400 block font-bold">Toll Free - 24/7 Availability</span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setIsCallModalOpen(false)}
                className="flex-1 py-3 border border-gray-200 text-gray-600 font-bold rounded-xl text-xs transition-colors cursor-pointer text-center"
              >
                Dismiss
              </button>
              <a
                href="tel:18005550199"
                className="flex-1 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-xs text-center shadow-md shadow-primary-600/10 block"
              >
                Call Now
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

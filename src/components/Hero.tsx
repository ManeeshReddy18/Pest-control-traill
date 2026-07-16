import React, { useState } from 'react';
import { ShieldCheck, Leaf, Clock, Award, Phone, Calendar, Check, Send } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenCall: () => void;
}

export default function Hero({ onOpenBooking, onOpenCall }: HeroProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length < 7) return;
    setCallbackSubmitted(true);
    setTimeout(() => {
      setPhoneNumber('');
    }, 4000);
  };

  return (
    <section id="home" className="relative bg-dark-900 text-white overflow-hidden min-h-[85vh] flex items-center pt-8 pb-16 md:py-24">
      {/* Background Image with Rich Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80"
          alt="Modern Home Interior Pest Protection"
          className="w-full h-full object-cover object-center opacity-30"
          referrerPolicy="no-referrer"
        />
        {/* Radial and Linear Gradients to make text extremely readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            
            {/* Eco Badge / Active status */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-primary-400 text-xs font-bold uppercase tracking-wide animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Active in Your Area
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 px-3.5 py-1.5 rounded-full text-xs font-semibold">
                <Leaf className="w-3.5 h-3.5 text-primary-400" />
                <span>Eco-Friendly & Safe Formulas</span>
              </div>
            </div>

            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
                Protect Your Home & <br className="hidden sm:inline" />
                <span className="text-primary-500">Business</span> from Pests
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-xl font-light leading-relaxed">
                Fast, Safe & Affordable Pest Control Services with Guaranteed Results. Trust our licensed local specialists to guard your space today.
              </p>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl text-base font-bold shadow-lg shadow-primary-600/30 active:scale-98 transition-all cursor-pointer group"
              >
                <Calendar className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                <span>Book Free Inspection</span>
              </button>
              <button
                onClick={onOpenCall}
                className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-8 py-4 rounded-xl text-base font-bold active:scale-98 transition-all cursor-pointer"
              >
                <Phone className="w-5 h-5 text-primary-500" />
                <span>Call (800) 555-0199</span>
              </button>
            </div>

            {/* Interactive Quick Callback Form (High Conversion Widget) */}
            <div className="bg-white/5 border border-white/10 p-4 md:p-5 rounded-2xl max-w-xl backdrop-blur-md">
              <h3 className="text-sm font-bold tracking-wider uppercase text-primary-400 mb-2.5">
                Need a Instant Callback?
              </h3>
              {callbackSubmitted ? (
                <div className="flex items-center gap-2 text-primary-400 bg-primary-500/10 p-3 rounded-xl border border-primary-500/20 text-sm">
                  <Check className="w-5 h-5 shrink-0" />
                  <span>Success! A technician will call you in exactly <strong>10 minutes</strong>.</span>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="flex gap-2">
                  <input
                    type="tel"
                    placeholder="Enter Phone Number..."
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-hidden focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-primary-600 hover:bg-primary-700 text-white text-xs md:text-sm font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                  >
                    <Send className="w-4 h-4" />
                    Request Call
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Hero Right Visual Column - Modern Hero Feature Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Main Decorative Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-4/3 lg:aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Clean Home Shielded"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent"></div>
                
                {/* Embedded dynamic statistics overlay to build trust */}
                <div className="absolute bottom-4 left-4 right-4 bg-dark-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-extrabold text-primary-500 block leading-none">
                      15k+
                    </span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                      Homes Guarded
                    </span>
                  </div>
                  <div className="w-px h-8 bg-white/10"></div>
                  <div>
                    <span className="text-2xl font-extrabold text-primary-500 block leading-none">
                      4.9★
                    </span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                      Google Rating
                    </span>
                  </div>
                  <div className="w-px h-8 bg-white/10"></div>
                  <div>
                    <span className="text-2xl font-extrabold text-primary-500 block leading-none">
                      100%
                    </span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                      Guarantee
                    </span>
                  </div>
                </div>
              </div>

              {/* Float Widget 1: Clean/Sanitized Badge */}
              <div className="absolute -top-4 -right-4 bg-primary-600 text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 border border-primary-500/30 animate-bounce" style={{ animationDuration: '4s' }}>
                <Leaf className="w-4 h-4 fill-white/15" />
                <span className="text-xs font-bold whitespace-nowrap">Pet & Child Safe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Trust Badges Footer Grid */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-4 bg-white/5 p-5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
            <div className="bg-primary-500/20 p-3 rounded-2xl text-primary-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white leading-tight">Licensed Experts</h4>
              <p className="text-xs text-gray-400">Certified local technicians</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/5 p-5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
            <div className="bg-primary-500/20 p-3 rounded-2xl text-primary-400">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white leading-tight">100% Safe Methods</h4>
              <p className="text-xs text-gray-400">Botanical child & pet friendly</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/5 p-5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
            <div className="bg-primary-500/20 p-3 rounded-2xl text-primary-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white leading-tight">Same-Day Service</h4>
              <p className="text-xs text-gray-400">Book before 2:00 PM today</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/5 p-5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
            <div className="bg-primary-500/20 p-3 rounded-2xl text-primary-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white leading-tight">Guaranteed Results</h4>
              <p className="text-xs text-gray-400">Free retreatment warranty</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

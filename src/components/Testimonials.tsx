import React, { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { Star, ArrowLeft, ArrowRight, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-slate-50 bento-dot-grid relative overflow-hidden">
      {/* Decorative Quote Icon in background */}
      <div className="absolute top-10 left-10 text-slate-200/50 -z-10">
        <Quote className="w-48 h-48 rotate-12 pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="text-sm font-extrabold tracking-widest text-primary-600 uppercase block">
            Client Success
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-900 font-display">
            Recommended by Over 15,000+ Families
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            See why our clients choose Eco Shield to protect their residential homes, commercial properties, and food operations.
          </p>
        </div>

        {/* Carousel Frame */}
        <div className="relative bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-xs">
          
          {/* Main Card Grid */}
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Customer Photo Column */}
            <div className="md:col-span-4 flex flex-col items-center text-center space-y-3.5">
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-primary-50 hover:border-primary-500 transition-colors duration-300">
                <img
                  src={current.imageUrl}
                  alt={current.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-display font-extrabold text-lg text-dark-900 leading-tight">
                  {current.name}
                </h4>
                <p className="text-xs text-gray-500 font-medium">
                  {current.role}
                </p>
              </div>

              {/* Verified Customer Tag */}
              {current.verified && (
                <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-black uppercase tracking-wide">Verified Client</span>
                </div>
              )}
            </div>

            {/* Customer Review Column */}
            <div className="md:col-span-8 text-left space-y-4 relative">
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < current.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} 
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-gray-700 text-base md:text-lg italic font-medium leading-relaxed">
                "{current.review}"
              </blockquote>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-400 font-bold">
                  Serviced on: {current.date}
                </span>
                
                {/* Manual Navigation Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 border border-gray-100 hover:border-gray-200 hover:bg-gray-50 text-gray-500 hover:text-dark-900 rounded-xl transition-all cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 border border-gray-100 hover:border-gray-200 hover:bg-gray-50 text-gray-500 hover:text-dark-900 rounded-xl transition-all cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Indicator Navigation Dots */}
          <div className="flex justify-center items-center gap-1.5 mt-8 border-t border-gray-50 pt-5">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-primary-600' : 'w-2.5 bg-gray-200 hover:bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              ></button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

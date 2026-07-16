import React, { useState } from 'react';
import { SERVICES } from '../data';
import { Service } from '../types';
import * as Icons from 'lucide-react';

interface ServicesProps {
  onOpenBooking: (serviceId?: string) => void;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Dynamic Icon Renderer
  const renderIcon = (iconName: string, className: string = "w-6 h-6") => {
    // Fallback if icon isn't found
    const IconComponent = (Icons as any)[iconName] || Icons.HelpCircle;
    return <IconComponent className={className} />;
  };

  const getColSpanClass = (serviceId: string) => {
    switch (serviceId) {
      case 'termite':
        return 'lg:col-span-6 md:col-span-12';
      case 'cockroach':
        return 'lg:col-span-3 md:col-span-6';
      case 'bedbug':
        return 'lg:col-span-3 md:col-span-6';
      case 'rodent':
        return 'lg:col-span-4 md:col-span-6';
      case 'mosquito':
        return 'lg:col-span-4 md:col-span-6';
      case 'ant':
        return 'lg:col-span-4 md:col-span-12';
      case 'spider':
        return 'lg:col-span-3 md:col-span-6';
      case 'commercial':
        return 'lg:col-span-9 md:col-span-12';
      default:
        return 'lg:col-span-3 md:col-span-6';
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 bento-dot-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-extrabold tracking-widest text-primary-600 uppercase block">
            Our Pest Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-900 font-display">
            Targeted Treatments for Every Threat
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We employ modern Integrated Pest Management (IPM) protocols. Our certified experts target the root biological colonies rather than just spraying the surface.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`group bento-card overflow-hidden flex flex-col h-full border border-slate-100 ${getColSpanClass(service.id)}`}
            >
              {/* Card Image Block */}
              <div className="relative h-48 overflow-hidden shrink-0">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Float Service Icon */}
                <div className="absolute top-4 left-4 bg-primary-600 text-white p-3 rounded-xl shadow-lg shadow-primary-600/20 group-hover:bg-primary-700 transition-colors">
                  {renderIcon(service.iconName, "w-5 h-5")}
                </div>

                {/* Pricing Label */}
                <div className="absolute bottom-4 right-4 bg-dark-900/95 backdrop-blur-xs text-white px-3 py-1 rounded-lg text-xs font-bold border border-white/10">
                  Starts at <span className="text-primary-400 font-extrabold">${service.basePrice}</span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <h3 className="font-display font-bold text-lg md:text-xl text-dark-900 group-hover:text-primary-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Card Action CTAs */}
                <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-gray-500 hover:text-primary-600 transition-colors cursor-pointer py-1"
                  >
                    Learn More →
                  </button>
                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="bg-primary-50 hover:bg-primary-100 text-primary-700 hover:text-primary-800 text-xs font-extrabold px-3.5 py-2 rounded-lg transition-all cursor-pointer active:scale-95"
                  >
                    Instant Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Detail Modal (Learn More Trigger) */}
        {selectedService && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
            <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-100 animate-slide-up">
              
              {/* Modal Banner */}
              <div className="relative h-64">
                <img
                  src={selectedService.imageUrl}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent"></div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 bg-black/40 text-white hover:bg-black/60 p-2.5 rounded-full backdrop-blur-xs transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <Icons.X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-6 text-white space-y-1">
                  <div className="inline-flex items-center gap-1.5 bg-primary-600 px-3 py-1 rounded-lg text-xs font-extrabold uppercase tracking-wide">
                    {renderIcon(selectedService.iconName, "w-3.5 h-3.5")}
                    <span>{selectedService.title}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-extrabold">
                    Professional Elimination
                  </h3>
                </div>
              </div>

              {/* Modal Details Content */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="space-y-3">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-gray-400">
                    Solution Overview
                  </h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>

                {/* Key Benefits Checklist */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-primary-600">
                    What our service covers
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3.5">
                    {selectedService.detailedBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <Icons.CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & Booking Action */}
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-gray-400 block">Starting Estimate</span>
                    <span className="text-3xl font-extrabold text-dark-900">
                      ${selectedService.basePrice}
                      <span className="text-xs font-semibold text-gray-500 font-sans"> (Waived Inspection Fee)</span>
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-5 py-3 border border-gray-200 text-gray-600 hover:text-dark-900 rounded-xl text-sm font-bold transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        onOpenBooking(selectedService.id);
                      }}
                      className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md shadow-primary-600/20 hover:shadow-primary-600/30 transition-all cursor-pointer"
                    >
                      Configure & Book Now
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

import React from 'react';
import { FEATURES } from '../data';
import * as Icons from 'lucide-react';

export default function WhyChooseUs() {
  // Dynamic Icon Renderer
  const renderIcon = (iconName: string, className: string = "w-6 h-6") => {
    const IconComponent = (Icons as any)[iconName] || Icons.HelpCircle;
    return <IconComponent className={className} />;
  };

  const getFeatureColSpan = (idx: number) => {
    switch (idx) {
      case 0: // Certified
        return 'lg:col-span-8 md:col-span-12';
      case 1: // Eco Friendly
        return 'lg:col-span-4 md:col-span-12';
      case 2: // Pricing
        return 'lg:col-span-4 md:col-span-6';
      case 3: // Emergency Response
        return 'lg:col-span-4 md:col-span-6';
      case 4: // Long Term Prevention
        return 'lg:col-span-4 md:col-span-12';
      case 5: // Guaranteed Warranty
        return 'lg:col-span-12 md:col-span-12';
      default:
        return 'lg:col-span-4 md:col-span-6';
    }
  };

  return (
    <section id="why-us" className="py-20 bg-slate-50 bento-dot-grid relative overflow-hidden">
      {/* Subtle Background Gradients to build trust & high-end mood */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-40 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-60 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 text-left space-y-4">
            <span className="text-sm font-extrabold tracking-widest text-primary-600 uppercase block">
              The EcoShield Distinction
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-900 font-display">
              Uncompromising Standards, Verified Protection
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              We understand that hiring a pest control service is about reclaiming your home's safety. Here is how we commit to delivering perfect, reliable results for every single house.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right hidden lg:block">
            <div className="inline-flex flex-col text-left p-6 bg-white rounded-3xl border border-slate-100 shadow-xs max-w-[280px]">
              <span className="text-4xl font-black text-primary-700 block">100%</span>
              <span className="text-xs font-bold text-primary-900 uppercase tracking-wide">Satisfaction Guarantee</span>
              <span className="text-[11px] text-gray-500 mt-2">If pests reappear, we retreat at zero expense to you.</span>
            </div>
          </div>
        </div>

        {/* Features Bento/Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              className={`group bento-card p-6 md:p-8 flex flex-col justify-between border border-slate-100 ${getFeatureColSpan(idx)}`}
            >
              <div className="space-y-4">
                {/* Icon wrapper with glow effect on hover */}
                <div className="inline-flex p-3 rounded-2xl bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {renderIcon(feature.iconName, "w-6 h-6")}
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg md:text-xl text-dark-900 group-hover:text-primary-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Accent footer element to represent attention to detail */}
              <div className="w-12 h-1 bg-slate-100 group-hover:w-full group-hover:bg-primary-500 transition-all duration-300 mt-6 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Badge Row */}
        <div className="mt-16 bg-dark-900 text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 to-transparent z-0"></div>
          <div className="relative z-10 text-left space-y-2">
            <h3 className="text-xl md:text-2xl font-display font-bold">
              Looking for commercial-grade industrial pest audits?
            </h3>
            <p className="text-gray-300 text-sm max-w-xl">
              We customize documentation, logs, and trap location maps matching local sanitation audits. Get in touch with our commercial operations director.
            </p>
          </div>
          <a
            href="#contact"
            className="relative z-10 bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all cursor-pointer whitespace-nowrap active:scale-95"
          >
            Request Enterprise Proposal
          </a>
        </div>

      </div>
    </section>
  );
}

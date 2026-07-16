import React from 'react';
import { INDUSTRIES } from '../data';
import * as Icons from 'lucide-react';

export default function Industries() {
  // Dynamic Icon Renderer
  const renderIcon = (iconName: string, className: string = "w-6 h-6") => {
    const IconComponent = (Icons as any)[iconName] || Icons.HelpCircle;
    return <IconComponent className={className} />;
  };

  const getIndustryColSpan = (idx: number) => {
    switch (idx) {
      case 0:
        return 'lg:col-span-4 md:col-span-12';
      case 1:
        return 'lg:col-span-8 md:col-span-12';
      case 2:
        return 'lg:col-span-8 md:col-span-12';
      case 3:
        return 'lg:col-span-4 md:col-span-12';
      default:
        return 'lg:col-span-6';
    }
  };

  return (
    <section id="industries" className="py-20 bg-dark-900 text-white relative overflow-hidden">
      {/* Decorative Radial Backdrop Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-full max-h-[800px] bg-primary-900/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-extrabold tracking-widest text-primary-400 uppercase block">
            Industries We Shield
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Versatile Protection, Zero Business Interruption
          </h2>
          <p className="text-gray-300 text-base">
            Whether managing food-prep sanitation, sterile operating rooms, or expansive logistics warehouses, we design customized exclusion schedules conforming to strict governmental guidelines.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {INDUSTRIES.map((industry, idx) => (
            <div
              key={industry.id}
              className={`group relative h-80 rounded-3xl overflow-hidden border border-white/5 shadow-lg flex flex-col justify-end p-6 md:p-8 transition-all duration-300 hover:border-primary-500/30 hover:shadow-primary-500/5 ${getIndustryColSpan(idx)}`}
            >
              {/* Card Image Background */}
              <div className="absolute inset-0 z-0">
                <img
                  src={industry.imageUrl}
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-40 group-hover:opacity-50"
                  referrerPolicy="no-referrer"
                />
                {/* Gradient vignette for perfect text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent"></div>
              </div>

              {/* Card Content (Relative overlay) */}
              <div className="relative z-10 space-y-3.5">
                {/* Sector Icon with background badge */}
                <div className="inline-flex p-3 rounded-2xl bg-primary-600/20 text-primary-400 border border-primary-500/20 group-hover:bg-primary-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {renderIcon(industry.iconName, "w-5 h-5")}
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-display font-extrabold text-white">
                    {industry.name}
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-light">
                    {industry.description}
                  </p>
                </div>
              </div>

              {/* Hover indicator link */}
              <div className="absolute top-4 right-4 text-xs font-bold text-gray-500 group-hover:text-primary-400 transition-colors pointer-events-none">
                Shield Active
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

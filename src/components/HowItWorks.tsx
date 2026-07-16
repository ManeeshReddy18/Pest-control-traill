import React, { useState } from 'react';
import { STEPS } from '../data';
import * as Icons from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(1);

  // Dynamic Icon Renderer
  const renderIcon = (iconName: string, className: string = "w-6 h-6") => {
    const IconComponent = (Icons as any)[iconName] || Icons.HelpCircle;
    return <IconComponent className={className} />;
  };

  // Detailed breakdowns for each step to add high-fidelity interactive value!
  const stepBreakdowns: Record<number, string[]> = {
    1: [
      'Choose your preferred service, date, and hour slot',
      'Receive instant booking confirmation via email & SMS',
      'Automated text alert when your dedicated technician is en route'
    ],
    2: [
      'Comprehensive scan of foundations, attics, and crawlspaces',
      'Thermal imaging checks to locate hidden colonies',
      'Interactive risk heat-map report delivered to your phone'
    ],
    3: [
      'Application of low-odor, botanical perimeter barriers',
      'Micro-gel baits targeted directly at reproductive nests',
      'Safety lock verification on all treatment stations'
    ],
    4: [
      'Sealing of small foundation cracks & pipe entry-points',
      '90-Day sleep-tight performance guarantee starts',
      'Automated check-ins to monitor and confirm eradication success'
    ]
  };

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 bento-dot-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-extrabold tracking-widest text-primary-600 uppercase block">
            Our Shield Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-900 font-display">
            Fast, Reliable & Methodical
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Say goodbye to guesswork. Our simple 4-step treatment process is engineered to keep your residential or commercial space completely secure.
          </p>
        </div>

        {/* Timeline Path Component */}
        <div className="relative mb-12">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-slate-200 -translate-y-1/2 z-0 hidden lg:block">
            {/* Dynamic Active Progress Bar */}
            <div 
              className="h-full bg-primary-600 transition-all duration-500 rounded-full"
              style={{ width: `${((activeStep - 1) / 3) * 100}%` }}
            ></div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 relative z-10">
            {STEPS.map((step) => {
              const isActive = activeStep === step.stepNumber;
              const isPassed = activeStep > step.stepNumber;
              
              return (
                <div 
                  key={step.id}
                  onClick={() => setActiveStep(step.stepNumber)}
                  className={`cursor-pointer bento-card p-6 md:p-8 transition-all duration-300 text-left relative border ${
                    isActive 
                      ? 'border-primary-500 shadow-lg scale-102 bg-white' 
                      : 'border-slate-100 bg-white'
                  }`}
                >
                  {/* Step Number Badge */}
                  <div className={`absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    isActive 
                      ? 'bg-primary-600 text-white' 
                      : isPassed
                        ? 'bg-primary-100 text-primary-700'
                        : 'bg-slate-100 text-gray-400'
                  }`}>
                    {step.stepNumber}
                  </div>

                  <div className="space-y-4">
                    {/* Step Icon */}
                    <div className={`inline-flex p-3 rounded-xl transition-colors ${
                      isActive 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-primary-50 text-primary-600'
                    }`}>
                      {renderIcon(step.iconName, "w-5 h-5")}
                    </div>

                    <div className="space-y-1">
                      <h3 className={`font-display font-bold text-lg ${
                        isActive ? 'text-primary-700' : 'text-dark-900'
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Detail Panel based on active selection */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-xs max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center animate-fade-in">
          
          {/* Active Step Visual */}
          <div className="md:w-1/3 text-center md:border-r md:border-slate-100 md:pr-8">
            <span className="text-[10px] font-extrabold tracking-widest text-primary-600 uppercase">
              Current Stage View
            </span>
            <div className="mt-3 w-16 h-16 rounded-2xl bg-primary-600 text-white flex items-center justify-center text-2xl font-black mx-auto shadow-md shadow-primary-600/20">
              0{activeStep}
            </div>
            <h4 className="mt-3 text-lg font-display font-extrabold text-dark-900">
              {STEPS[activeStep - 1].title}
            </h4>
          </div>

          {/* Active Step Bullet Breakdown List */}
          <div className="md:w-2/3 w-full text-left">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
              Specific operations included in this phase:
            </h4>
            <ul className="space-y-3.5">
              {stepBreakdowns[activeStep].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-primary-600 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

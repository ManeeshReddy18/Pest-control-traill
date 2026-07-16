import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight, Check, ShieldCheck, HelpCircle } from 'lucide-react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage (0-100)
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="py-20 bg-slate-50 bento-dot-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Column (Left Card) */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-xs flex flex-col justify-between text-left">
            <div className="space-y-6">
              <span className="text-sm font-extrabold tracking-widest text-primary-600 uppercase block">
                Visible Transformations
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-900 font-display">
                We Don't Just Treat — We Restore
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Pest infestations leave behind allergens, pheromone scent trails, and structural damage. Our sanitization teams wipe away toxic residues, seal pathways, and restore contaminated spaces to perfect hygienic health.
              </p>

              {/* Checklist of restoration steps */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="bg-primary-50 p-1.5 rounded-full text-primary-600 shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dark-900">Pathogen Sanitization</h4>
                    <p className="text-xs text-gray-500">Elimination of rodent-borne pathogens & cockroach allergens.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary-50 p-1.5 rounded-full text-primary-600 shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dark-900">Pheromone Odor Scrubbing</h4>
                    <p className="text-xs text-gray-500">Neutralizing invisible scent trails that invite replacement colonies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary-50 p-1.5 rounded-full text-primary-600 shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dark-900">Exclusion Structural Sealing</h4>
                    <p className="text-xs text-gray-500">Plugging micro-crevices with steel mesh and heavy bonding sealants.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Slider Column (Right Card) */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-xs flex flex-col items-center justify-between">
            
            {/* Slider Container */}
            <div 
              ref={containerRef}
              className="relative w-full aspect-16/10 rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100 select-none cursor-ew-resize"
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
            >
              {/* After Image (Full width underneath) */}
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80" 
                alt="After Professional Restoration" 
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-primary-600 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider z-10 shadow-md">
                AFTER Treatment
              </div>

              {/* Before Image (Clipped on top) */}
              <div 
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80" 
                  alt="Before Unhygienic Infestation" 
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: containerRef.current?.getBoundingClientRect().width }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-amber-600 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider z-10 shadow-md">
                  BEFORE Infestation
                </div>
              </div>

              {/* Drag Handle Bar */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-xl border-2 border-white hover:bg-primary-700 active:scale-95 transition-all">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Micro instruction label */}
            <span className="text-xs text-gray-400 mt-4 flex items-center gap-1.5 font-semibold">
              <ArrowLeftRight className="w-3.5 h-3.5 text-primary-500" />
              <span>Drag the white bar left or right to compare before & after states</span>
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

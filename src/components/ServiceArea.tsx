import React, { useState } from 'react';
import { Search, MapPin, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';

export default function ServiceArea() {
  const [zipInput, setZipInput] = useState('');
  const [coverageStatus, setCoverageStatus] = useState<'idle' | 'covered' | 'not-covered'>('idle');

  const coveredZipPrefixes = ['787', '786', '782', '752', '750', '770', '772', '900', '902', '100', '101', '303', '331'];

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipInput || zipInput.trim().length < 3) return;

    // Check if the input zip prefix is in our coverage list
    const inputClean = zipInput.trim();
    const isCovered = coveredZipPrefixes.some(prefix => inputClean.startsWith(prefix));

    if (isCovered) {
      setCoverageStatus('covered');
    } else {
      setCoverageStatus('not-covered');
    }
  };

  return (
    <section className="py-20 bg-slate-50 bento-dot-grid relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Main Box container */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-xs grid md:grid-cols-12 gap-8 items-center text-left">
          
          {/* Left info */}
          <div className="md:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-bold border border-primary-200">
              <ShieldCheck className="w-4 h-4" />
              <span>Full National & Local Credentials</span>
            </div>
            
            <h3 className="text-xl md:text-2xl font-display font-extrabold text-dark-900 leading-tight">
              Is Eco Shield Active in Your Neighborhood?
            </h3>
            
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
              We service major urban and suburban areas across Texas, California, and New York. Type your ZIP code below for live regional dispatch confirmation.
            </p>
          </div>

          {/* Right Lookup Form */}
          <div className="md:col-span-6 space-y-4">
            <form onSubmit={handleZipCheck} className="flex gap-2">
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter 5-digit ZIP code (e.g. 78701)"
                  value={zipInput}
                  onChange={(e) => {
                    setZipInput(e.target.value);
                    setCoverageStatus('idle'); // Reset status on edit
                  }}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-11 pr-4 py-3.5 text-sm focus:bg-white focus:border-primary-500 focus:outline-hidden transition-all"
                  maxLength={5}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs md:text-sm px-5 py-3 rounded-2xl transition-all cursor-pointer whitespace-nowrap active:scale-95"
              >
                Check Coverage
              </button>
            </form>

            {/* Coverage feedback notifications */}
            {coverageStatus === 'covered' && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-start gap-3 animate-fade-in text-left">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-emerald-900 leading-tight">Coverage Confirmed!</h4>
                  <p className="text-[11px] text-emerald-700 mt-0.5 leading-relaxed">
                    Great news! A certified Eco Shield local team is active in your area. <strong>Same-day priority inspection is 100% available.</strong>
                  </p>
                </div>
              </div>
            )}

            {coverageStatus === 'not-covered' && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 animate-fade-in text-left">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-amber-900 leading-tight">Out of Primary Zone</h4>
                  <p className="text-[11px] text-amber-700 mt-0.5 leading-relaxed">
                    We don’t have standard daily routes there yet, but we offer specialized perimeter dispatches on request. Call our hotline to arrange a custom visit.
                  </p>
                </div>
              </div>
            )}

            {/* Standard lists */}
            <div className="flex items-center justify-between text-[11px] text-gray-400 font-bold px-1">
              <span>✓ Dallas, TX</span>
              <span>✓ Houston, TX</span>
              <span>✓ Austin, TX</span>
              <span>✓ Los Angeles, CA</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

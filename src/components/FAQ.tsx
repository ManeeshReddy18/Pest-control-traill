import React, { useState } from 'react';
import { FAQS } from '../data';
import { FAQItem } from '../types';
import { ChevronDown, Search, HelpCircle, ShieldAlert, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq1'); // Default open first FAQ
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'safety' | 'pricing' | 'warranties' | 'preparation' | 'general'>('all');

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Filter logic
  const filteredFAQs = FAQS.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categoryPills: { id: typeof selectedCategory; label: string }[] = [
    { id: 'all', label: 'All Questions' },
    { id: 'safety', label: 'Child & Pet Safety' },
    { id: 'pricing', label: 'Pricing & Inspection' },
    { id: 'warranties', label: 'Warranties' },
    { id: 'preparation', label: 'Prep Guide' },
    { id: 'general', label: 'General Info' }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50 bento-dot-grid relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-sm font-extrabold tracking-widest text-primary-600 uppercase block">
            Expert Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-900 font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Have questions about chemical compositions, preparation steps, or active guarantees? Browse our comprehensive resource list below.
          </p>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="space-y-6 mb-10">
          
          {/* Search Box */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search answers (e.g. 'pet', 'cost', 'warranty')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-4 py-3.5 text-sm focus:bg-white focus:border-primary-500 focus:outline-hidden focus:ring-1 focus:ring-primary-500 transition-all"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categoryPills.map((pill) => (
              <button
                key={pill.id}
                onClick={() => setSelectedCategory(pill.id)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === pill.id
                    ? 'bg-primary-600 text-white shadow-md shadow-primary-600/10'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>

        </div>

        {/* FAQs Accordion Block */}
        {filteredFAQs.length === 0 ? (
          <div className="py-12 text-center space-y-2 border border-dashed border-gray-200 rounded-3xl">
            <HelpCircle className="w-10 h-10 text-gray-300 mx-auto" />
            <h4 className="text-base font-bold text-dark-900">No matching questions found</h4>
            <p className="text-xs text-gray-500">Try searching with other generic keywords or reset the filter.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFAQs.map((faq) => {
              const isOpen = openId === faq.id;
              
              return (
                <div 
                  key={faq.id}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? 'border-primary-500 bg-primary-50/10 shadow-md shadow-primary-500/2' 
                      : 'border-gray-100 bg-white hover:border-gray-200'
                  }`}
                >
                  {/* Accordion Trigger */}
                  <button
                    onClick={() => handleToggle(faq.id)}
                    className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold text-sm md:text-base text-dark-900 pr-2">
                      {faq.question}
                    </span>
                    <span className={`p-1.5 rounded-lg transition-transform shrink-0 ${
                      isOpen ? 'bg-primary-600 text-white rotate-180' : 'bg-gray-100 text-gray-500'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="px-5 md:px-6 pb-6 pt-1 text-left text-xs md:text-sm text-gray-600 border-t border-gray-100/50 animate-fade-in leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}

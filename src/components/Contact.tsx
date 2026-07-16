import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle, Clock, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please enter all required information.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent("Hello Eco Shield, I would like to request an inspection quote.");
    window.open(`https://wa.me/18005550199?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 bento-dot-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-extrabold tracking-widest text-primary-600 uppercase block">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-900 font-display">
            Reach Our 24/7 Shield Support Center
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Need urgent guidance? Our dispatch centers are active 24 hours a day, 365 days a year. Call us, send a direct WhatsApp, or leave a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Contact Details Column (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-xl">
            
            <div className="space-y-6">
              <h3 className="text-lg md:text-xl font-display font-extrabold text-dark-900 border-b border-gray-100 pb-3">
                Emergency Dispatch Offices
              </h3>

              {/* Action Cards */}
              <div className="space-y-4">
                
                {/* Phone */}
                <a 
                  href="tel:18005550199" 
                  className="flex items-center gap-4 bg-gray-50/50 hover:bg-primary-50 p-4 rounded-2xl border border-gray-100 hover:border-primary-200 transition-all group"
                >
                  <div className="bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white p-3 rounded-xl transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest block">Emergency Hotline (24/7)</span>
                    <span className="text-sm md:text-base font-bold text-dark-900 group-hover:text-primary-700 transition-colors">(800) 555-0199</span>
                  </div>
                </a>

                {/* WhatsApp Button */}
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full flex items-center gap-4 bg-emerald-500/5 hover:bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all text-left group cursor-pointer"
                >
                  <div className="bg-emerald-500 text-white p-3 rounded-xl shadow-md shadow-emerald-500/20">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest block">Instant Chat Callback</span>
                    <span className="text-sm md:text-base font-bold text-dark-900 flex items-center gap-1.5">
                      Chat on WhatsApp <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                    </span>
                  </div>
                </button>

                {/* Email */}
                <a 
                  href="mailto:support@ecoshieldpest.com" 
                  className="flex items-center gap-4 bg-gray-50/50 hover:bg-primary-50 p-4 rounded-2xl border border-gray-100 hover:border-primary-200 transition-all group"
                >
                  <div className="bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white p-3 rounded-xl transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest block">Support Email</span>
                    <span className="text-sm md:text-base font-bold text-dark-900 group-hover:text-primary-700 transition-colors">support@ecoshieldpest.com</span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-center gap-4 bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                  <div className="bg-primary-50 text-primary-600 p-3 rounded-xl">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest block">Headquarters Office</span>
                    <span className="text-sm md:text-base font-bold text-dark-900">445 Shield Way, Suite 100, Austin, TX 78701</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Operating hours */}
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-3 mt-6">
              <Clock className="w-5 h-5 text-primary-600 shrink-0" />
              <div className="text-xs text-gray-500 font-semibold leading-relaxed">
                <strong>Business Hours:</strong> Mon-Fri: 7:00 AM - 9:00 PM | Sat-Sun: 8:00 AM - 6:00 PM. <br />
                <span className="text-primary-600 font-extrabold">Emergency dispatched 24 Hours / 7 Days.</span>
              </div>
            </div>

          </div>

          {/* Form and Map Frame (Right) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Contact Form */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-xl text-left relative overflow-hidden flex-1">
              
              <h3 className="text-lg md:text-xl font-display font-extrabold text-dark-900 border-b border-gray-100 pb-3 mb-6">
                Send Direct Message
              </h3>

              {submitted ? (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center z-10 animate-fade-in">
                  <div className="w-14 h-14 bg-primary-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-primary-600/20 mb-4 animate-scale-up">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-extrabold text-dark-900 font-display">Message Received!</h4>
                  <p className="text-gray-500 text-sm max-w-sm mt-2 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. A support operator will review your message and email you at <strong>{formData.email}</strong> within 1 hour.
                  </p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="text-xs font-bold text-gray-500">Your Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-primary-500 focus:outline-hidden transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="contact-email" className="text-xs font-bold text-gray-500">Your Email *</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="jane@domain.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-primary-500 focus:outline-hidden transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="contact-phone" className="text-xs font-bold text-gray-500">Phone Number</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="(555) 0199"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-primary-500 focus:outline-hidden transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="contact-subject" className="text-xs font-bold text-gray-500">Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      placeholder="General pest inquiry"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-primary-500 focus:outline-hidden transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-message" className="text-xs font-bold text-gray-500">Message / Inquiry *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Provide details about your current pest sighting or property area..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm focus:bg-white focus:border-primary-500 focus:outline-hidden transition-all min-h-[120px]"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold py-3.5 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Secure Message</span>
                </button>
              </form>

            </div>

            {/* Embedded Google Map (Rounded card) */}
            <div className="h-64 rounded-3xl overflow-hidden border border-gray-200 shadow-lg relative bg-gray-100">
              <iframe
                title="Eco Shield Austin HQ Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m4!2sAustin!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0fed03f%3A0xa13d43ea7e2a450!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1655490000000!5m2!1sen!2sus"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

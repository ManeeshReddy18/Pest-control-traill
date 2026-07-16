import React, { useState, useEffect } from 'react';
import { SERVICES } from '../data';
import { Booking } from '../types';
import { Calendar, Clock, User, Mail, Phone, MapPin, AlertTriangle, CheckCircle, DollarSign, Clipboard, Trash2, ShieldCheck } from 'lucide-react';

interface BookingFormProps {
  preselectedServiceId?: string;
  onBookingSuccess?: () => void;
}

export default function BookingForm({ preselectedServiceId = '', onBookingSuccess }: BookingFormProps) {
  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState(preselectedServiceId);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [urgency, setUrgency] = useState<'low' | 'medium' | 'high' | 'emergency'>('low');
  const [notes, setNotes] = useState('');
  
  // History Tracker State
  const [myBookings, setMyBookings] = useState<Booking[]>([]);
  const [activeTab, setActiveTab] = useState<'book' | 'history'>('book');
  const [bookingSuccess, setBookingSuccess] = useState<Booking | null>(null);

  // Sync preselectedServiceId
  useEffect(() => {
    if (preselectedServiceId) {
      setSelectedServiceId(preselectedServiceId);
      setActiveTab('book'); // auto-switch back to booking form
    }
  }, [preselectedServiceId]);

  // Load bookings from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('eco_shield_bookings');
    if (stored) {
      try {
        setMyBookings(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse bookings", e);
      }
    }
  }, []);

  // Price calculation
  const getPriceEstimate = () => {
    const serviceObj = SERVICES.find(s => s.id === selectedServiceId);
    if (!serviceObj) return 0;
    
    let base = serviceObj.basePrice;
    
    // Urgency premiums
    if (urgency === 'medium') base += 19;
    if (urgency === 'high') base += 39;
    if (urgency === 'emergency') base += 69; // priority dispatch surcharge
    
    return base;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone || !address || !selectedServiceId || !date || !time) {
      alert("Please fill in all required fields to secure your timeslot.");
      return;
    }

    const priceEstimate = getPriceEstimate();

    const newBooking: Booking = {
      id: 'BK-' + Math.floor(100000 + Math.random() * 900000),
      name,
      email,
      phone,
      address,
      serviceId: selectedServiceId,
      date,
      time,
      status: 'confirmed',
      notes,
      priceEstimate,
      pestUrgency: urgency,
      createdAt: new Date().toLocaleDateString()
    };

    const updatedBookings = [newBooking, ...myBookings];
    setMyBookings(updatedBookings);
    localStorage.setItem('eco_shield_bookings', JSON.stringify(updatedBookings));

    setBookingSuccess(newBooking);
    
    // Clear inputs
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setNotes('');
    setDate('');
    setTime('');
    setUrgency('low');

    if (onBookingSuccess) {
      onBookingSuccess();
    }
  };

  const cancelBooking = (id: string) => {
    if (confirm("Are you sure you want to cancel this inspection booking?")) {
      const updated = myBookings.map(b => 
        b.id === id ? { ...b, status: 'cancelled' as const } : b
      );
      setMyBookings(updated);
      localStorage.setItem('eco_shield_bookings', JSON.stringify(updated));
    }
  };

  const getServiceTitle = (id: string) => {
    return SERVICES.find(s => s.id === id)?.title || 'Pest Control Services';
  };

  return (
    <section id="booking-section" className="py-20 bg-slate-50 bento-dot-grid relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Toggle booking vs history tabs */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex bg-gray-100 p-1.5 rounded-2xl border border-gray-200">
            <button
              onClick={() => { setActiveTab('book'); setBookingSuccess(null); }}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'book' 
                  ? 'bg-primary-600 text-white shadow-xs' 
                  : 'text-gray-600 hover:text-dark-900'
              }`}
            >
              Book New Inspection
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'history' 
                  ? 'bg-primary-600 text-white shadow-xs' 
                  : 'text-gray-600 hover:text-dark-900'
              }`}
            >
              <span>My Bookings</span>
              {myBookings.length > 0 && (
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                  activeTab === 'history' ? 'bg-white text-primary-600' : 'bg-primary-600 text-white'
                }`}>
                  {myBookings.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Dynamic Success View */}
        {bookingSuccess && activeTab === 'book' ? (
          <div className="bg-primary-50 border-2 border-primary-500/20 rounded-3xl p-6 md:p-8 space-y-6 text-center max-w-2xl mx-auto animate-scale-up">
            <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-primary-600/20">
              <CheckCircle className="w-10 h-10" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-dark-900 font-display">
                Inspection Secured!
              </h3>
              <p className="text-gray-600 text-sm max-w-md mx-auto">
                Thank you, <strong>{bookingSuccess.name}</strong>. Your appointment has been secured in our system and synchronized to local storage.
              </p>
            </div>

            {/* Formatted Ticket Outline */}
            <div className="bg-white rounded-2xl p-5 text-left border border-primary-200 divide-y divide-gray-100 space-y-3.5 shadow-sm">
              <div className="flex justify-between items-center pb-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Ticket Reference</span>
                <span className="text-sm font-mono font-bold text-primary-700">{bookingSuccess.id}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-xs font-bold text-gray-500">Selected Service</span>
                <span className="text-sm font-bold text-dark-900">{getServiceTitle(bookingSuccess.serviceId)}</span>
              </div>
              <div className="grid grid-cols-2 gap-4 py-3">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Date</span>
                  <span className="text-sm font-bold text-dark-900">{bookingSuccess.date}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Time Slot</span>
                  <span className="text-sm font-bold text-dark-900">{bookingSuccess.time}</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-xs font-bold text-gray-500">Address</span>
                <span className="text-sm font-semibold text-gray-700 max-w-[200px] truncate text-right">{bookingSuccess.address}</span>
              </div>
              <div className="flex justify-between items-center pt-3.5">
                <span className="text-sm font-bold text-gray-900">Calculated Estimate</span>
                <span className="text-lg font-black text-primary-700">${bookingSuccess.priceEstimate}</span>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  setBookingSuccess(null);
                  setActiveTab('history');
                }}
                className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-600 text-sm font-bold px-5 py-3 rounded-xl transition-all cursor-pointer"
              >
                Track Status
              </button>
              <button
                onClick={() => setBookingSuccess(null)}
                className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
              >
                Book Another Inspection
              </button>
            </div>
          </div>
        ) : activeTab === 'book' ? (
          
          /* BOOKING FORM MODULE */
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-xl max-w-3xl mx-auto text-left space-y-6">
            <div className="border-b border-gray-100 pb-5">
              <h3 className="text-xl md:text-2xl font-display font-extrabold text-dark-900">
                Pest Inspection Quote Builder
              </h3>
              <p className="text-gray-500 text-xs md:text-sm mt-1">
                Calculate real-time prices and immediately reserve your local technician dispatch.
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-6">
              
              {/* Service & Urgency Grid */}
              <div className="grid md:grid-cols-2 gap-5">
                
                {/* Service Selector */}
                <div className="space-y-2">
                  <label htmlFor="service-select" className="text-xs md:text-sm font-bold text-gray-700 flex items-center gap-1.5">
                    <Clipboard className="w-4 h-4 text-primary-500" />
                    <span>Select Pest Target *</span>
                  </label>
                  <select
                    id="service-select"
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-primary-500 focus:outline-hidden transition-all"
                    required
                  >
                    <option value="" disabled>-- Select Service Type --</option>
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.id}>{s.title} (Starts ${s.basePrice})</option>
                    ))}
                  </select>
                </div>

                {/* Pest Urgency Selector */}
                <div className="space-y-2">
                  <label htmlFor="urgency-select" className="text-xs md:text-sm font-bold text-gray-700 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-500 animate-pulse" />
                    <span>Infestation Level *</span>
                  </label>
                  <select
                    id="urgency-select"
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value as any)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-primary-500 focus:outline-hidden transition-all"
                    required
                  >
                    <option value="low">Low (General preventative barrier)</option>
                    <option value="medium">Medium (Active spotting/sightings) +$19</option>
                    <option value="high">High (Established colony inside structures) +$39</option>
                    <option value="emergency">Emergency (Active swarms / Immediate priority) +$69</option>
                  </select>
                </div>

              </div>

              {/* Contact Detail Grid */}
              <div className="grid md:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="user-name" className="text-xs md:text-sm font-bold text-gray-700 flex items-center gap-1.5">
                    <User className="w-4 h-4 text-primary-500" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    id="user-name"
                    type="text"
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-primary-500 focus:outline-hidden transition-all"
                    required
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="user-email" className="text-xs md:text-sm font-bold text-gray-700 flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-primary-500" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    id="user-email"
                    type="email"
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-primary-500 focus:outline-hidden transition-all"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="user-phone" className="text-xs md:text-sm font-bold text-gray-700 flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-primary-500" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    id="user-phone"
                    type="tel"
                    placeholder="(555) 0199"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-primary-500 focus:outline-hidden transition-all"
                    required
                  />
                </div>

                {/* Property Address */}
                <div className="space-y-2">
                  <label htmlFor="user-address" className="text-xs md:text-sm font-bold text-gray-700 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-primary-500" />
                    <span>Property Address *</span>
                  </label>
                  <input
                    id="user-address"
                    type="text"
                    placeholder="123 Guard St, Suite A"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-primary-500 focus:outline-hidden transition-all"
                    required
                  />
                </div>

              </div>

              {/* Schedule Select Grid */}
              <div className="grid md:grid-cols-2 gap-5">
                
                {/* Date Picker */}
                <div className="space-y-2">
                  <label htmlFor="user-date" className="text-xs md:text-sm font-bold text-gray-700 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary-500" />
                    <span>Preferred Date *</span>
                  </label>
                  <input
                    id="user-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-primary-500 focus:outline-hidden transition-all"
                    required
                  />
                </div>

                {/* Hour Picker */}
                <div className="space-y-2">
                  <label htmlFor="user-time" className="text-xs md:text-sm font-bold text-gray-700 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-primary-500" />
                    <span>Preferred Time Slot *</span>
                  </label>
                  <select
                    id="user-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-primary-500 focus:outline-hidden transition-all"
                    required
                  >
                    <option value="" disabled>-- Select Time Window --</option>
                    <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                  </select>
                </div>

              </div>

              {/* Special instructions */}
              <div className="space-y-2">
                <label htmlFor="user-notes" className="text-xs md:text-sm font-bold text-gray-700">
                  Special Notes / Entry Instructions (Optional)
                </label>
                <textarea
                  id="user-notes"
                  placeholder="Tell us about pets, gated access, or key nesting locations."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm focus:bg-white focus:border-primary-500 focus:outline-hidden transition-all min-h-[100px]"
                ></textarea>
              </div>

              {/* Calculated dynamic pricing card */}
              {selectedServiceId && (
                <div className="bg-primary-50/50 rounded-2xl p-4 md:p-5 border border-primary-100 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Estimated Cost</span>
                    <span className="text-2xl md:text-3xl font-black text-primary-700 block leading-none">
                      ${getPriceEstimate()}
                    </span>
                    <span className="text-[10px] text-gray-500 block">Includes premium thermal scanning</span>
                  </div>
                  <div className="text-right text-xs text-primary-900 font-semibold max-w-[200px] leading-relaxed hidden sm:block">
                    ✓ waived inspection fee <br />
                    ✓ backed by 90-day shield warranty
                  </div>
                </div>
              )}

              {/* Submission Button */}
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white text-base font-bold py-4 rounded-xl shadow-lg shadow-primary-600/20 active:scale-98 transition-all cursor-pointer text-center block"
              >
                Secure Inspection & Lock Rate
              </button>

            </form>
          </div>
        ) : (
          
          /* BOOKING HISTORY TRACKER MODULE */
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-xl max-w-3xl mx-auto text-left space-y-6">
            <div className="border-b border-gray-100 pb-5 flex items-center justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-display font-extrabold text-dark-900">
                  Your Scheduled Inspections
                </h3>
                <p className="text-gray-500 text-xs md:text-sm mt-1">
                  Manage active perimeters and scheduled technician dispatches.
                </p>
              </div>
              <span className="bg-primary-50 text-primary-700 text-xs font-bold px-3 py-1 rounded-full border border-primary-200">
                {myBookings.length} Active
              </span>
            </div>

            {myBookings.length === 0 ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 mx-auto">
                  <Clipboard className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-dark-900">No scheduled bookings found</h4>
                  <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
                    You haven't scheduled any pest inspections yet. Select a pest category above and reserve your timeslot.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('book')}
                  className="bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
                >
                  Schedule Free Inspection
                </button>
              </div>
            ) : (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {myBookings.map((booking) => (
                  <div 
                    key={booking.id}
                    className="p-5 rounded-2xl border border-gray-100 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gray-50/50"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-gray-400">Ref: {booking.id}</span>
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                          booking.status === 'confirmed' 
                            ? 'bg-emerald-100 text-emerald-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                      
                      <h4 className="text-base font-bold text-dark-900">
                        {getServiceTitle(booking.serviceId)}
                      </h4>

                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-500 font-medium">
                        <span>Date: <strong>{booking.date}</strong></span>
                        <span>Time: <strong>{booking.time}</strong></span>
                        <span className="col-span-2">Address: <strong>{booking.address}</strong></span>
                      </div>
                    </div>

                    <div className="flex md:flex-col items-end gap-3 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-gray-100 justify-between md:justify-center">
                      <div className="text-left md:text-right">
                        <span className="text-[10px] font-bold text-gray-400 block">Est. Cost</span>
                        <span className="text-lg font-black text-primary-700">${booking.priceEstimate}</span>
                      </div>
                      
                      {booking.status === 'confirmed' && (
                        <button
                          onClick={() => cancelBooking(booking.id)}
                          className="bg-red-50 hover:bg-red-100 text-red-600 p-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1 text-xs font-bold"
                          aria-label="Cancel Booking"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Cancel</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}

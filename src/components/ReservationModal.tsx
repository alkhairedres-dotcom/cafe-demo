import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [guests, setGuests] = useState<number>(2);
  const [date, setDate] = useState<string>('2026-11-03');
  const [time, setTime] = useState<string>('09:30 AM');
  const [area, setArea] = useState<string>('booth');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [bookingRef, setBookingRef] = useState<string>('');

  if (!isOpen) return null;

  const timeSlots = [
    '07:30 AM', '08:15 AM', '09:00 AM', '09:45 AM',
    '10:30 AM', '11:15 AM', '12:00 PM', '12:45 PM',
    '01:30 PM', '02:15 PM', '03:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'STA-' + Math.floor(1000 + Math.random() * 9000);
    setBookingRef(randomRef);
    setStep('confirmed');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#181411] border border-[#362E27] rounded-2xl shadow-2xl p-6 sm:p-8 text-[#EDE8E1] my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#9E9488] hover:text-[#EDE8E1] hover:bg-[#26201B] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="mb-6 space-y-1">
              <div className="text-xs uppercase font-mono tracking-widest text-[#C2884A]">
                South Melbourne Laneway
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
                Reserve a Table at St Ali
              </h3>
              <p className="text-xs sm:text-sm text-[#9E9488]">
                Table reservations available daily for breakfast, brunch, and coffee tastings.
                Walk-ins always warmly welcomed at our espresso bar.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Party Size Stepper */}
              <div>
                <label className="block text-xs font-semibold text-[#C7BEB3] mb-2 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#C2884A]" /> Number of Guests
                </label>
                <div className="grid grid-cols-6 gap-2">
                  {[1, 2, 3, 4, 6, 8].map((count) => (
                    <button
                      type="button"
                      key={count}
                      onClick={() => setGuests(count)}
                      className={`py-2 text-xs sm:text-sm font-semibold rounded-lg border transition-all cursor-pointer ${
                        guests === count
                          ? 'bg-[#C2884A] text-[#120F0D] border-[#C2884A]'
                          : 'bg-[#1F1914] text-[#EDE8E1] border-[#362E27] hover:border-[#C2884A]'
                      }`}
                    >
                      {count === 8 ? '8+' : count}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#C7BEB3] mb-2 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#C2884A]" /> Reservation Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#1F1914] border border-[#362E27] text-sm text-[#EDE8E1] focus:outline-none focus:border-[#C2884A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#C7BEB3] mb-2 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#C2884A]" /> Sitting Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#1F1914] border border-[#362E27] text-sm text-[#EDE8E1] focus:outline-none focus:border-[#C2884A]"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot} className="bg-[#181411]">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Seating Area Preference */}
              <div>
                <label className="block text-xs font-semibold text-[#C7BEB3] mb-2 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#C2884A]" /> Preferred Atmosphere
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'booth', label: 'Warehouse Booth', desc: 'Cozy timber & brick' },
                    { id: 'laneway', label: 'Laneway Alfresco', desc: 'Dog-friendly & sunny' },
                    { id: 'roaster', label: 'Roastery Counter', desc: 'Barista bench view' },
                  ].map((s) => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setArea(s.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        area === s.id
                          ? 'bg-[#2A221A] border-[#C2884A] text-[#FAF7F2]'
                          : 'bg-[#1F1914] border-[#362E27] text-[#9E9488] hover:border-[#4D3F33]'
                      }`}
                    >
                      <div className="font-semibold text-xs text-[#EDE8E1]">{s.label}</div>
                      <div className="text-[11px] text-[#A69B8D] mt-0.5">{s.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-[#C7BEB3] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sam Mitchell"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1F1914] border border-[#362E27] text-sm text-[#EDE8E1] placeholder:text-[#6E6356] focus:outline-none focus:border-[#C2884A]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#C7BEB3] mb-1">
                      Australian Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0412 345 678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1F1914] border border-[#362E27] text-sm text-[#EDE8E1] placeholder:text-[#6E6356] focus:outline-none focus:border-[#C2884A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#C7BEB3] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sam@example.com.au"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1F1914] border border-[#362E27] text-sm text-[#EDE8E1] placeholder:text-[#6E6356] focus:outline-none focus:border-[#C2884A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#C7BEB3] mb-1">
                    Dietary Requirements or Special Requests
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Gluten-free, high chair needed, celebrating anniversary"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1F1914] border border-[#362E27] text-sm text-[#EDE8E1] placeholder:text-[#6E6356] focus:outline-none focus:border-[#C2884A]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#C2884A] hover:bg-[#D89954] text-[#120F0D] font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#C2884A]/20"
                >
                  <Calendar className="w-5 h-5 text-[#120F0D]" />
                  <span>Confirm Reservation ({guests} {guests === 1 ? 'Guest' : 'Guests'})</span>
                </button>
                <div className="mt-2 text-center text-[11px] text-[#7E7467] flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C2884A]" />
                  <span>Instant confirmation via SMS &amp; email · Free cancellation up to 2 hours prior</span>
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Receipt State */
          <div className="py-6 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#C2884A]/10 border-2 border-[#C2884A] flex items-center justify-center mx-auto text-[#C2884A]">
              <CheckCircle className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <div className="text-xs uppercase font-mono tracking-widest text-[#C2884A]">
                Booking Confirmed
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#FAF7F2]">
                We&apos;re getting the table ready, {name || 'Guest'}!
              </h3>
              <p className="text-sm text-[#C7BEB3]">
                Your reservation at St Ali Coffee &amp; Brunch has been recorded in our host stand.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="p-5 rounded-xl bg-[#1F1914] border border-[#362E27] text-left text-xs space-y-2.5 text-[#C7BEB3]">
              <div className="flex justify-between border-b border-[#2B231C] pb-2">
                <span className="text-[#9E9488]">Booking Reference:</span>
                <span className="font-mono font-bold text-[#C2884A] text-sm">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9E9488]">Date &amp; Time:</span>
                <span className="text-[#EDE8E1] font-medium">{date} at {time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9E9488]">Party Size:</span>
                <span className="text-[#EDE8E1] font-medium">{guests} Guests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9E9488]">Area Preference:</span>
                <span className="text-[#EDE8E1] font-medium capitalize">{area} Atmosphere</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9E9488]">Location:</span>
                <span className="text-[#EDE8E1] font-medium">12-18 Yarra Pl, South Melbourne</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleReset}
                className="flex-1 py-3 rounded-xl bg-[#C2884A] text-[#120F0D] font-bold text-sm hover:bg-[#D89954] transition-colors cursor-pointer"
              >
                Done
              </button>
              <a
                href="#menu"
                onClick={handleReset}
                className="flex-1 py-3 rounded-xl bg-[#26201B] text-[#EDE8E1] font-medium text-sm border border-[#3E342B] hover:bg-[#362E27] transition-colors text-center"
              >
                Browse Menu
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

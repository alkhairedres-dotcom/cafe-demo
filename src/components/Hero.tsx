import React from 'react';
import { Calendar, UtensilsCrossed, Clock, MapPin, Award, Flame } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-[#120F0D] pt-6 pb-16 sm:py-20 lg:py-24 border-b border-[#241D17]">
      {/* Subtle industrial background glow & ambient textures */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C2884A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#362E27]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Copy & Clear CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C2884A]">
              <span className="flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" />
                South Melbourne Micro-Lot Roastery
              </span>
              <span aria-hidden="true" className="text-[#55473A]">·</span>
              <span className="text-[#A69B8D]">Since 2005</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FAF7F2] leading-[1.08] [text-wrap:balance]">
              Artisan Coffee. <br />
              <span className="text-[#C2884A] italic font-normal">Melbourne</span> Soul.
            </h1>

            <p className="text-base sm:text-lg text-[#C7BEB3] leading-relaxed max-w-xl">
              Tucked inside a restored South Melbourne industrial warehouse, St Ali pioneered
              Australia&apos;s specialty coffee revolution. Join us for obsessively roasted micro-lots,
              world-class filter brews, and our cult all-day brunch menu.
            </p>

            {/* Clear Call to Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-4 text-sm sm:text-base font-semibold text-[#120F0D] bg-[#C2884A] hover:bg-[#D89954] active:bg-[#A86E39] rounded-lg transition-all shadow-lg shadow-[#C2884A]/20 flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap shrink-0 group"
              >
                <Calendar className="w-5 h-5 text-[#120F0D] group-hover:scale-105 transition-transform" />
                <span>Book a Table</span>
              </button>

              <a
                href="#menu"
                className="px-7 py-4 text-sm sm:text-base font-medium text-[#EDE8E1] bg-[#1E1914] hover:bg-[#2B231D] border border-[#3E342B] hover:border-[#C2884A]/50 rounded-lg transition-all flex items-center justify-center gap-2.5 whitespace-nowrap shrink-0"
              >
                <UtensilsCrossed className="w-5 h-5 text-[#C2884A]" />
                <span>View Full Menu (AUD)</span>
              </a>
            </div>

            {/* Micro proof / opening status */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#9E9488] border-t border-[#241D17]">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C2884A]" />
                Mon–Fri 7am–4pm · Sat–Sun 7:30am–4:30pm
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C2884A]" />
                12-18 Yarra Pl, South Melbourne
              </span>
            </div>
          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#362E27] shadow-2xl bg-[#1A1613]">
              <img
                src="/hero.jpg"
                alt="St Ali Coffee & Brunch industrial warehouse cafe interior in South Melbourne"
                className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120F0D] via-[#120F0D]/20 to-transparent pointer-events-none" />

              {/* In-photo editorial caption card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-xl bg-[#1A1613]/90 backdrop-blur-md border border-[#3E342B]/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#2A231C] border border-[#C2884A]/40 flex items-center justify-center text-[#C2884A]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#EDE8E1]">Melbourne&apos;s Original Specialty Roaster</div>
                    <div className="text-xs text-[#A89E91]">Direct ethical trade · In-house Probat batch roasting</div>
                  </div>
                </div>
                <div className="hidden sm:flex flex-col items-end text-right shrink-0">
                  <span className="text-xs font-mono font-bold text-[#C2884A]">4.9 / 5.0 ★</span>
                  <span className="text-[11px] text-[#9E9488]">3,400+ Verified Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Proof Strip Row Below Hero Split */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-[#26201B] grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <div className="text-xs text-[#C2884A] font-medium tracking-wide uppercase">Ethical Sourcing</div>
            <div className="text-base sm:text-lg font-serif font-semibold text-[#EDE8E1]">100% Direct Micro-Lots</div>
            <div className="text-xs text-[#9E9488]">Direct from regenerative partner farms</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-[#C2884A] font-medium tracking-wide uppercase">Heritage Roasting</div>
            <div className="text-base sm:text-lg font-serif font-semibold text-[#EDE8E1]">Cast-Iron Probat Batch</div>
            <div className="text-xs text-[#9E9488]">Roasted on-site in South Melbourne</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-[#C2884A] font-medium tracking-wide uppercase">Farm to Laneway</div>
            <div className="text-base sm:text-lg font-serif font-semibold text-[#EDE8E1]">All-Day Victorian Brunch</div>
            <div className="text-xs text-[#9E9488]">Locally farmed eggs, artisan sourdough &amp; dairy</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-[#C2884A] font-medium tracking-wide uppercase">Hospitality Standard</div>
            <div className="text-base sm:text-lg font-serif font-semibold text-[#EDE8E1]">Walk-ins &amp; Bookings</div>
            <div className="text-xs text-[#9E9488]">Laneway seating, cozy booths &amp; espresso bar</div>
          </div>
        </div>
      </div>
    </section>
  );
};
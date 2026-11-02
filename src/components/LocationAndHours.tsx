import React, { useState } from 'react';
import { Clock, MapPin, Phone, Mail, Navigation, Bus, Car, Coffee, Compass } from 'lucide-react';

export const LocationAndHours: React.FC = () => {
  const [selectedPin, setSelectedPin] = useState<'main' | 'market' | 'tram' | 'parking'>('main');

  const pins = {
    main: {
      title: 'St Ali Roastery & Cafe',
      address: '12-18 Yarra Place, South Melbourne VIC 3205',
      note: 'Enter via Yarra Place laneway. Look for the white industrial warehouse door & warm hanging lamps.',
    },
    market: {
      title: 'South Melbourne Market',
      address: 'Corner Coventry & Cecil Streets (300m walk)',
      note: 'Grab fresh flowers and produce, then come down Yarra Place for your morning batch brew.',
    },
    tram: {
      title: 'Route 12 & 96 Tram Stop',
      address: 'Stop 127 / South Melbourne Light Rail',
      note: 'Direct 9-minute tram ride from Southern Cross Station / Melbourne CBD.',
    },
    parking: {
      title: 'Coventry & Market Street Parking',
      address: '150m from cafe entry',
      note: '2-hour ticketed street parking and undercover South Melbourne Market parking bays.',
    },
  };

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#120F0D] border-b border-[#26201B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C2884A] flex items-center gap-2">
            <Compass className="w-3.5 h-3.5" />
            <span>South Melbourne Laneway</span>
            <span aria-hidden="true" className="text-[#55473A]">·</span>
            <span className="text-[#9E9488]">Directions &amp; Trading Hours</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF7F2]">
            Visit Us Down Yarra Place
          </h2>
          <p className="text-sm sm:text-base text-[#9E9488]">
            An easy stroll from the historic South Melbourne Market and just 10 minutes from the Melbourne CBD.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Hours & Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            {/* Opening Hours Card */}
            <div className="p-6 rounded-2xl bg-[#181411] border border-[#2B231C] space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#26201B]">
                <div className="flex items-center gap-2 text-sm font-bold text-[#FAF7F2]">
                  <Clock className="w-4 h-4 text-[#C2884A]" />
                  <span>Trading Hours</span>
                </div>
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#26201B] text-[#C2884A] border border-[#3E342B]">
                  Open 7 Days
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-baseline">
                  <span className="text-[#C7BEB3] font-medium">Monday – Friday</span>
                  <div className="text-right">
                    <span className="text-[#EDE8E1] font-mono font-semibold">7:00 AM – 4:00 PM</span>
                    <span className="block text-[11px] text-[#7A7063]">Kitchen closes 3:00 PM</span>
                  </div>
                </div>

                <div className="flex justify-between items-baseline pt-2 border-t border-[#221B16]">
                  <span className="text-[#C7BEB3] font-medium">Saturday &amp; Sunday</span>
                  <div className="text-right">
                    <span className="text-[#EDE8E1] font-mono font-semibold">7:30 AM – 4:30 PM</span>
                    <span className="block text-[11px] text-[#7A7063]">Kitchen closes 3:30 PM</span>
                  </div>
                </div>

                <div className="flex justify-between items-baseline pt-2 border-t border-[#221B16]">
                  <span className="text-[#C7BEB3] font-medium">Public Holidays</span>
                  <div className="text-right">
                    <span className="text-[#EDE8E1] font-mono font-semibold">8:00 AM – 3:30 PM</span>
                    <span className="block text-[11px] text-[#7A7063]">15% holiday surcharge applies</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-2xl bg-[#181411] border border-[#2B231C] space-y-4">
              <div className="text-sm font-bold text-[#FAF7F2] pb-2 border-b border-[#26201B]">
                Direct Contacts &amp; Enquiries
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#C7BEB3]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C2884A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#EDE8E1] block">Address</span>
                    <span>12-18 Yarra Place, South Melbourne VIC 3205</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C2884A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#EDE8E1] block">Phone (Host Stand)</span>
                    <a href="tel:+61396862990" className="hover:text-[#C2884A] transition-colors">
                      +61 (03) 9686 2990
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C2884A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#EDE8E1] block">Email</span>
                    <a href="mailto:hello@stalicoffeebrunch.com.au" className="hover:text-[#C2884A] transition-colors">
                      hello@stalicoffeebrunch.com.au
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Location Map Placeholder & Laneway Guide */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-2xl bg-[#181411] border border-[#2B231C] p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#FAF7F2]">
                    Laneway Wayfinding Map
                  </h3>
                  <p className="text-xs text-[#9E9488]">
                    Click any marker to view walking connections and transport notes.
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=St+Ali+Coffee+12-18+Yarra+Pl+South+Melbourne+VIC+3205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#26201B] hover:bg-[#C2884A] text-[#EDE8E1] hover:text-[#120F0D] border border-[#362E27] text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

              {/* Stylized Architectural Map Canvas */}
              <div className="relative h-72 sm:h-80 w-full rounded-xl bg-[#0F0D0B] border border-[#26201B] overflow-hidden p-6 flex flex-col justify-between">
                {/* Visual grid / laneway schematic backdrop */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, #C2884A 1px, transparent 1px),
                      linear-gradient(to bottom, #C2884A 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                  }}
                />

                {/* Laneway road representations */}
                <div className="absolute top-1/2 left-0 right-0 h-10 -translate-y-1/2 bg-[#1A1613]/80 border-y border-[#362E27]/50 flex items-center justify-center">
                  <span className="text-[10px] font-mono tracking-widest text-[#7A7063] uppercase">
                    Yarra Place (Cobblestone Laneway)
                  </span>
                </div>
                <div className="absolute top-0 bottom-0 left-1/3 w-10 bg-[#1A1613]/50 border-x border-[#362E27]/40 flex items-center justify-center">
                  <span className="text-[9px] font-mono tracking-widest text-[#55473A] uppercase rotate-90 whitespace-nowrap">
                    Coventry Street
                  </span>
                </div>

                {/* Interactive Map Pins */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedPin('main')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      selectedPin === 'main'
                        ? 'bg-[#C2884A] text-[#120F0D] shadow-lg ring-2 ring-[#C2884A]/40'
                        : 'bg-[#1F1914] text-[#EDE8E1] border border-[#362E27] hover:border-[#C2884A]'
                    }`}
                  >
                    <Coffee className="w-3.5 h-3.5" />
                    <span>St Ali Entrance (Pin #1)</span>
                  </button>

                  <button
                    onClick={() => setSelectedPin('market')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      selectedPin === 'market'
                        ? 'bg-[#C2884A] text-[#120F0D] shadow-lg ring-2 ring-[#C2884A]/40'
                        : 'bg-[#1F1914] text-[#EDE8E1] border border-[#362E27] hover:border-[#C2884A]'
                    }`}
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>South Melbourne Market</span>
                  </button>

                  <button
                    onClick={() => setSelectedPin('tram')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      selectedPin === 'tram'
                        ? 'bg-[#C2884A] text-[#120F0D] shadow-lg ring-2 ring-[#C2884A]/40'
                        : 'bg-[#1F1914] text-[#EDE8E1] border border-[#362E27] hover:border-[#C2884A]'
                    }`}
                  >
                    <Bus className="w-3.5 h-3.5" />
                    <span>Route 12 &amp; 96 Tram</span>
                  </button>

                  <button
                    onClick={() => setSelectedPin('parking')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      selectedPin === 'parking'
                        ? 'bg-[#C2884A] text-[#120F0D] shadow-lg ring-2 ring-[#C2884A]/40'
                        : 'bg-[#1F1914] text-[#EDE8E1] border border-[#362E27] hover:border-[#C2884A]'
                    }`}
                  >
                    <Car className="w-3.5 h-3.5" />
                    <span>Nearby Parking</span>
                  </button>
                </div>

                {/* Selected Pin Details Overlay Card */}
                <div className="relative z-10 p-4 rounded-xl bg-[#1A1613]/95 backdrop-blur-md border border-[#3E342B] shadow-lg space-y-1 text-left">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-sm text-[#FAF7F2]">
                      {pins[selectedPin].title}
                    </span>
                    <span className="text-[11px] font-mono text-[#C2884A]">Selected Landmark</span>
                  </div>
                  <div className="text-xs text-[#A89E91]">{pins[selectedPin].address}</div>
                  <div className="text-xs text-[#EDE8E1] pt-1">{pins[selectedPin].note}</div>
                </div>
              </div>

              {/* Transit & Accessibility Guide */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#9E9488]">
                <div className="p-3.5 rounded-xl bg-[#14110E] border border-[#26201B] space-y-1">
                  <div className="font-semibold text-[#EDE8E1] flex items-center gap-1.5">
                    <Bus className="w-4 h-4 text-[#C2884A]" />
                    <span>Public Transport</span>
                  </div>
                  <p>Tram 96 (East Brunswick to St Kilda) or Tram 12 (Victoria Gardens to St Kilda). Alight at Stop 127.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#14110E] border border-[#26201B] space-y-1">
                  <div className="font-semibold text-[#EDE8E1] flex items-center gap-1.5">
                    <Car className="w-4 h-4 text-[#C2884A]" />
                    <span>Accessibility &amp; Dogs</span>
                  </div>
                  <p>Step-free warehouse entrance via Yarra Place. Dogs warmly welcomed in the laneway alfresco.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

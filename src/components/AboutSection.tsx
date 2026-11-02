import React, { useState } from 'react';
import { COFFEE_ORIGINS } from '../data/cafeData';
import { Sparkles, Compass, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [selectedOriginId, setSelectedOriginId] = useState(COFFEE_ORIGINS[0].id);
  const activeOrigin = COFFEE_ORIGINS.find((o) => o.id === selectedOriginId) || COFFEE_ORIGINS[0];

  return (
    <section id="story" className="py-20 lg:py-28 bg-[#16120F] border-b border-[#26201B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Story Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C2884A] flex items-center gap-2">
              <span>Born in the Laneways</span>
              <span aria-hidden="true" className="text-[#55473A]">·</span>
              <span className="text-[#9E9488]">The Melbourne Coffee Standard</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF7F2] leading-tight">
              Where Melbourne&apos;s coffee culture found its heartbeat.
            </h2>

            <p className="text-base text-[#C7BEB3] leading-relaxed">
              In Melbourne, coffee isn&apos;t just morning fuel—it is an art form, a sensory language,
              and a civic obsession. When St Ali opened its doors down a nondescript South Melbourne
              cobblestone laneway in 2005, it changed the global landscape of coffee roasting.
            </p>

            <p className="text-base text-[#C7BEB3] leading-relaxed">
              We eliminated the middlemen to forge lasting direct-trade relationships with micro-lot
              farmers across Ethiopia, Colombia, Guatemala, and Kenya. Every single batch is roasted
              on our vintage cast-iron Probat roasters, calibrated daily to Victorian humidity and barometric
              pressure, ensuring each cup tells an uncompromised story of origin.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#EDE8E1]">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1F1914] border border-[#332A22]">
                <CheckCircle2 className="w-5 h-5 text-[#C2884A] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Direct Trade Micro-Lots</div>
                  <div className="text-xs text-[#9E9488]">Paid 2.4x Fair Trade minimum directly to growers</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1F1914] border border-[#332A22]">
                <CheckCircle2 className="w-5 h-5 text-[#C2884A] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Dialled Every Morning</div>
                  <div className="text-xs text-[#9E9488]">TDS refractometer tested for extraction yield</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Pair */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-[#362E27] shadow-xl bg-[#1A1613]">
                <img
                  src="/src/assets/images/roastery_coffee_beans_1793629156830.jpg"
                  alt="Specialty coffee beans cascading in cooling tray of cast-iron roaster"
                  className="w-full h-56 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 rounded-xl bg-[#1F1914] border border-[#332A22] text-xs text-[#9E9488]">
                <span className="font-semibold text-[#EDE8E1] block text-sm mb-1">In-House Small Batch</span>
                Roasting 3 days weekly to serve at peak rest between day 7 and 14.
              </div>
            </div>

            <div className="space-y-4 pt-6 sm:pt-10">
              <div className="p-4 rounded-xl bg-[#1F1914] border border-[#332A22] text-xs text-[#9E9488]">
                <span className="font-semibold text-[#EDE8E1] block text-sm mb-1">Precision Extraction</span>
                93.5°C triple-filtered reverse osmosis water for pure terroir clarity.
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#362E27] shadow-xl bg-[#1A1613]">
                <img
                  src="/src/assets/images/artisan_pour_over_1793629158259.jpg"
                  alt="Barista brewing single-origin pour-over coffee with copper kettle"
                  className="w-full h-56 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Roastery & Cupping Interactive Feature */}
        <div id="roastery" className="pt-12 border-t border-[#26201B]">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C2884A] flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore The Roaster&apos;s Bench</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
              Current Single Origin &amp; Blend Profiles
            </h3>
            <p className="text-sm text-[#9E9488]">
              Select a current micro-lot to preview tasting notes, processing method, and harvest origin.
            </p>
          </div>

          {/* Segmented Selector for Origins */}
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-[#1F1914] rounded-xl border border-[#332A22] max-w-xl mx-auto mb-8">
            {COFFEE_ORIGINS.map((origin) => {
              const active = origin.id === selectedOriginId;
              return (
                <button
                  key={origin.id}
                  onClick={() => setSelectedOriginId(origin.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#C2884A] text-[#120F0D] font-semibold shadow-sm'
                      : 'text-[#C7BEB3] hover:text-[#EDE8E1] hover:bg-[#2A231C]'
                  }`}
                >
                  {origin.name}
                </button>
              );
            })}
          </div>

          {/* Interactive Origin Card */}
          <div className="max-w-4xl mx-auto rounded-2xl bg-[#1A1613] border border-[#362E27] p-6 sm:p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-5">
                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#C2884A]">
                    {activeOrigin.region}
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#FAF7F2]">
                    {activeOrigin.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-[#9E9488]">
                    <span>{activeOrigin.altitude}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeOrigin.process}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#C2884A]">{activeOrigin.roastLevel}</span>
                  </div>
                </div>

                {/* Flavor Notes Tags */}
                <div>
                  <div className="text-xs text-[#9E9488] mb-2 font-medium">Sensory Tasting Notes:</div>
                  <div className="flex flex-wrap gap-2">
                    {activeOrigin.notes.map((note) => (
                      <span
                        key={note}
                        className="px-3 py-1 rounded-md bg-[#241D17] border border-[#3B3026] text-xs font-medium text-[#EDE8E1]"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-[#26201B] text-xs text-[#9E9488]">
                  <span>Recommended for: <strong className="text-[#EDE8E1]">{activeOrigin.bestBrew}</strong></span>
                  <span className="font-mono text-sm text-[#C2884A] font-bold">250g Retail Bag: ${activeOrigin.recommendedAudPrice.toFixed(2)} AUD</span>
                </div>
              </div>

              {/* Quick Sensory Radar info */}
              <div className="md:col-span-5 bg-[#201A15] p-5 rounded-xl border border-[#362E27] space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#EDE8E1]">
                  <Compass className="w-4 h-4 text-[#C2884A]" />
                  <span>Melbourne Barista Recommendation</span>
                </div>
                <p className="text-xs text-[#C7BEB3] leading-relaxed">
                  Try this lot hand-poured via V60 or as a clean double espresso. Ask our head barista
                  for today&apos;s batch brew dial-in card at the bar counter.
                </p>
                <div className="p-3 rounded-lg bg-[#14110E] border border-[#2B231C] text-[11px] text-[#A69B8D] flex justify-between">
                  <span>Available on Bar: <strong>Yes (Fresh Today)</strong></span>
                  <span>Roast Date: <strong>Day 9 (Peak)</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

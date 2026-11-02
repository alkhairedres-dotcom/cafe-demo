import React, { useState } from 'react';
import { Mail, ArrowRight, Instagram, Facebook, Phone, MapPin, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0D0A08] border-t border-[#221C16] text-[#A69B8D] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#201A15] border border-[#3A3026] flex items-center justify-center text-[#C2884A] font-serif text-xl font-bold">
                St
              </div>
              <span className="font-serif text-2xl font-bold text-[#FAF7F2]">
                St Ali Coffee &amp; Brunch
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#8C8072] leading-relaxed">
              Pioneering Melbourne specialty coffee and artisan all-day brunch since 2005.
              Locally roasted micro-lots, direct ethical trade, and warm industrial hospitality.
            </p>
            <div className="pt-1 flex items-center gap-3 text-[#A89E91]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#181411] border border-[#2B231C] hover:text-[#C2884A] hover:border-[#C2884A] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#181411] border border-[#2B231C] hover:text-[#C2884A] hover:border-[#C2884A] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-serif font-bold text-sm text-[#FAF7F2] uppercase tracking-wider">
              Explore
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#story" className="hover:text-[#EDE8E1] transition-colors">Our Heritage</a>
              </li>
              <li>
                <a href="#roastery" className="hover:text-[#EDE8E1] transition-colors">The Roastery &amp; Cupping</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#EDE8E1] transition-colors">Kitchen &amp; Coffee Menu</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#EDE8E1] transition-colors">Patron Acclaim</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#EDE8E1] transition-colors">Laneway Map &amp; Hours</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Visit */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-serif font-bold text-sm text-[#FAF7F2] uppercase tracking-wider">
              South Melbourne
            </div>
            <div className="space-y-2.5 text-xs text-[#8C8072]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C2884A] shrink-0 mt-0.5" />
                <span>12-18 Yarra Place, South Melbourne VIC 3205</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C2884A] shrink-0" />
                <a href="tel:+61396862990" className="hover:text-[#EDE8E1] transition-colors">
                  +61 (03) 9686 2990
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C2884A] shrink-0" />
                <a href="mailto:hello@stalicoffeebrunch.com.au" className="hover:text-[#EDE8E1] transition-colors">
                  hello@stalicoffeebrunch.com.au
                </a>
              </div>
            </div>
          </div>

          {/* Micro-Lot Drop Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-serif font-bold text-sm text-[#FAF7F2] uppercase tracking-wider">
              Micro-Lot Releases
            </div>
            <p className="text-xs text-[#8C8072]">
              Subscribe for early access to limited single-origin drops, cupping sessions, and brunch weekend specials.
            </p>
            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#1C1712] border border-[#3E342B] text-xs text-[#C2884A] flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Thank you. Welcome to the roastery family!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181411] border border-[#2E251E] text-xs text-[#EDE8E1] placeholder:text-[#6E6356] focus:outline-none focus:border-[#C2884A]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-[#C2884A] text-[#120F0D] hover:bg-[#D89954] transition-colors cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-[#63574A] block">
                  No spam. Only seasonal beans and seasonal kitchen updates.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Traditional Custodians Acknowledgement & Legal */}
        <div className="pt-8 border-t border-[#1C1713] space-y-4 text-xs text-[#6E6356]">
          <p className="leading-relaxed text-[11px]">
            St Ali Coffee &amp; Brunch acknowledges the Wurundjeri Woi-wurrung people of the Kulin Nation as the
            Traditional Custodians of the lands on which we roast, brew, and gather. We pay our deepest respects to
            Elders past, present, and emerging.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] pt-2">
            <span>© 2026 St Ali Coffee &amp; Brunch Pty Ltd. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <span className="hover:text-[#9E9488] transition-colors">South Melbourne, VIC</span>
              <span aria-hidden="true">·</span>
              <span className="hover:text-[#9E9488] transition-colors">ABN 48 109 234 819</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

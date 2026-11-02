import React, { useState } from 'react';
import { Calendar, ShoppingBag, Menu as MenuIcon, X, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  orderCount: number;
  onOpenOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, orderCount, onOpenOrder }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'Roastery', href: '#roastery' },
    { label: 'Menu', href: '#menu' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Find Us', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#120F0D]/95 backdrop-blur-md border-b border-[#2A231C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark (Single text element in display face) */}
          <a
            href="#"
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C2884A] rounded"
          >
            <div className="w-10 h-10 rounded bg-[#26201B] border border-[#3E342B] flex items-center justify-center text-[#C2884A] font-serif text-xl font-bold tracking-tighter group-hover:border-[#C2884A] transition-colors">
              St
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#EDE8E1] group-hover:text-[#C2884A] transition-colors">
                St Ali Coffee &amp; Brunch
              </span>
              <span className="text-[11px] text-[#9E9488] tracking-widest uppercase font-medium">
                South Melbourne · Est. 2005
              </span>
            </div>
          </a>

          {/* Zone 2: Concise Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#C4BDB3]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#EDE8E1] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#C2884A]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Quick Order */}
          <div className="flex items-center gap-3 shrink-0">
            {orderCount > 0 && (
              <button
                onClick={onOpenOrder}
                className="relative p-2.5 rounded-lg bg-[#1F1915] border border-[#362E27] text-[#EDE8E1] hover:border-[#C2884A] transition-all"
                aria-label="View pre-order bag"
              >
                <ShoppingBag className="w-5 h-5 text-[#C2884A]" />
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#C2884A] text-[#120F0D] text-xs font-bold rounded-full flex items-center justify-center">
                  {orderCount}
                </span>
              </button>
            )}

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#120F0D] bg-[#C2884A] hover:bg-[#D89954] active:bg-[#A86E39] rounded-lg transition-all shadow-sm flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Table</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#C4BDB3] hover:text-[#EDE8E1] hover:bg-[#1F1915] border border-[#2E251E] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#181411] border-b border-[#2E251E] px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center justify-between text-xs text-[#9E9488] pb-2 border-b border-[#2A231C]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C2884A]" /> 12-18 Yarra Pl, South Melbourne
            </span>
            <span>Open Today 7am–4pm</span>
          </div>
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#EDE8E1] hover:bg-[#26201B] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-[#120F0D] bg-[#C2884A] hover:bg-[#D89954] rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Table Reservation</span>
            </button>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center text-sm font-medium text-[#EDE8E1] bg-[#26201B] hover:bg-[#362E27] border border-[#3E342B] rounded-lg transition-colors"
            >
              Explore Full Menu (AUD)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

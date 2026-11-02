/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationAndHours } from './components/LocationAndHours';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { OrderDrawer } from './components/OrderDrawer';
import { MenuItem } from './data/cafeData';
import { Check, ShoppingBag, Calendar } from 'lucide-react';

interface OrderItemWithQty {
  item: MenuItem;
  quantity: number;
}

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [orderItems, setOrderItems] = useState<OrderItemWithQty[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleAddItem = (item: MenuItem) => {
    setOrderItems((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { item, quantity: 1 }];
    });

    setToastMessage(`Added "${item.name}" ($${item.price.toFixed(2)} AUD)`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleUpdateQty = (itemId: string, delta: number) => {
    setOrderItems((prev) =>
      prev
        .map((i) => {
          if (i.item.id === itemId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as OrderItemWithQty[]
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setOrderItems((prev) => prev.filter((i) => i.item.id !== itemId));
  };

  const handleClearOrder = () => {
    setOrderItems([]);
  };

  const totalOrderCount = orderItems.reduce((acc, i) => acc + i.quantity, 0);
  const orderItemIds = orderItems.map((i) => i.item.id);

  return (
    <div className="min-h-screen bg-[#120F0D] text-[#EDE8E1] flex flex-col font-sans selection:bg-[#C2884A] selection:text-[#120F0D]">
      {/* Top Navigation conforming to Top Bar Contract */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        orderCount={totalOrderCount}
        onOpenOrder={() => setIsOrderOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section with CTAs */}
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 2. About Section: Melbourne Coffee Culture & Micro-Lot Roasting */}
        <AboutSection />

        {/* 3. Featured Menu Section: Realistic AUD Prices & Quick Add */}
        <MenuSection
          onAddItem={handleAddItem}
          orderItemIds={orderItemIds}
        />

        {/* 4. Customer Reviews Section: Critics & Regulars */}
        <ReviewsSection />

        {/* 5. Opening Hours, Location Map Placeholder & Wayfinding */}
        <LocationAndHours />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Pill on Mobile for quick table booking or bag */}
      <div className="fixed bottom-4 left-4 right-4 z-30 sm:hidden flex items-center gap-2 p-1.5 rounded-2xl bg-[#1A1613]/95 backdrop-blur-md border border-[#3E342B] shadow-2xl">
        <button
          onClick={() => setIsBookingOpen(true)}
          className="flex-1 py-3 px-4 rounded-xl bg-[#C2884A] text-[#120F0D] text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
        >
          <Calendar className="w-4 h-4" />
          <span>Book a Table</span>
        </button>
        {totalOrderCount > 0 && (
          <button
            onClick={() => setIsOrderOpen(true)}
            className="py-3 px-4 rounded-xl bg-[#26201B] border border-[#3E342B] text-xs font-bold text-[#EDE8E1] flex items-center gap-1.5"
          >
            <ShoppingBag className="w-4 h-4 text-[#C2884A]" />
            <span>Bag ({totalOrderCount})</span>
          </button>
        )}
      </div>

      {/* Quick Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 p-3.5 rounded-xl bg-[#1F1914] border border-[#C2884A] text-xs text-[#FAF7F2] shadow-2xl flex items-center gap-2 animate-fade-in">
          <div className="w-5 h-5 rounded-full bg-[#C2884A] text-[#120F0D] flex items-center justify-center font-bold">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsOrderOpen(true)}
            className="ml-2 font-bold text-[#C2884A] hover:underline"
          >
            View Bag
          </button>
        </div>
      )}

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Interactive Quick Order Drawer */}
      <OrderDrawer
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        orderItems={orderItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearOrder={handleClearOrder}
      />
    </div>
  );
}

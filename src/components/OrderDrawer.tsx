import React, { useState } from 'react';
import { MenuItem } from '../data/cafeData';
import { X, Plus, Minus, Trash2, CheckCircle2, ShoppingBag } from 'lucide-react';

interface OrderItemWithQty {
  item: MenuItem;
  quantity: number;
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  orderItems: OrderItemWithQty[];
  onUpdateQty: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearOrder: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  orderItems,
  onUpdateQty,
  onRemoveItem,
  onClearOrder,
}) => {
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in');
  const [tableNumber, setTableNumber] = useState<string>('14');
  const [takeawayTime, setTakeawayTime] = useState<string>('In 15 minutes');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [orderRef, setOrderRef] = useState<string>('');

  if (!isOpen) return null;

  const subtotal = orderItems.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const gstAmount = subtotal - subtotal / 1.1; // Included 10% Australian GST

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'ORD-' + Math.floor(100 + Math.random() * 900);
    setOrderRef(ref);
    setIsSubmitted(true);
  };

  const handleFinish = () => {
    setIsSubmitted(false);
    onClearOrder();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm">
      <div className="w-full max-w-md bg-[#181411] border-l border-[#362E27] h-full flex flex-col justify-between text-[#EDE8E1] shadow-2xl">
        {/* Top Header */}
        <div className="p-5 border-b border-[#2B231C] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#C2884A]" />
            <span className="font-serif font-bold text-lg text-[#FAF7F2]">
              Order Bag ({orderItems.reduce((acc, i) => acc + i.quantity, 0)})
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#9E9488] hover:text-[#EDE8E1] hover:bg-[#26201B] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 flex-1 overflow-y-auto space-y-4">
          {!isSubmitted ? (
            <>
              {orderItems.length === 0 ? (
                <div className="py-20 text-center space-y-3 text-[#9E9488]">
                  <ShoppingBag className="w-12 h-12 mx-auto text-[#44382E]" />
                  <p className="font-serif text-base text-[#EDE8E1]">Your bag is currently empty</p>
                  <p className="text-xs">Browse our kitchen and coffee bar menu to add items.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Order Mode Toggle */}
                  <div className="grid grid-cols-2 gap-2 p-1 bg-[#1F1914] rounded-xl border border-[#332A22]">
                    <button
                      type="button"
                      onClick={() => setOrderType('dine-in')}
                      className={`py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                        orderType === 'dine-in'
                          ? 'bg-[#C2884A] text-[#120F0D]'
                          : 'text-[#9E9488] hover:text-[#EDE8E1]'
                      }`}
                    >
                      Dine-In Table Order
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('takeaway')}
                      className={`py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                        orderType === 'takeaway'
                          ? 'bg-[#C2884A] text-[#120F0D]'
                          : 'text-[#9E9488] hover:text-[#EDE8E1]'
                      }`}
                    >
                      Laneway Takeaway
                    </button>
                  </div>

                  {orderType === 'dine-in' ? (
                    <div className="p-3.5 rounded-xl bg-[#1F1914] border border-[#332A22] space-y-1.5">
                      <label className="text-xs font-medium text-[#C7BEB3]">Table Number</label>
                      <input
                        type="text"
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                        placeholder="e.g. 14 (Look at timber table tag)"
                        className="w-full px-3 py-2 rounded-lg bg-[#14110E] border border-[#3A3026] text-xs text-[#EDE8E1] focus:outline-none focus:border-[#C2884A]"
                      />
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-xl bg-[#1F1914] border border-[#332A22] space-y-1.5">
                      <label className="text-xs font-medium text-[#C7BEB3]">Pickup Window</label>
                      <select
                        value={takeawayTime}
                        onChange={(e) => setTakeawayTime(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-[#14110E] border border-[#3A3026] text-xs text-[#EDE8E1] focus:outline-none focus:border-[#C2884A]"
                      >
                        <option value="In 10 minutes">In 10 minutes</option>
                        <option value="In 15 minutes">In 15 minutes</option>
                        <option value="In 25 minutes">In 25 minutes</option>
                      </select>
                    </div>
                  )}

                  {/* Item List */}
                  <div className="space-y-3 pt-2">
                    {orderItems.map(({ item, quantity }) => (
                      <div
                        key={item.id}
                        className="p-3.5 rounded-xl bg-[#1F1914] border border-[#2E251E] flex items-center justify-between gap-3"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="font-serif text-sm font-bold text-[#FAF7F2] truncate">
                            {item.name}
                          </div>
                          <div className="text-xs font-mono text-[#C2884A] tabular-nums">
                            ${(item.price * quantity).toFixed(2)} AUD
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onUpdateQty(item.id, -1)}
                            className="p-1 rounded bg-[#2A231C] text-[#C7BEB3] hover:text-[#EDE8E1] hover:bg-[#3E342B]"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-mono font-bold w-5 text-center tabular-nums">
                            {quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQty(item.id, 1)}
                            className="p-1 rounded bg-[#2A231C] text-[#C7BEB3] hover:text-[#EDE8E1] hover:bg-[#3E342B]"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="p-1 ml-1 text-[#7A7063] hover:text-rose-400 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Order Placed State */
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#C2884A]/10 border-2 border-[#C2884A] flex items-center justify-center mx-auto text-[#C2884A]">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase tracking-widest text-[#C2884A]">
                  Order Sent to Barista &amp; Kitchen
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#FAF7F2]">
                  Order #{orderRef}
                </h3>
                <p className="text-xs text-[#9E9488]">
                  {orderType === 'dine-in'
                    ? `Preparing fresh for Table ${tableNumber}. Our floor team will bring it over.`
                    : `Your takeaway order is queued for pickup ${takeawayTime.toLowerCase()} at the laneway window.`}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1F1914] border border-[#332A22] text-xs text-left space-y-2">
                <div className="flex justify-between text-[#EDE8E1] font-semibold border-b border-[#2B231C] pb-2">
                  <span>Total Paid (AUD):</span>
                  <span className="font-mono text-[#C2884A]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="text-[11px] text-[#7A7063]">
                  Includes ${(gstAmount).toFixed(2)} AUD in 10% Australian GST.
                </div>
              </div>

              <button
                onClick={handleFinish}
                className="w-full py-3 rounded-xl bg-[#C2884A] text-[#120F0D] font-bold text-xs hover:bg-[#D89954] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          )}
        </div>

        {/* Footer Checkout Bar */}
        {orderItems.length > 0 && !isSubmitted && (
          <div className="p-5 border-t border-[#2B231C] bg-[#14110E] space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#9E9488]">
                <span>GST Included (10%):</span>
                <span className="font-mono tabular-nums">${gstAmount.toFixed(2)} AUD</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#FAF7F2]">
                <span>Total Amount:</span>
                <span className="font-mono text-base text-[#C2884A] tabular-nums">
                  ${subtotal.toFixed(2)} AUD
                </span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full py-3.5 rounded-xl bg-[#C2884A] hover:bg-[#D89954] text-[#120F0D] font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#C2884A]/20"
            >
              <span>Place {orderType === 'dine-in' ? `Table ${tableNumber}` : 'Takeaway'} Order (${subtotal.toFixed(2)})</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

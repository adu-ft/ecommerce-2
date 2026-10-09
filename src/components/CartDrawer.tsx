import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';
import { formatINR, SHIPPING_THRESHOLD } from '../constants/pricing';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const isFreeShipping = subtotal >= SHIPPING_THRESHOLD;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
    setTimeout(() => {
      onClearCart();
    }, 500);
  };

  const handleCloseAll = () => {
    setIsCheckingOut(false);
    setOrderComplete(false);
    onClose();
  };

  const handleExploreProduct = () => {
    handleCloseAll();
    const buySection = document.getElementById('buy-section');
    if (buySection) {
      buySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalItemCount = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={handleCloseAll}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-full sm:max-w-md bg-[#F7F6F2] shadow-2xl flex flex-col justify-between border-l border-[#E2DCD3]">
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#E2DCD3] flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold tracking-tight text-[#191817] font-['Outfit']">Shopping Bag</h2>
              <span className="text-xs text-[#78746E]">
                {totalItemCount} {totalItemCount === 1 ? 'item' : 'items'}
              </span>
            </div>
            <div className="flex items-center gap-3">
              {items.length > 0 && !orderComplete && !isCheckingOut && (
                <button
                  onClick={onClearCart}
                  className="text-xs text-[#8E877C] hover:text-red-600 transition-colors font-medium cursor-pointer"
                  title="Clear entire cart"
                >
                  Clear all
                </button>
              )}
              <button
                onClick={handleCloseAll}
                className="p-2 text-[#78746E] hover:text-[#191817] rounded-lg transition-colors cursor-pointer"
                aria-label="Close Bag"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6">
            {orderComplete ? (
              <div className="py-12 flex flex-col items-center text-center">
                <CheckCircle2 className="w-16 h-16 text-[#191817] mb-4" />
                <h3 className="text-2xl font-bold text-[#191817] font-['Outfit']">Order Confirmed!</h3>
                <p className="mt-2 text-sm text-[#615C54] max-w-xs">
                  Thank you for your order. Order <strong>#ADRIX-IN-8924</strong> has been placed. We&apos;ll send tracking updates to your phone and email.
                </p>
                <div className="mt-8 p-4 bg-[#EAE5DC] rounded-xl text-left w-full text-xs text-[#57534C] space-y-2">
                  <div className="flex justify-between">
                    <span>Shipping Method</span>
                    <span className="font-semibold text-[#191817]">Complimentary Express</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Est. Delivery</span>
                    <span className="font-semibold text-[#191817]">2–3 Business Days (All-India)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Trial Period</span>
                    <span className="font-semibold text-[#191817]">30 Days Risk-Free Trial</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Invoice & GST</span>
                    <span className="font-semibold text-[#191817]">GST Included (18%)</span>
                  </div>
                </div>
                <button
                  onClick={handleCloseAll}
                  className="mt-8 w-full py-3 bg-[#191817] text-white text-xs font-semibold rounded-md hover:bg-[#2F2D2A] cursor-pointer font-['Outfit']"
                >
                  Continue Exploring
                </button>
              </div>
            ) : isCheckingOut ? (
              /* Simulated Fast Checkout Form with INR Pricing */
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <h3 className="text-base font-bold text-[#191817] font-['Outfit']">Delivery Details (India)</h3>
                <div>
                  <label className="block text-xs font-medium text-[#615C54] mb-1">Full Name</label>
                  <input
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDD6CB] rounded-md focus:outline-none focus:border-[#191817]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#615C54] mb-1">Phone Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDD6CB] rounded-md focus:outline-none focus:border-[#191817]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#615C54] mb-1">Shipping Address</label>
                  <input
                    required
                    placeholder="e.g. 42 MG Road, Indiranagar"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDD6CB] rounded-md focus:outline-none focus:border-[#191817]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#615C54] mb-1">City</label>
                    <input
                      required
                      placeholder="e.g. Bengaluru"
                      className="w-full px-3 py-2 text-xs bg-white border border-[#DDD6CB] rounded-md focus:outline-none focus:border-[#191817]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#615C54] mb-1">PIN Code</label>
                    <input
                      required
                      placeholder="e.g. 560038"
                      className="w-full px-3 py-2 text-xs bg-white border border-[#DDD6CB] rounded-md focus:outline-none focus:border-[#191817]"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2DCD3]">
                  <h4 className="text-xs font-semibold text-[#191817] mb-2">Payment Method</h4>
                  <div className="p-3 bg-white border border-[#DDD6CB] rounded-md space-y-2 text-xs">
                    <div className="flex items-center justify-between font-medium">
                      <span>UPI / Netbanking / Cards</span>
                      <span className="text-[10px] bg-[#EAE5DC] px-2 py-0.5 rounded font-bold">FAST & SECURE</span>
                    </div>
                    <div className="text-[11px] text-[#78746E]">
                      Accepts Google Pay, PhonePe, Paytm, RuPay, Visa, Mastercard
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2 text-[11px] text-[#78746E]">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>256-Bit Encrypted Secure Checkout · 30-Day Returns</span>
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="w-1/3 py-2.5 border border-[#DDD6CB] text-xs font-medium text-[#615C54] rounded-md hover:bg-neutral-100 cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-2.5 bg-[#191817] hover:bg-[#2F2D2A] text-white text-xs font-semibold rounded-md cursor-pointer font-['Outfit']"
                  >
                    Place Order · {formatINR(subtotal)}
                  </button>
                </div>
              </form>
            ) : items.length === 0 ? (
              <div className="py-20 flex flex-col items-center justify-center text-center">
                <span className="text-4xl mb-3">👟</span>
                <p className="text-base font-bold text-[#191817] font-['Outfit']">Your bag is empty</p>
                <p className="mt-1.5 text-xs text-[#78746E] max-w-xs leading-relaxed">
                  Discover the Aero 01 knit sneaker and experience cloud-like all-day cushioning.
                </p>
                <button
                  onClick={handleExploreProduct}
                  className="mt-6 px-6 py-2.5 bg-[#191817] text-white text-xs font-semibold rounded-md hover:bg-[#2F2D2A] cursor-pointer font-['Outfit'] shadow-sm"
                >
                  Explore Aero 01
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Free Delivery Meter */}
                <div className="p-3.5 bg-[#EAE5DC] rounded-xl border border-[#DDD6CB] text-xs">
                  <div className="flex justify-between items-center mb-1.5 font-medium text-[#191817]">
                    <span>
                      {isFreeShipping ? '🎉 Free Express Delivery across India unlocked!' : `Add ${formatINR(SHIPPING_THRESHOLD - subtotal)} more for Free Delivery`}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-[#DDD6CB] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#191817] transition-all duration-300"
                      style={{ width: `${Math.min(100, (subtotal / SHIPPING_THRESHOLD) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Items List */}
                <div className="divide-y divide-[#E2DCD3]">
                  {items.map((item) => (
                    <div key={item.id} className="py-4 flex gap-4 items-center">
                      <div className="w-16 h-16 rounded-lg bg-[#EAE5DC] border border-[#DDD6CB] flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#78746E]">
                          {item.color}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-[#191817] truncate font-['Outfit']">
                          {item.productName}
                        </h4>
                        <div className="text-xs text-[#78746E] mt-0.5">
                          Color: {item.colorName} · Size: US {item.size}
                        </div>
                        <div className="text-xs font-bold text-[#191817] mt-1 tabular-nums font-['Outfit']">
                          {formatINR(item.price)}
                        </div>
                      </div>

                      {/* Quantity & Delete */}
                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="flex items-center gap-1 text-[11px] text-[#8E877C] hover:text-red-600 transition-colors p-1 cursor-pointer"
                          aria-label="Remove item from bag"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span className="text-[10px] underline underline-offset-2">Remove</span>
                        </button>
                        <div className="flex items-center border border-[#DDD6CB] rounded-md bg-white">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1.5 hover:bg-[#EAE5DC] text-[#615C54] cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-mono font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1.5 hover:bg-[#EAE5DC] text-[#615C54] cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {!orderComplete && items.length > 0 && !isCheckingOut && (
            <div className="p-5 sm:p-6 border-t border-[#E2DCD3] bg-white/70 space-y-3">
              <div className="flex justify-between text-xs text-[#78746E]">
                <span>Shipping</span>
                <span>{isFreeShipping ? 'Free Express Delivery' : formatINR(299)}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#191817] font-['Outfit']">
                <span>Subtotal</span>
                <span className="tabular-nums">{formatINR(subtotal)}</span>
              </div>
              <p className="text-[11px] text-[#78746E]">
                GST included. Includes 30-day home trial and doorstep exchanges across India.
              </p>
              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-3.5 bg-[#191817] hover:bg-[#2F2D2A] text-white text-xs font-semibold rounded-md flex items-center justify-center gap-2 transition-all cursor-pointer font-['Outfit'] shadow-sm"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

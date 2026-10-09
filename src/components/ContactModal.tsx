import React, { useState } from 'react';
import { X, Send, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />

      <div className="relative bg-[#F7F6F2] border border-[#DDD6CB] rounded-2xl p-5 sm:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto z-10 shadow-2xl">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-[#191817]">Ask Our Team</h3>
            <p className="text-xs text-[#78746E] mt-0.5">
              Questions about fit, materials, or shipping? We reply in ~2 hours.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#78746E] hover:text-[#191817] rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-10 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#191817] text-white flex items-center justify-center mb-3">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-semibold text-[#191817]">Message Sent!</h4>
            <p className="text-xs text-[#615C54] mt-1 max-w-xs">
              Thank you. An Adrix footwear specialist will get back to your email shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#42403B] mb-1">
                Your Email
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-3 py-2 text-xs bg-white border border-[#DDD6CB] rounded-md focus:outline-none focus:border-[#191817]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#42403B] mb-1">
                Topic
              </label>
              <select className="w-full px-3 py-2 text-xs bg-white border border-[#DDD6CB] rounded-md focus:outline-none focus:border-[#191817]">
                <option>Sizing & Fit Advice</option>
                <option>Care & Maintenance</option>
                <option>Shipping & Delivery Times</option>
                <option>Returns & 30-Day Trial</option>
                <option>Other Question</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#42403B] mb-1">
                Message
              </label>
              <textarea
                rows={4}
                required
                placeholder="How can we help you find the right fit?"
                className="w-full px-3 py-2 text-xs bg-white border border-[#DDD6CB] rounded-md focus:outline-none focus:border-[#191817]"
              />
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-[#DDD6CB] text-xs font-medium text-[#615C54] rounded-md hover:bg-neutral-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-[#191817] hover:bg-[#2F2D2A] text-white text-xs font-semibold rounded-md flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

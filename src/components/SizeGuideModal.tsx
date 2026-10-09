import React from 'react';
import { X, Ruler } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SIZE_CHART = [
  { us: '7', uk: '6.5', eu: '40', cm: '25.0' },
  { us: '7.5', uk: '7', eu: '40.5', cm: '25.4' },
  { us: '8', uk: '7.5', eu: '41', cm: '25.8' },
  { us: '8.5', uk: '8', eu: '42', cm: '26.2' },
  { us: '9', uk: '8.5', eu: '42.5', cm: '26.7' },
  { us: '9.5', uk: '9', eu: '43', cm: '27.1' },
  { us: '10', uk: '9.5', eu: '44', cm: '27.5' },
  { us: '10.5', uk: '10', eu: '44.5', cm: '27.9' },
  { us: '11', uk: '10.5', eu: '45', cm: '28.3' },
  { us: '11.5', uk: '11', eu: '45.5', cm: '28.8' },
  { us: '12', uk: '11.5', eu: '46', cm: '29.2' },
];

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />

      <div className="relative bg-[#F7F6F2] border border-[#DDD6CB] rounded-2xl p-5 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto z-10 shadow-2xl">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-[#191817]" />
            <h3 className="text-xl font-semibold text-[#191817]">Size & Fit Guide</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#78746E] hover:text-[#191817] rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-[#615C54] leading-relaxed mb-6">
          Adrix Aero 01 fits true to size for standard feet. If you are in between sizes, or plan to wear thick athletic socks, we recommend selecting half a size up. The flexible knit upper naturally adapts to wide feet.
        </p>

        {/* Chart Table */}
        <div className="border border-[#DDD6CB] rounded-xl overflow-x-auto bg-white text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#EAE5DC] text-[#191817] border-b border-[#DDD6CB] font-semibold">
                <th className="py-2.5 px-4 font-mono">US Men</th>
                <th className="py-2.5 px-4 font-mono">UK</th>
                <th className="py-2.5 px-4 font-mono">EU</th>
                <th className="py-2.5 px-4 font-mono">Foot Length</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE5DC] font-mono text-[#4A4742]">
              {SIZE_CHART.map((row) => (
                <tr key={row.us} className="hover:bg-[#F9F8F5] transition-colors">
                  <td className="py-2 px-4 font-bold text-[#191817]">{row.us}</td>
                  <td className="py-2 px-4">{row.uk}</td>
                  <td className="py-2 px-4">{row.eu}</td>
                  <td className="py-2 px-4">{row.cm} cm</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-between items-center text-xs text-[#78746E]">
          <span>Still unsure? 30-day free exchanges guaranteed.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#191817] text-white rounded-md font-medium text-xs hover:bg-[#2F2D2A]"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};

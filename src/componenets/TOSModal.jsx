import React from "react";
import { X } from "lucide-react";

export default function TOSModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <div className="relative bg-slate-800 text-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="px-6 pt-6 pb-4 border-b border-slate-600">
          <h2 className="text-2xl font-semibold">📜 Terms of Service</h2>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 py-4 text-sm leading-relaxed flex-1">
          <p><strong>Overview</strong></p>
          <p>By using BloxLuck.com you agree to the following Terms of Service. If you don’t agree with these Terms of Service, you are not allowed to use BloxLuck.com. You must be at least 18 years of age to use this website.</p>

          <p className="mt-4"><strong>Items prices</strong></p>
          <p>Items prices on our site do not represent any real-life value. BloxLuck.com is for entertainment purposes only. BloxLuck.com does not give opportunity to win real money.</p>

          <p className="mt-4"><strong>Items refunds</strong></p>
          <p>We do not refund any items that enter a pot. However, if your items did not enter the pot, contact our support. If you experienced any bug, you have 12 hours to contact our support, otherwise we cannot guarantee that we could find your trade. We will not take responsibility nor compensate you for items lost inside the bot or due to termination of the Bubble Gum Simulator INFINITY Bots.</p>

          <p className="mt-4"><strong>Code of Conduct</strong></p>
          <p>Users must be respectful and polite at all times. Spam, harassment, staff impersonation, website advertisement, coaching, and begging are forbidden and may result in restrictions. We reserve the right to block any user account for scam attempts, bug exploits, item value abuse, or slandering the site.</p>

          <p className="mt-4"><strong>User Privacy</strong></p>
          <p>By using our service, you acknowledge that your Roblox profile, name, and avatar may be shared with other users. We do not store, share, or ask for personal information.</p>

          <p className="mt-4">We are not affiliated with Roblox Corporation or the Bubble Gum Simulator INFINITY game.</p>
        </div>

        {/* Footer with Button */}
        <div className="px-6 py-4 border-t border-slate-600 flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}

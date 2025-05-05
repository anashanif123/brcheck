import React from 'react';
import { X } from 'lucide-react';

export default function FairModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-[#1e293b] rounded-xl p-6 w-full max-w-md shadow-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-white text-center mb-4">Provably Fair</h2>
        <p className="text-gray-300 text-sm text-center mb-6">
          Coinflips use a reputable third-party provider to determine who wins the game. Use the form below to quickly verify your results.
        </p>
        <input
          type="text"
          placeholder="Enter Ticket ID"
          className="w-full p-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 border border-slate-700 mb-4 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
        <div className="flex justify-center gap-4">
          <button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg font-semibold">
            Verify
          </button>
          <button
            onClick={onClose}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

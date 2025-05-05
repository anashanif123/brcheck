import React from "react";
import { X } from "lucide-react";

const stats = [
  { title: "Biggest Coinflip", value: "131,000" },
  { title: "Coinflip Games", value: "148,507" },
  { title: "Value Wagered", value: "64,320,113" },
  { title: "Giveaways", value: "1,020" },
];

export default function StatsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-slate-900 text-white w-full max-w-3xl rounded-2xl shadow-2xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">📊 Site Stats</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl shadow-sm p-5 flex flex-col items-center justify-center hover:bg-slate-700/60 transition"
            >
              <div className="text-gray-400 text-sm uppercase tracking-wide mb-2">{stat.title}</div>
              <div className="text-2xl font-semibold text-blue-400">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-white font-medium transition"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

// components/FaqModal.jsx
import React from 'react';
import { X } from 'lucide-react';

const faqs = [
  {
    question: 'What is Coinflip and how does it work?',
    answer:
      'Coinflip is a 1v1 PvP game mode where participants place their bets by picking one side of the coin. Each player’s chance of winning is around 50%. The creator of a coinflip can define a value range that can be used to join.',
  },
  {
    question: 'How do I deposit/withdraw?',
    answer:
      'Click the top right icon beside your profile to view trading servers. Trade any mentioned bots the items you want to wager.',
  },
  {
    question: 'Why does it say I don’t have permission to join the private server?',
    answer:
      'Roblox allows only accounts aged 13+ to join private servers. Go to Settings > Privacy and choose "Everyone" under "Who can invite me to private servers."',
  },
  {
    question: 'Will my Roblox account be safe if I use the website?',
    answer:
      'Yes, we never ask for your Roblox password. Your account remains 100% safe and secure.',
  },
  {
    question: 'Can BloxLuck be rigged?',
    answer:
      'No. BloxLuck uses a provably fair system, which means outcomes can be verified. Click the "Fair" button for details.',
  },
  {
    question: 'I won a game, but I didn’t receive all the items.',
    answer:
      'BloxLuck takes a 0–10% cut from every game to keep the platform running.',
  },
  {
    question: 'Items that I own are mispriced, not priced at all, or appear as "unsuitable".',
    answer:
      'In Murder Mystery 2, market prices change often. Report pricing issues using the Support tab or via Discord.',
  },
  {
    question: 'I’m an MM2 content creator looking for a sponsorship.',
    answer:
      'Open a support ticket and provide details about you and your channel. Our team will discuss the terms with you.',
  },
];

export default function FaqModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#1e293b] rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">📖 Frequently Asked Questions</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition duration-200">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              <p className="text-gray-300 mt-1 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* ✅ Centered Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={onClose}
            className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-2 rounded-md transition"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}

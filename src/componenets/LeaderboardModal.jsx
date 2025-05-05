import React from "react";
import { X } from "lucide-react";

const leaderboardData = [
  { rank: 1, username: 'mathsisfun12345', profit: 1890793, wagered: 103666680, bets: 12216 },
  { rank: 2, username: 'vibin_young', profit: 1100816, wagered: 40496320, bets: 5218 },
  { rank: 3, username: 'Jonasborring', profit: 984412, wagered: 20225364, bets: 2651 },
  { rank: 4, username: 'godlytocswirly', profit: 740636, wagered: 5151786, bets: 1985 },
  { rank: 5, username: 'LawKhayeRawahNam', profit: 727446, wagered: 27906991, bets: 5983 },
  { rank: 6, username: 'Blizzzord', profit: 692866, wagered: 18464543, bets: 11136 },
  { rank: 7, username: 'IamRich_Xander82', profit: 592307, wagered: 16859815, bets: 5895 },
  { rank: 8, username: 'the_slavhj', profit: 585870, wagered: 16984581, bets: 6782 },
  { rank: 9, username: 'Blobby124578', profit: 506792, wagered: 6126561, bets: 958 },
  { rank: 10, username: 'justpartyatdat', profit: 498996, wagered: 27801388, bets: 2447 },
];

export default function LeaderboardModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <div className="relative bg-slate-800 text-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="px-6 pt-6 pb-4 border-b border-slate-600">
          <h2 className="text-2xl font-semibold">🏆 Leaderboard</h2>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[70vh] px-6 pb-6">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-700 text-gray-300 uppercase text-xs sticky top-0 z-10">
              <tr>
                <th className="px-3 py-2">#</th>
                <th className="px-3 py-2"></th>
                <th className="px-3 py-2">Username</th>
                <th className="px-3 py-2 text-right">Profit</th>
                <th className="px-3 py-2 text-right">Wagered</th>
                <th className="px-3 py-2 text-right">Bets</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((user, index) => (
                <tr
                  key={user.rank}
                  className={`border-b border-slate-700 ${
                    index % 2 === 0 ? "bg-slate-700/30" : "bg-slate-700/10"
                  } ${
                    user.rank === 1 ? "text-green-400 font-semibold" : ""
                  } hover:bg-slate-700/50 transition`}
                >
                  <td className="px-3 py-2">{user.rank}</td>
                  <td className="px-3 py-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                      {user.username.charAt(0).toUpperCase()}
                    </div>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">{user.username}</td>
                  <td className="px-3 py-2 text-right">{user.profit.toLocaleString()}</td>
                  <td className="px-3 py-2 text-right">{user.wagered.toLocaleString()}</td>
                  <td className="px-3 py-2 text-right">{user.bets.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

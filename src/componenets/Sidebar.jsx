// components/Sidebar.jsx
import { useState } from 'react';
import {
  FaTrophy,
  FaInfoCircle,
  FaQuestionCircle,
  FaFileAlt,
  FaChartBar,
  FaDiscord,
  FaCoins
} from 'react-icons/fa';
import { MdOpenInNew } from "react-icons/md";

import LeaderboardModal from './LeaderboardModal';
import FaqModal from './FAQModal';
import TosModal from './TOSModal';
import StatsModal from './StatsModal'; // ✅ Import the new Stats modal
import FairModal from './FairModal';

export default function Sidebar() {
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [isTosOpen, setIsTosOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false); // ✅ Stats modal state
  const [isFairOpen, setIsFairOpen] = useState(false); // ✅ Stats modal state

  const icons = [
    { icon: <FaCoins size={24} />, label: "Coinflip" },
    { icon: <FaTrophy size={24} />, label: "Leaderboard", onClick: () => setIsLeaderboardOpen(true) },
    { icon: <FaQuestionCircle size={24} />, label: "FAQ", onClick: () => setIsFaqOpen(true) },
    { icon: <FaFileAlt size={24} />, label: "TOS", onClick: () => setIsTosOpen(true) },
    { icon: <MdOpenInNew size={24} />, label: "Provably Fair", onClick: () => setIsFairOpen(true) }, // ✅ Fair open handler
    { icon: <FaChartBar size={24} />, label: "Fair Stats", onClick: () => setIsStatsOpen(true) }, // ✅ Stats open handler
    { icon: <FaDiscord size={24} />, label: "Discord" },
  ];

  return (
    <div className="w-16 md:w-20 bg-slate-900 py-4 space-y-4 text-white border-r border-white/10 flex flex-col items-center">
      {icons.map((item, i) => (
        <div
          key={i}
          className="group relative cursor-pointer"
          onClick={item.onClick}
        >
          <div className="p-3 rounded-md hover:bg-sky-600 transition-colors duration-200" title={item.label}>
            {item.icon}
          </div>
          <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-slate-800 text-white text-sm rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 md:hidden lg:block">
            {item.label}
          </span>
        </div>
      ))}

      {/* ✅ Modals */}
      <LeaderboardModal isOpen={isLeaderboardOpen} onClose={() => setIsLeaderboardOpen(false)} />
      <FaqModal isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
      <TosModal isOpen={isTosOpen} onClose={() => setIsTosOpen(false)} />
      <StatsModal isOpen={isStatsOpen} onClose={() => setIsStatsOpen(false)} />
      <FairModal isOpen={isFairOpen} onClose={() => setIsFairOpen(false)} />
      
    </div>
  );
}

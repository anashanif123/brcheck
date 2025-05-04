import {  FaTrophy, FaInfoCircle, FaQuestionCircle, FaFileAlt, FaChartBar, FaDiscord } from 'react-icons/fa'; // Font Awesome 5
import { MdOpenInNew } from "react-icons/md";

import { FaCoins } from "react-icons/fa";
export default function Sidebar() {
  const icons = [
    { icon: <FaCoins size={24} />, label: "Coinflip" },         // Placeholder for Coinflip
    { icon: <FaTrophy size={24} />, label: "Leaderboard" },     // Placeholder for Leaderboard
    { icon: <FaInfoCircle size={24} />, label: "Info" },         // Placeholder for Info
    { icon: <FaQuestionCircle size={24} />, label: "FAQ" },     // Placeholder for FAQ
    { icon: <span className="text-yellow-500 font-bold">BETA</span>, label: "Beta" }, // Keeping Beta as text
    { icon: <MdOpenInNew size={24} />, label: "New Site" },   // Placeholder for New Site (using Simple Icons)
    { icon: <FaFileAlt size={24} />, label: "TOS" },           // Placeholder for TOS
    { icon: <FaChartBar size={24} />, label: "Fair Stats" },     // Placeholder for Fair Stats
    { icon: <FaDiscord size={24} />, label: "Discord" },         // Placeholder for Discord
  ];

  return (
    <div className="w-16 md:w-20 bg-slate-900 py-4 space-y-4 text-white border-r border-white/10 flex flex-col items-center">
      {icons.map((item, i) => (
        <div key={i} className="group relative">
          <div className="p-3 rounded-md cursor-pointer hover:bg-sky-600 transition-colors duration-200" title={item.label}>
            {item.icon}
          </div>
          <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-slate-800 text-white text-sm rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 md:hidden lg:block">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
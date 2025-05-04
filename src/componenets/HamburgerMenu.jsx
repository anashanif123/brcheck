// components/HamburgerMenu.jsx
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';
import { useState } from 'react';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative md:hidden"> {/* Hidden on medium and larger screens */}
      <button
        onClick={toggleSidebar}
        className="bg-slate-800 p-2 rounded-md text-white hover:bg-slate-700 focus:outline-none focus:ring focus:ring-sky-500 transition"
      >
        <Menu size={24} />
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-slate-900 border-r border-white/10 shadow-md z-50">
          <div className="p-4 border-b border-white/10">
            <span className="text-sky-400 font-bold">Navigation</span>
          </div>
          <Sidebar /> {/* Render the Sidebar component inside */}
          <button
            onClick={toggleSidebar}
            className="absolute bottom-4 left-4 bg-slate-800 p-2 rounded-md text-white hover:bg-slate-700 focus:outline-none focus:ring focus:ring-sky-500 transition"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
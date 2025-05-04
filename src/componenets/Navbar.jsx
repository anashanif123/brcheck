import { useState } from "react";
import Logo from "../assets/logo.png";
import { Clock, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-900 bg-opacity-90 backdrop-blur-md border-b border-white/10 shadow-sm px-4 py-3 md:px-6">
      <div className="flex items-center justify-between">
        {/* Left section: Logo + Title */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-10 md:h-14" />
        </div>

        {/* Center section: Value + Timer (Hidden on small screens) */}
        <div className="hidden sm:flex items-center text-sm md:text-base text-yellow-400">
          <span className="mr-2">95 Value</span>
          <Clock className="inline-block w-4 h-4 mr-1 -mt-0.5" />
          <span>Ends in 3m 46s</span>
        </div>

        {/* Right section: Desktop buttons + Mobile burger */}
        <div className="flex items-center">
          <div className="hidden md:flex items-center text-sm md:text-base text-white">
            <span className="font-semibold mr-3">152 Joined</span>
            <button className="bg-sky-600 hover:bg-sky-700 font-medium py-1.5 px-3 rounded-md transition duration-200 mr-2">AMP</button>
            <button className="bg-blue-700 hover:bg-blue-800 font-medium py-1.5 px-3 rounded-md transition duration-200">Login</button>
          </div>
          <button
            className="md:hidden text-white ml-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2 text-white">
          <div className="text-yellow-400 text-sm text-center">
            95 Value <Clock className="inline-block w-4 h-4 mr-1 -mt-0.5" /> Ends in 3m 46s
          </div>
          <span className="font-semibold block text-center">152 Joined</span>
          <button className="block w-full bg-sky-600 hover:bg-sky-700 font-medium py-2 px-4 rounded-md transition duration-200">AMP</button>
          <button className="block w-full bg-blue-700 hover:bg-blue-800 font-medium py-2 px-4 rounded-md transition duration-200">Login</button>
        </div>
      )}
    </div>
  );
}
import React from 'react';
// import './gaming-font.css'; // Gaming font (Orbitron or similar)

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0a192f] border border-[#112240] p-6 rounded-2xl w-96 max-w-full shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-[#64ffda] text-3xl font-bold mb-6 text-center font-gamer">
          🔐 Login
        </h2>
        <form>
          <div className="mb-5">
            <label htmlFor="username" className="block text-white mb-2 font-semibold">
              Roblox Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-3 bg-[#112240] text-white rounded-md border border-[#233554] placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
              placeholder="Enter your Roblox username"
            />
          </div>
          <div className="flex justify-between gap-4">
            <button
              type="button"
              className="w-1/2 bg-blue-700 hover:bg-blue-800 text-black py-2 rounded-md font-semibold transition-all duration-300 hover:scale-105"
            >
              Login
            </button>
            <button
              type="button"
              className="w-1/2 bg-[#112240] hover:bg-[#233554] text-white py-2 rounded-md font-semibold transition-all duration-300 hover:scale-105"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

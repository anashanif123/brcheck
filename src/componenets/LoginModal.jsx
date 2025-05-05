import React from 'react';

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0a192f] border border-[#112240] p-6 rounded-2xl w-96 max-w-full shadow-2xl z-50"
        onClick={(e) => e.stopPropagation()} // prevent closing modal when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-blue-700 hover:text-white text-lg font-bold"
        >
          ✕
        </button>
        <h2 className="text-blue-700 text-3xl font-bold mb-6 text-center font-gamer">
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
              className="w-1/2 bg-blue-700 hover:bg-blue-800 text-black font-semibold py-2 rounded-md  transition duration-300"
            >
              Login
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 bg-slate-700 text-white font-semibold py-2 rounded-md hover:bg-slate-600 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

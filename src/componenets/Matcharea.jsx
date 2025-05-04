import MatchCard from "./MatchCard";

const matches = [
  { user: "MM2_25218", value: 10, range: "10 - 15", items: 1 },
  { user: "BARSIK_5000", value: 23, range: "18 - 28", items: 2 },
  { user: "InfiniteLame6", value: 114, range: "108 - 119", items: 3 },
];

export default function MatchArea() {
  return (
    <div className="flex-1 p-4 md:p-6 space-y-4 overflow-y-auto bg-slate-800 rounded-lg shadow-md">
      <div className="bg-slate-900 bg-opacity-80 backdrop-blur-sm p-4 md:p-6 rounded-md text-center">
        <h2 className="text-xl font-semibold text-sky-400 mb-2">🎯 Create or Join a Match</h2>
        <button className="mt-4 bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-6 rounded-md transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline-block mr-1 -mt-0.5">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Create Match
        </button>
      </div>
      <div className="space-y-4">
        {matches.map((m, idx) => (
          <MatchCard key={idx} data={m} />
        ))}
      </div>
    </div>
  );
}
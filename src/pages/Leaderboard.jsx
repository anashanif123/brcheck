export default function Leaderboard() {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg col-span-2">
        <h2 className="text-lg font-semibold mb-2">Leaderboard</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600">Create Match</button>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span>Suncleany4</span>
            <span>Join Match (1946 - 2151)</span>
            <span className="text-green-400">Value 2049</span>
          </div>
          <div className="flex justify-between items-center">
            <span>reglissedc</span>
            <span>Join Match (5795 - 6405)</span>
            <span className="text-green-400">Value €100</span>
          </div>
        </div>
      </div>
    );
  }
  
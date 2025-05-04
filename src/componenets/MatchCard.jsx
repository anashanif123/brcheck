export default function MatchCard({ data }) {
    return (
      <div className="bg-slate-800 rounded-lg flex justify-between items-center hover:shadow-md transition-shadow duration-200 border border-slate-700 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-sky-500 text-white font-semibold flex items-center justify-center uppercase">{data.user.charAt(0)}</div>
          <div>
            <div className="text-white font-semibold">{data.user}</div>
            <div className="text-sm text-gray-400">Value: <span className="text-yellow-400">{data.value}</span></div>
            <div className="text-xs text-gray-500">Items: {data.items} 🗡️</div>
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200">
          Join ({data.range})
        </button>
      </div>
    );
  }
  
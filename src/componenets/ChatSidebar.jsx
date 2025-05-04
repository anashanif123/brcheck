import { Send } from 'lucide-react';

const messages = [
  { user: "alpereenea", text: "bir hata yaptım o harvesterlerle girmicetim" },
  { user: "Swoxh830", text: "Mela" },
  { user: "Swoxh830", text: "bana salcanmi 10 val" },
];

export default function ChatSidebar() {
  return (
    <div className="w-full md:w-72 bg-slate-900 border-l border-white/10 flex flex-col">
      <div className="text-green-400 p-4 font-semibold border-b border-white/10 bg-slate-800">
        ● 115 Online
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 text-sm">
        {messages.map((msg, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-sky-400 font-semibold">{msg.user}:</span>
            <span className="text-white ml-1">{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-white/10 bg-slate-800 flex items-center">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 bg-slate-700 bg-opacity-70 backdrop-blur-sm p-2 rounded focus:outline-none focus:ring focus:ring-sky-500 text-white placeholder:text-gray-400"
        />
        <button className="ml-2 p-2 rounded-md hover:bg-sky-700 transition">
          <Send className="text-white" size={20} />
        </button>
      </div>
    </div>
  );
}
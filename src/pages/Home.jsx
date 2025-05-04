import ChatSidebar from "../componenets/ChatSidebar";
import MatchArea from "../componenets/Matcharea";
import Navbar from "../componenets/Navbar";
import Sidebar from "../componenets/Sidebar";


export default function Home() {
  return (
    <div className="flex h-screen bg-slate-900 text-white overflow-hidden">
    <Sidebar className="hidden md:block" /> {/* Hide on smaller screens */}
    <div className="flex flex-col flex-1 md:flex-row"> {/* Stack on small, row on medium+ */}
      <div className="flex-1 overflow-y-auto">
        <Navbar />
        <MatchArea />
      </div>
      <ChatSidebar className="w-full md:w-72" /> {/* Full width on small, fixed on medium+ */}
    </div>
  </div>
  );
}

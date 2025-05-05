import { useState } from "react"; // Import useState
import ChatSidebar from "../componenets/ChatSidebar";
import MatchArea from "../componenets/Matcharea";
import Navbar from "../componenets/Navbar";
import Sidebar from "../componenets/Sidebar";
import LoginModal from "../componenets/LoginModal"; // Import LoginModal

export default function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State for Login Modal

  return (
    <div className="flex h-screen bg-slate-900 text-white overflow-hidden relative"> {/* Added relative here */}
      <Sidebar className="hidden md:block" /> {/* Hide on smaller screens */}
      <div className="flex flex-col flex-1 md:flex-row"> {/* Stack on small, row on medium+ */}
        <div className="flex-1 overflow-y-auto">
          <Navbar onLoginClick={() => setIsLoginModalOpen(true)} /> {/* Pass the function */}
          <MatchArea />
        </div>
        <ChatSidebar className="w-full md:w-72" /> {/* Full width on small, fixed on medium+ */}
      </div>
      {/* Render LoginModal as a sibling to the main content */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  );
}
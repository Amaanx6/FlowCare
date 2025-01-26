import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Home,
  GraduationCap,
  ShoppingBag,
  ActivitySquare,
  Stethoscope,
  Bot,
  HeartPulse,
  MessageSquare,
} from "lucide-react";
import SidebarLink from "./SidebarLink"; // Adjust the path if needed.

const Sidebar = ({ darkMode }) => {
  const navigate = useNavigate();

  return (
    <aside className={`bg-white dark:bg-gray-800 w-64 min-h-screen p-4 ${darkMode ? "dark" : ""}`}>
      <nav className="mt-8 space-y-4">
        <h1 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-8">FlowCare</h1>
        <SidebarLink icon={<LayoutDashboard size={20} />} label="Dashboard" onClick={() => navigate("/dashboard")} />
        <SidebarLink icon={<Home size={20} />} label="Home" onClick={() => navigate("/")} />
        <SidebarLink icon={<GraduationCap size={20} />} label="Education" onClick={() => navigate("/blogs")} />
        <SidebarLink icon={<ShoppingBag size={20} />} label="Shop" onClick={() => navigate("/Ecom")} />
        <SidebarLink icon={<ActivitySquare size={20} />} label="Track Your Health" onClick={() => navigate("/tracker")} />
        <SidebarLink icon={<Stethoscope size={20} />} label="Expert Consultation" onClick={() => navigate("/consultations")} />
        <SidebarLink icon={<Bot size={20} />} label="AI Chatbot" onClick={() => navigate("/ChatBot")} />
        <SidebarLink icon={<HeartPulse size={20} />} label="HealthLens" onClick={() => navigate("/symptomsanalyzer")} />
        <SidebarLink icon={<MessageSquare size={20} />} label="Forums" onClick={() => navigate("/forums")} />
      </nav>
    </aside>
  );
};

export default Sidebar;

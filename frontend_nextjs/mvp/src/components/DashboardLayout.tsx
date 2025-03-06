"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
import { BellIcon, HelpCircleIcon, SettingsIcon, UserIcon } from "lucide-react";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen relative">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-gray-800 text-white"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "X" : "☰"}
      </button>

      {/* make non scrollable */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Main Content - responsive */}
      <main className="flex-1 px-8 lg:px-12 pt-24 lg:pt-8 pb-10">
        <div className="flex justify-between items-center">
          <div>
            <Image
              src={"/assets/logo/LogoBlack.png"}
              alt="CalcAios Logo"
              width={55}
              height={55}
            />
          </div>
          <div className="flex gap-4">
            <div className="bg-lightGray100 p-2 rounded-full">
              <UserIcon className="text-[#5e6783]" />
            </div>
            <div className="bg-lightGray100 p-2 rounded-full">
              <BellIcon className="text-[#5e6783]" />
            </div>
            <div className="bg-lightGray100 p-2 rounded-full">
              <SettingsIcon className="text-[#5e6783]" />
            </div>
            <div className="bg-lightGray100 p-2 rounded-full">
              <HelpCircleIcon className="text-[#5e6783]" />
            </div>
          </div>
        </div>
        <div className=" pt-24 lg:pt-16">{children}</div>
      </main>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;

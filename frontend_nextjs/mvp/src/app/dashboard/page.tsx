"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import DataSection from "@/components/DataSection";
import MarketingSection from "@/components/MarketingSection";

export default function Dashboard() {
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
      <main className="flex-1 p-8 pt-24 lg:pt-16 lg:p-12 ml-0 lg:ml-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DataSection title="Financial data" />
          <DataSection title="Business data" />
          <MarketingSection />
        </div>
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
}

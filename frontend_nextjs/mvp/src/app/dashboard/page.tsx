"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import DataSection from "@/components/DataSection";

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

      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Main Content - responsive */}
      <main className="flex-1 p-4 pt-16 lg:pt-4 lg:p-6 ml-0 lg:ml-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DataSection title="Financial data" />
          <DataSection title="Business data" />
        </div>

        {/* Digital Market Section */}
        <section className="bg-gray-50 p-4 lg:p-6 rounded-lg mt-4 lg:mt-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4">
            Lets see how is digital market today
          </h2>
          <button className="bg-black text-white px-2 lg:px-4 py-1.5 lg:py-2 rounded-md flex items-center text-sm lg:text-base">
            Dig In
            <span className="ml-1 lg:ml-2">→</span>
          </button>
        </section>
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

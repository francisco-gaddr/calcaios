"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { BarChart01 } from "@/components/Visualizations/Charts/BarChart01";
import { BarChartHorizontal01 } from "@/components/Visualizations/Charts/BarChartHorizontal01";
import { PieChart01 } from "@/components/Visualizations/Charts/PieChart01";
import { LineChart01 } from "@/components/Visualizations/Charts/LineChart01";
import { BarChartMultiple01 } from "@/components/Visualizations/Charts/BarChartMultiple01";
export default function Visualizations() {
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
      <main className="flex-1 p-8 pt-24 lg:pt-16 lg:p-12 ml-0 lg:ml-0">
        <h1 className="text-2xl font-bold mb-4">Select Chart Visualization</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BarChart01 />
          <BarChartHorizontal01 />
          <PieChart01 />
          <LineChart01 />
          <BarChartMultiple01 />
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

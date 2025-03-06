"use client";

import SidebarNavLinks from "./SidebarNavLinks";

interface SidebarProps {
  isSidebarOpen: boolean;
}

export default function Sidebar({ isSidebarOpen }: SidebarProps) {
  return (
    <aside
      className={`${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } pt-16 lg:translate-x-0 fixed lg:sticky top-0 w-64 bg-sideBar text-white p-6 h-screen overflow-hidden transition-transform duration-300 ease-in-out z-40`}
    >
      <SidebarNavLinks />
    </aside>
  );
}

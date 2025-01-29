"use client";

import Link from "next/link";

interface NavLink {
  href: string;
  icon: string;
  label: string;
  isActive?: boolean;
}

const navLinks: NavLink[] = [
  { href: "/dashboard", icon: "📊", label: "Dashboard" },
  { href: "/upload", icon: "⬇️", label: "Data Upload" },
  { href: "/budgeting", icon: "💰", label: "Budgeting" },
  { href: "/tax", icon: "⏰", label: "Tax Management" },
  { href: "/visualizations", icon: "📈", label: "Visualizations" },
  { href: "/analysis", icon: "💼", label: "Business Analysis" },
  { href: "/ai", icon: "🤖", label: "AI Assistant" },
  { href: "/reports", icon: "📑", label: "Reports" },
  { href: "/settings", icon: "⚙️", label: "Settings" },
];

export default function SidebarNavLinks() {
  return (
    <nav className="space-y-4">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`flex items-center space-x-2 p-2 ${
            link.href === "/dashboard" ? "bg-gray-700 rounded" : ""
          }`}
        >
          <span>{link.icon}</span>
          <span>{link.label}</span>
        </Link>
      ))}
    </nav>
  );
}

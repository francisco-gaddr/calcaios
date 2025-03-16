"use client";

import {
  Bot,
  ChartColumnBig,
  ChartPieIcon,
  FileText,
  HomeIcon,
  Settings,
  UploadIcon,
  WalletIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const navLinks: NavLink[] = [
  {
    href: "/dashboard",
    icon: <HomeIcon className="w-5 h-5" />,
    label: "Dashboard",
  },
  {
    href: "/upload",
    icon: <UploadIcon className="w-5 h-5" />,
    label: "Data Upload",
  },
  {
    href: "/budgeting",
    icon: <WalletIcon className="w-5 h-5" />,
    label: "Budgeting",
  },
  {
    href: "/tax",
    icon: <ChartPieIcon className="w-5 h-5" />,
    label: "Tax Management",
  },
  {
    href: "/visualizations",
    icon: <ChartColumnBig className="w-5 h-5" />,
    label: "Visualizations",
  },
  // {
  //   href: "/analysis",
  //   icon: <MdBusinessCenter className="w-5 h-5" />,
  //   label: "Business Analysis",
  // },
  {
    href: "/ai",
    icon: <Bot className="w-5 h-5" />,
    label: "AI Assistant",
  },
  {
    href: "/reports",
    icon: <FileText className="w-5 h-5" />,
    label: "Reports",
  },
  {
    href: "/settings",
    icon: <Settings className="w-5 h-5" />,
    label: "Settings",
  },
];

export default function SidebarNavLinks() {
  const pathname = usePathname();
  return (
    <nav className="space-y-4">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`flex items-center space-x-2 p-2`}
        >
          <span
            className={`${
              link.href === pathname ? "text-sideBarText" : "text-white"
            }`}
          >
            {link.icon}
          </span>
          <span
            className={`${link.href === pathname ? "text-sideBarText" : ""}`}
          >
            {link.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}

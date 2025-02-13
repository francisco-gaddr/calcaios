"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdDashboard,
  MdUpload,
  MdAttachMoney,
  MdAccessTime,
  MdShowChart,
  MdBusinessCenter,
  MdSmartToy,
  MdDescription,
  MdSettings,
} from "react-icons/md";

interface NavLink {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const navLinks: NavLink[] = [
  {
    href: "/dashboard",
    icon: <MdDashboard className="w-5 h-5" />,
    label: "Dashboard",
  },
  {
    href: "/upload",
    icon: <MdUpload className="w-5 h-5" />,
    label: "Data Upload",
  },
  {
    href: "/budgeting",
    icon: <MdAttachMoney className="w-5 h-5" />,
    label: "Budgeting",
  },
  {
    href: "/tax",
    icon: <MdAccessTime className="w-5 h-5" />,
    label: "Tax Management",
  },
  {
    href: "/visualizations",
    icon: <MdShowChart className="w-5 h-5" />,
    label: "Visualizations",
  },
  {
    href: "/analysis",
    icon: <MdBusinessCenter className="w-5 h-5" />,
    label: "Business Analysis",
  },
  {
    href: "/ai",
    icon: <MdSmartToy className="w-5 h-5" />,
    label: "AI Assistant",
  },
  {
    href: "/reports",
    icon: <MdDescription className="w-5 h-5" />,
    label: "Reports",
  },
  {
    href: "/settings",
    icon: <MdSettings className="w-5 h-5" />,
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
          className={`flex items-center space-x-2 p-2 ${
            link.href === pathname ? "bg-white rounded" : ""
          }`}
        >
          <span
            className={`${
              link.href === pathname ? "text-sideBar" : "text-white"
            }`}
          >
            {link.icon}
          </span>
          <span className={`${link.href === pathname ? "text-sideBar" : ""}`}>
            {link.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}

import Image from "next/image";
import { UserIcon, BellIcon, SettingsIcon, HelpCircleIcon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-8 pt-24 lg:pt-8 pb-10">
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
    </nav>
  );
}

import Image from "next/image";
import { UserIcon, BellIcon, SettingsIcon, HelpCircleIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar({
  isUserAuthenticated,
}: {
  isUserAuthenticated: boolean;
}) {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Image
              src={"/assets/logo/LogoBlack.png"}
              alt="CalcAios Logo"
              width={55}
              height={55}
            />
          </div>
          <div className="flex gap-4">
            {isUserAuthenticated ? (
              <>
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
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button
                    variant="ghost"
                    className="text-accent hover:text-white"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button
                    variant="default"
                    className="bg-accent hover:bg-accent"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

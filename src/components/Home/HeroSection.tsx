"use client";

import { ChevronRight, ChartLine, BotIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  const router = useRouter();

  return (
    <div className="bg-lightGray100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
              Welcome to CalcAios!
            </h1>
            <p className="text-gray-600 text-base sm:text-xl mb-6 sm:mb-8">
              Your AI companion for smarter calculations, analytics, and
              insights.
            </p>
            <div className="flex flex-col justify-start items-start gap-2">
              <Button
                onClick={() => router.push("/onboarding")}
                size="lg"
                className="bg-accent hover:bg-accent"
              >
                Get Started <ChevronRight />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-accent hover:bg-transparent underline underline-offset-4"
              >
                Book a Demo!
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/assets/images/hero-illustration.png"
              alt="CalcAios Interface"
              width={600}
              height={400}
              className="w-full"
            />
            <div className="absolute top-0 right-0 bg-white rounded-lg p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <ChartLine className="text-accent w-5 h-5" />
                <span className="text-sm text-gray-600">
                  Real-time Analytics
                </span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 bg-white rounded-lg p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <BotIcon className="text-accent w-5 h-5" />
                <span className="text-sm text-gray-600">
                  Smart AI Assistant
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Shield,
  Glasses,
  ChevronRight,
  BotIcon,
  ChartLine,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar isUserAuthenticated={false} />

      {/* Hero Section */}
      <div className="bg-lightGray100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Welcome to CalcAios!
              </h1>
              <p className="text-gray-600 text-xl mb-8">
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

      {/* Features Section */}
      <div className="bg-[#0D3D38] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Get instant results with our powerful AI engine
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                Your data is encrypted and protected
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Glasses className="text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Insights</h3>
              <p className="text-gray-600">
                Advanced analytics at your fingertips
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Home/HeroSection";
import FeaturesSection from "@/components/Home/FeaturesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar isUserAuthenticated={false} />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}

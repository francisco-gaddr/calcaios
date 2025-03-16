"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/onboarding/Navbar";
import WelcomeStep from "@/components/onboarding/WelcomeStep";
import PersonalityStep from "@/components/onboarding/PersonalityStep";
import PreviewStep from "@/components/onboarding/PreviewStep";
import InterestsStep from "@/components/onboarding/InterestsStep";

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      router.push("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {currentStep === 1 && (
        <WelcomeStep onNext={handleNext} onSkip={handleSkip} />
      )}

      {currentStep === 2 && (
        <PersonalityStep
          onNext={handleNext}
          onBack={handleBack}
          onSkip={handleSkip}
        />
      )}

      {currentStep === 3 && (
        <PreviewStep
          onNext={handleNext}
          onBack={handleBack}
          onSkip={handleSkip}
        />
      )}

      {currentStep === 4 && (
        <InterestsStep
          onNext={handleNext}
          onBack={handleBack}
          onSkip={handleSkip}
        />
      )}
    </div>
  );
}

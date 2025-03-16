"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import WelcomeStep from "@/components/Onboarding/WelcomeStep";
import PersonalityStep from "@/components/Onboarding/PersonalityStep";
import PreviewStep from "@/components/Onboarding/PreviewStep";
import InterestsStep from "@/components/Onboarding/InterestsStep";

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
      <Navbar isUserAuthenticated={true} />

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

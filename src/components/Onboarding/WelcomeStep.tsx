import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { StepProps } from "./types/StepProps";

const WelcomeStep = ({ onNext, onSkip }: StepProps) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
              Let&apos;s Meet Your AI Companion!
            </h1>
            <p className="text-gray-600 text-base sm:text-xl mb-6 sm:mb-8">
              You&apos;re all set! Now, let&apos;s find the perfect AI assistant
              tailored to your needs. Explore options and select the one that
              suits you best.
            </p>
            <div className="flex flex-col justify-start items-start gap-2">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent"
                onClick={onNext}
              >
                Find Your Match <ChevronRight />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-accent hover:bg-transparent underline underline-offset-4"
                onClick={onSkip}
              >
                Skip for now!
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/assets/images/onboarding-illustration.png"
              alt="CalcAios Interface"
              width={600}
              height={400}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeStep;

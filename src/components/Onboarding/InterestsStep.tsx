import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState } from "react";
import { StepProps } from "./types/StepProps";

const interests = [
  "Business Analytics",
  "Big Data Analysis",
  "Homework Assistance",
  "Automated budgeting & Tax management",
];

const InterestsStep = ({ onNext, onBack, onSkip }: StepProps) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };
  return (
    <div className="flex flex-col items-center justify-center pt-8 sm:pt-24 pb-10">
      <div className="w-full max-w-4xl p-4 sm:p-12">
        <div className="flex flex-row gap-4 items-center bg-[#F8F8F8] p-4 rounded-lg mb-6">
          <Image
            src="/assets/images/theo-avatar.png"
            alt="Theo Avatar"
            width={50}
            height={50}
            className="rounded-full w-8 sm:w-12 h-8 sm:h-12"
          />
          <h2 className="text-base sm:text-xl font-semibold text-gray-800">
            Hi, tell me what are your interests?
          </h2>
        </div>
        <div className="bg-[#F8F8F8] p-4 sm:p-8 rounded-xl mb-4">
          <h3 className="text-center text-base sm:text-xl font-semibold mb-8 text-gray-800">
            Select your Interest Areas
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6">
            {interests.map((interest) => (
              <button
                key={interest}
                className={`px-4 py-2 border rounded-lg text-sm transition-all ${
                  selectedInterests.includes(interest)
                    ? "bg-accent text-white"
                    : "bg-white text-gray-800 border-gray-300"
                }`}
                onClick={() => toggleInterest(interest)}
              >
                {interest}
              </button>
            ))}
          </div>
          <p className="text-xs text-center text-gray-500 my-6">
            You can always add more categories later
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-between">
            <div className="flex flex-row order-2 sm:order-1 justify-between sm:justify-start gap-2">
              <Button
                variant="outline"
                onClick={onBack}
                className="text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white text-md"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </Button>
              <Button
                variant="outline"
                onClick={onSkip}
                className="text-accent border-accent hover:bg-accent hover:text-white text-md"
              >
                Skip
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <Button
              onClick={onNext}
              className="order-1 sm:order-2 bg-accent hover:bg-accent/90 text-white text-md"
            >
              Continue <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestsStep;

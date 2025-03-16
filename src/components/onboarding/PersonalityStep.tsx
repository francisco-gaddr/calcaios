import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StepProps } from "./types/StepProps";

const PersonalityStep = ({ onNext, onBack, onSkip }: StepProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
      <h1 className="text-3xl font-bold mb-4">Choose Your AI Personality</h1>
      <p className="mb-2">
        Select the personality style that best fits your needs and preferences.
      </p>
      <p className="text-gray-500 italic mb-8">You can change this later!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Personality Cards */}
        <button
          onClick={onNext}
          className="border rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-start"
        >
          <Image
            src="/assets/images/theo-avatar.png"
            alt="Mia Avatar"
            width={48}
            height={48}
            className="mb-4"
          />
          <h3 className="font-semibold text-lg mb-2">Friendly Tutor-Mia</h3>
          <p className="text-gray-600">Patient, supportive, and approachable</p>
        </button>

        <button
          onClick={onNext}
          className="border rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-start"
        >
          <Image
            src="/assets/images/theo-avatar.png"
            alt="Theo Avatar"
            width={48}
            height={48}
            className="mb-4"
          />
          <h3 className="font-semibold text-lg mb-2">Data wizard-Theo</h3>
          <p className="text-gray-600">Intellectual, powerful guide</p>
        </button>

        <button
          onClick={onNext}
          className="border rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-start"
        >
          <Image
            src="/assets/images/theo-avatar.png"
            alt="Liv Avatar"
            width={48}
            height={48}
            className="mb-4"
          />
          <h3 className="font-semibold text-lg mb-2">Motivational coach-Liv</h3>
          <p className="text-gray-600">Uplifting, energizing and positive</p>
        </button>

        <button
          onClick={onNext}
          className="border rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-start"
        >
          <Image
            src="/assets/images/theo-avatar.png"
            alt="Loe Avatar"
            width={48}
            height={48}
            className="mb-4"
          />
          <h3 className="font-semibold text-lg mb-2">Creative Genius-Loe</h3>
          <p className="text-gray-600">Modern, dynamic and artistic vibes</p>
        </button>

        <button
          onClick={onNext}
          className="border rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-start"
        >
          <Image
            src="/assets/images/theo-avatar.png"
            alt="Analyst Avatar"
            width={48}
            height={48}
            className="mb-4"
          />
          <h3 className="font-semibold text-lg mb-2">Pragmatic Analyst</h3>
          <p className="text-gray-600">
            Practical, no nonsense and professional
          </p>
        </button>
      </div>

      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          className="text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white text-md"
          onClick={onBack}
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </Button>
        <Button className="bg-accent hover:bg-accent text-md" onClick={onSkip}>
          Skip
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PersonalityStep;

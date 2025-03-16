import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { StepProps } from "./types/StepProps";

const PreviewStep = ({ onNext, onBack, onSkip }: StepProps) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
      <div className="bg-lightGray100 rounded-xl p-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12">
            <Image
              src={"/assets/images/theo-avatar.png"}
              alt="Theo avatar"
              width={48}
              height={48}
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Analyze with Theo
          </h2>
        </div>
        <div className="bg-white rounded-md shadow-lg shadow-gray-200 p-4 mb-8">
          <p className="text-gray-600 text-sm">
            {
              '"Hi, I\'m Theo! I specialize in detailed analytics and insightful reports."'
            }
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent text-md"
              onClick={onNext}
            >
              Choose this personality
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-md border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white"
              onClick={onBack}
            >
              Preview another
            </Button>
          </div>
          <div>
            <Button
              size="lg"
              variant="outline"
              className="text-md border-accent text-accent hover:bg-accent hover:text-white"
              onClick={onSkip}
            >
              Skip
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewStep;

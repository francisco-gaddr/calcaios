import Image from "next/image";
import TheoImage from "../../../public/assets/images/theo-avatar.png";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Welcome() {
  return (
    <div className="relative h-screen">
      <div className="max-w-7xl mx-auto py-12">
        <div className="mb-8">
          <h1 className="text-xl font-bold">CalcAios</h1>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-lightGray100 w-full max-w-3xl rounded-xl p-6 m-2 sm:m-0">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12">
            <Image src={TheoImage} alt="Theo avatar" width={48} height={48} />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Analyze with Theo
          </h2>
        </div>
        <div className="bg-white rounded-lg p-4 mb-8">
          <p className="text-gray-600">
            {
              '"Hi, I\'m Theo! I specialize in detailed analytics and insightful reports."'
            }
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button size="lg">
            Choose this personality <ArrowRight />
          </Button>
          <Button size="lg" variant="outline">
            Preview another <ArrowRight />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-20 right-20 flex justify-end mt-6">
        <Button size="lg" variant="outline">
          Skip
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

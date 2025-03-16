"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface DataSectionProps {
  title: string;
}

export default function DataSection({ title }: DataSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="bg-lightGray100 shadow-lg shadow-gray-200 p-4 lg:p-6 rounded-lg">
        <div className="mb-4 flex flex-col gap-1">
          <p className=" font-bold text-md lg:text-2xl mb-1">Input Data</p>
          <p>Such as CSV, XML, PDF, API</p>
        </div>
        <div className="flex space-x-4 mb-2">
          <Button size="lg" className="font-semibold">
            Upload a file
            <ChevronRight />
          </Button>
          <Button size="lg" variant="outline" className="font-semibold">
            Input financial details
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
}

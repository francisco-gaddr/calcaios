"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface DataSectionProps {
  title: string;
}

export default function DataSection({ title }: DataSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="bg-lightGray100 p-4 lg:p-6 rounded-lg">
        <div className="mb-4">
          <p className=" font-bold text-md lg:text-md mb-1">Input Data</p>
          <p className="text-gray-600">Such as CSV,XML,PDF,API</p>
        </div>
        <div className="flex space-x-4 mb-4">
          <Button size="lg">
            Upload a file
            <ArrowRight />
          </Button>
          <Button size="lg" variant="outline">
            Input financial details
            <ArrowRight />
          </Button>
        </div>
        <p className="text-gray-600">Connect an external API endpoint</p>
      </div>
    </section>
  );
}

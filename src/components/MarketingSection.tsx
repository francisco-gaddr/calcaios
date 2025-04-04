"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function MarketingSection() {
  return (
    <section className="bg-lightGray100 shadow-lg shadow-gray-200 p-4 lg:px-6 lg:py-8 rounded-lg">
      <div className="mb-4 flex flex-col gap-1">
        <p className=" font-bold text-md lg:text-xl mb-1">Digital Market</p>
        <p>Dive to know what is happening.</p>
      </div>
      <Button className="font-semibold">
        Dig In
        <ArrowRight />
      </Button>
    </section>
  );
}

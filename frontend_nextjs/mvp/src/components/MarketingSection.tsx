"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function MarketingSection() {
  return (
    <section className="bg-lightGray100 p-4 lg:px-6 lg:py-8 rounded-lg">
      <h2 className="text-xl lg:text-2xl font-semibold mb-4">
        Lets see how is digital market today
      </h2>
      <Button size="lg">
        Dig In
        <ArrowRight />
      </Button>
    </section>
  );
}

"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
const chartData = [
  { browser: "0", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "1", visitors: 200, fill: "var(--color-safari)" },
  { browser: "2", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "3", visitors: 173, fill: "var(--color-edge)" },
  { browser: "4", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Label 1",
    color: "hsl(var(--chart-3))",
  },
  safari: {
    label: "Label 2",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Label 3",
    color: "hsl(var(--chart-1))",
  },
  edge: {
    label: "Label 4",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Label 5",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function PieChart01() {
  return (
    <Card className="flex flex-col bg-lightGray100">
      <CardHeader className="pb-0">
        <CardTitle className="text-xl">Pie Chart</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[400px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={100}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <div className="flex justify-start m-4">
        <Button size="lg">Select</Button>
      </div>
    </Card>
  );
}

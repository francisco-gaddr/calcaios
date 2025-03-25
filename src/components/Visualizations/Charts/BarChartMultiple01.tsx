"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
const chartData = [
  { month: "0", label1: 186, label2: 80 },
  { month: "1", label1: 305, label2: 200 },
  { month: "2", label1: 237, label2: 120 },
  { month: "3", label1: 73, label2: 190 },
  { month: "4", label1: 209, label2: 130 },
  { month: "5", label1: 214, label2: 140 },
  { month: "6", label1: 190, label2: 150 },
  { month: "7", label1: 244, label2: 160 },
  { month: "8", label1: 213, label2: 170 },
  { month: "9", label1: 120, label2: 180 },
];

const chartConfig = {
  label1: {
    label: "Label 1",
    color: "hsl(var(--chart-3))",
  },
  label2: {
    label: "Label 2",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function BarChartMultiple01() {
  return (
    <Card className="bg-lightGray100">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">
          Bar Chart - Multiple
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="label1" fill="var(--color-label1)" radius={4} />
            <Bar dataKey="label2" fill="var(--color-label2)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <div className="flex justify-start m-4">
        <Button size="lg">Select</Button>
      </div>
    </Card>
  );
}

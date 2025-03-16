"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
const chartData = [
  { month: "0", desktop: 186 },
  { month: "1", desktop: 305 },
  { month: "2", desktop: 237 },
  { month: "3", desktop: 73 },
  { month: "4", desktop: 209 },
  { month: "5", desktop: 214 },
  { month: "6", desktop: 190 },
  { month: "7", desktop: 244 },
];

const chartConfig = {
  desktop: {
    label: "Label",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function BarChartHorizontal01() {
  return (
    <Card className="bg-lightGray100">
      <CardHeader>
        <CardTitle className="text-xl">Bar Chart - Horizontal</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey="desktop" hide />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <div className="flex justify-start m-4">
        <Button size="lg">Select</Button>
      </div>
    </Card>
  );
}

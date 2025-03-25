"use client";

import { GitCommitVertical } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
const chartData = [
  { month: "0", desktop: 186, mobile: 80 },
  { month: "1", desktop: 305, mobile: 200 },
  { month: "2", desktop: 237, mobile: 120 },
  { month: "3", desktop: 73, mobile: 190 },
  { month: "4", desktop: 209, mobile: 130 },
  { month: "5", desktop: 214, mobile: 140 },
  { month: "6", desktop: 190, mobile: 120 },
  { month: "7", desktop: 244, mobile: 150 },
  { month: "8", desktop: 213, mobile: 120 },
  { month: "9", desktop: 120, mobile: 100 },
];

const chartConfig = {
  desktop: {
    label: "Label 1",
    color: "hsl(var(--chart-3))",
  },
  mobile: {
    label: "Label 2",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function LineChart01() {
  return (
    <Card className="bg-lightGray100">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Line Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={({ cx, cy, payload }) => {
                const r = 24;
                return (
                  <GitCommitVertical
                    key={payload.month}
                    x={cx - r / 2}
                    y={cy - r / 2}
                    width={r}
                    height={r}
                    fill="hsl(var(--background))"
                    stroke="var(--color-desktop)"
                  />
                );
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <div className="flex justify-start m-4">
        <Button size="lg">Select</Button>
      </div>
    </Card>
  );
}

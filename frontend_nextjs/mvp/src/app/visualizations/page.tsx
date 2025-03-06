import { BarChart01 } from "@/components/Visualizations/Charts/BarChart01";
import { BarChartHorizontal01 } from "@/components/Visualizations/Charts/BarChartHorizontal01";
import { PieChart01 } from "@/components/Visualizations/Charts/PieChart01";
import { LineChart01 } from "@/components/Visualizations/Charts/LineChart01";
import { BarChartMultiple01 } from "@/components/Visualizations/Charts/BarChartMultiple01";
import DashboardLayout from "@/components/DashboardLayout";

export default function Visualizations() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Select Chart Visualization</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <BarChart01 />
          <BarChartHorizontal01 />
          <PieChart01 />
          <LineChart01 />
          <BarChartMultiple01 />
        </div>
      </div>
    </DashboardLayout>
  );
}

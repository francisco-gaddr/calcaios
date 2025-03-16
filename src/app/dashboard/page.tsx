import DataSection from "@/components/DataSection";
import MarketingSection from "@/components/MarketingSection";
import DashboardLayout from "@/components/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <DataSection title="Financial data" />
        <DataSection title="Business data" />
        <MarketingSection />
      </div>
    </DashboardLayout>
  );
}

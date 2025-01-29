"use client";

interface DataSectionProps {
  title: string;
}

export default function DataSection({ title }: DataSectionProps) {
  return (
    <section className="bg-gray-50 p-4 lg:p-6 rounded-lg">
      <h2 className="text-xl lg:text-2xl font-semibold mb-4">{title}</h2>
      <div className="mb-4">
        <p className="text-sm lg:text-base text-gray-600 mb-2">Input Data</p>
        <p className="text-xs lg:text-sm text-gray-500">
          Such as CSV,XML,PDF,API
        </p>
      </div>
      <div className="flex space-x-2 lg:space-x-4">
        <button className="bg-black text-white px-2 lg:px-4 py-1.5 lg:py-2 rounded-md flex items-center text-sm lg:text-base">
          Upload a file
          <span className="ml-1 lg:ml-2">→</span>
        </button>
        <button className="border border-black px-2 lg:px-4 py-1.5 lg:py-2 rounded-md flex items-center text-sm lg:text-base">
          Input financial details
          <span className="ml-1 lg:ml-2">→</span>
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        Connect an external API endpoint
      </p>
    </section>
  );
}

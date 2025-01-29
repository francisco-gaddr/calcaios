"use client";

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
          <button className="bg-black text-white px-4 py-2 rounded flex items-center">
            Upload a file
            <span className="ml-2">→</span>
          </button>
          <button className="border border-black px-4 py-2 rounded flex items-center">
            Input financial details
            <span className="ml-2">→</span>
          </button>
        </div>
        <p className="text-gray-600">Connect an external API endpoint</p>
      </div>
    </section>
  );
}

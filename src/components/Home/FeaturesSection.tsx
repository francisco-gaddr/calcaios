import { Zap, Shield, Glasses } from "lucide-react";

const FeaturesSection = () => {
  return (
    <div className="bg-[#0D3D38] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-purple-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-600">
              Get instant results with our powerful AI engine
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="text-purple-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
            <p className="text-gray-600">
              Your data is encrypted and protected
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Glasses className="text-purple-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Insights</h3>
            <p className="text-gray-600">
              Advanced analytics at your fingertips
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

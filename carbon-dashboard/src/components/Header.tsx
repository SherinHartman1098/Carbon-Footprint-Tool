import { Leaf } from "lucide-react";

const Header: React.FC = () => (
  <div className="text-center mb-12 animate-fadeIn">
    <div className="flex items-center justify-center gap-4 mb-6">
      <div className="relative">
        <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
        <div className="relative p-4 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl shadow-2xl">
          <Leaf className="w-16 h-16 text-white" />
        </div>
      </div>
      <div>
        <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Carbon Footprint
        </h1>
        <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Calculator
        </h1>
      </div>
    </div>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
      Measure your environmental impact and discover personalized ways to reduce
      your carbon emissions for a sustainable future
    </p>
    <div className="flex items-center justify-center gap-6 mt-6">
      <div className="px-4 py-2 bg-green-100 rounded-full">
        <span className="text-sm font-semibold text-green-700">
          🌍 Science-Based
        </span>
      </div>
      <div className="px-4 py-2 bg-blue-100 rounded-full">
        <span className="text-sm font-semibold text-blue-700">
          ⚡ Instant Results
        </span>
      </div>
      <div className="px-4 py-2 bg-purple-100 rounded-full">
        <span className="text-sm font-semibold text-purple-700">
          ✨ Actionable Insights
        </span>
      </div>
    </div>
  </div>
);

export default Header;

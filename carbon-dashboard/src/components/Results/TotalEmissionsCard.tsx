import { Award, Info, TrendingDown } from "lucide-react";

const TotalEmissionsCard: React.FC<{ total: number }> = ({ total }) => {
  const getImpactLevel = () => {
    if (total < 500)
      return {
        label: "Excellent",
        color: "from-green-500 to-emerald-600",
        icon: <Award className="w-8 h-8" />,
      };
    if (total < 1000)
      return {
        label: "Good",
        color: "from-blue-500 to-cyan-600",
        icon: <TrendingDown className="w-8 h-8" />,
      };
    if (total < 2000)
      return {
        label: "Average",
        color: "from-yellow-500 to-orange-600",
        icon: <Info className="w-8 h-8" />,
      };
    return {
      label: "Needs Improvement",
      color: "from-red-500 to-pink-600",
      icon: <TrendingDown className="w-8 h-8" />,
    };
  };

  const impact = getImpactLevel();

  return (
    <div
      className={`bg-gradient-to-br ${impact.color} rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden`}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Your Carbon Footprint</h2>
          <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
            {impact.icon}
          </div>
        </div>

        <div className="flex items-baseline gap-3 mb-4">
          <span className="text-7xl font-black">{total.toFixed(2)}</span>
          <span className="text-3xl font-semibold">kg CO₂</span>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <span className="text-sm font-semibold">{impact.label} Level</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
            <p className="text-sm opacity-90 mb-1">German Average</p>
            <p className="text-xl font-bold">~667 kg/month</p>
          </div>
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
            <p className="text-sm opacity-90 mb-1">Your Difference</p>
            <p className="text-xl font-bold">
              {total < 667 ? "✓" : "↑"} {Math.abs(total - 667).toFixed(0)} kg
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TotalEmissionsCard;

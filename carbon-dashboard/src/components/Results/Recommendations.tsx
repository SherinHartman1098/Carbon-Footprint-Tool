import { Leaf } from "lucide-react";

const Recommendations: React.FC<{ recommendations: string[] }> = ({
  recommendations,
}) => (
  <div className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-xl p-8 border border-white/20">
    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
      <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl shadow-lg">
        <Leaf className="w-6 h-6 text-white" />
      </div>
      Personalized Action Plan
    </h3>
    <div className="space-y-4">
      {recommendations.map((rec, index) => (
        <div
          key={index}
          className="group p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-lg"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 transition-transform">
              {index + 1}
            </div>
            <p className="text-gray-700 leading-relaxed flex-1">{rec}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default Recommendations;

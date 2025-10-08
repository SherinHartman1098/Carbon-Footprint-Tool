import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { EmissionData } from "../../types/emissions";

const EmissionsBarChart: React.FC<{ data: EmissionData[] }> = ({ data }) => (
  <div className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-xl p-8 border border-white/20">
    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
      📊 Emissions by Category
    </h3>
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#059669" stopOpacity={0.6} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis
          dataKey="category"
          angle={-15}
          textAnchor="end"
          height={80}
          style={{ fontSize: "12px" }}
        />
        <YAxis
          label={{ value: "kg CO₂", angle: -90, position: "insideLeft" }}
          style={{ fontSize: "12px" }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            border: "none",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        />
        <Bar
          dataKey="emissions"
          fill="url(#barGradient)"
          radius={[8, 8, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
export default EmissionsBarChart;

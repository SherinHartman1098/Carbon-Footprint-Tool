import React from "react";
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts";
import type { PieLabelRenderProps } from "recharts";
import type { EmissionData } from "../../types/emissions";
import { CHART_COLORS } from "../../utils/emissionFactors";

interface Props {
  data: EmissionData[];
}

const EmissionsPieChart: React.FC<Props> = ({ data }) => (
  <div className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-xl p-8 border border-white/20">
    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
      🥧 Distribution
    </h3>
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data as unknown as Record<string, string | number>[]} // satisfy Recharts
          dataKey="emissions"
          nameKey="category"
          cx="50%"
          cy="50%"
          outerRadius={120}
          label={(props: PieLabelRenderProps) => {
            const name = props.name as string;
            const percent = (props.percent ?? 0) as number; // explicitly typed
            return `${name} ${(percent * 100).toFixed(0)}%`;
          }}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={CHART_COLORS[index % CHART_COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            border: "none",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default EmissionsPieChart;

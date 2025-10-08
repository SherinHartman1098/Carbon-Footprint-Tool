import { ArrowRight, Download } from "lucide-react";
import type { EmissionData } from "../../types/emissions";
import { generateRecommendations } from "../../utils/calculations";
import Button from "../ui/Button";
import EmissionsBarChart from "./EmissionsBarChart";
import EmissionsPieChart from "./EmissionsPieChart";
import Recommendations from "./Recommendations";
import TotalEmissionsCard from "./TotalEmissionsCard";

const ResultsDashboard: React.FC<{
  results: EmissionData[];
  totalEmissions: number;
  onDownload: () => void;
  onReset: () => void;
}> = ({ results, totalEmissions, onDownload, onReset }) => {
  const recommendations = generateRecommendations(results);

  return (
    <div className="space-y-8 animate-fadeIn">
      <TotalEmissionsCard total={totalEmissions} />

      <div className="grid lg:grid-cols-2 gap-8">
        <EmissionsBarChart data={results} />
        <EmissionsPieChart data={results} />
      </div>

      <Recommendations recommendations={recommendations} />

      <div className="flex flex-wrap gap-4 justify-center">
        <Button
          onClick={onDownload}
          variant="secondary"
          icon={<Download className="w-5 h-5" />}
        >
          Download Report
        </Button>
        <Button
          onClick={onReset}
          variant="ghost"
          icon={<ArrowRight className="w-5 h-5" />}
        >
          New Calculation
        </Button>
      </div>
    </div>
  );
};

export default ResultsDashboard;

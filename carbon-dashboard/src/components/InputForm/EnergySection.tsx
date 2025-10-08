import { Zap } from "lucide-react";
import { InputField } from "./InputField";
import type { CarbonFormData } from "../../types/emissions";

const EnergySection: React.FC<{
  formData: CarbonFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ formData, onChange }) => (
  <div className="space-y-5">
    <div className="flex items-center gap-3 mb-5">
      <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg">
        <Zap className="w-6 h-6 text-white" />
      </div>
      <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
        Energy Usage
      </h2>
    </div>

    <InputField
      label="Electricity Consumption"
      name="electricityKwh"
      value={formData.electricityKwh}
      onChange={onChange}
      placeholder="300"
      icon={<Zap className="w-4 h-4" />}
      helperText="kWh per month"
    />

    <InputField
      label="Natural Gas Consumption"
      name="naturalGasKwh"
      value={formData.naturalGasKwh}
      onChange={onChange}
      placeholder="150"
      icon={<Zap className="w-4 h-4" />}
      helperText="kWh per month"
    />
  </div>
);
export default EnergySection;

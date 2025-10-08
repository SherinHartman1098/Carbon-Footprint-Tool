import { Trash2 } from "lucide-react";
import { InputField } from "./InputField";
import type { CarbonFormData } from "../../types/emissions";

const WasteSection: React.FC<{
  formData: CarbonFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ formData, onChange }) => (
  <div className="space-y-5">
    <div className="flex items-center gap-3 mb-5">
      <div className="p-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl shadow-lg">
        <Trash2 className="w-6 h-6 text-white" />
      </div>
      <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
        Waste Management
      </h2>
    </div>

    <InputField
      label="Waste Generated"
      name="wasteKg"
      value={formData.wasteKg}
      onChange={onChange}
      placeholder="50"
      icon={<Trash2 className="w-4 h-4" />}
      helperText="kg per month"
    />

    <InputField
      label="Recycling Rate"
      name="recyclingPercent"
      value={formData.recyclingPercent}
      onChange={onChange}
      placeholder="40"
      icon={<Trash2 className="w-4 h-4" />}
      helperText="Percentage (0-100)"
      min="0"
      max="100"
    />
  </div>
);
export default WasteSection;

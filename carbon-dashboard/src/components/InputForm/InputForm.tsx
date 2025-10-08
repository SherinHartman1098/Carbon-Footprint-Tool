import type { CarbonFormData } from "../../types/emissions";
import EnergySection from "./EnergySection";
import WasteSection from "./WasteSection";
import TransportSection from "./TransportSection";
import Button from "../ui/Button";
import { Info, Sparkles } from "lucide-react";
const InputForm: React.FC<{
  formData: CarbonFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCalculate: () => void;
}> = ({ formData, onChange, onCalculate }) => (
  <div className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl p-8 border border-white/20">
    <div className="grid md:grid-cols-3 gap-8">
      <EnergySection formData={formData} onChange={onChange} />
      <WasteSection formData={formData} onChange={onChange} />
      <TransportSection formData={formData} onChange={onChange} />
    </div>

    <div className="mt-10 flex justify-center">
      <Button onClick={onCalculate} icon={<Sparkles className="w-5 h-5" />}>
        Calculate My Footprint
      </Button>
    </div>

    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-100">
      <div className="flex gap-3 items-start">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-semibold text-blue-900 mb-1">💡 Pro Tip</p>
          <p>
            Enter accurate values for the most precise carbon footprint
            calculation. Leave fields blank if not applicable.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default InputForm;

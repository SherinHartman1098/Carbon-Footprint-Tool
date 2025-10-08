import { Car } from "lucide-react";
import { InputField } from "./InputField";
import type { CarbonFormData } from "../../types/emissions";

const TransportSection: React.FC<{
  formData: CarbonFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ formData, onChange }) => (
  <div className="space-y-5">
    <div className="flex items-center gap-3 mb-5">
      <div className="p-3 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl shadow-lg">
        <Car className="w-6 h-6 text-white" />
      </div>
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Transportation
      </h2>
    </div>

    <InputField
      label="Car Travel"
      name="carKm"
      value={formData.carKm}
      onChange={onChange}
      placeholder="500"
      icon={<Car className="w-4 h-4" />}
      helperText="km per month"
    />

    <InputField
      label="Short-haul Flights"
      name="flightShortHaul"
      value={formData.flightShortHaul}
      onChange={onChange}
      placeholder="2000"
      icon={<Car className="w-4 h-4" />}
      helperText="km per year (under 1500 km)"
    />

    <InputField
      label="Long-haul Flights"
      name="flightLongHaul"
      value={formData.flightLongHaul}
      onChange={onChange}
      placeholder="5000"
      icon={<Car className="w-4 h-4" />}
      helperText="km per year (over 1500 km)"
    />
  </div>
);
export default TransportSection;

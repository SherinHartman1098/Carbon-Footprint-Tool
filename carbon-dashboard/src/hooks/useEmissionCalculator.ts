import { useState } from "react";
import type { CarbonFormData, EmissionData } from "../types/emissions";
import { calculateCategoryEmissions } from "../utils/calculations";

const useEmissionCalculator = () => {
  const [formData, setFormData] = useState<CarbonFormData>({
    electricityKwh: "",
    naturalGasKwh: "",
    wasteKg: "",
    recyclingPercent: "",
    carKm: "",
    flightShortHaul: "",
    flightLongHaul: "",
  });

  const [results, setResults] = useState<EmissionData[] | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateEmissions = () => {
    const data = calculateCategoryEmissions(formData);
    setResults(data);
  };

  const resetCalculator = () => {
    setFormData({
      electricityKwh: "",
      naturalGasKwh: "",
      wasteKg: "",
      recyclingPercent: "",
      carKm: "",
      flightShortHaul: "",
      flightLongHaul: "",
    });
    setResults(null);
  };

  const getTotalEmissions = () => {
    if (!results) return 0;
    return results.reduce((sum, item) => sum + item.emissions, 0);
  };

  return {
    formData,
    results,
    handleInputChange,
    calculateEmissions,
    resetCalculator,
    getTotalEmissions,
  };
};

export default useEmissionCalculator;

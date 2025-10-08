import type { EmissionData, CarbonFormData } from "../types/emissions";
import { EMISSION_FACTORS, CHART_COLORS } from "./emissionFactors";

export const calculateCategoryEmissions = (
  formData: CarbonFormData
): EmissionData[] => {
  const electricity =
    (parseFloat(formData.electricityKwh) || 0) * EMISSION_FACTORS.electricity;
  const gas =
    (parseFloat(formData.naturalGasKwh) || 0) * EMISSION_FACTORS.naturalGas;
  const recyclingFactor =
    1 - (parseFloat(formData.recyclingPercent) || 0) / 100;
  const waste =
    (parseFloat(formData.wasteKg) || 0) *
    EMISSION_FACTORS.waste *
    recyclingFactor;
  const car = (parseFloat(formData.carKm) || 0) * EMISSION_FACTORS.car;
  const flightShort =
    (parseFloat(formData.flightShortHaul) || 0) * EMISSION_FACTORS.flightShort;
  const flightLong =
    (parseFloat(formData.flightLongHaul) || 0) * EMISSION_FACTORS.flightLong;

  return [
    {
      category: "Electricity",
      emissions: parseFloat(electricity.toFixed(2)),
      color: CHART_COLORS[0],
    },
    {
      category: "Natural Gas",
      emissions: parseFloat(gas.toFixed(2)),
      color: CHART_COLORS[1],
    },
    {
      category: "Waste",
      emissions: parseFloat(waste.toFixed(2)),
      color: CHART_COLORS[2],
    },
    {
      category: "Car Travel",
      emissions: parseFloat(car.toFixed(2)),
      color: CHART_COLORS[3],
    },
    {
      category: "Short Flights",
      emissions: parseFloat(flightShort.toFixed(2)),
      color: CHART_COLORS[4],
    },
    {
      category: "Long Flights",
      emissions: parseFloat(flightLong.toFixed(2)),
      color: CHART_COLORS[5],
    },
  ].filter((item) => item.emissions > 0);
};

export const generateRecommendations = (results: EmissionData[]): string[] => {
  const recommendations: string[] = [];
  const sorted = [...results].sort((a, b) => b.emissions - a.emissions);

  if (sorted[0]?.category === "Electricity") {
    recommendations.push(
      "Switch to renewable energy providers or install solar panels to reduce your carbon footprint by up to 100%"
    );
    recommendations.push(
      "Upgrade to energy-efficient LED bulbs and smart appliances to cut electricity usage by 30-50%"
    );
  }
  if (sorted[0]?.category === "Car Travel") {
    recommendations.push(
      "Consider electric or hybrid vehicles to reduce transportation emissions by 60-80%"
    );
    recommendations.push(
      "Use public transport, carpooling, or cycling for short trips to minimize daily emissions"
    );
  }
  if (sorted[0]?.category.includes("Flight")) {
    recommendations.push(
      "Replace short business flights with high-speed trains to cut emissions by 90%"
    );
    recommendations.push(
      "Use video conferencing for meetings to eliminate travel emissions entirely"
    );
  }
  if (sorted.find((item) => item.category === "Waste")) {
    recommendations.push(
      "Increase recycling rates to 80%+ and compost organic waste to reduce landfill emissions"
    );
    recommendations.push(
      "Eliminate single-use plastics and adopt reusable alternatives"
    );
  }

  return recommendations.slice(0, 4);
};

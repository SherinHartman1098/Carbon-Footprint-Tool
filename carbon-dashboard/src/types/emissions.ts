// Type definitions only - NO imports needed

export interface EmissionData {
  category: string;
  emissions: number;
  color: string;
  [key: string]: string | number;
}

export interface CarbonFormData {
  electricityKwh: string;
  naturalGasKwh: string;
  wasteKg: string;
  recyclingPercent: string;
  carKm: string;
  flightShortHaul: string;
  flightLongHaul: string;
}

export interface CarProps {
  id: number;
  name: string;
  year: number;
  description: string;
  engineVolume: number | string;
  fuelType: string;
  seats: number;
  transmission: string;
  interior: string;
  pricePerDay: number;
  priceFor5Days: number;
  priceFor10Days: number;
  driverSurcharge: number;
  mainImage: string;
  additionalImages: string[];
}
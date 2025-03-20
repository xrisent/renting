import React from "react";
import CarDetails from "@/shared/CarDetails/CarDetails";
import CarPricing from "@/shared/CarPricing/CarPricing";
import CarTerms from "@/shared/CarTerms/CarTerms";
import "./CarDescription.scss";

interface CarProps {
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
}

const CarDescription: React.FC<{ car: CarProps }> = ({ car }) => {
    return (
      <div className="car-description">
        <div className="car-description__short-info">
            <h2 className="title">{car.name} ({car.year})</h2>
            <p className="description">{car.description}</p>
        </div>
        <CarDetails car={car} />
        <CarPricing car={car} />
        <CarTerms />
      </div>
    );
};

export default CarDescription;

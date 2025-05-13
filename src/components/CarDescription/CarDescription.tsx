import React from "react";
import CarDetails from "@/shared/CarDetails/CarDetails";
import CarPricing from "@/shared/CarPricing/CarPricing";
import CarTerms from "@/shared/CarTerms/CarTerms";
import "./CarDescription.scss";

import { CarProps } from "@/entities/car";

const CarDescription: React.FC<{ car: CarProps }> = ({ car }) => {
    return (
      <div className="car-description">
        <h2 className="title">{car.name} ({car.year})</h2>
        <CarDetails car={car} />
        <p className="description" dangerouslySetInnerHTML={{ __html: car.description.replace(/\n/g, '<br/>') }} />
        <CarTerms />
        <CarPricing car={car} />
      </div>
    );
};

export default CarDescription;

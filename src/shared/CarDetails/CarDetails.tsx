
import './CarDetails.scss'
import React from "react";

import { CarProps } from "@/entities/car";

const CarDetails: React.FC<{car: CarProps}> = ({ car }) => {
  return (
    <div className="car-details">
      <h3>Детали {car.name}</h3>
      <ul>
        <li><strong>Объём двигателя:</strong> {car.engineVolume} L</li>
        <li><strong>Тип топлива:</strong> {car.fuelType}</li>
        <li><strong>Вместимость:</strong> {car.seats}</li>
        {/* <li><strong>Трансмиссия:</strong> {car.transmission}</li>
        <li><strong>Интерьер:</strong> {car.interior}</li> */}
      </ul>
    </div>
  );
};

export default CarDetails;

import './CarPricing.scss'
import React from "react";

import { CarProps } from "@/entities/car";

const CarPricing: React.FC<{car: CarProps}> = ({ car }) => {
  return (
    <div className="car-pricing">
      <h3>Цена</h3>
      <ul>
        <li><strong>Цена за 1 день:</strong> ${car.pricePerDay}</li>
        <li><strong>Цена за 5 дней:</strong> ${car.priceFor5Days}</li>
        <li><strong>Цена за 10 дней и более:</strong> ${car.priceFor10Days}</li>
        <li><strong>Доплата за водителя:</strong> ${car.driverSurcharge} в день</li>
      </ul>
    </div>
  );
};

export default CarPricing;

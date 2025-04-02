import './CarPricing.scss'
import React from "react";

import { CarProps } from "@/entities/car";

const CarPricing: React.FC<{car: CarProps}> = ({ car }) => {
  return (
    <div className="car-pricing">
      <h3>Цена</h3>
      <ul>
        <li><strong>Цена за 24 часа с нашим водителем и нашим топливом:</strong> ${car.pricePerDay}</li>
        <li><strong>Цена за 3 суток с нашим водителем и нашим топливом:</strong> ${car.priceFor5Days}</li>
        <li><strong>Цена за 6 суток с нашим водителем и нашим топливом:</strong> ${car.priceFor10Days}</li>
        <li><strong>Цена за 10 и более суток:</strong> Обговаривается с предусмотром скидки</li>
      </ul>
      <br/>
      <p>Принимаем оплату на Visa card, ЭЛКАРТ</p>
      <p>Для постоянных клиентов действует скидочная программа</p>
    </div>
  );
};

export default CarPricing;

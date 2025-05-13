
import './CarDetails.scss'
import React from "react";

import { CarProps } from "@/entities/car";
import { useTranslations } from 'next-intl'

const CarDetails: React.FC<{car: CarProps}> = ({ car }) => {

  
  const t = useTranslations("CarDescription")

  return (
    <div className="car-details">
      <h3>{t("detailsName")} {car.name}</h3>
      <ul>
        <li><strong>{t("engineVolume")}:</strong> {car.engineVolume} L</li>
        <li><strong>{t("petrolType")}:</strong> {car.fuelType}</li>
        <li><strong>{t("seats")}:</strong> {car.seats}</li>
        <li><strong>Starlink:</strong> 24/7</li>
        {/* <li><strong>Трансмиссия:</strong> {car.transmission}</li>
        <li><strong>Интерьер:</strong> {car.interior}</li> */}
      </ul>
    </div>
  );
};

export default CarDetails;

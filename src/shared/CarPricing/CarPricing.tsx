import './CarPricing.scss'
import React from "react";

import { CarProps } from "@/entities/car";
import { useTranslations } from 'next-intl'

const CarPricing: React.FC<{car: CarProps}> = ({ car }) => {

  const t = useTranslations("CarPrice")

  return (
    <div className="car-pricing">
      <h3>{t('priceName')}</h3>
      <ul>
        <li><strong>{t("days1")}:</strong> ${car.pricePerDay}</li>
      </ul>
      <br/>
      <p>{t('p1')}</p>
      <p>{t('p2')}</p>
    </div>
  );
};

export default CarPricing;

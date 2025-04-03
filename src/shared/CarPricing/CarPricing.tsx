import './CarPricing.scss'
import React from "react";

import { CarProps } from "@/entities/car";
import { useTranslations } from 'next-intl'

const CarPricing: React.FC<{car: CarProps}> = ({ car }) => {

  const t = useTranslations("CarPrice")

  return (
    <div className="car-pricing">
      <h3>Цена</h3>
      <ul>
        <li><strong>{t("days1")}:</strong> ${car.pricePerDay}</li>
        <li><strong>{t("days3")}:</strong> ${car.priceFor5Days}</li>
        <li><strong>{t("days6")}:</strong> ${car.priceFor10Days}</li>
        <li><strong>{t("days10")}:</strong> {t("days10terms")}</li>
      </ul>
      <br/>
      <p>{t('p1')}</p>
      <p>{t('p2')}</p>
    </div>
  );
};

export default CarPricing;

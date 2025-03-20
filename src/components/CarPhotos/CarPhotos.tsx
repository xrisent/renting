import React from "react";
import "./CarPhotos.scss";

import { CarProps } from "@/entities/car";

const CarPhotos: React.FC<{ car: CarProps }> = ({ car }) => {
    console.log(car.additionalImages)
    return (
      <div className="car-photos">
        {car.additionalImages.map((el, idx)=>{
            return <img src={el} alt="car photo" key={idx} />
        })}
      </div>
    );
};

export default CarPhotos;

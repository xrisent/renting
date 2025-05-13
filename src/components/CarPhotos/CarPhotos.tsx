import React from "react";
import "./CarPhotos.scss";

import { CarProps } from "@/entities/car";
import Image from "next/image";

const CarPhotos: React.FC<{ car: CarProps }> = ({ car }) => {
    console.log(car.additionalImages)
    return (
      <div className="car-photos">
        {car.additionalImages? car.additionalImages.map((el, idx)=>{
            return <Image src={el} alt="car photo" key={idx} width={600} height={600}/>
        }):''}
      </div>
    );
};

export default CarPhotos;

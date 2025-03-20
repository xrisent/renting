"use client";

import React, { useEffect, useState } from "react";
import CarDescription from "@/components/CarDescription/CarDescription";
import "./singleCar.scss";
import { Banner } from "@/components/Banner/Banner";
import FormForRent from "@/components/FormForRent/FormForRent";
import { useParams } from "next/navigation";
import CarPhotos from "@/components/CarPhotos/CarPhotos";

const Car: React.FC = () => {
    const { id } = useParams();
    
    const [carData, setCarData] = useState<any>(null);

    useEffect(() => {
        async function fetchCar() {
            try {
                const res = await fetch(`/api/cars?id=${id}`);
                const data = await res.json();
                setCarData(data);
            } catch (error) {
                console.error("Ошибка загрузки данных:", error);
            }
        }

        fetchCar();
    }, [id]);

    if (!carData) {
        return <div>Loading...</div>;
    }

    console.log(carData[0].mainImage)

    return (
        <>
            <Banner image={carData[0].mainImage} h3="Аренда автомобилей"/>
            <section id="singleCarSection">
                <div className="container">
                    <div className="singleCarSection__box">
                        <div className="singleCarSection__box__info">
                            <CarDescription car={carData[0]} />
                            <hr />
                            <CarPhotos car={carData[0]}/>
                        </div>
                        <FormForRent />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Car;

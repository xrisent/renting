"use client";

import React, { useEffect, useState } from "react";
import CarDescription from "@/components/CarDescription/CarDescription";
import "./singleCar.scss";
import { Banner } from "@/components/Banner/Banner";
import FormForRent from "@/components/FormForRent/FormForRent";
import { useParams } from "next/navigation";

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

    return (
        <>
            <Banner image="https://ak-sai.com/wp-content/uploads/jeep-1920x500.jpg" h3="Аренда автомобилей"/>
            <section id="singleCarSection">
                <div className="container">
                    <div className="singleCarSection__box">
                        <div className="singleCarSection__box__info">
                            <CarDescription car={carData} />
                        </div>
                        <FormForRent />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Car;

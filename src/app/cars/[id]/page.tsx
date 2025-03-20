import React from "react";
import './singleCar.scss'
import CarDescription from "@/components/CarDescription/CarDescription";
import { Banner } from "@/components/Banner/Banner";
import FormForRent from "@/components/FormForRent/FormForRent";
import CarPhotos from "@/components/CarPhotos/CarPhotos";

import { fetchCarData } from "@/features/fetchCarData/fetchCarData";



const Car = async ({ params }: { params: { id: string } }) => {
    const { id } = await params; 

    let carData = null;
    try {
        carData = await fetchCarData(id);
    } catch (error) {
        console.error("Ошибка загрузки данных:", error);
    }

    if (!carData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Banner image={carData[0].mainImage} h3="Аренда автомобилей" />
            <section id="singleCarSection">
                <div className="container">
                    <div className="singleCarSection__box">
                        <div className="singleCarSection__box__info">
                            <CarDescription car={carData[0]} />
                            <hr />
                            <CarPhotos car={carData[0]} />
                        </div>
                        <FormForRent />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Car;

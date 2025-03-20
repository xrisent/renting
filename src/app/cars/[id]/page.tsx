"use client";

import './singleCar.scss'
import { Banner } from "@/components/Banner/Banner";
import FormForRent from "@/components/FormForRent/FormForRent";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const Car: React.FC = () => {
    const { id } = useParams();

    useEffect(() => {
        async function fetchCar() {
            try {
                const res = await fetch(`/api/cars?id=${id}`);
                const data = await res.json();
                console.log(data);
            } catch (error) {
                console.error("Ошибка загрузки данных:", error);
            }
        }

        fetchCar();
    }, [id]);

    return (
    <>
        <Banner image="https://ak-sai.com/wp-content/uploads/jeep-1920x500.jpg" h3="Аренда автомобилей"/>
        <section id="singleCarSection">
            <div className="container">
                <div className="singleCarSection__box">
                    <div className="singleCarSection__box__info">
                        <h2>Описание</h2>
                    </div>
                    <FormForRent/>
                </div>
            </div>
        </section>
    </>
    )
};

export default Car;



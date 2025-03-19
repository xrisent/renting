"use client";

import { Banner } from "@/components/Banner/Banner";
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
                    <h1>car {id}</h1>
                </div>
            </div>
        </section>
    </>
    )
};

export default Car;



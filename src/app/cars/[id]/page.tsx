import React from "react";
import './singleCar.scss';
import CarDescription from "@/components/CarDescription/CarDescription";
import { Banner } from "@/components/Banner/Banner";
import FormForRent from "@/components/FormForRent/FormForRent";
import CarPhotos from "@/components/CarPhotos/CarPhotos";
import { fetchCarData } from "@/features/fetchCarData";
type Params = Promise<{ id: string }>

// Define the component properly using NextPage
const Car = async function Page(props: {
        params: Params
    }) {

    const params = await props.params
    // Check if params is correctly passed
    if (!params?.id) {
        return <div>Invalid car ID</div>;
    }

    let carData = null;
    try {
        carData = await fetchCarData(params.id);
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

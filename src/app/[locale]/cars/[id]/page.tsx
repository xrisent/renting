import React from "react";
import './singleCar.scss';
import CarDescription from "@/components/CarDescription/CarDescription";
import { Banner } from "@/components/Banner/Banner";
import FormForRent from "@/components/FormForRent/FormForRent";
import { fetchCarData } from "@/features/fetchCarData";
import './singleCar.adaptive.scss';
type Params = Promise<{ id: string, locale: string }>

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
        carData = await fetchCarData(params.id, params.locale);
    } catch (error) {
        console.error("Ошибка загрузки данных:", error);
    }

    if (!carData) {
        return <div>Loading...</div>;
    }
    return (
        <main>
            <Banner images={[carData.mainImage, ...carData.additionalImages]} page='CarDescription' />
            <section id="singleCarSection">
                <div className="container">
                    <div className="singleCarSection__box">
                        <div className="singleCarSection__box__info">
                            <CarDescription car={carData} />
                            <hr />
                            <br />
                        </div>
                        <FormForRent />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Car;

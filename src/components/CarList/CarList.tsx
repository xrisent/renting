"use client"

import { CarProps } from '@/entities/car';
import './CarList.scss'
import { useRouter } from 'next/navigation';

interface Props {
    cars: CarProps[],
}

export const CarList: React.FC<Props> = props => {
    const router = useRouter();
    return <section id='carList'>
                <div className="container">
                    <div className="carList__box">
                        {props.cars.map((car, index) => (
                        <div key={index} className="carCard" onClick={()=>router.push(`/cars/${car.id}`)}>
                            <img src={car.mainImage} alt={car.name} />
                            <h3>{car.name}</h3>
                            <p>{car.year}</p>
                            <p>Цена начинается от: {car.pricePerDay}$</p>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
};
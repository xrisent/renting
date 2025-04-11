"use client"

import { useEffect, useState, useMemo } from 'react'
import { CarProps } from '@/entities/car'
import './CarList.scss'
import './CarList.adaptive.scss'
import CarCard from '@/shared/CarCard/CarCard'
import CarSlider from '@/shared/CarSlider/CarSlider'

interface Props {
    cars: CarProps[]
}

export const CarList: React.FC<Props> = ({ cars }) => {

    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 550)
        handleResize() 

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const renderedCarCards = useMemo(() => {
        return cars.map((car, index) => (
            <CarCard key={index} car={car} index={index} />
        ))
    }, [cars])

    return (
        <section id="carList">
            <div className="container">
                <div className="carList__box">
                    {isMobile ? (
                        <CarSlider cars={cars} />
                    ) : (
                        renderedCarCards
                    )}
                </div>
            </div>
        </section>
    )
}

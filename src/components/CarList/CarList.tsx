"use client"

import { CarProps } from '@/entities/car'
import './CarList.scss'
import './CarList.adaptive.scss'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface Props {
    cars: CarProps[]
}

export const CarList: React.FC<Props> = ({ cars }) => {
    const t = useTranslations("CarList")
    const router = useRouter()
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 550)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <section id="carList">
            <div className="container">
                <div className="carList__box">
                    {isMobile ? (
                        <Swiper spaceBetween={0} slidesPerView={1} loop={true}>
                            {cars.map((car, index) => (
                                <SwiperSlide key={index}>
                                    <div className="carCard" onClick={() => router.push(`/cars/${car.id}`)}>
                                        <img src={car.mainImage} alt={car.name} />
                                        <h3>{car.name}</h3>
                                        <p>{car.year}</p>
                                        <p>{t("price")} {car.pricePerDay}$</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        cars.map((car, index) => (
                            <div key={index} className="carCard" onClick={() => router.push(`/cars/${car.id}`)}>
                                <img src={car.mainImage} alt={car.name} />
                                <h3>{car.name}</h3>
                                <p>{car.year}</p>
                                <p>{t("price")} {car.pricePerDay}$</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}

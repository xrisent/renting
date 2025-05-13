import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import CarCard from '../CarCard/CarCard'
import { CarProps } from '@/entities/car'

interface CarSliderProps {
    cars: CarProps[]
}

const CarSlider: React.FC<CarSliderProps> = ({ cars }) => (
    <Swiper spaceBetween={0} slidesPerView={1} loop={true}>
        {cars.map((car, index) => (
            <SwiperSlide key={index}>
                <CarCard car={car} index={index} />
            </SwiperSlide>
        ))}
    </Swiper>
)

export default CarSlider

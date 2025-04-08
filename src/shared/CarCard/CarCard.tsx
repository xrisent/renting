import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { CarProps } from '@/entities/car'
import { useTranslations } from 'next-intl'

interface CarCardProps {
    car: CarProps
    index: number
}

const CarCard: React.FC<CarCardProps> = ({ car, index }) => {
    const t = useTranslations("CarList")
    const router = useRouter()

    return (
        <div className="carCard" onClick={() => router.push(`/cars/${car.id}`)}>
            <Image
                priority={index < 3} 
                loading="eager"
                src={car.mainImage}
                alt={car.name}
                width={300}
                height={300}
            />
            <h3>{car.name}</h3>
            <p>{car.year}</p>
            <p>{t('price')} {car.pricePerDay}$</p>
        </div>
    )
}

export default CarCard

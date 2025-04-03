import { Banner } from '@/components/Banner/Banner';
import './homePage.scss'
import { CarList } from '@/components/CarList/CarList';
import { CarProps } from '@/entities/car';
import { testCar } from '@/entities/mockdata';

export default function Home() {
  const carsList: CarProps[] = Array(5).fill(testCar);
  return (
    <main>
      <Banner image={'/images/pexels2.jpg'} h3='Главная'/>
      <CarList cars={carsList}/>
    </main>
  );
}

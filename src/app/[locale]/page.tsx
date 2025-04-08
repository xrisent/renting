import { Banner } from '@/components/Banner/Banner';
import './homePage.scss'
// import { CarList } from '@/components/CarList/CarList';
import { CarProps } from '@/entities/car';
import { testCar } from '@/entities/mockdata';
import React from 'react';

export default function Home() {
  const carsList: CarProps[] = Array(5).fill(testCar);

  const CarList = React.lazy(() => import('@/components/CarList/CarList').then(module => ({ default: module.CarList })));
  
  return (
    <main>
      <Banner images={['/images/pexels.webp']} page='MainPage'/>
      <CarList cars={carsList}/>
    </main>
  );
}

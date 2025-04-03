import { testCar, testCarEn } from '@/entities/mockdata';
import axios from 'axios';

export async function fetchCarData(id: string, locale: string) {
    try {
        const response = await axios.get(`http://localhost:3000/api/cars`, { params: { id } });
        return response.data[0];
    } catch (error) {
        console.warn(`Ошибка загрузки данных, ${error}`);
        if (locale === 'ru') {
            return testCar
        } else if (locale === 'en') {
            return testCarEn
        } else {
            return testCar; 
        }
    }
}
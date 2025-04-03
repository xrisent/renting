import { testCar } from '@/entities/mockdata';
import axios from 'axios';

export async function fetchCarData(id: string) {
    try {
        const response = await axios.get(`http://localhost:3000/api/cars`, { params: { id } });
        return response.data;
    } catch (error) {
        console.warn(`Ошибка загрузки данных, ${error}`);
        return [testCar];
    }
}
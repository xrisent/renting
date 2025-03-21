import axios from 'axios';

export async function fetchCarData(id: string) {
    try {
        const response = await axios.get(`http://localhost:3000/api/cars`, { params: { id } });
        return response.data;
    } catch (error) {
        throw new Error(`Ошибка загрузки данных, ${error}`);
    }
}

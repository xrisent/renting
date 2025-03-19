export interface Car {
    id: string;
    name: string; // название
    year: number;  // год выпуска
    description: string;  // описание
    engineVolume: number;  // объем двигателя (в литрах)
    fuelType: string;  // тип топлива (например, "бензин", "дизель", "электрический")
    seats: number;  // количество мест
    transmission: string;  // КПП (например, "механика", "автомат")
    interior: string;  // салон (например, "кожа", "ткань")
    pricePerDay: number;  // стоимость без водителя (за 1 сутки)
    priceFor5Days: number;  // стоимость за 5 и более суток
    priceFor10Days: number;  // стоимость за 10 и более суток
    driverSurcharge: number;  // доплата за водителя
  }
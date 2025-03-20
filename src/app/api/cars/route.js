import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const uploadDir = path.join(process.cwd(), 'public/uploads');

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const name = searchParams.get('name');
    const year = searchParams.get('year');
    
    let where = {};
    if (id) where.id = Number(id);
    if (name) where.name = name;
    if (year) where.year = Number(year);

    const cars = await prisma.car.findMany({ where });
    if (cars.length === 0) return NextResponse.json({ error: 'Машина не найдена' }, { status: 404 });
    
    return NextResponse.json(cars, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка получения данных' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    const mainImage = formData.get('mainImage');
    const name = formData.get('name');
    const year = parseInt(formData.get('year'));
    const description = formData.get('description');
    const engineVolume = parseFloat(formData.get('engineVolume'));
    const fuelType = formData.get('fuelType');
    const transmission = formData.get('transmission');
    const interior = formData.get('interior');
    const pricePerDay = parseFloat(formData.get('pricePerDay'));
    const priceFor5Days = parseFloat(formData.get('priceFor5Days'));
    const priceFor10Days = parseFloat(formData.get('priceFor10Days'));
    const driverSurcharge = parseFloat(formData.get('driverSurcharge'));
    const seats = parseInt(formData.get('seats'));

    if (!mainImage) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const mainImagePath = path.join(uploadDir, mainImage.name);
    const mainBuffer = await mainImage.arrayBuffer();
    fs.writeFileSync(mainImagePath, Buffer.from(mainBuffer));

    const additionalImages = [];
    const imageFiles = formData.getAll('additionalImages');

    for (const file of imageFiles) {
      const imagePath = path.join(uploadDir, file.name);
      const buffer = await file.arrayBuffer();
      fs.writeFileSync(imagePath, Buffer.from(buffer));
      additionalImages.push(imagePath);
    }

    const data = {
      name: name || '',
      year: year || 0,
      description: description || '',
      engineVolume: engineVolume || 0,
      fuelType: fuelType || '',
      seats: seats || 0,
      transmission: transmission || '',
      interior: interior || '',
      pricePerDay: pricePerDay || 0,
      priceFor5Days: priceFor5Days || 0,
      priceFor10Days: priceFor10Days || 0,
      driverSurcharge: driverSurcharge || 0,
      mainImage: mainImagePath,
      additionalImages,
    };

    const newCar = await prisma.car.create({ data });
    return NextResponse.json(newCar, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Ошибка записи' }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const formData = await req.formData();
    const id = formData.get('id');
    if (!id) return NextResponse.json({ error: 'ID обязателен' }, { status: 400 });

    const updatedData = {};
    formData.forEach((value, key) => {
      if (key !== 'id') updatedData[key] = value;
    });

    const updatedCar = await prisma.car.update({
      where: { id: Number(id) },
      data: updatedData,
    });
    return NextResponse.json(updatedCar, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка обновления' }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID обязателен' }, { status: 400 });

    await prisma.car.delete({ where: { id: Number(id) } });
    return NextResponse.json({ message: 'Удалено успешно' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка удаления' }, { status: 500 });
  }
}

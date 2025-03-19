import prisma from '@/lib/prisma';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    
    if (id) {
      const car = await prisma.car.findUnique({ where: { id: Number(id) } });
      if (!car) return Response.json({ error: 'Машина не найдена' }, { status: 404 });
      return Response.json(car, { status: 200 });
    }
    
    const cars = await prisma.car.findMany();
    return Response.json(cars, { status: 200 });
  } catch (error) {
    return Response.json({ error: 'Ошибка получения данных' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const newCar = await prisma.car.create({ data });
    return Response.json(newCar, { status: 201 });
  } catch (error) {
    return Response.json({ error: 'Ошибка записи' }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const data = await req.json();
    if (!data.id) return Response.json({ error: 'ID обязателен' }, { status: 400 });
    
    const updatedCar = await prisma.car.update({
      where: { id: Number(data.id) },
      data,
    });
    return Response.json(updatedCar, { status: 200 });
  } catch (error) {
    return Response.json({ error: 'Ошибка обновления' }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return Response.json({ error: 'ID обязателен' }, { status: 400 });
    
    await prisma.car.delete({ where: { id: Number(id) } });
    return Response.json({ message: 'Удалено успешно' }, { status: 200 });
  } catch (error) {
    return Response.json({ error: 'Ошибка удаления' }, { status: 500 });
  }
}
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Укажите директорию для сохранения файлов
const uploadDir = path.join(process.cwd(), 'public/uploads');

export async function POST(req) {
  try {
    // Получение данных формы
    const formData = await req.formData();

    // Получение файла из данных формы
    const file = formData.get('file');
    const text = formData.get('text')
    console.log(text)
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Определение пути для сохранения файла
    const filePath = path.join(uploadDir, file.name);

    // Создание директории для загрузки, если она не существует
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }

    // Сохранение файла на сервере
    const buffer = await file.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buffer));

    return NextResponse.json({ message: 'File uploaded successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

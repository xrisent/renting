# Используем официальный Node.js образ
FROM node:18 AS builder

# Установим рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (или yarn.lock)
COPY package*.json ./ 

# Установим зависимости
RUN npm install
RUN apt-get update && apt-get install -y openssl

# Копируем только папку prisma для миграции
COPY prisma ./prisma

COPY . .

# Собираем Next.js приложение
RUN npm run build

# Используем более легкий образ для production
FROM node:18-slim

# Установим рабочую директорию
WORKDIR /app

# Копируем зависимости и собранное приложение
COPY --from=builder /app /app

# Экспонируем порт, на котором будет работать приложение
EXPOSE 3000

# Запускаем Next.js сервер
CMD ["npm", "start"]

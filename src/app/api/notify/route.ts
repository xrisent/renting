import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import axios from 'axios';
import nodemailer from 'nodemailer';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_IDS = process.env.TELEGRAM_CHAT_ID?.split(',') || [];

const EMAIL_FROM = process.env.EMAIL_FROM;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_TO = process.env.EMAIL_TO;

export async function POST(req: NextRequest) {
  try {
    const {
      fullName,
      phone,
      email,
      startDate,
      endDate,
      peopleCount,
      message,
    } = await req.json();

    const text = `
🚗 Новый заказ:
👤 Имя: ${fullName}
📞 Номер: ${phone}
📧 Email: ${email}
📅 С: ${startDate}
📅 До: ${endDate}
👥 Кол-во человек: ${peopleCount}
📝 Сообщение: ${message || 'Нет сообщения'}
    `;

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const telegramPromises = TELEGRAM_CHAT_IDS.map(chatId => {
      return axios.post(telegramUrl, {
        chat_id: chatId.trim(),
        text,
      });
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_FROM,
        pass: EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: 'Новая заявка с формы аренды',
      text,
    };

    const emailPromise = transporter.sendMail(mailOptions);

    await Promise.all([...telegramPromises, emailPromise]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Notification Error:', error);
    return NextResponse.json({ error: 'Failed to send notifications' }, { status: 500 });
  }
}

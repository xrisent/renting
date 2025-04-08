import './globals.scss'
import { Footer } from "@/components/Footer/Footer";
import Header from '@/components/Header/Header';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <title>KHaGaN Auto</title>
        <meta name="description" content="Аренда автомобилей с водителем" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="KHaGaN Auto" />
        <meta name="keywords" content="car rental with driver, rent a car with driver, chauffeur service, private driver, car hire with driver, driver service, taxi service, renting cars with driver, driver included, transport service, аренда авто с водителем, аренда автомобиля с водителем, авто с водителем, машина с водителем, услуги водителя, частный водитель, аренда машины, аренда машины с водителем, транспорт с водителем, айдоочусу менен унаа ижарасы, айдоочусу менен авто ижара, айдоочу кызматтары, жеке айдоочу, унаа ижарасы, такси кызматтары, авто ижара, авто кызматтар, унаа айдоочу менен" />
        
        <link rel="icon" href="/images/logobg.ico" />
      </head>
      <body>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import './globals.css';
import type { Metadata } from 'next';
import Provider from '@/provider/Provider';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/routing';

type LocaleMetadata = {
      title: string;
      description: string;
};

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<LocaleMetadata> {
      const { locale } = params;

      // Define the metadata structure for each locale
      const metadata: Record<string, LocaleMetadata> = {
            en: {
                  title: 'Weed in Barcelona – Map of Cannabis Clubs, Coffeeshops & Weed Cafés',
                  description:
                        'Looking for a legal place to smoke marijuana in Barcelona? Explore our curated map of top cannabis clubs, weed cafes, and coffee shops. Follow our step-by-step guide to join a cannabis club today!',
            },
            de: {
                  title: 'Karte der Cannabis-Clubs & Coffeeshops',
                  description:
                        'Suchst du einen legalen Ort, um in Barcelona Marihuana zu konsumieren? Entdecke unsere Karte der besten Cannabis-Clubs und Coffeeshops und werde noch heute Mitglied.',
            },
            es: {
                  title: 'Mapa de Asociaciones Cannábicas en Barcelona',
                  description:
                        'Descubre lugares legales para fumar marihuana en Barcelona. Consulta nuestro mapa con asociaciones cannábicas para encontrar la más cercana.',
            },
            fr: {
                  title: 'Carte des Cannabis Clubs et Coffeeshops à Barcelone',
                  description:
                        'Vous cherchez un spot légal pour fumer du cannabis à Barcelone ? Découvrez notre carte des meilleurs clubs de cannabis et coffee shops, et suivez notre guide étape par étape pour en visiter un dès aujourd’hui !',
            },
            it: {
                  title: 'Coffee Shop Barcellona – Trova Cannabis Social Club Vicino a Me',
                  description:
                        'Scopri un nuovo modo di vivere il cannabis club di Barcellona, dove un"atmosfera accogliente e autentica si distingue nettamente dai tipici weed coffee shop di Amsterdam".',
            },
      };

      // Return metadata for the requested locale, fallback to 'en' if not found
      return metadata[locale] || metadata.en;
}

export default async function LocaleLayout({
      children,
      params: { locale },
}: Readonly<{
      children: React.ReactNode;
      params: { locale: string };
}>) {
      // Validate that the incoming `locale` parameter is valid
      if (!locales.includes(locale as any)) {
            notFound();
      }

      let messages;
      try {
            messages = (await import(`../../../messages/${locale}.json`)).default;
      } catch (error) {
            // If messages file is not found, fallback to default locale
            try {
                  messages = (await import(`../../../messages/en.json`)).default;
            } catch (error) {
                  notFound();
            }
      }

      return (
            <NextIntlClientProvider messages={messages} locale={locale}>
                  <Provider>{children}</Provider>
            </NextIntlClientProvider>
      );
}

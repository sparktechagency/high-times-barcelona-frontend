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
                  title: 'WCannabis in Barcelona – Karte der Cannabis Clubs und Coffeeshops',
                  description:
                        'Suchst du einen legalen Ort zum Cannabis-Konsum in Barcelona? Entdecke unsere Karte der besten Cannabis-Clubs und folge unserer Anleitung, um noch heute Mitglied zu werden!',
            },
            es: {
                  title: 'Cannabis en Barcelona – Mapa de Clubs de Cannabis y Coffeeshops',
                  description:
                        '¿Buscas un lugar legal para fumar cannabis en Barcelona? Explora nuestro mapa de los mejores clubs de cannabis y sigue nuestra guía para hacerte socio hoy mismo.',
            },
            fr: {
                  title: 'Cannabis à Barcelone – Carte des Clubs de Cannabis et Coffeeshops',
                  description:
                        "Vous cherchez un endroit légal pour fumer du cannabis à Barcelone ? Découvrez notre carte des meilleurs clubs de cannabis et suivez notre guide pour devenir membre aujourd'hui !",
            },
            it: {
                  title: 'Cannabis a Barcellona – Mappa dei Cannabis Club e Coffeeshop',
                  description:
                        'Cerchi un posto legale per fumare cannabis a Barcellona? Esplora la nostra mappa dei migliori cannabis club e segui la nostra guida per diventare membro oggi stesso!',
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

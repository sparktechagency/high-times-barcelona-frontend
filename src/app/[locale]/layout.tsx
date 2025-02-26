import './globals.css';
import type { Metadata } from 'next';
import Provider from '@/provider/Provider';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/routing';

export const metadata: Metadata = {
      title: 'Weed in Barcelona – Map of Cannabis Clubs, Coffeeshops & Weed Cafés',
      description: `Looking for a legal place to smoke marijuana in Barcelona? Explore our curated map of top cannabis clubs, weed cafes, and coffee shops. Follow our step-by-step guide to join a cannabis club today!`,
};

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

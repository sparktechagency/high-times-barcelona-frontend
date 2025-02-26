export const locales = ['en', 'es', 'fr', 'it', 'de'] as const;
export const defaultLocale = 'en' as const;

export const routing = {
      locales,
      defaultLocale,
      // Use the default locale as a prefix in URLs
      prefixDefaultLocale: true,
};

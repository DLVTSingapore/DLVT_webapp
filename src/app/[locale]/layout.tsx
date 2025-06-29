import type { Metadata } from 'next';
// 1. Import PrimeReact CSS
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Choose your theme
import 'primereact/resources/primereact.min.css'; // Core CSS
import 'primeicons/primeicons.css'; // Icons

// Optional: PrimeReact Context Provider (improves performance, needed for some features like ripple)
import { PrimeReactProvider } from 'primereact/api';
import { Playfair_Display, Lato } from 'next/font/google';
import '../globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'], // Specify the character sets you need
  variable: '--font-playfair-display', // Define a CSS variable for Tailwind
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the font weights you'll use
  variable: '--font-lato', // Define a CSS variable for Tailwind
});

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import Header from '@/sections/Header';
import Footer from '@/sections/Footer';

export const metadata: Metadata = {
  title: 'Dennis Lee Ving Tsun | Singapore',
  description: 'Traditional Ip Ching Lineage',
  icons: {
    icon: '/dlvt_logo.png',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${lato.variable} font-body antialiased md:mx-16 lg:mx-40`}
      >
        <NextIntlClientProvider>
          <PrimeReactProvider>
            <Header />
            {children}
            <Footer />
          </PrimeReactProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

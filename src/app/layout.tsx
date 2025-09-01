import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { Figtree } from 'next/font/google';
import Header from '@/components/Header';
import { theme } from './theme';

import './globals.css';

const figtree = Figtree({ subsets: ['latin'] });

export const metadata = {
  title: 'Landing Page GIP',
  description: 'Landing Page para Gestão do Investimento Público do Piauí.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" {...mantineHtmlProps} className={figtree.className}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}

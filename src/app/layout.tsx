// src/app/layout.tsx
import { Figtree } from 'next/font/google';
import { MantineProviders } from '../MantineProviders'; // Importe seu provedor personalizado
import '@mantine/core/styles.css';
import './globals.css';
import { HeroSection } from '@/components/HeroSection';

const figtree = Figtree({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={figtree.className}>
      <body>
        <MantineProviders>
          <HeroSection />
          {children}
        </MantineProviders>
      </body>
    </html>
  );
}
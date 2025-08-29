// src/styles/MantineProviders.tsx
'use client';

import { createTheme, MantineProvider, MantineColorsTuple } from '@mantine/core';
import { Figtree } from 'next/font/google';

// 1. Crie a instância da fonte
const figtree = Figtree({ subsets: ['latin'] });

// 2. Defina suas cores
const primaryColors: MantineColorsTuple = [
  '#EDF8FD',
  '#DBEDF5',
  '#B2DAED',
  '#86C7E5',
  '#66B6DF',
  '#3992C2',
  '#15719A',
  '#0E4F6C',
  '#003F5B',
  '#063246',
];

// 3. Crie o tema completo aqui dentro
const theme = createTheme({
  fontFamily: figtree.style.fontFamily,
  colors: {
    'minha-cor-primaria': primaryColors,
  },
});

// 4. Use o tema no Provider
export function MantineProviders({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  );
}
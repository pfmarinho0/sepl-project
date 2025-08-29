import { createTheme, MantineProvider } from '@mantine/core';

// A paleta primária do seu guia
const primaryColors = [
  '#EDF8FD', // primary-50
  '#DBEDF5', // primary-100
  '#B2DAED', // primary-200
  '#86C7E5', // primary-300
  '#66B6DF', // primary-400
  '#3992C2', // primary-500
  '#15719A', // primary-600
  '#0E4F6C', // primary-700
  '#003F5B', // primary-800
  '#063246', // primary-900
] as const;

export const theme = createTheme({
  // Adicionando a paleta de cores
  colors: {
    'minha-cor-primaria': primaryColors,
  },

  // Definindo a fonte
  fontFamily: 'Figtree, sans-serif',

  // Configurando os breakpoints
  breakpoints: {
    xs: '320px',
    sm: '632px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },

  // Espaçamentos. Você pode usar os valores do guia
  // Ou usar a forma "t-shirt sizing" (xs, sm, md, lg, xl) que o Mantine já tem
  // No seu guia, as seções têm 20px (xs, sm) e 32px (md)
  spacing: {
    'space-5': '20px',
    'space-8': '32px',
    // ... adicione outros espaçamentos conforme a necessidade
  },

  // Configurações de tipografia para os componentes do Mantine
  headings: {
    fontFamily: 'Figtree, sans-serif',
    sizes: {
      h1: { fontSize: '64px', fontWeight: 'bold' },
      h2: { fontSize: '36px', fontWeight: 'bold' },
      // ... configure os outros headings
    },
  },
});
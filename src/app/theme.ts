import { createTheme, MantineColorsTuple } from '@mantine/core';

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

const orangeColor = [
  '#fffbeb',
  '#fef3c7',
  '#fde68a',
  '#fcd34d',
  '#fbbf24',
  '#f59e0b',
  '#d97706',
  '#b45309',
  '#92400e',
  '#78350f',
] as const;

const neutralEmphasis = ['#18181B', '#18181B', '#18181B', '#18181B', '#18181B', '#18181B', '#18181B', '#18181B', '#18181B', '#18181B'] as const;
const neutralDefault = ['#52525B', '#52525B', '#52525B', '#52525B', '#52525B', '#52525B', '#52525B', '#52525B', '#52525B', '#52525B'] as const;
const neutralMuted = ['#A1A1AA', '#A1A1AA', '#A1A1AA', '#A1A1AA', '#A1A1AA', '#A1A1AA', '#A1A1AA', '#A1A1AA', '#A1A1AA', '#A1A1AA'] as const;

export const theme = createTheme({
  colors: {
    'minha-cor-primaria': primaryColors as unknown as MantineColorsTuple,
    'laranja': orangeColor as unknown as MantineColorsTuple,
    'emphasis': neutralEmphasis as unknown as MantineColorsTuple,
    'default': neutralDefault as unknown as MantineColorsTuple,
    'muted': neutralMuted as unknown as MantineColorsTuple,
  },

  fontFamily: 'Figtree, sans-serif',

  breakpoints: {
    xs: '320px',
    sm: '632px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },

  spacing: {
    xs: '20px',
    sm: '32px',
    md: '48px',
    lg: '64px',
    xl: '80px',
  },
  
  headings: {
    fontFamily: 'Figtree, sans-serif',
    sizes: {
      h1: {
        fontWeight: '700',
        lineHeight: '120%',
      },
      h2: {
        fontWeight: '700',
        lineHeight: '120%',
      },
      h3: {
        fontWeight: '500',
        lineHeight: '120%',
      },
    },
  },
});

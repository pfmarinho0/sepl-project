import { Box, Title, Text, Button, Group } from '@mantine/core';

export function Hero() {
  return (
    <Box w="100%" className='h-screen flex items-center justify-center px-5 sm:px-5 md:px-8 lg:px-16'>
      <Box className='h-auto w-full max-w-[1120px] flex flex-col items-center gap-8'>
        <Box className='flex flex-col'>
          <Title
            order={1}
            c="emphasis"
            fw="bold"
            lh="120%"
            className="text-center"
            fz={{ base: '32px', sm: '36px', lg: '64px' }}
          >
            Investimento público
          </Title>
          <Title
            order={2}
            c="minha-cor-primaria.6"
            fw="bold"
            lh="120%"
            className="text-center"
            fz={{ base: '32px', sm: '36px', lg: '64px' }}
          >
            que Transforma o Piauí
          </Title>
        </Box>
        <Text
          c="default"
          fw={500}
          lh="140%"
          maw={{ base: '100%', md: '50%' }}
          className='text-center text-lg md:text-xl'>
          O GIP é a metodologia que garante que cada investimento realizado pelo Estado gere desenvolvimento, qualidade de vida e mais oportunidades para a população.
        </Text>
        <Group gap="sm" className="flex-col sm:flex-row">
          <Button
            className="text-base sm:text-lg"
            color="minha-cor-primaria.6"
            variant="filled"
          >
            Conheça as cinco Etapas
          </Button>
          <Button
            className="text-base sm:text-lg"
            color="minha-cor-primaria.6"
            variant="outline"
          >
            Baixar Guia Completo
          </Button>
        </Group>
      </Box>
    </Box>
  );
}

import { Box, Title, Text, Button, Group } from '@mantine/core';

export function Hero() {
  return (
    <Box className='bg-[#FFFF] w-screen xs:max-w-[631] xs:min-w-[320px] sm:max-w-[767px] sm:min-w-[632px] md:max-w-[1023px] md:min-w-[768px] lg:max-w-[1279px] lg:min-w-[1024px] xl:min-w-[1280px] xs:py-[48px] sm:py-[48px] md:py-[48px] lg:py-[80px] xl:py-[80px] flex items-center justify-center justify-self-center-safe '>
      <Box className='xs:min-w-[280px] sm:min-w-[592px] md:min-w-[704px] lg:min-w-[896px] xl:w-[1120px] flex flex-col items-center gap-8'>
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

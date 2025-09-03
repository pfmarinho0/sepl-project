import { Box, Title, Text, Image } from '@mantine/core';

export function About() {
  return (
    <Box className='bg-[#FFFF] xs:max-w-[631] xs:min-w-[320px] sm:max-w-[767px] sm:min-w-[632px] md:max-w-[1023px] md:min-w-[768px] lg:max-w-[1279px] lg:min-w-[1024px] xl:min-w-[1280px] xs:pt-[64px] sm:pt-[64px] md:pt-[96px] lg:pt-[128px] xl:pt-[128px] flex items-center justify-center justify-self-center-safe px-5 lg:py-50px sm:px-5 md:px-8 lg:px-16'>
      <Box className="xs:min-w-[280px] sm:min-w-[592px] md:min-w-[704px] lg:min-w-[896px] xl:w-[1120px] flex flex-col md:flex-row justify-between items-center gap-12">
        <Box h={{ base: 'full', md: 536 }} className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={'/gip.jpg'}
            alt='Pessoas em uma reunião de planejamento'
            w="100%"
            h="auto"
            radius="md"
          />
        </Box>
        <Box h={{ base: 'auto', md: 536 }} className="w-full md:w-1/2 flex flex-col justify-center">
          <Box className='bg-[#EAB30826] py-1 px-3 self-start rounded-md'>
            <Text c="#A16207" fw={500} fz="sm">
              sobre
            </Text>
          </Box>
          <Title
            order={1}
            c="emphasis"
            fw="bold"
            mt="xs"
            lh="120%"
            fz={{ base: '28px', md: '40px', lg: '48px' }}
          >
            O que é o GIP?
          </Title>
          <Box maw="536">
            <Text c="default" mt="sm" fz={{ base: 'md', lg: 'lg' }} lh="120%">
              <strong>A Gestão do Investimento Público (GIP)</strong> é um modelo inovador adotado pelo Governo do Piauí para <strong>aumentar a eficiência, a transparência e a efetividade</strong> dos investimentos estaduais.
            </Text>
            <Text c="default" mt="xs" fz={{ base: 'md', lg: 'lg' }} lh="150%">
              Com base nas melhores práticas nacionais e internacionais, o GIP organiza os projetos em um ciclo de 5 etapas, assegurando que os recursos públicos sejam aplicados de forma estratégica e sustentável.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

import { Box, Title, Text, Image } from '@mantine/core';

export function About() {
  return (
    <Box maw="100%" id="site-seplan" className="flex justify-center items-center bg-[#FFFF] px-5 sm:px-5 md:px-8 lg:px-16 py-8 md:py-12 lg:py-20">
      <Box w="80%" className="flex flex-col md:flex-row justify-between items-center gap-12">
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

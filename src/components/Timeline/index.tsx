// src/components/Timeline.tsx

import { Box, Title, Text, Image } from '@mantine/core';

export function Timeline() {
  return (
    <Box
      mah="100vh"
      id="dialogos"
      className="h-screen bg-[FFFF] flex justify-center items-center"
    >
      <Box
        w="80%"
        mih="80%"
        mah="80%"
        miw="80%"
        maw="80%"
        className='flex gap-11'
      >
        <Box mih="100%" className='flex-1 flex flex-col justify-between'>
          {/*Coluna esquerda*/}
          <Box className='bg-[#EAB30826] inline-block py-1 px-3 self-start rounded-md'>
            <Text c="#A16207" fw={500} fz="xs">
              as 5 etapas
            </Text>
          </Box>
          <Box>
            <Title>
              O Caminho para o
            </Title>
            <Title
              c="minha-cor-primaria.6"
              lh="120%"
            >
              Investimento de Impacto
            </Title>
          </Box>
          <Box>
            <Text c="default" fz="lg" lh="150%">
              O modelo GIP organiza o ciclo de vida dos projetos em 5 etapas estratégicas, baseadas nas melhores práticas nacionais e internacionais.
            </Text>
          </Box>
          <Box>
            <Image
              src={'/invest.jpg'}
              alt='Pessoas em uma reunião de planejamento'
              w="100%"
              h="auto"
              radius="md"
            />
          </Box>
        </Box>
        <Box
          className='flex-1 flex flex-col gap-4'
        >
          <Box bg="minha-cor-primaria.0" className='flex-1 rounded-lg shadow-sm flex flex-col'>
            <Box p="xs" w="95%" maw="95%">
                <Title px="xs" order={3} c="minha-cor-primaria.6">
                    Ideação e Concepção
                </Title>
                <Text fz='md' px="xs" mt={8} c="default">
                    Onde as grandes ideias nascem e as propostas de projeto são elaboradas e aninhadas ás necessidades do Piauí.
                </Text>
            </Box>
          </Box>
          
          <Box bg="minha-cor-primaria.0" className='flex-1 rounded-lg shadow-sm flex flex-col'>
            <Box p="xs" w="95%" maw="95%">
                <Title px="xs" order={3} c="minha-cor-primaria.6">
                    Avaliação Prévia
                </Title>
                <Text fz='md' px="xs" mt={8} c="default">
                    Análise técnica e de viabilidade para garantir que apenas os projetos sólidos avancem, com base em sua complexidade e valor.
                </Text>
            </Box>
          </Box>
          
          <Box bg="minha-cor-primaria.0" className='flex-1 rounded-lg shadow-sm flex flex-col'>
            <Box p="xs" w="95%" maw="95%">
                <Title px="xs" order={3} c="minha-cor-primaria.6">
                    Priorização e Seleção
                </Title>
                <Text fz='md' px="xs" mt={8} c="default">
                    Os projetos priorizados são hierarquizados com base no impacto estratégico e nos riscos, para otimizar a alocação de orçamento do estado.
                </Text>
            </Box>
          </Box>
          
          <Box bg="minha-cor-primaria.0" className='flex-1 rounded-lg shadow-sm flex flex-col'>
            <Box p="xs" w="95%" maw="95%">
                <Title px="xs" order={3} c="minha-cor-primaria.6">
                    Execução do Investimento
                </Title>
                <Text fz='md' px="xs" mt={8} c="default">
                    Implementação e monitoramento do projeto aprovado, com registro de informações para garantir a transparência do aprendizado.
                </Text>
            </Box>
          </Box>
          
          <Box bg="minha-cor-primaria.0" className='flex-1 rounded-lg shadow-sm flex flex-col'>
            <Box p="xs" w="95%" maw="95%">
                <Title px="xs" order={3} c="minha-cor-primaria.6">
                    Avaliação Ex Post
                </Title>
                <Text fz='md' px="xs" mt={8} c="default">
                    Após a entrega, os resultados são comparados com o planejado, gerando lições que aprimoram todos os futuros investimentos.
                </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
// src/components/Timeline.tsx

import { Box, Title, Text, Image } from '@mantine/core';

export function Timeline() {
  return (
    // Container Geral (Wrapper da Seção)
    <Box
      className="w-full min-h-screen flex items-center justify-center justify-self-center-safe px-5 sm:px-5 md:px-8"
    >
      <Box
        className="w-full
          sm:max-w-screen-sm 
          md:max-w-screen-md
          lg:max-w-screen-lg
          xl:max-w-screen-xl flex flex-col lg:flex-row gap-8 lg:gap-12"
      >
        {/* Coluna Esquerda (Conteúdo Introdutório) */}
        <Box
          // Em desktop, esta coluna ficará "presa" no topo.
          // O gap garante um espaçamento consistente entre os elementos.
          className="flex-1 border-none flex flex-col justify-start gap-8 lg:max-h-[85vh] lg:top-8"
          style={{ alignSelf: 'flex-start' }} // Garante que a coluna não estique verticalmente
        >
          <Box className="bg-[#EAB30826] inline-block py-1 px-3 self-start rounded-md">
            <Text c="#A16207" fw={500} fz="xs">
              AS 5 ETAPAS
            </Text>
          </Box>
          <Box>
            <Title order={1}>O Caminho para o</Title>
            <Title
              order={1}
              c="minha-cor-primaria.6"
              lh="120%"
            >
              Investimento de Impacto
            </Title>
          </Box>
          <Box>
            <Text c="default" fz="lg" lh="150%">
              O modelo GIP organiza o ciclo de vida dos projetos em 5 etapas
              estratégicas, baseadas nas melhores práticas nacionais e
              internacionais.
            </Text>
          </Box>
          <Box>
            <Image
              src="/invest.jpg"
              alt="Pessoas em uma reunião de planejamento"
              w="100%"
              h="auto"
              radius="md"
            />
          </Box>
        </Box>

        {/* Coluna Direita (Lista de Etapas) */}
        <Box
          // Em desktop, limitamos a altura e adicionamos scroll se necessário.
          className="flex-1 border-none flex flex-col gap-5 lg:max-h-[85vh]"
        >
          {/* Card 1 */}
          <Box
            bg="minha-cor-primaria.0"
            className="rounded-lg shadow-smp p-4"
          >
            <Title order={3} c="minha-cor-primaria.6">
              Ideação e Concepção
            </Title>
            <Text fz="md" mt={8} c="default">
              Onde as grandes ideias nascem e as propostas de projeto são
              elaboradas e aninhadas ás necessidades do Piauí.
            </Text>
          </Box>

          {/* Card 2 */}
          <Box
            bg="minha-cor-primaria.0"
            className="rounded-lg shadow-smp p-4"
          >
            <Title order={3} c="minha-cor-primaria.6">
              Avaliação Prévia
            </Title>
            <Text fz="md" mt={8} c="default">
              Análise técnica e de viabilidade para garantir que apenas os
              projetos sólidos avancem, com base em sua complexidade e valor.
            </Text>
          </Box>

          {/* Card 3 */}
          <Box
            bg="minha-cor-primaria.0"
            className="rounded-lg shadow-smp p-4"
          >
            <Title order={3} c="minha-cor-primaria.6">
              Priorização e Seleção
            </Title>
            <Text fz="md" mt={8} c="default">
              Os projetos priorizados são hierarquizados com base no impacto
              estratégico e nos riscos, para otimizar a alocação de orçamento
              do estado.
            </Text>
          </Box>

          {/* Cardx-4 py-2 */}
          <Box
            bg="minha-cor-primaria.0"
            className="rounded-lg shadow-smp p-4"
          >
            <Title order={3} c="minha-cor-primaria.6">
              Execução do Investimento
            </Title>
            <Text fz="md" mt={8} c="default">
              Implementação e monitoramento do projeto aprovado, com registro
              de informações para garantir a transparência do aprendizado.
            </Text>
          </Box>

          {/* Card 5 */}
          <Box
            bg="minha-cor-primaria.0"
            className="rounded-lg shadow-smp p-4"
          >
            <Title order={3} c="minha-cor-primaria.6">
              Avaliação Ex Post
            </Title>
            <Text fz="md" mt={8} c="default">
              Após a entrega, os resultados são comparados com o planejado,
              gerando lições que aprimoram todos os futuros investimentos.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
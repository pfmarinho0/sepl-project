// src/components/Timeline.tsx

import { Box, Title, Text, Image } from '@mantine/core';

export function Timeline() {
  return (
    // Container Geral (Wrapper da Seção)
    <Box
      className="w-100% xs:min-w-[320px] xs:max-w-[631px] sm:min-w-[632px] sm:max-w-[767px] md:min-w-[768px] md:max-w-[1024px] lg:min-w-[1024px] lg:max-w-[1279px] xl:min-w-[1280px] xs:py-[32px] sm:py-[32px] md:py-[48px] lg:py-[80px] xl:py-[80px] flex items-center justify-center justify-self-center-safe px-5 sm:px-5 md:px-8"
    >
      {/* Container Principal do Conteúdo */}
      <Box
        // Mobile: Layout em coluna, largura total.
        // Desktop: Layout em linha, largura máxima para não esticar demais.
        className="xs:min-w-[280px] xs:max-w-[591px] sm:min-w-[592px] sm:max-w-[727px] md:min-w-[704px] md:max-w-[959px] lg:min-w-[896px] lg:max-w-[1120px] xl:w-[1120px] flex flex-col lg:flex-row gap-8 lg:gap-12"
      >
        {/* Coluna Esquerda (Conteúdo Introdutório) */}
        <Box
          // Em desktop, esta coluna ficará "presa" no topo.
          // O gap garante um espaçamento consistente entre os elementos.
          className="flex-1 border-none flex flex-col justify-start gap-8 lg:sticky lg:max-h-[85vh] lg:top-8"
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
          className="flex-1 border-none flex flex-col gap-4 lg:max-h-[85vh]"
        >
          {/* Card 1 */}
          <Box
            bg="minha-cor-primaria.0"
            className="rounded-lg shadow-sm p-4"
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
            className="rounded-lg shadow-sm p-4"
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
            className="rounded-lg shadow-sm p-4"
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

          {/* Card 4 */}
          <Box
            bg="minha-cor-primaria.0"
            className="rounded-lg shadow-sm p-4"
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
            className="rounded-lg shadow-sm p-4"
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
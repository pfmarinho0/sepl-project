import { Box, Title, Text } from '@mantine/core';

export function Governance() {
  return (
    // CONTÊINER PRINCIPAL (TELA TODA)
    // Responsável pelo fundo, altura e por centralizar o conteúdo.
    // O padding (p-4) garante um respiro em telas pequenas.
    <Box
      id="governance"
      className="w-full min-h-screen flex justify-center items-center p-4 bg-gradient-to-t from-[#063246] to-[#15719A]"
    >
      <Box
        className={`
          w-full
          sm:max-w-screen-sm 
          md:max-w-screen-md
          lg:max-w-screen-lg
          xl:max-w-screen-xl

          flex flex-col md:flex-row items-start gap-12
        `}
      >
        {/* COLUNA ESQUERDA */}
        <Box className="flex-1 flex flex-col gap-4">
          <Box className="bg-[#EAB30826] inline-block py-1 px-3 self-start rounded-md">
            <Text c="laranja.3" fw={500} fz="xs">
              GOVERNÂNCIA
            </Text>
          </Box>
          <Box>
            <Title
              fz={{ base: '32px', sm: '36px', lg: '56px' }}
              c="minha-cor-primaria.0"
            >
              Decisões Inteligentes
            </Title>
            <Title
              fz={{ base: '32px', sm: '36px', lg: '56px' }}
              c="minha-cor-primaria.0"
              lh="120%"
            >
              Estrutura Robusta
            </Title>
          </Box>
          <Box>
            <Text c="#d1d5db" fz={{ base: 'md', lg: 'lg' }} lh="150%">
              O sucesso da GIP depende de uma governância bem definida, que
              garante avaliações técnicas, imparciais e alinhadas à capacidade
              fiscal do estado.
            </Text>
          </Box>
        </Box>

        {/* COLUNA DIREITA */}
        <Box className="flex-1 flex flex-col gap-6">
          {/* ... cards da direita ... */}
          <Box bg="minha-cor-primaria.6" className="rounded-lg shadow-sm p-4">
            <Title fw="500" order={4} c="minha-cor-primaria.0">
              Grupo Técnico de Investimento (GTI)
            </Title>
            <Text fz="md" mt={8} c="minha-cor-primaria.0">
              Estuda a viabilidade orçamentária, avaliando a sustentabilidade
              financeira dos projetos.
            </Text>
          </Box>
          <Box bg="minha-cor-primaria.6" className="rounded-lg shadow-sm p-4">
            <Title fw="500" order={4} c="minha-cor-primaria.0">
              Grupo Técnico de Investimento (GTI)
            </Title>
            <Text fz="md" mt={8} c="minha-cor-primaria.0">
              Estuda a viabilidade orçamentária, avaliando a sustentabilidade
              financeira dos projetos.
            </Text>
          </Box>
          <Box bg="minha-cor-primaria.6" className="rounded-lg shadow-sm p-4">
            <Title fw="500" order={4} c="minha-cor-primaria.0">
              Grupo Técnico de Investimento (GTI)
            </Title>
            <Text fz="md" mt={8} c="minha-cor-primaria.0">
              Estuda a viabilidade orçamentária, avaliando a sustentabilidade
              financeira dos projetos.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
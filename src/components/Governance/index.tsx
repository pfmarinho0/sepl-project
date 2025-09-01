import { Box, Title, Text } from '@mantine/core';

export function Governance() {
  return (
    <Box
      mah="100vh"
      mih="508"
      py="128"
      id="governance"      
      className="flex justify-center items-center bg-gradient-to-t from-[#063246] to-[#15719A]"
      style={{
        height: '100vh', // Exemplo: altura total da tela
        width: '100%',
      }}
    >
      <Box
        mih="80%"
        mah="80%"
        miw="80%"
        maw="80%"
        className='flex justify-center items-center gap-11'
      >
        <Box mih="100%" className='flex-1 self-start flex flex-col justify-between'>
          {/* ... Seu conteúdo da coluna esquerda aqui ... */}
          <Box className='flex-1'>
            <Box mb="xs" className='bg-[#EAB30826] inline-block py-1 px-3 self-start rounded-md'>
                <Text c="laranja.3" fw={500} fz="xs">
                    governância
                </Text>
            </Box>
            <Box mb="xs">
                <Title 
                    fz={{ base: '32px', sm: '36px', md: '36px', lg: '64px' }}
                    c="minha-cor-primaria.0">
                        Decisões Inteligentes
                </Title>
                <Title
                    fz={{ base: '32px', sm: '36px', md: '36px', lg: '64px' }}
                    c="minha-cor-primaria.0"
                    lh="120%"
                >
                    Estrutura Robusta
                </Title>
            </Box>
            <Box>
                <Text c="muted" fz="xl" lh="140%">
                    O sucesso da GIP depende de uma governância bem definida, que garante avaliações técnicas, imparciais e alinhadas á capacidade fiscal do estado.
                </Text>
            </Box>
        </Box>
        </Box>
        <Box
          className='flex-1 self-start flex flex-col gap-6'
        >
          <Box bg="minha-cor-primaria.6" className='flex-1 rounded-lg shadow-sm flex flex-col'>
            <Box mih="133px" p="xs" w="95%" maw="95%">
                <Title fw="500" px="xs" order={3} c="minha-cor-primaria.0">
                    Grupo Técnico de Investimento (GTI)
                </Title>
                <Text fz='md' px="xs" mt={8} c="minha-cor-primaria.0">
                    Estuda a viabilidade orçamentária, avaliando a sustentabilidade financeira dos projetos.
                </Text>
            </Box>
          </Box>
          <Box bg="minha-cor-primaria.6" className='flex-1 rounded-lg shadow-sm flex flex-col'>
            <Box mih="133px" p="xs" w="95%" maw="95%">
                <Title fw="500" px="xs" order={3} c="minha-cor-primaria.0">
                    Grupo Técnico de Gestão Fiscal (GTF)
                </Title>
                <Text fz='md' px="xs" mt={8} c="minha-cor-primaria.0">
                    Estuda a viabilidade orçamentária, avaliando a sustentabilidade financeira dos projetos.
                </Text>
            </Box>
          </Box>
          <Box bg="minha-cor-primaria.6" className='flex-1 rounded-lg shadow-sm flex flex-col'>
            <Box mih="133px" p="xs" w="95%" maw="95%">
                <Title fw="500" px="xs" order={3} c="minha-cor-primaria.0">
                    Órgão de Governança (CGRF)
                </Title>
                <Text fz='md' px="xs" mt={8} c="minha-cor-primaria.0">
                    Delibera e decide, avaliando os pareceres técnicos e fiscais para aprovação final junto ao Governador.
                </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
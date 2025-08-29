// src/components/HeroSection.tsx (lembre-se de renomear o arquivo)
import { Box, Group, Text, UnstyledButton } from '@mantine/core';
import Image from "next/image";
import { IconLock } from '@tabler/icons-react';

export function HeroSection() {
    return (
        <Box className="w-screen h-[160px] text-[16px]">
            {/* Primeiro Cabeçalho */}
            <Box className="w-screen h-[50%] flex justify-between items-center px-20 bg-[#15719A]">
                <Group gap="lg">
                    {/* Links de âncora */}
                    <Text component="a" href="#site-seplan" c="minha-cor-primaria.0" className="cursor-pointer">Site da Seplan</Text>
                    <Text component="a" href="#dialogos" c="minha-cor-primaria.0" className="cursor-pointer">Diálogos</Text>
                    <Text component="a" href="#opa" c="minha-cor-primaria.0" className="cursor-pointer">OPA</Text>
                    <Text component="a" href="#dadospi" c="minha-cor-primaria.0" className="cursor-pointer">dadosPI</Text>
                    <Text component="a" href="#pactos" c="minha-cor-primaria.0" className="cursor-pointer">Pactos pelo Piauí</Text>
                    <Text component="a" href="#retribuir" c="minha-cor-primaria.0" className="cursor-pointer">Retribuir</Text>
                    <Text component="a" href="#psi" c="minha-cor-primaria.0" className="cursor-pointer">PSI</Text>
                    <Text component="a" href="#pilares" c="minha-cor-primaria.0" className="cursor-pointer">Pilares</Text>
                </Group>
                <Image 
                    src={'/SEPLAN.svg'}
                    alt="Logo Seplan"
                    width={178}
                    height={59}
                />
            </Box>
            
            {/* Segundo Cabeçalho */}
            <Box className='w-screen h-[50%] border-b border-gray-300 flex justify-between items-center px-20 bg-white'>
                <Image
                    src={'/Projetos.svg'}
                    alt='Logo GIP Piauí'
                    width={131}
                    height={51}
                />
                <Group gap="xl"> {/* Aumentei o gap para dar mais espaço */}
                    <Text size="sm">Sobre</Text>
                    <Text size="sm">Etapas</Text>
                    <Text size="sm">Governância</Text>
                    <Text size="sm">Classificação</Text>

                    {/* Botão de Acesso Exclusivo Refatorado */}
                    <UnstyledButton bg="minha-cor-primaria.6" className='flex items-center h-12 rounded-md px-4'>
                        <Group gap="xs">
                            <Box className='pl-2'>
                                <IconLock size={20} color='white'/>
                            </Box>
                            <Box className='pr-2'>
                                <Text size="xs" c="white">acesso exclusivo</Text>
                                <Text size="sm" c="white" fw={700}>Servidor</Text>
                            </Box>
                        </Group>
                    </UnstyledButton>
                </Group>
            </Box>
        </Box>
    );
}
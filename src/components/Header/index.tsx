"use client";

import { Box, Group, Text, UnstyledButton } from '@mantine/core';
import Image from "next/image";
import { IconLock } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';

export default function Header() {
    const [opened, { toggle, close }] = useDisclosure(false);
    return (
        <Box className="w-screen h-[160px] text-[16px]">
            {/* Primeiro Cabeçalho */}
            <Box px={{ base: 'sm', md: 'md', lg: 'xl' }} w="100%" h="50%" className=" flex justify-between items-center bg-[#15719A]">
                <Group className="flex-col md:flex-row">
                    {/* Links de âncora */}
                    <Text c="minha-cor-primaria.0" className="cursor-pointer">Site da Seplan</Text>
                    <Text c="minha-cor-primaria.0" className="cursor-pointer">Diálogos</Text>
                    <Text c="minha-cor-primaria.0" className="cursor-pointer">OPA</Text>
                    <Text c="minha-cor-primaria.0" className="cursor-pointer">dadosPI</Text>
                    <Text c="minha-cor-primaria.0" className="cursor-pointer">Pactos pelo Piauí</Text>
                    <Text c="minha-cor-primaria.0" className="cursor-pointer">Retribuir</Text>
                    <Text c="minha-cor-primaria.0" className="cursor-pointer">PSI</Text>
                    <Text c="minha-cor-primaria.0" className="cursor-pointer">Pilares</Text>
                </Group>
                <Image 
                    src={'/SEPLAN.svg'}
                    alt="Logo Seplan"
                    width={178}
                    height={59}
                />
            </Box>
            
            {/* Segundo Cabeçalho */}
            <Box px={{ base: 'sm', md: 'md', lg: 'xl' }} w="100%" h="50%" className='border-b border-gray-300 flex justify-between items-center bg-white'>
                <Box>
                    <Image
                    src={'/Projetos.svg'}
                    alt='Logo GIP Piauí'
                    width={131}
                    height={51}
                    />
                </Box>
                <Group className="flex-col sm:flex-row">
                    <Text 
                    size="sm"
                    fw="500"
                    className="cursor-pointer"
                    c="default"
                    >Sobre</Text>
                    <Text c="default" size="sm" className="cursor-pointer">Etapas</Text>
                    <Text c="default" size="sm" className="cursor-pointer">Governância</Text>
                    <Text c="default" size="sm" className="cursor-pointer">Classificação</Text>
                    <UnstyledButton bg="minha-cor-primaria.6" className='flex items-center h-12 rounded-md'>
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

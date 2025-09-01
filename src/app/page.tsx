import { Hero } from '@/components/Hero';
import { ColorBar } from '@/components/ColorBar';
import { About } from '@/components/AboutGip';
import { Timeline } from '@/components/Timeline';
import { Governance } from '@/components/Governance';
import { Box, Title } from '@mantine/core';

// seções genéricas para evitar loop de codigo
function Section({ id, title, bgColor }: { id: string; title: string; bgColor: string; }) {
  return (
    <Box id={id} className={`h-screen ${bgColor} flex justify-center items-center`}>
      <Title>{title}</Title>
    </Box>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ColorBar />
      <About />
      <Timeline />
      <Governance />
    </>
  );
}

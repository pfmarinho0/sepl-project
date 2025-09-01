import { Flex, Box } from '@mantine/core';

export function ColorBar() {
  return (
    <Flex
      h={10}
      w="100%"
      style={{ overflow: 'hidden' }}
    >
      <Box w="33.33%" h="100%" bg="#FDB913" />
      <Box w="33.33%" h="100%" bg="#EF4123" />
      <Box w="33.33%" h="100%" bg="#007932" />
    </Flex>
  );
}
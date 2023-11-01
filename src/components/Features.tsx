// components/Features.js

import { Box, Heading, SimpleGrid, Icon, Text } from "@chakra-ui/react";
import { FaLock, FaRocket, FaRegClone } from 'react-icons/fa'; // Using FontAwesome icons as an example

export const Features = () => {
  return (
    <Box py={12}>
      <Heading as="h3" size="lg" textAlign="center" mb={6}>
        Key Features
      </Heading>

      <SimpleGrid columns={3} spacing={10} align="center">
        <Box textAlign="center">
          <Icon as={FaLock} boxSize={10} mb={5} />
          <Heading as="h4" size="md" mb={2}>
            Privacy
          </Heading>
          <Text>Zero-knowledge proofs ensure your data remains private and secure.</Text>
        </Box>

        <Box textAlign="center">
          <Icon as={FaRocket} boxSize={10} mb={5} />
          <Heading as="h4" size="md" mb={2}>
            Efficiency
          </Heading>
          <Text>Optimized models provide lightning-fast results without compromising on quality.</Text>
        </Box>

        <Box textAlign="center">
          <Icon as={FaRegClone} boxSize={10} mb={5} />
          <Heading as="h4" size="md" mb={2}>
            Extensive Library
          </Heading>
          <Text>Choose from a diverse range of pre-verified models to fit your needs.</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Features;

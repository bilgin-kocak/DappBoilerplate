// components/Testimonials.js

import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export const Testimonials = () => {
  // Mock data for testimonials
  const testimonialsData = [
    {
      name: "Alice",
      feedback: "zkHug is a game-changer in ensuring data privacy in ML!",
    },
    {
      name: "Bob",
      feedback: "The extensive model library saved us weeks of work.",
    },
    {
      name: "Charlie",
      feedback: "With zkHug, I'm confident that our data remains confidential.",
    },
  ];

  return (
    <Box py={12} bg="gray.50">
      <Heading as="h3" size="lg" textAlign="center" mb={6}>
        What Our Users Say
      </Heading>

      <SimpleGrid columns={3} spacing={10}>
        {testimonialsData.map((testimonial, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" rounded="md">
            <Text mt={2} fontSize="xl">
              "{testimonial.feedback}"
            </Text>
            <Text mt={4} align="right">
              - {testimonial.name}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Testimonials;

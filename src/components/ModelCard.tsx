// components/ModelCard.js

import {
  Box,
  Image,
  Badge,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

import { StarIcon } from '@chakra-ui/icons';

export interface Model {
  name: string;
  imageUrl: string;
  description: string;
  rating: number;
  reviewCount: number;
  tags: string[];
}

const ModelCard = ({ model }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Image src={model.imageUrl} alt={`Picture of ${model.name}`} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {model.tags.join(' / ')}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {model.name}
        </Box>

        <Box>
          {model.description}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < model.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {model.reviewCount} reviews
          </Box>
        </Box>

        <Stack direction="row" spacing={4} align="center" mt={3}>
          <Button variant="solid" colorScheme="teal" size="sm">
            Learn More
          </Button>
          <Button variant="outline" colorScheme="teal" size="sm">
            Add to Cart
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ModelCard;

// You'll also need to import StarIcon from 'react-icons' if you're going to use it for the rating,
// or you can use any other icon or just text for the rating.

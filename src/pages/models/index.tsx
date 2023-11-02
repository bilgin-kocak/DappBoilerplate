// pages/models/index.js

import { SimpleGrid, Box } from '@chakra-ui/react';
import ModelCard from '../../components/ModelCard';
import { modelsData } from '../../data/model'; // adjust the path according to where you place your models data

export default function ModelListing() {
  return (
    <Box p={8}>
      <SimpleGrid minChildWidth="320px" spacing="40px">
        {modelsData.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

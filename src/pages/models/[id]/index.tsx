// pages/models/[id].js
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Image,
  Badge,
  Stack,
  Heading,
  Textarea,
  useToast,
  SimpleGrid,
  HStack,
  Tag,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
  Divider,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ExternalLinkIcon, CheckCircleIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { modelsData } from '../../../data/model';

const ModelDetail = () => {
  const router = useRouter();
  const { id } = router.query; // This captures the ID from the URL.

  const [modelData, setModelData] = useState(modelsData[0]);
  const [inputData, setInputData] = useState('');
  const [modelOutput, setModelOutput] = useState(null);
  const [proof, setProof] = useState(null);
  const [reviewText, setReviewText] = useState('');
  const toast = useToast();

  const implementationSteps = [
    'Install the necessary packages.',
    'Load the model using our API.',
    'Pass input data to the model and receive output.',
    'Verify the output using zk proofs provided.',
  ];

  useEffect(() => {
    // Fetch model details from API
    const fetchModelData = async () => {
      try {
        const response = await axios.get(`/api/models/${id}`);
        setModelData(response.data);
      } catch (error) {
        console.error('Error fetching model data:', error);
        // Handle error properly
      }
    };

    if (id) {
      fetchModelData();
    }
  }, [id]);

  // Fetch model details based on `id` here using useEffect and axios.

  const handleSubmit = async (e) => {
    e.preventDefault();

    // API request to process the model with the inputData
    try {
      const response = await axios.post(`/api/models/${id}/run`, {
        input: inputData,
      });
      setModelOutput(response.data.output);
      setProof(response.data.proof); // Assuming the API returns a "proof" of the model processing.
    } catch (error) {
      console.error('There was an error processing the model:', error);
    }
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      // Replace with your API endpoint to submit the review
      await axios.post(`/api/models/${id}/review`, { review: reviewText });
      toast({
        title: 'Review submitted.',
        description: "We've added your review for this model.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setReviewText(''); // Reset review input after submission
      // Here you might want to update the reviews display or model data
    } catch (error) {
      console.error('Error submitting review:', error);
      toast({
        title: 'Failed to submit review.',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={8}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box>
          <Image
            src={modelData?.imageUrl}
            alt={modelData?.name}
            borderRadius="md"
          />
          <Heading size="lg" my={2}>
            {modelData?.name}
          </Heading>
          <Text mb={2}>{modelData?.description}</Text>
          <HStack spacing={1}>
            {modelData?.tags.map((tag, index) => (
              <Tag size="md" key={index} variant="subtle" colorScheme="cyan">
                {tag}
              </Tag>
            ))}
          </HStack>
          <HStack spacing={1} mt={2}>
            <Text as="span">{modelData?.rating}</Text>
            {/* Assuming you have a StarIcon component */}
            {/* <StarIcon color="yellow.400" /> */}
            <Text as="span">({modelData?.reviewCount} reviews)</Text>
          </HStack>
        </Box>

        {/* User input and run model functionality would go here */}
      </SimpleGrid>
      <Text fontSize="2xl" mb={4}>
        Model Details (ID: {id})
      </Text>
      {/* Display fetched model details here */}
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Input for the model</FormLabel>
            <Input
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              placeholder="Enter the input for the model"
            />
          </FormControl>
          <Button colorScheme="blue" type="submit">
            Run Model
          </Button>
        </VStack>
      </form>
      {modelOutput && (
        <Box mt={4}>
          <Text fontSize="xl">Model Output:</Text>
          <Text>{modelOutput}</Text>
        </Box>
      )}
      {proof && (
        <Box mt={4}>
          <Text fontSize="xl">Proof:</Text>
          {/* Display proof information here */}
        </Box>
      )}
      {/* Review submission form */}
      <Box mt={10}>
        <Heading size="md" mb={4}>
          Submit a Review
        </Heading>
        <form onSubmit={handleSubmitReview}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel htmlFor="review">Your Review</FormLabel>
              <Textarea
                id="review"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your review here..."
                size="sm"
              />
            </FormControl>
            <Button colorScheme="blue" type="submit">
              Submit Review
            </Button>
          </VStack>
        </form>
      </Box>

      {/* Implementation Guide Section */}
      <Box mt={10}>
        <Heading size="md" mb={4}>
          Implementation Guide
        </Heading>
        <Text mb={2}>
          Follow these steps to implement the model in your project. For
          detailed documentation, visit our
          <Link href="#" isExternal>
            documentation page <ExternalLinkIcon mx="2px" />
          </Link>
          .
        </Text>
        <List spacing={2}>
          {implementationSteps.map((step, index) => (
            <ListItem key={index}>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              {step}
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Verification Details Section */}
      <Box mt={10}>
        <Heading size="md" mb={4}>
          Verification Details
        </Heading>
        <Text mb={2}>
          Learn how zero-knowledge proofs (zk proofs) are applied to ensure the
          integrity and transparency of model outputs.
        </Text>
        {/* You might want to add more interactive elements or detailed explanations here */}
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Understanding zk proofs in this model
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Detailed explanation of how zk proofs are integrated and how they
              work specifically for this model.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>

      {/* Feedback & Comments Section */}
      <Box mt={10}>
        <Heading size="md" mb={4}>
          Feedback & Comments
        </Heading>
        <Text mb={2}>
          Share your experiences or ask questions regarding this model.
        </Text>
        {/* Assuming you have a component for comments */}
        {/* <CommentsComponent modelId={id} /> */}
        {/* Placeholder for comments component */}
        <Divider my={4} />
        <Text mb={2}>
          No comments yet. Be the first to share your thoughts!
        </Text>
      </Box>
    </Box>
  );
};

export default ModelDetail;

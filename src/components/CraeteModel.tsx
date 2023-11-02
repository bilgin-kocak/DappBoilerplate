// pages/create-model.js or components/CreateModel.js (if you're using it as a component)

import React, { useCallback } from 'react';
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Heading,
  useToast,
} from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';

const CreateModel = () => {
  const toast = useToast();

  const onDrop = useCallback(
    (acceptedFiles) => {
      // Handle file upload...
      const file = acceptedFiles[0];
      console.log(file);

      // Show a toast when a file is uploaded
      toast({
        title: 'Model image uploaded.',
        description: "We've received your model image.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    },
    [toast]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*', // Accept only image files
  });

  return (
    <Box p={8}>
      <Heading mb={6}>Create New Model</Heading>
      <VStack spacing={5}>
        <Box
          p={5}
          w="full"
          borderWidth="2px"
          borderRadius="lg"
          {...getRootProps()}
          cursor="pointer"
          outline="none"
          transition="border .24s ease-in-out"
          borderColor={isDragActive ? 'teal.300' : 'gray.300'}
          bg={isDragActive ? 'teal.50' : 'transparent'}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the model image here ...</p>
          ) : (
            <p>Drag 'n' drop model image here, or click to select image</p>
          )}
        </Box>

        <FormControl id="modelName" isRequired>
          <FormLabel>Model Name</FormLabel>
          <Input type="text" placeholder="Enter model name" />
        </FormControl>

        <FormControl id="modelDescription" isRequired>
          <FormLabel>Model Description</FormLabel>
          <Textarea placeholder="Enter model description" />
        </FormControl>

        <Button colorScheme="teal" w="full">
          Upload Model
        </Button>
      </VStack>
    </Box>
  );
};

export default CreateModel;

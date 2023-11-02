// pages/create-model.js or components/CreateModel.jsx
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import axios from 'axios';

const CreateModel = () => {
  const toast = useToast();
  const [model, setModel] = useState({
    name: '',
    description: '',
    image: null,
    modelFile: null,
  });

  // Image dropzone hook
  const {
    getRootProps: getImageRootProps,
    getInputProps: getImageInputProps,
    isDragActive: isImageDragActive,
  } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setModel({
        ...model,
        image: Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        }),
      });
    },
  });

  // Model file dropzone hook
  const {
    getRootProps: getModelRootProps,
    getInputProps: getModelInputProps,
    isDragActive: isModelDragActive,
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      setModel({
        ...model,
        modelFile: acceptedFiles[0],
      });
    },
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setModel({ ...model, [name]: value });
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', model.name);
    formData.append('description', model.description);
    if (model.image) formData.append('image', model.image);
    if (model.modelFile) formData.append('modelFile', model.modelFile);

    try {
      // API request
      const response = await axios.post('/api/models', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle success
      toast({
        title: 'Model uploaded successfully.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      // Reset form
      setModel({
        name: '',
        description: '',
        image: null,
        modelFile: null,
      });
    } catch (error) {
      // Handle error
      toast({
        title: 'Error uploading model.',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={8}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={5}>
          <FormControl isRequired>
            <FormLabel htmlFor="name">Model Name</FormLabel>
            <Input
              id="name"
              name="name"
              placeholder="Enter model name"
              value={model.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Textarea
              id="description"
              name="description"
              placeholder="Enter a brief description of the model"
              value={model.description}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Model Image</FormLabel>
            <Box
              {...getImageRootProps()}
              p={4}
              borderWidth={2}
              borderStyle="dashed"
              borderRadius="md"
            >
              <input {...getImageInputProps()} />
              {isImageDragActive ? (
                <p>Drop the image here ...</p>
              ) : (
                <p>Drag 'n' drop an image here, or click to select one</p>
              )}
              {model.image && (
                <Box mt={2}>
                  <img
                    src={model.image.preview}
                    alt="Preview"
                    style={{ maxWidth: '100%' }}
                  />
                </Box>
              )}
            </Box>
          </FormControl>
          <FormControl>
            <FormLabel>Model File</FormLabel>
            <Box
              {...getModelRootProps()}
              p={4}
              borderWidth={2}
              borderStyle="dashed"
              borderRadius="md"
            >
              <input {...getModelInputProps()} />
              {isModelDragActive ? (
                <p>Drop the model file here ...</p>
              ) : (
                <p>Drag 'n' drop a model file here, or click to select one</p>
              )}
              {model.modelFile && (
                <Box mt={2}>
                  <p>{model.modelFile.name}</p>
                </Box>
              )}
            </Box>
          </FormControl>
          <Button colorScheme="blue" type="submit">
            Upload Model
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateModel;

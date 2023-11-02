// pages/documentation.js
import {
  Box,
  Heading,
  Text,
  Link,
  Divider,
  SimpleGrid,
  VStack,
  List,
  ListItem,
  ListIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChatIcon, ExternalLinkIcon } from '@chakra-ui/icons';

// ...rest of your imports

const Documentation = () => {
  // Define your FAQs here or fetch them from an API
  const faqs = [
    {
      question: 'How do I integrate zkHug into my existing workflow?',
      answer:
        'We provide a comprehensive guide for integration in our documentation.',
    },
    // ... other FAQs
  ];

  // Colors for the chat icon button based on theme
  const chatIconBg = useColorModeValue('blue.500', 'blue.200');
  const chatIconColor = useColorModeValue('white', 'gray.800');

  return (
    <Box p={8}>
      <Heading mb={6}>Documentation & Support</Heading>

      {/* Guided Tutorials Section */}
      <VStack align="start" spacing={4}>
        <Heading size="md">Guided Tutorials</Heading>
        <Text>Explore our tutorials to get started with zkHug.</Text>
        {/* Links to video or written tutorials */}
        <Link href="#" isExternal>
          Getting Started with zkHug <ExternalLinkIcon mx="2px" />
        </Link>
        {/* Add more tutorial links here */}
      </VStack>

      <Divider my={6} />

      {/* API References Section */}
      <VStack align="start" spacing={4}>
        <Heading size="md">API References</Heading>
        <Text>Detailed technical documentation for developers.</Text>
        {/* Links to API documentation */}
        <Link href="#" isExternal>
          View API Documentation <ExternalLinkIcon mx="2px" />
        </Link>
        {/* Add more API documentation links here */}
      </VStack>

      <Divider my={6} />

      {/* FAQs Section */}
      <VStack align="start" spacing={4}>
        <Heading size="md">FAQs</Heading>
        <List spacing={3}>
          {faqs.map((faq, index) => (
            <ListItem key={index}>
              <Text fontWeight="bold">{faq.question}</Text>
              <Text>{faq.answer}</Text>
            </ListItem>
          ))}
        </List>
      </VStack>

      <Divider my={6} />

      {/* FAQs Section */}
      <VStack align="start" spacing={4} mb={6}>
        <Heading size="md">Frequently Asked Questions</Heading>
        <Accordion allowMultiple>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              borderWidth="1px"
              borderRadius="md"
              my={2}
            >
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {faq.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </VStack>

      {/* Support Chat Section */}
      <VStack align="start" spacing={4}>
        <Heading size="md">Support Chat</Heading>
        <Text>Need help? Our support team is here to assist you.</Text>
        <IconButton
          aria-label="Open support chat"
          icon={<ChatIcon />}
          bg={chatIconBg}
          color={chatIconColor}
          isRound
          // onClick should open the chat widget or navigate to the support chat page
          onClick={() => {
            // handle opening the chat support
          }}
        />
      </VStack>
    </Box>
  );
};

export default Documentation;

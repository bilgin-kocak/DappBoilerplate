import {
  Box,
  Flex,
  Heading,
  Avatar,
  Text,
  VStack,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

// ...rest of your imports

const Dashboard = () => {
  // Dummy data for the user profile and models
  const userProfile = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    avatarUrl: '/path-to-your-avatar.jpg',
    // ... other profile data
  };

  const userModels = [
    { name: 'Model One', usage: '1500', popularity: 'High', feedback: 24 },
    // ... other models
  ];

  // This would be fetched from an API in a real app
  const analyticsData = {
    totalUsage: '4500',
    feedbackReceived: '120',
    positiveGrowth: '3.5',
  };

  return (
    <Box p={8}>
      <Flex
        direction={['column', 'row']}
        justify="space-between"
        align="center"
        mb={10}
      >
        <VStack align="left" mb={[5, 0]}>
          <Heading size="lg">{userProfile.name}'s Dashboard</Heading>
          <Text>{userProfile.email}</Text>
        </VStack>
        <Avatar size="xl" name={userProfile.name} src={userProfile.avatarUrl} />
      </Flex>

      <SimpleGrid columns={[1, 2, 3]} spacing={5}>
        {/* Analytics Cards */}
        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="lg"
          bg={useColorModeValue('white', 'gray.700')}
        >
          <Stat>
            <StatLabel>Total Model Usage</StatLabel>
            <StatNumber>{analyticsData.totalUsage}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              {analyticsData.positiveGrowth}% this month
            </StatHelpText>
          </Stat>
        </Box>

        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="lg"
          bg={useColorModeValue('white', 'gray.700')}
        >
          <Stat>
            <StatLabel>Feedback Received</StatLabel>
            <StatNumber>{analyticsData.feedbackReceived}</StatNumber>
            {/* ... other stats */}
          </Stat>
        </Box>

        {/* ... other stats cards */}
      </SimpleGrid>

      {/* Model List - User's Uploaded Models */}
      <VStack align="left" spacing={4} mt={10}>
        <Heading size="md">Your Uploaded Models</Heading>
        <SimpleGrid columns={[1, null, 2]} spacing={5}>
          {userModels.map((model, index) => (
            <Box
              key={index}
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="lg"
              bg={useColorModeValue('white', 'gray.700')}
            >
              <Heading size="sm">{model.name}</Heading>
              <Text mt={3}>Usage: {model.usage}</Text>
              <Text>Popularity: {model.popularity}</Text>
              <Text>Feedback: {model.feedback}</Text>
              <Link href={`/model/${index}`} isExternal>
                View Model <ExternalLinkIcon mx="2px" />
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Dashboard;

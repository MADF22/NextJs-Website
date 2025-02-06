import React from "react";
import {
  Box,
  Text,
  Container,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import { FaTrophy, FaMedal, FaAward, FaStar } from "react-icons/fa"; // Import ikon dari react-icons

export default function AchivesComponent() {
  return (
    <Container maxW="container.xl" py={20} px={20}>
      <Box justifyContent="center" textAlign="center" mb={10}>
        <Text fontSize="4xl" fontWeight="bold">
          Achievement
        </Text>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {/* GridItem 1 */}
        <GridItem
          w="100%"
          p={6}
          bg="yellow.700"
          borderRadius="md"
          display="flex"
          alignItems="center"
          justifyContent="center">
          <VStack align="center">
            <FaTrophy size={32} color="white" /> {/* Gunakan ikon langsung */}
            <Text color="white" fontSize="lg" fontWeight="bold">
              80.000
            </Text>
            <Text color="white" fontSize="lg" fontWeight="semibold">
            Minted Tokens
            </Text>
          </VStack>
        </GridItem>

        {/* GridItem 2 */}
        <GridItem
          w="100%"
          p={6}
          bg="yellow.700"
          borderRadius="md"
          display="flex"
          alignItems="center"
          justifyContent="center">
          <VStack align="center">
            <FaMedal size={32} color="white" />
            <Text color="white" fontSize="lg" fontWeight="bold">
              $450.000
            </Text>
            <Text color="white" fontSize="lg" fontWeight="semibold">
        Tokenized Assets Under Management
            </Text>
          </VStack>
        </GridItem>

        {/* GridItem 3 */}
        <GridItem
          w="100%"
          p={6}
          bg="yellow.700"
          borderRadius="md"
          display="flex"
          alignItems="center"
          justifyContent="center">
          <VStack align="center">
            <FaAward size={32} color="white" />
            <Text color="white" fontSize="lg" fontWeight="bold">
              85
            </Text>
            <Text color="white" fontSize="lg" fontWeight="semibold">
            Lumbung Grounds
            </Text>
          </VStack>
        </GridItem>

        
      </Grid>
    </Container>
  );
}

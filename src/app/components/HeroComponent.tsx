import React from "react";
import Image from "next/image"; // Gunakan next/image untuk optimasi gambar
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function HeroComponent() {
  return (
    <Container maxW="container.xl" py={20}>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={6}
        alignItems="center">
        {/* Kolom Kiri */}
        <GridItem px={4}>
          <Stack>
            <Text fontSize="4xl" fontWeight="semibold">
              Discover Your Financial Future with Smart Investment Barns,
              Advanced Technology
            </Text>
            <Text fontSize="md" color="gray.700" py={4}>
              In an era where technology and finance come together, Lumbung is
              here as the best solution to make your financial dreams come true.
              As an investment and technology company,
            </Text>
            <Box py={5}>
              <Button size="lg" borderRadius="full">
                Get Started
              </Button>
            </Box>
          </Stack>
        </GridItem>

        {/* Kolom Kanan */}
        <GridItem>
          <Box position="relative" w="full" h={{ base: "500px", md: "400px" }}>
            <Image
              src="/image/Hero-image.jpg"
              alt="Investment illustration"
              width={550}
              height={300}
            />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}

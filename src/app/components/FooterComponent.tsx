import React from "react";
import { Box, Container, Text, Link } from "@chakra-ui/react";
import { RiWhatsappLine } from "react-icons/ri";

export default function FooterComponent() {
  return (
    <>
      {/* Footer */}
      <Box as="footer" bg="yellow.700" color="white" py={6}>
        <Container maxW="container.xl" textAlign="center">
          <Text fontSize="sm">
            © {new Date().getFullYear()} Copyright PT Lumbung Mandiri Bersama. All rights reserved.
          </Text>
        </Container>
      </Box>

      {/* WhatsApp Button (Fixed) */}
      <Link
        href="https://wa.me/6281234567890" // Ganti dengan nomor WhatsApp kamu
        isExternal
        position="fixed"
        bottom="60px"
        right="20px"
        zIndex="1000"
        bg="yellow.950"
        color="white"
        p={4}
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="md"
        _hover={{ bg: "green.600" }}
        w="80px"
        h="80px"
      >
        <RiWhatsappLine size="50px" />
      </Link>
    </>
  );
}

"use client"; // Mark the component as a client component

import {
  Box,
  Flex,
  Image,
  Link,
  Button,
  IconButton,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons"; // Correct import
import { useState } from "react";

export default function Header() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setMobileNavOpen(!isMobileNavOpen);

  const navLinks = [
    { href: "/", label: "About Us" },
    { href: "/about", label: "Achievement" },
    { href: "/roadmap", label: "Road Map" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <Container maxW="container.xl" py={4}>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box fontWeight="bold" fontSize="xl" color="black">
            <Image
              src="https://ptlumbung.com/images/logo.png"
              width={12}
              alt="Logo"
            />
          </Box>

          {/* Navigation Links */}
          <Flex as={"nav"} display={{ base: "none", md: "flex" }} ml={4}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                px={2}
                py={1}
                rounded={"md"}
                color="gray.900"
                _hover={{ textDecoration: "none" }}>
                {link.label}
              </Link>
            ))}
          </Flex>

          {/* Mobile Navigation Links */}
          <Flex
            direction={"column"}
            position={"absolute"}
            top={16}
            left={0}
            w="full"
            bg="white"
            boxShadow="md"
            display={{ base: isMobileNavOpen ? "flex" : "none", md: "none" }}
            zIndex={1000}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                px={4}
                py={2}
                rounded={"md"}
                color="gray.900"
                _hover={{ textDecoration: "none" }}>
                {link.label}
              </Link>
            ))}
          </Flex>

          <Flex alignItems={"center"}>
            <Button colorScheme="teal" borderRadius="full">
              Login
            </Button>
            {/* Mobile Hamburger Icon */}
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />} // Using the icon prop correctly
              onClick={toggleMobileNav}
              display={{ base: "flex", md: "none" }} // Correct display prop
            />
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}

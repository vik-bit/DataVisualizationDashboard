import React from "react";
import {
  Box,
  Flex,
  Container,
  Input,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Badge,
  useColorMode,
  useToast,
  Text, // Import Text component from Chakra UI
} from "@chakra-ui/react";
import { ChevronDownIcon, BellIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  return (
    <Box
      py={2}
      bgGradient="linear(to-b, #25c44c, #d5d213)"
      position="sticky"
      top={0}
      zIndex={100}
    >
      <Container maxW="container.lg">
     
        <Flex justify="center" my={4}> {/* Centered text container */}
          <Text fontSize="2xl" fontWeight="bold" color={colorMode === "light" ? "gray.800" : "white"}>
            Visualization Dashboard (Filters given below each Heading.Click and Enjoy!)
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;

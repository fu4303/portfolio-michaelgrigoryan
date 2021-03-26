import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Tooltip } from "@chakra-ui/tooltip";
import { IconButton } from "@chakra-ui/button";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { Box, Flex, Spacer, Text, Center } from "@chakra-ui/layout";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { toggleColorMode, colorMode } = useColorMode();

  useEffect(() => {
    const listener = window.addEventListener("scroll", () => {
      if (window.scrollY > 80) setIsScrolled(true);
      else setIsScrolled(false);
    });

    return () => window.removeEventListener("scroll", listener);
  }, []);

  return (
    <Box
      top={0}
      py={[3, 5]}
      pos={"sticky"}
      zIndex={"sticky"}
      borderBottom={"1px"}
      px={[5, 50, null, null, 250]}
      opacity={isScrolled ? 0.95 : 1}
      transition={"150ms ease-in-out"}
      boxShadow={isScrolled ? "md" : null}
      borderColor={useColorModeValue("gray.100", "gray.700")}
      backgroundColor={useColorModeValue("gray.50", "gray.700")}
    >
      <Flex>
        <Center>
          <Text
            to={"/"}
            as={NavLink}
            fontWeight={"semibold"}
            fontSize={["lg", "2xl"]}
          >
            Michael Grigoryan
          </Text>
        </Center>

        <Spacer />

        <Center>
          <Tooltip
            label={`Toggle ${colorMode === "dark" ? "light" : "dark"} mode`}
          >
            <IconButton
              isRound
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <RiSunLine /> : <RiMoonLine />}
            />
          </Tooltip>
        </Center>
      </Flex>
    </Box>
  );
};

export default Navbar;

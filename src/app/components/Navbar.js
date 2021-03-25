import { NavLink } from "react-router-dom";
import { Center } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box
      top={0}
      py={[2, 5]}
      pos={"sticky"}
      boxShadow={"lg"}
      zIndex={"sticky"}
      borderBottom={"1px"}
      px={[5, 50, null, null, 250]}
      backgroundColor={useColorModeValue("gray.50", "gray.700")}
      borderColor={useColorModeValue("gray.100", "gray.700")}
    >
      <Flex>
        <Center>
          <Text
            to={"/"}
            as={NavLink}
            fontSize={["lg", "2xl"]}
            fontWeight={"semibold"}
          >
            Michael Grigoryan
          </Text>
        </Center>

        <Spacer />

        <Center>
          <IconButton
            isRound
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <RiSunLine /> : <RiMoonLine />}
          />
        </Center>
      </Flex>
    </Box>
  );
};

export default Navbar;

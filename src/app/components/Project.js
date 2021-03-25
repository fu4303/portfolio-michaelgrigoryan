import { Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import { Badge } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Popular = () => {
  return (
    <chakra.span>
      <Badge colorScheme={"yellow"} variant={"solid"}>
        <Text fontWeight={"bold"}>Popular</Text>
      </Badge>
    </chakra.span>
  );
};

const Project = ({ name, url, language, description, popular }) => {
  return (
    <Box
      p={2}
      backgroundColor={useColorModeValue("gray.50", "gray.800")}
      border={"2px"}
      target={"blank"}
      borderRadius={"lg"}
      style={{
        textDecoration: "none",
      }}
      _hover={{
        boxShadow: "md",
      }}
      css={{
        transition: "150ms ease-in-out",
      }}
      w={[null, null, "lg"]}
      borderColor={useColorModeValue("gray.300", "gray.500")}
    >
      <Box>
        <chakra.a
          href={url}
          fontSize={"xl"}
          rel={"noopener"}
          target={"_blank"}
          referrerPolicy={"no-referrer"}
          color={useColorModeValue("blue.500", "blue.300")}
        >
          {name} {popular && <Popular />}
        </chakra.a>
      </Box>

      <Stack userSelect={"none"} mt={1} spacing={1}>
        <Text fontWeight={"semibold"} fontSize={["sm", "md"]}>
          {description}
        </Text>
        {language && (
          <Text fontSize={"xs"}>
            Written in{" "}
            <chakra.span fontWeight={"semibold"}>{language}</chakra.span>
          </Text>
        )}
      </Stack>
    </Box>
  );
};

export default Project;

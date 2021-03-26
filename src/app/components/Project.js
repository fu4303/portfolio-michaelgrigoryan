import { chakra } from "@chakra-ui/system";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Badge, Stack, Text, Box } from "@chakra-ui/layout";

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
      my={1}
      border={"2px"}
      target={"blank"}
      borderRadius={"lg"}
      _hover={{
        boxShadow: "md",
        transform: "translateY(-5px)",
      }}
      w={[null, null, "lg"]}
      transition={"150ms ease-in-out"}
      borderColor={useColorModeValue("gray.300", "gray.500")}
      backgroundColor={useColorModeValue("gray.50", "gray.700")}
    >
      <chakra.a
        href={url}
        rel={"noopener"}
        target={"_blank"}
        referrerPolicy={"no-referrer"}
      >
        <Box>
          <Text
            fontSize={"xl"}
            color={useColorModeValue("blue.500", "blue.300")}
          >
            {name} {popular && <Popular />}
          </Text>
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
      </chakra.a>
    </Box>
  );
};

export default Project;

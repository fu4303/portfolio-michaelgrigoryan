import { Text } from "@chakra-ui/layout";

const Element = ({ data }) => {
  return (
    <Text
      userSelect={"none"}
      _hover={{
        transform: "translateX(10px)",
      }}
      transition={"150ms ease-in-out"}
    >
      •{" "}
      {!data?.time?.to
        ? data?.time.from
        : `${data?.time.from}-${data?.time?.to}`}{" "}
      - {data?.description}
    </Text>
  );
};

export default Element;

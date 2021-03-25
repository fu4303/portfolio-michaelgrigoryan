const { Text } = require("@chakra-ui/layout");

const Element = ({ data }) => {
  return (
    <Text>
      •{" "}
      {!data?.time?.to
        ? data?.time.from
        : `${data?.time.from}-${data?.time?.to}`}{" "}
      - {data?.description}
    </Text>
  );
};

export default Element;

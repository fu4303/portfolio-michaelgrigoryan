import { Box } from "@chakra-ui/layout";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box px={[5, 50, null, null, 250]} py={[2, 5]}>
        {children}
      </Box>
    </>
  );
};

export default MainLayout;

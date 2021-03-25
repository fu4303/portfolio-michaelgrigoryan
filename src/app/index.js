import splitbee from "@splitbee/web";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

import theme from "./theme";
import Routes from "./routes/routes";

splitbee.init({
  disableCookie: true,
  token: process.env.SPLITBEE_TOKEN,
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </ChakraProvider>
  );
};

export default App;

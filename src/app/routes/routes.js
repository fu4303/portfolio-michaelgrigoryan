import { motion } from "framer-motion";
import { Route, Switch } from "react-router";

import Home from "../pages/Home.page";
import NotFound from "../pages/NotFound.page";
import MainLayout from "../layouts/Main.layout";

const Routes = () => {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <MainLayout>
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"*"} exact component={NotFound} />
        </Switch>
      </MainLayout>
    </motion.div>
  );
};

export default Routes;

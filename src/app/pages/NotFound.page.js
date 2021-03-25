import { useEffect } from "react";
import splitbee from "@splitbee/web";
import { Redirect } from "react-router";

const NotFound = () => {
  useEffect(() => {
    splitbee.track("Not found");
  }, []);

  return <Redirect to={"/"} from={"*"} />;
};

export default NotFound;

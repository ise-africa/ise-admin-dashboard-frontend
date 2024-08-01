import { useContext } from "react";
import { AuthUserContext } from "../../Context/AuthUserContext";
import { capitalize } from "../../HelperFunctions/capitalize";
import classes from "./DashboardNameDisplay.module.css";

const DashboardNameDisplay = () => {
  // Context
  const { signInRequest } = useContext(AuthUserContext);
  return (
    <section className={classes.container}>
      <h1>
        Welcome {capitalize(signInRequest?.data?.admin?.first_name) || "admin"}
      </h1>
      <p>
        Create, collaborate, organise, and track platform activities an
        administrator.{" "}
      </p>
    </section>
  );
};

export default DashboardNameDisplay;

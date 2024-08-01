import { CircularProgress } from "@mui/material";
import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.container}>
      <CircularProgress size="2rem" style={{ color: "#664efe" }} />
    </div>
  );
};

export default Loader;

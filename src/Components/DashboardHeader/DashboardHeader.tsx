import Card from "../Card/Card";
import classes from "./DashboardHeader.module.css";

type DashboardHeaderProps = {
  title: string;
  description: string;
};

const DashboardHeader = ({ title, description }: DashboardHeaderProps) => {
  return (
    <Card className={classes.container}>
      <h1>{title}</h1>
      <p>{description}</p>
    </Card>
  );
};

export default DashboardHeader;

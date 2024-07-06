import { CSSProperties } from "@mui/styled-engine";
import classes from "./Card.module.css";

type CardProps = {
  children: React.ReactNode;
  className: CSSProperties | string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <section className={`${classes.container} ${className}`}>
      {children}
    </section>
  );
};

export default Card;

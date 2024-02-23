import classes from "./HelloUser.module.css";

type HelloUserProps = {
  header: string | undefined;
  paragraph: string;
  notIncludeParagraph?: boolean;
};

const HelloUser = ({
  header,
  paragraph,
  notIncludeParagraph,
}: HelloUserProps) => {
  return (
    <div
      className={classes.helloUser}
    >
      <h2>{header}</h2>
      {!notIncludeParagraph && (
        <p>
          {paragraph}
        </p>
      )}
    </div>
  );
};

export default HelloUser;

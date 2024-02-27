import classes from "./HelloUser.module.css";

type HelloUserProps = {
  header: string | undefined;
  paragraph: string;
  includeButton?: boolean;
  children?: React.ReactNode;
  notIncludeParagraph?: boolean;
};

const HelloUser = ({
  header,
  paragraph,
  children,
  includeButton,
  notIncludeParagraph,
}: HelloUserProps) => {
  return (
    <div
      className={classes.helloUser}
    >
      <div>
        <h2>{header}</h2>
        {!notIncludeParagraph && (
          <p>
            {paragraph}
          </p>
        )}
      </div>
      {includeButton && (<>{children}</>)}
    </div>
  );
};

export default HelloUser;

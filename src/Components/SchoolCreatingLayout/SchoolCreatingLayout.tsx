import { useContext } from "react";
import { AuthUserContext } from "../../Context/AuthUserContext";
import classes from "./SchoolCreatingLayout.module.css";

type SchoolCreatingLayoutProps = {
  children: React.ReactNode;
  notShowHeader?: boolean;
};

const SchoolCreatingLayout = ({
  children,
}: SchoolCreatingLayoutProps) => {
  // Context
  const { searchParams } = useContext(AuthUserContext);

  // Steps
  const steps = [1, 2, 3];

  const userStep = searchParams.get("step");

  return (
    <section className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.body}>
          <div className={classes.stepIndicator}>
            {steps.map((data) => {
              return (
                <div
                  className={`${classes.step} ${userStep && userStep >= data.toString()
                    ? classes.active
                    : classes.inActive
                    }`}
                  key={data}
                >
                  <div>{data}</div>
                </div>
              );
            })}
          </div>
          <div className={classes.children}>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default SchoolCreatingLayout;

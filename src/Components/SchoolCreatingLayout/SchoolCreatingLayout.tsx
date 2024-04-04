import { useContext } from "react";
import { AuthUserContext } from "../../Context/AuthUserContext";
import classes from "./SchoolCreatingLayout.module.css";

type SchoolCreatingLayoutProps = {
  children: React.ReactNode;
  showProgress?: boolean;
  steps: number[];
};

const SchoolCreatingLayout = ({
  children,
  showProgress = true,
  steps,
}: SchoolCreatingLayoutProps) => {
  // Context
  const { searchParams } = useContext(AuthUserContext);

  const userStep = searchParams.get("step");

  // Progress
  const progress = userStep ? steps.indexOf(parseInt(userStep)) + 1 : 0;

  return (
    <section className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.body}>
          {showProgress && (
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
              <p>
                Progress {progress} of {steps.length}
              </p>
            </div>
          )}
          <div className={classes.children}>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default SchoolCreatingLayout;

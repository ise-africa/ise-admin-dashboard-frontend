import Button from "../../../../../Components/Button/Button";
import Loader from "../../../../../Components/Loader/Loader";
import { useCourseWeeksByCourseModules } from "../../../../../Hooks/useCourse";
import classes from "./PreviewUploadedModal.module.css";

type PreviewUploadedModalProps = {
  onClick: () => void;
  onClick2: () => void;
  activeModuleId: string;
};

const PreviewUploadedModal = ({
  onClick,
  onClick2,
  activeModuleId,
}: PreviewUploadedModalProps) => {
  const moreInfo = [
    "Introduction to UI Framework",
    "Introduction to React",
    "Introduction to UI Framework",
  ];

  //   Router

  // Requests
  const { data, isLoading } = useCourseWeeksByCourseModules(
    activeModuleId as string
  );

  const module = data?.data;
  return (
    <div className={classes.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={classes.header}>
            <h3>{module?.moduleTitle}</h3>
            <svg
              onClick={onClick}
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13L13 1M1 1L13 13"
                stroke="#2E2E2E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={classes.main}>
            <h4>More information</h4>
            <div className={classes.content}>
              <p>
                This is a summary of{" "}
                {module?.weeks?.length === 1
                  ? `${module?.weeks?.length} week`
                  : `${module?.weeks?.length} weeks`}{" "}
                of course content ready for review.{" "}
              </p>
              {module?.weeks?.length > 0 &&
                module?.weeks?.map((data: any, i: number) => (
                  <div className={classes.info} key={i}>
                    <span>Week {data?.weekNumber}</span>
                    <p>{data?.title}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className={classes.footer}>
            <Button type="secondary" onClick={onClick}>
              Cancel
            </Button>
            <Button type="primary" onClick={onClick2}>
              Review course content
            </Button>
            <Button type="primary" onClick={onClick2}>
              Proceed
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default PreviewUploadedModal;

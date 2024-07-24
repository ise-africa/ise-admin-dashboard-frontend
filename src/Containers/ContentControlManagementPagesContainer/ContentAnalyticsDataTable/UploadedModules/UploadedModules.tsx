import classes from "./UploadedModules.module.css";
import { useState } from "react";
import AcceptedModal from "../../../../Components/Modals/AcceptedModal/AcceptedModal";
import PreviewUploadedModal from "./PreviewUploadedModal/PreviewUploadedModal";
import { useNavigate } from "react-router-dom";
import moment from "moment";

type UploadedModulesTypes = {
  data: any;
};

const UploadedModules = ({ data }: UploadedModulesTypes) => {
  const navigate = useNavigate();
  const [displayPreviewUploadedModal, setDisplayPreviewUploadedModal] =
    useState(false);
  const [activeModuleId, setActiveModuleId] = useState<null | string>(null);

  return (
    <section className={classes.container}>
      {activeModuleId && (
        <AcceptedModal
          onClick={() => {
            setActiveModuleId(null);
          }}
          body={
            <PreviewUploadedModal
              onClick={() => {
                setActiveModuleId(null);
              }}
              onClick2={() => {
                navigate(
                  "/courses/:SchoolId/courses/:CourseId/analytics/details"
                );
                setActiveModuleId(null);
              }}
              activeModuleId={activeModuleId}
            />
          }
        />
      )}
      {data?.length > 0 && (
        <div>
          <div className={classes.tableHeader}>
            <span>Module title</span>
            <span>Tutor's name</span>
            <span>Submission date</span>
            <span>Action</span>
          </div>

          <div className={classes.bodyContent}>
            {data?.length > 0 ? (
              data?.map((data: any, i: number) => (
                <div key={i} className={classes.tableBody}>
                  <span>{data?.title}</span>
                  <span>{data?.tutorName}</span>
                  <span>
                    {moment(data?.submissionDate)?.format("DD/MM/YYYY")}
                  </span>
                  <span
                    onClick={() => {
                      setActiveModuleId(data?.id);
                    }}
                  >
                    Preview
                  </span>
                </div>
              ))
            ) : (
              <div className={classes.noModules}>No modules</div>
            )}
          </div>
        </div>
      )}
      {data?.length > 0 && (
        <div className={classes.pageButtons}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 19L8 12L15 5"
                stroke="#d8d8d8"
                strokeWidth="2"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <button>1</button>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 5L16 12L9 19"
                stroke="#d8d8d8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      )}

      {data?.length <= 0 && <div className={classes.noModules}>No modules</div>}
    </section>
  );
};

export default UploadedModules;

import { useEffect, useState } from "react";
import DeleteDisclaimerModalBody from "./DeleteDisclaimerModalBody";
import DeleteSuccessfulModalBody from "./DeleteSuccessfulModalBody";
import classes from "./StudentProfileAccountDeactivation.module.css";
import ProfileSectionContainer from "../../../Components/ProfileSectionContainer/ProfileSectionContainer";
import AcceptedModal from "../../../Components/Modals/AcceptedModal/AcceptedModal";
import Button from "../../../Components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import EnableAccountModalBody from "./EnableAccountModalBody";
import { requestHandler2 } from "../../../HelperFunctions/requestHandler";
import { backend_url } from "../../../Utilities/global";
import { requestType } from "../../../Context/AuthUserContext";
import { mutate } from "swr";

type StudentProfileAccountDeactivationType = {
  student: any;
};

const StudentProfileAccountDeactivation = ({
  student,
}: StudentProfileAccountDeactivationType) => {
  // Router
  const navigate = useNavigate();
  const { StudentId } = useParams();

  // States
  const [displayDeleteDisclaimerModal, setDisplayDeleteDisclaimerModal] =
    useState(false);
  const [displayEnableAccountModal, setDisplayEnableAccountModal] =
    useState(false);
  const [displayDeletedModal, setDisplayDeletedModal] = useState(false);
  const [isSendingRequest, setIsSendingRequest] = useState<requestType>({
    data: "",
    isLoading: false,
    error: null,
  });

  // Router

  // Utils
  const closeDisclaimers = [
    "This disables student’s access to their dashboard.",
    "Prevents them from logging in and performing any actions.",
  ];
  const enableDisclaimers = [
    "This enables student’s access to their dashboard.",
    "It allows them login and performing any actions.",
  ];

  const handleEnableAccount = () => {
    setDisplayEnableAccountModal(true);
  };

  const handleDisableAccount = () => {
    setDisplayDeleteDisclaimerModal(true);
  };

  const handleConfirmDisableAccount = () => {
    setDisplayDeleteDisclaimerModal(false);
    setDisplayDeletedModal(true);
  };

  const handleConfirmEnableAccount = () => {
    setDisplayEnableAccountModal(false);
    setDisplayDeletedModal(true);
  };

  const deactivateStudent = () => {
    requestHandler2({
      method: "GET",
      url: `${backend_url}/api/ise/v1/admin/students/close-account/${StudentId}`,
      state: isSendingRequest,
      setState: setIsSendingRequest,
      requestCleanup: true,
      successFunction() {
        mutate(`${backend_url}/api/ise/v1/admin/student/profile/${StudentId}`);
      },
    });
  };

  const reactivateStudent = () => {
    requestHandler2({
      method: "GET",
      url: `${backend_url}/api/ise/v1/admin/students/reactivate-account/${StudentId}`,
      state: isSendingRequest,
      setState: setIsSendingRequest,
      requestCleanup: true,
      successFunction() {
        mutate(`${backend_url}/api/ise/v1/admin/student/profile/${StudentId}`);
      },
    });
  };

  useEffect(() => {
    if (isSendingRequest?.data && student?.status === "active") {
      setDisplayDeleteDisclaimerModal(false);
    }

    if (isSendingRequest?.data && student?.status === "inactive") {
      setDisplayEnableAccountModal(false);
      setDisplayDeletedModal(true);
    }
  }, [isSendingRequest?.data]);

  return (
    <>
      {/* Delete Disclaimer Modal */}
      {displayDeleteDisclaimerModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayDeleteDisclaimerModal(false);
          }}
          body={
            <DeleteDisclaimerModalBody
              onClick={() => setDisplayDeleteDisclaimerModal(false)}
              onClick2={deactivateStudent}
              loading={isSendingRequest?.isLoading}
            />
          }
        />
      )}

      {/* Enable Account Modal */}
      {displayEnableAccountModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayEnableAccountModal(false);
          }}
          body={
            <EnableAccountModalBody
              onClick={() => setDisplayEnableAccountModal(false)}
              onClick2={reactivateStudent}
              loading={isSendingRequest?.isLoading}
            />
          }
        />
      )}

      {/* Delete Successful Modal */}
      {displayDeletedModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayDeletedModal(false);
          }}
          body={
            <DeleteSuccessfulModalBody
              paragraph={
                student?.status === "inactive"
                  ? "The student's account status has been successfully updated. The student's access has been disabled."
                  : "The student's account status has been successfully updated. The student's access has been enabled."
              }
              onClick={() => {
                setDisplayDeletedModal(false);
                navigate("/users/students");
              }}
            />
          }
        />
      )}

      <ProfileSectionContainer
        header={
          student?.status === "inactive" ? "Enable account" : "Disable account"
        }
        paragraph={
          student?.status === "inactive"
            ? "Allow access to a student’s account."
            : "Restrict access to a student’s account."
        }
      >
        <div
          className={`${classes.container} ${
            student?.status === "inactive" ? classes.enable : classes.disable
          }`}
        >
          <h4>Warning</h4>
          <ul>
            {student?.status === "inactive"
              ? enableDisclaimers.map((data, i) => <li key={i}>{data}</li>)
              : closeDisclaimers.map((data, i) => <li key={i}>{data}</li>)}
          </ul>

          <Button
            type={
              student?.status === "inactive" ? "secondary" : "deleteSecondary"
            }
            className={
              student?.status === "inactive" ? classes.delete : undefined
            }
            onClick={
              student?.status === "inactive"
                ? handleEnableAccount
                : handleDisableAccount
            }
            disabled={isSendingRequest?.isLoading}
          >
            {student?.status === "inactive"
              ? "Enable account"
              : "Disable account"}
          </Button>
        </div>
      </ProfileSectionContainer>
    </>
  );
};

export default StudentProfileAccountDeactivation;

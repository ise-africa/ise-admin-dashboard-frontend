import { useEffect, useState } from "react";
import DeleteDisclaimerModalBody from "./DeleteDisclaimerModalBody";
import DeleteSuccessfulModalBody from "./DeleteSuccessfulModalBody";
import classes from "./TutorProfileAccountDeactivation.module.css";
import ProfileSectionContainer from "../../../Components/ProfileSectionContainer/ProfileSectionContainer";
import AcceptedModal from "../../../Components/Modals/AcceptedModal/AcceptedModal";
import Button from "../../../Components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { requestType } from "../../../Context/AuthUserContext";
import { backend_url } from "../../../Utilities/global";
import { requestHandler2 } from "../../../HelperFunctions/requestHandler";

const TutorProfileAccountDeactivation = () => {
  const navigate = useNavigate();
  // States
  const [displayDeleteDisclaimerModal, setDisplauDeleteDisclaimeeModal] =
    useState(false);
  const [displayDeletedModal, setDisplayDeletedModal] = useState(false);
  const [deactivateTutorObject, setDeactivateTutorOnject] =
    useState<requestType>({
      isLoading: false,
      data: null,
      error: null,
    });

  // Utils
  const closeDisclaimers = [
    "This disables tutor’s access to their dashboard.",
    "Prevents them from logging in and performing any actions.",
  ];

  // Router
  const { TutorId } = useParams();

  const deactivateTutor = (id: string) => {
    setDeactivateTutorOnject((prevState) => {
      return { ...prevState, isLoading: true };
    });
    requestHandler2({
      url: `${backend_url}/api/ise/v1/admin/tutors/close-account/${id}`,
      method: "GET",
      successFunction() {
        setDeactivateTutorOnject((prevState) => {
          return { ...prevState, isLoading: false };
        });
        setDisplauDeleteDisclaimeeModal(false);
        setDisplayDeletedModal(true);
      },
    });

    setTimeout(() => {
      setDisplayDeletedModal(false);
    }, 5000);
  };

  return (
    <ProfileSectionContainer
      header="Deactivate account"
      paragraph="Restrict access to a tutor’s account."
    >
      {displayDeleteDisclaimerModal && (
        <AcceptedModal
          onClick={() => {
            setDisplauDeleteDisclaimeeModal(false);
          }}
          body={
            <DeleteDisclaimerModalBody
              onClick={() => {
                setDisplauDeleteDisclaimeeModal(false);
              }}
              onClick2={() => {
                deactivateTutor(TutorId as string);
              }}
              state={deactivateTutorObject}
            />
          }
        />
      )}
      {displayDeletedModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayDeletedModal(false);
          }}
          body={
            <DeleteSuccessfulModalBody
              onClick={() => {
                setDisplayDeletedModal(false);
                navigate("/users/tutors");
              }}
            />
          }
        />
      )}
      <div className={classes.container}>
        <h4>Warning</h4>
        <ul>
          {closeDisclaimers.map((data, i) => {
            return <li key={i}>{data}</li>;
          })}
        </ul>

        <Button
          type="delete"
          onClick={() => {
            setDisplauDeleteDisclaimeeModal(true);
          }}
        >
          Deactivate account
        </Button>
      </div>
    </ProfileSectionContainer>
  );
};

export default TutorProfileAccountDeactivation;

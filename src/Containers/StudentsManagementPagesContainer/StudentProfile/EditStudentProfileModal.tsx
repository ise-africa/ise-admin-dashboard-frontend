import React, { useContext, useEffect } from "react";
import Input from "../../../Components/Input/Input";
import { AppContext } from "../../../Context/AppContext";
import { useParams } from "react-router-dom";
import TextArea from "../../../Components/TextArea/TextArea";
import classes from "./StudentProfile.module.css";
import Button from "../../../Components/Button/Button";
import { UserContext } from "../../../Context/UserContext";
import { inputChangeHandler } from "../../../HelperFunctions/inputChangeHandler";

type EditStudentProfileModalProps = {
  onClick: () => void;
  student: any;
};

const EditStudentProfileModal = ({
  onClick,
  student,
}: EditStudentProfileModalProps) => {
  // Context

  const {
    createStudentDetails,
    setCreateStudentDetails,
    editStudent,
    isCreatingStudent,
  } = useContext(UserContext);

  // Router
  const { StudentId } = useParams();

  // Effects
  useEffect(() => {
    if (student) {
      setCreateStudentDetails((prevState) => {
        return {
          ...prevState,
          email: student?.email,
          linkedIn_profile: student?.linkedIn_profile,
          full_name: student?.full_name,
          bio: student?.bio,
        };
      });
    }
  }, [student]);

  return (
    <div className={classes.editModal}>
      <h3>Edit student profile</h3>
      <p>This is a more detailed information about your student</p>
      <div>
        <Input
          type="text"
          label="Full Name"
          placeholder={createStudentDetails?.full_name}
          name="full_name"
          value={createStudentDetails.full_name}
          onChange={(e) => {
            inputChangeHandler(e, setCreateStudentDetails);
          }}
        />
        <Input
          type="email"
          label="Email address"
          placeholder={createStudentDetails?.email}
          name="email"
          value={createStudentDetails.email}
          onChange={(e) => {
            inputChangeHandler(e, setCreateStudentDetails);
          }}
        />
        <TextArea
          label="About"
          placeholder={createStudentDetails?.bio}
          name="bio"
          value={createStudentDetails.bio}
          onChange={(e) => {
            inputChangeHandler(e, setCreateStudentDetails);
          }}
        />
        <Input
          type="url"
          label="LinkedIn URL"
          placeholder={createStudentDetails?.linkedIn_profile}
          name="linkedIn_profile"
          value={createStudentDetails.linkedIn_profile}
          onChange={(e) => {
            inputChangeHandler(e, setCreateStudentDetails);
          }}
        />
      </div>
      <div className={classes.buttonContainer}>
        <Button type="secondary" onClick={onClick}>
          Cancel
        </Button>
        <Button
          type="primary"
          onClick={() => {
            editStudent(StudentId as string);
          }}
          loading={isCreatingStudent?.isLoading}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditStudentProfileModal;

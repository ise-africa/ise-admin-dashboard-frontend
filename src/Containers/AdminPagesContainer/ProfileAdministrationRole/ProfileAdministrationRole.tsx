import classes from "./ProfileAdministrationRole.module.css";
import ProfileSectionContainer from "../../../Components/ProfileSectionContainer/ProfileSectionContainer";
import Button from "../../../Components/Button/Button";
import { useContext, useEffect, useState } from "react";
import AcceptedModal from "../../../Components/Modals/AcceptedModal/AcceptedModal";
import ModifyRoleFirstModal from "./ModifyRoleModals/ModifyRoleFirstModal";
import ModifyRoleSecondModal from "./ModifyRoleModals/ModifyRoleSecondModal";
import ModifyRoleThirdModal from "./ModifyRoleModals/ModifyRoleThirdModal";
import { capitalize } from "../../../HelperFunctions/capitalize";
import { roles } from "../AddAdminContainer/AddAdminContainer";
import { UserContext } from "../../../Context/UserContext";

type ProfileAdministrationRoleType = {
  data: any;
};

const ProfileAdministrationRole = ({ data }: ProfileAdministrationRoleType) => {
  const [displayModifyRoleFirstModal, setDisplayModifyRoleFirstModal] =
    useState(false);
  const [displayModifyRoleSecondModal, setDisplayModifyRoleSecondModal] =
    useState(false);
  const [displayModifyRoleThirdModal, setDisplayModifyRoleThirdModal] =
    useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  // Context
  const { isCreatingStudent } = useContext(UserContext);

  const adminRoles = roles?.find((role) => role?.slug === data?.role);

  // Effects
  useEffect(() => {
    if (isCreatingStudent?.data === "Role changed successfully") {
      setDisplayModifyRoleSecondModal(false);
      setDisplayModifyRoleThirdModal(true);
    } else {
      setDisplayModifyRoleThirdModal(false);
    }
  }, [isCreatingStudent?.data]);

  return (
    <>
      {displayModifyRoleFirstModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayModifyRoleFirstModal(false);
          }}
          body={
            <ModifyRoleFirstModal
              onClick={() => {
                setDisplayModifyRoleFirstModal(false);
              }}
              onClick2={() => {
                setDisplayModifyRoleFirstModal(false);
                setDisplayModifyRoleSecondModal(true);
              }}
              data={data}
              selectedRole={selectedRole}
              setSelectedRole={setSelectedRole}
            />
          }
        />
      )}
      {displayModifyRoleSecondModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayModifyRoleSecondModal(false);
          }}
          body={
            <ModifyRoleSecondModal
              onClick={() => {
                setDisplayModifyRoleFirstModal(true);
                setDisplayModifyRoleSecondModal(false);
              }}
              onClick2={() => {
                setDisplayModifyRoleSecondModal(false);
                setDisplayModifyRoleThirdModal(true);
              }}
              selectedRole={selectedRole}
              data={data}
            />
          }
        />
      )}
      {displayModifyRoleThirdModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayModifyRoleThirdModal(false);
          }}
          body={
            <ModifyRoleThirdModal
              onClick={() => {
                setDisplayModifyRoleThirdModal(false);
              }}
              selectedRole={selectedRole}
              data={data}
            />
          }
        />
      )}
      <ProfileSectionContainer
        header="Administrator roles"
        paragraph="Learn about the responsibilities, and tasks of the user administrator."
      >
        <div className={classes.listContainer}>
          <p>Role</p>
          <h4>{capitalize(data?.role?.replace("-", " "))}</h4>
          <p>Permissions</p>
          <ol className={classes.numberList}>
            {adminRoles &&
              adminRoles?.duties.map((permission, index) => (
                <li key={index}>
                  {permission.title}
                  <ul className={classes.discList}>
                    {permission.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </li>
              ))}
          </ol>
        </div>
        <Button
          type="null"
          className={classes.modifyButton}
          onClick={() => {
            setDisplayModifyRoleFirstModal(true);
          }}
        >
          Modify role
        </Button>
      </ProfileSectionContainer>
    </>
  );
};

export default ProfileAdministrationRole;

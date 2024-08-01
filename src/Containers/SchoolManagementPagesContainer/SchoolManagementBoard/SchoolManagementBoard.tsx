import { Link, useNavigate } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import HelloUser from "../../../Components/HelloUser/HelloUser";
import classes from "./SchoolManagementBoard.module.css";
import SchoolMangementModules from "../SchoolMangementModules/SchoolMangementModules";

const SchoolManagementBoard = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <HelloUser
        includeButton={true}
        header="School management board"
        paragraph="View, edit, and manage all school data"
      >
        <Button
          onClick={() => {
            navigate("/schools/add-school?step=1");
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1V17M17 9L1 9"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Create school</span>
        </Button>
      </HelloUser>
      <SchoolMangementModules />
      <div className={classes.footer}>
        <p>Need help creating a school?</p>
        <Link to="/support">Read guide here</Link>
      </div>
    </div>
  );
};

export default SchoolManagementBoard;

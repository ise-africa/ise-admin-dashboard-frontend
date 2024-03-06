import { useState } from "react";
import classes from "./TutorsManagementModules.module.css";
import HelloUser from "../../../Components/HelloUser/HelloUser";
import Button from "../../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import EmptyTabComponent from "../../../Components/EmptyTabComponent/EmptyTabComponent";
import TutorDataTable from "../TutorDataTable/TutorDataTable";


const TutorsManagementModules = () => {
    const navigate = useNavigate();

    // States
    const [tutorGridData] = useState<any[]>([
        {
            isActive: true,
            activeComponent: <TutorDataTable />,
            activeNullStateComponent: (
                <EmptyTabComponent
                    image='{noResult}'
                    firstParagraph="You have no schedule at the moment."
                    secondParagraph=""
                    route="/courses"
                    buttontext="Explore classes"
                    showButton={true}
                />
            ),
        },
    ]);

    const activeCOmponent = tutorGridData.find((data) => {
        return data.isActive;
    });
    return (
        <div className={classes.container}>
            <HelloUser
                includeButton={true}
                header='Tutors management board'
                paragraph='View, edit, communicate, and manage tutor information in this section.'
            >
                <Button onClick={() => { navigate('/schools/add-tutor') }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1V17M17 9L1 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Add tutor</span>
                </Button>
            </HelloUser>
            <div>
                {activeCOmponent.activeComponent
                    ? activeCOmponent.activeComponent
                    : activeCOmponent.activeNullStateComponent}
            </div>
        </div>
    );
};

export default TutorsManagementModules;

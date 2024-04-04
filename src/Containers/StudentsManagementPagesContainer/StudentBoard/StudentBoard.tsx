import Button from "../../../Components/Button/Button";
import HelloUser from "../../../Components/HelloUser/HelloUser";
import StudentDataTable from "../StudentDataTable/StudentDataTable";
import classes from "./StudentBoard.module.css";
import { useNavigate } from "react-router-dom";


const StudentBoard = () => {
    const navigate = useNavigate();

    return (
        <div className={classes.container}>
            <HelloUser
                includeButton={true}
                header='Students board'
                paragraph='View, edit, communicate, and manage student information in this section.'
            >
                <Button onClick={() => { navigate('/users/students/add-student') }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1V17M17 9L1 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Create student account</span>
                </Button>
            </HelloUser>

            <StudentDataTable />
        </div>
    );
};

export default StudentBoard;

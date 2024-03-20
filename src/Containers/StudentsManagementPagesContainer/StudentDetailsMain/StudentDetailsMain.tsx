import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../../Context/AppContext";
import breadcrumbsBack from "../../../Assets/Images/breadcrumbsBack.svg";
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import StudentDetailsModules from '../StudentDetailsModules/StudentDetailsModules'


const StudentDetailsMain = () => {
    const { students } = useContext(AppContext);
    // Router
    const { StudentId } = useParams()

    const activeStudent = students.find((data) => {
        return data.studentName.replace(' ', '-').toLowerCase() === StudentId
    })

    // Utils
    const breadCrumbs = {
        image: breadcrumbsBack,
        array: [
            {
                title: "Back to students",
                route: "/users/students",
            },
            {
                title: `${activeStudent?.studentName}`,
                route: `/users/students/${activeStudent?.studentName.toLowerCase().replace(' ', '-')}`,
            },
        ],
    };
    return (
        <>
            <Breadcrumbs {...breadCrumbs} />
            <StudentDetailsModules />
        </>
    )
}

export default StudentDetailsMain

import React from 'react'
import classes from './SchoolCourseModules.module.css'
import { useContext } from "react";
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import breadcrumbsBack from "../../../Assets/Images/breadcrumbsBack.svg";
import { AppContext } from "../../../Context/AppContext";
import { useParams } from "react-router-dom";
import SchoolCourseCreatedContainer from '../SchoolCourseCreatedContainer/SchoolCourseCreatedContainer';

const SchoolCourseModules = () => {
    // Context
    const { schools } = useContext(AppContext)

    // Router
    const { SchoolId } = useParams()

    const sctiveSchool = schools.find((data) => {
        return data.schoolId === SchoolId
    })


    // Utils
    const breadCrumbs = {
        image: breadcrumbsBack,
        array: [
            {
                title: `${sctiveSchool?.schoolName}`,
                route: "/schools",
            },
            {
                title: "Courses",
                route: `/schools/${sctiveSchool?.schoolId}/courses`,
            },
        ],
    };
    return (
        <>
            <div className={classes.breadCrumbs}>
                <Breadcrumbs {...breadCrumbs} />
            </div>
            <div className={classes.container}>
                <SchoolCourseCreatedContainer />
            </div>
        </>
    )
}

export default SchoolCourseModules
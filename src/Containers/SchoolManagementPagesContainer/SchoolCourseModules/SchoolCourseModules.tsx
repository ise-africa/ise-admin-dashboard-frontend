import React from 'react'
import classes from './SchoolCourseModules.module.css'
import { useContext, useState } from "react";
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import breadcrumbsBack from "../../../Assets/Images/breadcrumbsBack.svg";
import { AppContext } from "../../../Context/AppContext";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import SchoolCourseModulesEmptyTab from './SchoolCourseModulesEmptyTab';

const SchoolCourseModules = () => {
    // Context
    const { schools } = useContext(AppContext)

    // Router
    const { SchoolId } = useParams()

    const sctiveSchool = schools.find((data) => {
        return data.schoolId === SchoolId
    })

    // States
    const [navItems] = useState<any[]>([
        {
            isActive: true,
            activeComponent: null,
            activeNullStateComponent: <SchoolCourseModulesEmptyTab />,
        },
    ]);
    const activeCOmponent = navItems.find((data) => {
        return data.isActive;
    });

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
                {activeCOmponent.activeComponent
                    ? activeCOmponent.activeComponent
                    : activeCOmponent.activeNullStateComponent}
                <div className={classes.footer}>
                    <p>Need help creating a school?</p>
                    <Link to='/support'>Read guide here</Link>
                </div>
                <div className={classes.subContainer}></div>
            </div>
        </>
    )
}

export default SchoolCourseModules
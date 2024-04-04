import React, { useContext } from 'react'
import CreateSchoolPreview from '../CreateSchoolPreview/CreateSchoolPreview'
import Breadcrumbs from '../../../Components/Breadcrumbs/Breadcrumbs'
import breadcrumbsBack from "../../../Assets/Images/breadcrumbsBack.svg";
import { AppContext } from '../../../Context/AppContext';
import { useParams } from 'react-router-dom';

const SchoolViewDetailsContainer = () => {
    // Context 
    const { schools } = useContext(AppContext);

    // Router
    const { SchoolId } = useParams();

    const activeSchool = schools.find(data => data.schoolId === SchoolId)

    // Utils
    const breadCrumbs = {
        image: breadcrumbsBack,
        array: [
            {
                title: 'Schools',
                route: "/schools",
            },
            {
                title: `${activeSchool?.schoolName}`,
                route: `/schools/${activeSchool?.schoolId}`,
            },
        ],
    };
    return (
        <div>
            <Breadcrumbs {...breadCrumbs} />
            <CreateSchoolPreview
                showIndicator={false}
                editInformation={true}
                title='View school information'
                name={activeSchool?.nameOfSchool}
                tagline={activeSchool?.schoolTagline}
                description={activeSchool?.schoolDescription}
                school={activeSchool?.schoolName}
                image={activeSchool?.schoolImage}
                importanceItems={activeSchool?.schoolImportance.map(importance => importance.list)}
            />
        </div>
    )
}

export default SchoolViewDetailsContainer
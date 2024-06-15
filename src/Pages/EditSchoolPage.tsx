import React, { useContext } from 'react'
import Layout from '../Components/Layout/Layout'
import { AppContext } from '../Context/AppContext';
import { useLocation, useParams } from "react-router-dom";
import CreateSchoolAddDetails from '../Containers/SchoolManagementPagesContainer/CreateSchoolAddDetails/CreateSchoolAddDetails';
import CreateSchoolUploadFile from '../Containers/SchoolManagementPagesContainer/CreateSchoolUploadFile/CreateSchoolUploadFile';
import SchoolManagementBoard from '../Containers/SchoolManagementPagesContainer/SchoolManagementBoard/SchoolManagementBoard';
import CreateSchoolPreview from '../Containers/SchoolManagementPagesContainer/CreateSchoolPreview/CreateSchoolPreview';


const EditSchoolPage = () => {
    // Router
    const location = useLocation();
    const { SchoolId } = useParams();
    const userStep = new URLSearchParams(location.search).get("step");

    // Router

    // Context 
    const { schools } = useContext(AppContext);

    const activeSchool = schools.find(data => data.schoolId === SchoolId)

    return (
        <Layout>
            {userStep === "1" ? (
                <CreateSchoolAddDetails
                    title='Edit School'
                    name={activeSchool?.nameOfSchool}
                    motto={activeSchool?.schoolTagline}
                    description={activeSchool?.schoolDescription}
                />
            ) : userStep === "2" ? (
                <CreateSchoolUploadFile
                    title='Edit School'
                    name={activeSchool?.schoolName}
                    importanceItems={activeSchool?.schoolImportance.map(importance => importance)}
                />
            ) : userStep === "3" ? (
                <CreateSchoolPreview
                    showIndicator={true}
                    updateInformation={true}
                    image={activeSchool?.schoolImage}
                    name={activeSchool?.nameOfSchool}
                    tagline={activeSchool?.schoolTagline}
                    description={activeSchool?.schoolDescription}
                    importanceItems={activeSchool?.schoolImportance.map(importance => importance)} />
            ) : (
                <SchoolManagementBoard />
            )}
        </Layout>
    )
}

export default EditSchoolPage
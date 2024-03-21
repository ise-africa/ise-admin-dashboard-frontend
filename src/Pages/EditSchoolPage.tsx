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

    const schoolImportance = [
        { list: "Embark on a transformative learning journey with our courses in talent acquisition, customer success and project management." },
        { list: "Master the art of talent acquisition for business success." },
        { list: "Develop practical skills in managing customer expectations and supporting business goals." },
        { list: "Acquire expertise in managing projects and delivering results." },
        { list: "Gain valuable skills for real-world projects" },
        { list: "Choose between a free short course or a comprehensive paid program" },
    ];

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
                    importanceItems={schoolImportance.map(importance => importance.list)}
                />
            ) : userStep === "3" ? (
                <CreateSchoolPreview
                    showIndicator={true}
                    updateInformation={true}
                    importanceItems={schoolImportance.map(importance => importance.list)} />
            ) : (
                <SchoolManagementBoard />
            )}
        </Layout>
    )
}

export default EditSchoolPage
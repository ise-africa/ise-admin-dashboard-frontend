import React from 'react'
import Layout from '../Components/Layout/Layout'
import { useLocation } from "react-router-dom";
import CreateSchoolAddDetails from '../Containers/SchoolManagementPagesContainer/CreateSchoolAddDetails/CreateSchoolAddDetails';
import CreateSchoolUploadFile from '../Containers/SchoolManagementPagesContainer/CreateSchoolUploadFile/CreateSchoolUploadFile';
import SchoolManagementBoard from '../Containers/SchoolManagementPagesContainer/SchoolManagementBoard/SchoolManagementBoard';
import CreateSchoolPreview from '../Containers/SchoolManagementPagesContainer/CreateSchoolPreview/CreateSchoolPreview';


const AddSchoolsPage = () => {
    // Router
    const location = useLocation();
    const userStep = new URLSearchParams(location.search).get("step");

    const schoolImportance = [
        "Embark on a transformative learning journey with our courses in talent acquisition, customer success and project management.",
        "Master the art of talent acquisition for business success.",
        "Develop practical skills in managing customer expectations and supporting business goals.",
        "Acquire expertise in managing projects and delivering results.",
        "Gain valuable skills for real-world projects",
        "Choose between a free short course or a comprehensive paid program",
    ];

    return (
        <Layout>
            {userStep === "1" ? (
                <CreateSchoolAddDetails />
            ) : userStep === "2" ? (
                <CreateSchoolUploadFile />
            ) : userStep === "3" ? (
                <CreateSchoolPreview showIndicator={true} createSchool={true} importanceItems={schoolImportance.map(importance => importance)} />
            ) : (
                <SchoolManagementBoard />
            )}
        </Layout>
    )
}

export default AddSchoolsPage
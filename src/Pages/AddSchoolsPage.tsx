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
        { list: "Embark on a transformative learning journey with our courses in talent acquisition, customer success and project management." },
        { list: "Master the art of talent acquisition for business success." },
        { list: "Develop practical skills in managing customer expectations and supporting business goals." },
        { list: "Acquire expertise in managing projects and delivering results." },
        { list: "Gain valuable skills for real-world projects" },
        { list: "Choose between a free short course or a comprehensive paid program" },
    ];

    return (
        <Layout>
            {userStep === "1" ? (
                <CreateSchoolAddDetails />
            ) : userStep === "2" ? (
                <CreateSchoolUploadFile />
            ) : userStep === "3" ? (
                <CreateSchoolPreview showIndicator={true} importanceItems={schoolImportance.map(importance => importance.list)} />
            ) : (
                <SchoolManagementBoard />
            )}
        </Layout>
    )
}

export default AddSchoolsPage
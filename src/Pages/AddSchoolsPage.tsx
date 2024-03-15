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

    return (
        <Layout>
            {userStep === "1" ? (
                <CreateSchoolAddDetails />
            ) : userStep === "2" ? (
                <CreateSchoolUploadFile />
            ) : userStep === "3" ? (
                <CreateSchoolPreview />
            ) : (
                <SchoolManagementBoard />
            )}
        </Layout>
    )
}

export default AddSchoolsPage
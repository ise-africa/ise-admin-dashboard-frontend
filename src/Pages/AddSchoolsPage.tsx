import React from 'react'
import Layout from '../Components/Layout/Layout'
import { useLocation } from "react-router-dom";
import CreateSchoolAddDetails from '../Containers/SchoolManagementPagesContainer/CreateSchoolAddDetails/CreateSchoolAddDetails';
import CreateSchoolUploadFile from '../Containers/SchoolManagementPagesContainer/CreateSchoolUploadFile/CreateSchoolUploadFile';
import EligibilityELearning from '../Containers/SchoolManagementPagesContainer/EligibilityELearning/EligibilityELearning';
import EligibilitySuccess from '../Containers/SchoolManagementPagesContainer/EligibilitySuccess/EligibilitySuccess';
import EligibilityFailureContainer from '../Containers/SchoolManagementPagesContainer/EligibilityFailureContainer/EligibilityFailureContainer';
import SchoolManagementBoard from '../Containers/SchoolManagementPagesContainer/SchoolManagementBoard/SchoolManagementBoard';


const AddSchoolsPage = () => {
    // Router
    const location = useLocation();
    const userStep = new URLSearchParams(location.search).get("step");
    const status = new URLSearchParams(location.search).get("status");

    return (
        <Layout>
            {userStep === "1" ? (
                <CreateSchoolAddDetails />
            ) : userStep === "2" ? (
                <CreateSchoolUploadFile />
            ) : userStep === "3" ? (
                <EligibilityELearning />
            ) : status === "pass" ? (
                <EligibilitySuccess />
            ) : status === "fail" ? (
                <EligibilityFailureContainer />
            ) : (
                <SchoolManagementBoard />
            )}
        </Layout>
    )
}

export default AddSchoolsPage
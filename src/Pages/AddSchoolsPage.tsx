import React from 'react'
import Layout from '../Components/Layout/Layout'
import { useLocation } from "react-router-dom";
import CreateSchoolAddDetails from '../Containers/SchoolManagementPagesContainer/CreateSchoolAddDetails/CreateSchoolAddDetails';
import EligibilityTechnical from '../Containers/SchoolManagementPagesContainer/EligibilityTechnical/EligibilityTechnical';
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
                <EligibilityTechnical />
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
import React from 'react'
import Layout from '../Components/Layout/Layout'
import { useLocation } from "react-router-dom";
import CreateBlogAddDetails from '../Containers/BlogManagementPageContainer/CreateBlogAddDetails/CreateBlogAddDetails';
import CreateBlogUploadFile from '../Containers/BlogManagementPageContainer/CreateBlogUploadFile/CreateBlogUploadFile';
import BlogManagementContainer from '../Containers/BlogManagementPageContainer/BlogManagementContainer/BlogManagementContainer';
import CreateBlogPreview from '../Containers/BlogManagementPageContainer/CreateBlogPreview/CreateBlogPreview';


const AddBlogPostPage = () => {
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
                <CreateBlogAddDetails />
            ) : userStep === "2" ? (
                <CreateBlogUploadFile />
            ) : userStep === "3" ? (
                <CreateBlogPreview showIndicator={true} createSchool={true} importanceItems={schoolImportance.map(importance => importance.list)} />
            ) : (
                <BlogManagementContainer />
            )}
        </Layout>
    )
}

export default AddBlogPostPage
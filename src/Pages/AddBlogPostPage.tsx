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

    return (
        <Layout>
            {userStep === "1" ? (
                <CreateBlogAddDetails />
            ) : userStep === "2" ? (
                <CreateBlogUploadFile />
            ) : userStep === "3" ? (
                <CreateBlogPreview />
            ) : (
                <BlogManagementContainer />
            )}
        </Layout>
    )
}

export default AddBlogPostPage
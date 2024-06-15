import React, { useContext } from 'react'
import Layout from '../Components/Layout/Layout'
import { AppContext } from '../Context/AppContext';
import { useLocation, useParams } from "react-router-dom";
import CreateBlogAddDetails from '../Containers/BlogManagementPageContainer/CreateBlogAddDetails/CreateBlogAddDetails';
import CreateBlogUploadFile from '../Containers/BlogManagementPageContainer/CreateBlogUploadFile/CreateBlogUploadFile';
import BlogManagementContainer from '../Containers/BlogManagementPageContainer/BlogManagementContainer/BlogManagementContainer';
import CreateBlogPreview from '../Containers/BlogManagementPageContainer/CreateBlogPreview/CreateBlogPreview';


const EditBlogPostPage = () => {
    // Router
    const location = useLocation();
    const { PostId } = useParams();
    const userStep = new URLSearchParams(location.search).get("step");

    // Context
    const { blogPost } = useContext(AppContext)

    const activeBlogPost = blogPost.find(data => data.postId === PostId)


    return (
        <Layout>
            {userStep === "1" ? (
                <CreateBlogAddDetails
                    title={activeBlogPost?.postTitle}
                />
            ) : userStep === "2" ? (
                <CreateBlogUploadFile
                    editInformation={true}
                    image={activeBlogPost?.postImage}
                    category={activeBlogPost?.postCategory}
                    addTag={activeBlogPost?.postTag.map(tag => tag)}
                />
            ) : userStep === "3" ? (
                <CreateBlogPreview
                    title={activeBlogPost?.postTitle}
                    image={activeBlogPost?.postImage}
                    category={activeBlogPost?.postCategory}
                    content={activeBlogPost?.postContent}
                    addTag={activeBlogPost?.postTag.map(tag => tag)}
                    updateInformation="Update blogpost"
                />
            ) : (
                <BlogManagementContainer />
            )}
        </Layout>
    )
}

export default EditBlogPostPage
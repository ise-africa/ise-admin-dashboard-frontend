import React from 'react'
import Layout from '../Components/Layout/Layout'
import ViewBlogPostContainer from '../Containers/BlogManagementPageContainer/ViewBlogPostContainer/ViewBlogPostContainer'

const ViewBlogPostPage = () => {
    return (
        <Layout closeSideNav>
            <ViewBlogPostContainer />
        </Layout>
    )
}

export default ViewBlogPostPage
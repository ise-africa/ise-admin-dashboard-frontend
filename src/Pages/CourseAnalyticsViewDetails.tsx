import React from 'react'
import Layout from '../Components/Layout/Layout'
import CourseContentViewDetailsContainer from '../Containers/ContentControlManagementPagesContainer/CourseContentViewDetailsContainer/CourseContentViewDetailsContainer'

const CourseAnalyticsViewDetails = () => {
    return (
        <Layout closeSideNav>
            <CourseContentViewDetailsContainer />
        </Layout>
    )
}

export default CourseAnalyticsViewDetails
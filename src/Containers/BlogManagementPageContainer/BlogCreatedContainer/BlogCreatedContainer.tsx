import React from 'react';
import classes from './BlogCreatedContainer.module.css';
import BlogMangementModulesEmptyTab from '../BlogManagementModules/BlogMangementModulesEmptyTab';
import BlogPostCard from '../../../Components/BlogPostCard/BlogPostCard';

type BlogCreatedContainerProps = {
    blogPost: any[];
    notShowEmptyTab?: boolean;
}

const BlogCreatedContainer = ({ blogPost, notShowEmptyTab }: BlogCreatedContainerProps) => {

    if (!notShowEmptyTab && blogPost.length === 0) {
        return (
            <BlogMangementModulesEmptyTab
                header="No blogPost available"
                paragraph="Create a new school to begin managing courses and cohorts."
            />
        );
    }

    return (
        <div className={classes.container}>
            {blogPost.map((data, i) => (
                <BlogPostCard
                    key={i}
                    id={data.postId}
                    image={data.postImage}
                    title={data.postTitle}
                    date={data.postDate}
                    category={data.postCategory}
                    status={data.status}
                />
            ))}
        </div>
    );
};

export default BlogCreatedContainer;

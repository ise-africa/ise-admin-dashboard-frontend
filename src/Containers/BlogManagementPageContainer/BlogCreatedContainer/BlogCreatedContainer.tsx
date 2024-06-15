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
                paragraph="Select “Create blogpost” to share insights, and connect with iṣẹ́’s audience. Once you publish a blogpost, it’ll appear here."
            />
        );
    }

    return (
        <div className={classes.body}>
            <div className={classes.header}>
                <span>Filter by:</span>
                <button type="button">Category</button>
                <div className={classes.inputSection}>
                    <input
                        type="text"
                        placeholder="Search by name or email"
                        onChange={e => { }}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                            stroke="#2E2E2E"
                            strokeWidth="2"
                            stroke-linecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
            <div className={classes.container}>
                {blogPost.map((data, i) => (
                    <BlogPostCard
                        key={i}
                        id={data.postId}
                        image={data.postImage}
                        title={data.postTitle}
                        date={data.postDate}
                        category={data.postCategory}
                        postStatus={data.status}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlogCreatedContainer;

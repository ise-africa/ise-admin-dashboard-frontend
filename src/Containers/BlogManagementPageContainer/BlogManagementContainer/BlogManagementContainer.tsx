import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../../Components/Button/Button';
import classes from './BlogManagementContainer.module.css'
import HelloUser from '../../../Components/HelloUser/HelloUser';
import BlogManagementModules from '../BlogManagementModules/BlogManagementModules';
import Blogstatistics from '../Blogstatistics/Blogstatistics';

const BlogManagementContainer = () => {
    const navigate = useNavigate();

    return (
        <div className={classes.container}>
            <HelloUser
                includeButton={true}
                header='Blog management'
                paragraph='Create, manage, improve and track blogposts performance easily.'
            >
                <Button onClick={() => {
                    navigate('');
                }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1V17M17 9L1 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Create new post</span>
                </Button>
            </HelloUser>
            <Blogstatistics />
            <BlogManagementModules />
        </div>
    );
};

export default BlogManagementContainer
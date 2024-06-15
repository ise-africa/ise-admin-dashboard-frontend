import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../../Components/Button/Button';
import classes from './BlogManagementContainer.module.css'
import HelloUser from '../../../Components/HelloUser/HelloUser';
import BlogManagementModules from '../BlogManagementModules/BlogManagementModules';
import Blogstatistics from '../Blogstatistics/Blogstatistics';
import BlogQuickStart from '../BlogQuickStart/BlogQuickStart';
import AcceptedModal from '../../../Components/Modals/AcceptedModal/AcceptedModal';
import CancelSchoolSuccessfulModal from '../../SchoolManagementPagesContainer/CreateSchoolPreview/PreviewModals/CancelSchoolSuccessfulModal';
import CreateBlogCategoryModal from '../CreateBlogUploadFile/CreateBlogCategoryModal';
import BlogCategoriesContainer from '../BlogCategoriesContainer/BlogCategoriesContainer';

const BlogManagementContainer = () => {

    const navigate = useNavigate();

    const [displayCreateBlogCategoryModal, setDisplayCreateBlogCategoryModal] = useState(false)
    const [displayCreateBlogCategorySuccessfulModal, setDisplayCreateBlogCategorySuccessfulModal] = useState(false)

    return (
        <div className={classes.container}>
            {displayCreateBlogCategoryModal && (
                <AcceptedModal
                    onClick={() => { setDisplayCreateBlogCategoryModal(false) }}
                    body={
                        <CreateBlogCategoryModal
                            onClick={() => {
                                setDisplayCreateBlogCategoryModal(false)
                            }}
                            onClick2={() => {
                                setDisplayCreateBlogCategoryModal(false)
                                setDisplayCreateBlogCategorySuccessfulModal(true)
                            }}
                        />
                    }
                />
            )}
            {displayCreateBlogCategorySuccessfulModal && (
                <AcceptedModal
                    onClick={() => { setDisplayCreateBlogCategorySuccessfulModal(false) }}
                    body={
                        <CancelSchoolSuccessfulModal
                            buttonText="Done"
                            header="Category created"
                            onClick={() => {
                                setDisplayCreateBlogCategorySuccessfulModal(false)
                            }}
                        />
                    }
                />
            )}
            <HelloUser
                includeButton={true}
                header='Blog management'
                paragraph='Create, manage, improve and track blogposts performance easily.'
            >
                <Button onClick={() => {
                    navigate('/blogs/add-post?step=1');
                }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1V17M17 9L1 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Create new post</span>
                </Button>
            </HelloUser>
            <BlogQuickStart onClick={() => { setDisplayCreateBlogCategoryModal(true) }} />
            <Blogstatistics />
            <BlogManagementModules />
            <BlogCategoriesContainer />
        </div>
    );
};

export default BlogManagementContainer
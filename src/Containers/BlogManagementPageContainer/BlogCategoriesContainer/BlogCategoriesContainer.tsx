import React, { useState } from 'react'
import classes from "./BlogCategoriesContainer.module.css"
import Button from '../../../Components/Button/Button'
import AcceptedModal from '../../../Components/Modals/AcceptedModal/AcceptedModal'
import CancelSchoolSuccessfulModal from '../../SchoolManagementPagesContainer/CreateSchoolPreview/PreviewModals/CancelSchoolSuccessfulModal'
import CreateBlogCategoryModal from '../CreateBlogUploadFile/CreateBlogCategoryModal'
import ellipse from "../../../Assets/Images/ellipses.svg"
const BlogCategoriesContainer = () => {

    const [displayCreateBlogCategoryModal, setDisplayCreateBlogCategoryModal] = useState(false)
    const [displayCreateBlogCategorySuccessfulModal, setDisplayCreateBlogCategorySuccessfulModal] = useState(false)

    const categories = [
        {
            title: "Technology Trends",
            count: 4
        },
        {
            title: "Inside Africa",
            count: 2
        },
        {
            title: "Edtech space",
            count: 2
        },
        {
            title: "Product updates",
            count: 4
        },
    ]

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
            <div className={classes.header}>
                <div>
                    <h4>Categories</h4>
                    <p>Keep content organised for search engines and users by adding or editing blog categories</p>
                    <span>4/10</span>
                </div>
                <Button onClick={() => { setDisplayCreateBlogCategoryModal(true) }}>
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1.5V17.5M17 9.5L1 9.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Add category</span>
                </Button>
            </div>
            <div className={classes.body}>
                {categories.map((data, index) => (
                    <div
                        key={index}
                        className={classes.tableBody}>
                        <span>{data.title}</span>
                        <span>{data.count} post</span>
                        <img src={ellipse} alt='more options' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogCategoriesContainer
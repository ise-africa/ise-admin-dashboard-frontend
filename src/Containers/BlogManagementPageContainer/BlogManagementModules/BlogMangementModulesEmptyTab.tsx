import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../../Components/Button/Button';
import classes from '../../TutorsManagementPagesContainer/TutorsManagementModules/TutorsManagementModules.module.css'

type BlogMangementModulesEmptyTabProps = {
    header: string
    paragraph: string
}

const BlogMangementModulesEmptyTab = ({ header, paragraph }: BlogMangementModulesEmptyTabProps) => {
    const navigate = useNavigate();

    return (
        <div className={classes.emptyTab}>
            <h2>{header}</h2>
            <p>{paragraph}</p>
            <Button
                type='null'
                onClick={() => { navigate('/blogs/add-post?step=1') }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1V17M17 9L1 9" stroke="#664EFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>Create blogpost</span>
            </Button>
        </div>
    )
}

export default BlogMangementModulesEmptyTab
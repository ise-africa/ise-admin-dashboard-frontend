import React from 'react'
import classes from './CreateBlogCategoryModal.module.css'
import Input from '../../../Components/Input/Input'
import Button from '../../../Components/Button/Button'
import inputIcon from '../../../Assets/Images/globe.svg'

type CreateBlogCategoryModalProps = {
    onClick: () => void
    onClick2: () => void
}

const CreateBlogCategoryModal = ({ onClick, onClick2 }: CreateBlogCategoryModalProps) => {
    return (
        <div className={classes.container}>
            <div>
                <svg onClick={onClick} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1M1 1L13 13" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div className={classes.header}>
                <h3>Create a new blog category</h3>
                <p>Help readers find topics in the blog page easily. <a href="#00">Learn more</a></p>
            </div>
            <div className={classes.content}>
                <Input
                    isRequired
                    maxLength={50}
                    label='Category title'
                    placeholder='E.g Career tips'
                    tip='Category titles show on your posts and blog menu.'
                />
                <Input
                    type='url'
                    icon={inputIcon}
                    label='Google preview'
                    placeholder='https://iseschool.co/blog/category/Untitled category'
                />
            </div>
            <div className={classes.buttonContainer}>
                <Button onClick={onClick} type='secondary'>Cancel</Button>
                <Button onClick={onClick2} type='primary'>Save</Button>
            </div>
        </div>
    )
}

export default CreateBlogCategoryModal
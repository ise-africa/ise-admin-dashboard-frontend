import React from 'react'
import classes from "./ShareBlogPostModal.module.css"
import Button from '../../../Button/Button'

type ShareBlogPostModalProps = {
    onClick: () => void
}

const ShareBlogPostModal = ({ onClick }: ShareBlogPostModalProps) => {

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h3>Promote published blogpost</h3>
                <svg onClick={onClick} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1M1 1L13 13" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p> Choose a medium to tell more people about this blogpost.</p>
            </div>
        </div>
    )
}

export default ShareBlogPostModal
import React, { useState } from 'react'
import Button from '../../../Button/Button'
import classes from "./ShareBlogPostModal.module.css"
import Toast from '../../../Toast/Toast'
import img1 from "../../../../Assets/Images/emailCampaign.svg"
import img2 from "../../../../Assets/Images/socialMdiaPost.svg"

type ShareBlogPostModalProps = {
    onClick: () => void
}

const ShareBlogPostModal = ({ onClick }: ShareBlogPostModalProps) => {
    // States 
    const [displayToastMessageModal, setDisplayToastMessageModal] = useState(false)

    const share = [
        {
            imgSrc: img1,
            title: "Email campaign",
            buttonText: 'Create email campaign',
            description: "Notify and share the blogpost with iṣẹ́ students via email.",
        },
        {
            imgSrc: img2,
            title: "Social media post",
            buttonText: 'Publish to social media',
            description: "Increase blogpost audience reach by sharing to  social media platforms.",
        },
    ]
    return (
        <div className={classes.container}>
            {displayToastMessageModal && (
                <Toast
                    toastMessage='Link copied'
                    onClick={() => setDisplayToastMessageModal(false)}
                />
            )}
            <div className={classes.header}>
                <h3>Promote published blogpost</h3>
                <svg onClick={onClick} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1M1 1L13 13" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p> Choose a medium to tell more people about this blogpost.</p>
            </div>
            <div className={classes.body}>
                {share.map((data, i) => (
                    <div key={i} className={classes.card}>
                        <img src={data.imgSrc} alt={data.title} />
                        <h4>{data.title}</h4>
                        <p>{data.description}</p>
                        <Button type="null">{data.buttonText}</Button>
                    </div>
                ))}
            </div>
            <div className={classes.copyCode}>
                <p className={classes.code}>https://docs.google.com/document/d/1GyF9oGndRRfnDRLs6FmaXB2ite3dhaQWPM1SybeNJk/edit?usp=sharing</p>
                <div className={classes.buttonContainer}>
                    <Button type='null' onClick={() => { setDisplayToastMessageModal(true) }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none"
                        >
                            <path
                                d="M6.75 14C6.3375 14 5.98438 13.8531 5.69063 13.5594C5.39688 13.2656 5.25 12.9125 5.25 12.5V3.5C5.25 3.0875 5.39688 2.73438 5.69063 2.44063C5.98438 2.14687 6.3375 2 6.75 2H13.5C13.9125 2 14.2656 2.14687 14.5594 2.44063C14.8531 2.73438 15 3.0875 15 3.5V12.5C15 12.9125 14.8531 13.2656 14.5594 13.5594C14.2656 13.8531 13.9125 14 13.5 14H6.75ZM6.75 12.5H13.5V3.5H6.75V12.5ZM3.75 17C3.3375 17 2.98438 16.8531 2.69063 16.5594C2.39687 16.2656 2.25 15.9125 2.25 15.5V5H3.75V15.5H12V17H3.75Z"
                                fill="#664EFE"
                            />
                        </svg>
                        <span>Copy Code</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ShareBlogPostModal
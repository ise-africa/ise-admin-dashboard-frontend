import React from 'react'
import classes from "./ReportBlogPostModal.module.css"
import Button from '../../../Button/Button'

type ReportBlogPostModalProps = {
    onClick: () => void
}

const ReportBlogPostModal = ({ onClick }: ReportBlogPostModalProps) => {

    const stats = [
        {
            title: 'Post views',
            total: 90,
        },
        {
            title: 'Unique visitors',
            total: 120,
        },
        {
            title: 'Average time spent',
            total: '1min 2 secs',
        },
        {
            title: 'Shares',
            total: 6,
        },
    ]

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h3>Blogpost report</h3>
                <svg onClick={onClick} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1M1 1L13 13" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div className={classes.content}>
                <div>
                    <h3>Cybersecurity Trends: Safeguarding Digital Spaces</h3>
                    <div className={classes.contentInfo}>
                        <div>
                            <span>Category</span>
                            <p>Product update</p>
                        </div>
                        <div>
                            <span>Date</span>
                            <p>12 Dec 2023 at 11:00AM</p>
                        </div>
                        <div>
                            <span>Status</span>
                            <p>Published</p>
                        </div>
                    </div>
                </div>
                <div className={classes.innerContainer}>
                    <h4>Engagement statistics</h4>
                    <p>This email was delivered to 188 users. The table below shows how they interact with it</p>
                    <div className={classes.body}>
                        {stats.map((data, index) => (
                            <div key={index}>
                                <p>{data.total}</p>
                                <span>{data.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={classes.buttonContainer}>
                <Button onClick={onClick}>Close</Button>
            </div>
        </div>
    )
}

export default ReportBlogPostModal
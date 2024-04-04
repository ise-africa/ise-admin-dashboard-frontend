import React from 'react'
import classes from './Blogstatistics.module.css'

const Blogstatistics = () => {
    const stats = [
        {
            title: 'Post views',
            total: 0,
            count: 0
        },
        {
            title: 'Unique visitors',
            total: 0,
            count: 0
        },
        {
            title: 'New subscribers',
            total: 0,
            count: 0
        },
        {
            title: 'Engagment',
            total: 0,
            count: 0
        },
    ]
    return (
        <div className={classes.container}>
            <h4>Blog statistics</h4>
            <p>These are performance metrics for the last 30 days</p>
            <div className={classes.body}>
                {stats.map((data, index) => (
                    <div key={index}>
                        <p>{data.title}</p>
                        <h1>{data.total}</h1>
                        <span>{data.count} today</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blogstatistics
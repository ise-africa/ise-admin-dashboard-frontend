import React from 'react';
import classes from './ContentAnalyticsBoardContainer.module.css';
import HelloUser from '../../../Components/HelloUser/HelloUser';
import ContentAnalyticsDataTable from '../ContentAnalyticsDataTable/ContentAnalyticsDataTable';

const ContentAnalyticsBoardContainer = () => {

    const courseInsights = [
        {
            title: 'Uploaded Modules',
            count: 20,
            note: 'Total modules uploaded by tutors'
        },
        {
            title: 'Published modules',
            count: 0,
            note: 'Total modules accepted and published by administrator'
        },
        {
            title: 'Declined modules',
            count: 0,
            note: 'Total modules declined by administrator '
        },
        {
            title: 'Recent modules',
            count: 0,
            note: 'Total modules resubmitted by the tutor'
        },
    ];

    return (
        <div className={classes.container}>
            <HelloUser
                header="Frontend content analytics"
                paragraph=""
            />

            <div className={classes.scrollContainer}>
                <div className={classes.insight}>
                    {courseInsights.map((data, i) => (
                        <div key={i}>
                            <p>{data.title}</p>
                            <h2>{data.count}</h2>
                            <span>{data.note}</span>
                        </div>
                    ))}
                </div>
            </div>

            <ContentAnalyticsDataTable />
        </div>
    );
};

export default ContentAnalyticsBoardContainer
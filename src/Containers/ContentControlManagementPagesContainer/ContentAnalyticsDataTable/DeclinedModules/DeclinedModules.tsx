import React, { useState } from 'react';
import classes from "../UploadedModules/UploadedModules.module.css";
import { ContentAnalyticsData } from "../ContentAnalyticsData";
import ellipse from '../.../../../../../Assets/Images/ellipses.svg'
import ActionsModal from "./ActionsModal/ActionsModal";

const DeclinedModules = () => {
    const [popoverIndex, setPopoverIndex] = useState<number | null>(null);

    const declineCourse = ContentAnalyticsData.filter(data => data.status === "revise");

    const handleEllipseClick = (index: number) => {
        setPopoverIndex(index === popoverIndex ? null : index);
    };

    const handleDocumentClick = (event: MouseEvent) => {
        if (!event.target) return;
        const target = event.target as HTMLElement;
        if (!target.closest(`.${classes.tableBody}`)) {
            setPopoverIndex(null);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <section className={classes.container}>
            <div>
                <div className={classes.tableHeader}>
                    <span>Module title</span>
                    <span>Tutor's name</span>
                    <span>Date</span>
                    <span>Action</span>
                </div>

                <div className={classes.bodyContent}>
                    {declineCourse.map((data, i) => (
                        <div key={i} className={classes.tableBody}>
                            <span>{data.module}:{data.title}</span>
                            <span>{data.tutor}</span>
                            <span>{data.deadline}</span>
                            <div className={classes.action}>
                                <img
                                    src={ellipse}
                                    alt="Ellipse"
                                    onClick={() => handleEllipseClick(i)}
                                />
                                {popoverIndex === i && (
                                    <div>
                                        <ActionsModal />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={classes.pageButtons}>
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M15 19L8 12L15 5"
                            stroke="#d8d8d8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
                <button>1</button>
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M9 5L16 12L9 19"
                            stroke="#d8d8d8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </div>
        </section>
    );
};

export default DeclinedModules;
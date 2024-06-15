import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../../Context/AppContext";
import Breadcrumbs from '../../../Components/Breadcrumbs/Breadcrumbs'
import classes from "./CohortBoardContainer.module.css";
import HelloUser from "../../../Components/HelloUser/HelloUser";
import Button from "../../../Components/Button/Button";
import ellipse from "../../../Assets/Images/ellipses.svg";
import ActionsModal from "./ActionsModal/ActionsModal";
import breadcrumbsBack from "../../../Assets/Images/breadcrumbsBack.svg"
import noResultFound from '../../../Assets/Images/noResultFound.svg'
import EmptyTabComponent from "../../../Components/EmptyTabComponent/EmptyTabComponent";

const CohortBoardContainer = () => {
    const navigate = useNavigate();
    const { SchoolId, CourseId } = useParams();
    const { schools } = useContext(AppContext);

    const activeSchool = schools.find(data => data.schoolId === SchoolId);
    const activeCourse = activeSchool?.courses.find(data => data.courseId === CourseId);

    const breadCrumbs = {
        image: breadcrumbsBack,
        array: [
            {
                title: `${activeSchool?.schoolName}`,
                route: "/schools",
            },
            {
                title: `${activeCourse?.courseName}`,
                route: `/schools/${activeSchool?.schoolId}/courses`,
            },
            {
                title: 'Cohort',
                route: `/schools/${SchoolId}/courses/${CourseId}/cohorts`,
            },
        ],
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState("All");
    const [activePopover, setActivePopover] = useState<string | null>(null);

    const handleFilterClick = (filterValue: string) => {
        setFilter(filterValue);
    };

    const getStatusClass = (status: string) => {
        switch (status) {
            case 'active':
                return classes.active;
            case 'closed':
                return classes.closed;
            case 'upcoming':
                return classes.upcoming;
            default:
                return "";
        }
    }

    const handlePopoverClick = (cohortId: string) => {
        setActivePopover(cohortId);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest(`.${classes.popover}`)) {
                setActivePopover(null);
            }
        };

        document.body.addEventListener('click', handleOutsideClick);

        return () => {
            document.body.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleRetrySearch = () => {
        setSearchTerm('');
    };

    const filteredCourseCohortData = activeCourse?.cohorts.filter(data => {
        return (
            (data.cohortName.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '') &&
            (filter === "All" || data.status.toLowerCase() === filter.toLowerCase())
        );
    });

    return (
        <>
            <Breadcrumbs {...breadCrumbs} />
            <div className={classes.container}>
                <HelloUser
                    includeButton={true}
                    header='Cohort board'
                    paragraph='Track, assign, and manage course cohort activities '
                >
                    <Button onClick={() => { navigate(`/schools/${SchoolId}/courses/${CourseId}/add-cohort`) }}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 1V17M17 9L1 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Add cohort</span>
                    </Button>
                </HelloUser>
                <div className={classes.tableContainer}>
                    <div className={classes.topHeader}>
                        <div className={classes.buttonContainer}>
                            <button
                                className={filter === 'All' ? classes.active : ''}
                                onClick={() => handleFilterClick("All")}
                            >
                                All
                            </button>
                            <button
                                className={filter === 'Active' ? classes.active : ''}
                                onClick={() => handleFilterClick("Active")}
                            >
                                Active
                            </button>
                            <button
                                className={filter === 'Upcoming' ? classes.active : ''}
                                onClick={() => handleFilterClick("Upcoming")}
                            >
                                Upcoming
                            </button>
                            <button
                                className={filter === 'Closed' ? classes.active : ''}
                                onClick={() => handleFilterClick("Closed")}
                            >
                                Closed
                            </button>
                        </div>
                        <div className={classes.inputSection}>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                placeholder="Search by name"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24"
                                viewBox="0 0 24 24" fill="none"
                            >
                                <path
                                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                    stroke="#2E2E2E" strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className={classes.tableHeader}>
                        <span>Cohort name</span>
                        <span>Date created</span>
                        <span>Status</span>
                        <span>Action</span>
                    </div>
                    {filteredCourseCohortData && filteredCourseCohortData.length > 0 ? (
                        filteredCourseCohortData.map((data, i) => {
                            const statusClassName = getStatusClass(data.status);
                            return (
                                <div key={i} className={classes.tableBody}>
                                    <span>{data.cohortName}</span>
                                    <span>{data.dateCreated}</span>
                                    <span className={statusClassName}>{data.status}</span>
                                    <div className={classes.popover}>
                                        <img onClick={() => handlePopoverClick(data.cohortId)} src={ellipse} alt="more options" />
                                        {activePopover === data.cohortId && (
                                            <div>
                                                <ActionsModal
                                                    onClick={() => { navigate(`/schools/${SchoolId}/courses/${CourseId}/cohorts/${data.cohortId}`); }}
                                                    onClick2={() => { navigate(`/schools/${SchoolId}/courses/${CourseId}/cohorts/${data.cohortId}/edit-cohort`); }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <EmptyTabComponent
                            image={noResultFound}
                            header={`No results for “${searchTerm}”`}
                            firstParagraph='Try a new search'
                            imageHeight={280}
                            buttontext='Retry search'
                            buttonType='null'
                            buttonClicked={handleRetrySearch}
                            buttonSvg={<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 1.5V5.25H1.93614M13.4536 6.75C13.0845 3.79027 10.5597 1.5 7.5 1.5C4.98197 1.5 2.82622 3.05113 1.93614 5.25M1.93614 5.25H5.25M13.5 13.5V9.75H13.0639M13.0639 9.75C12.1738 11.9489 10.018 13.5 7.5 13.5C4.44029 13.5 1.91549 11.2097 1.54642 8.25M13.0639 9.75H9.75" stroke="#664EFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default CohortBoardContainer;

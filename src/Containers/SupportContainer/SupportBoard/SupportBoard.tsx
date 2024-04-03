import React, { useState, useContext, useRef, useEffect } from 'react';
import HelloUser from '../../../Components/HelloUser/HelloUser';
import classes from './SupportBoard.module.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../Context/AppContext';
import SupportActionModal from './SupportActionModal';
import noResultFound from '../../../Assets/Images/noResultFound.svg'
import EmptyTabComponent from '../../../Components/EmptyTabComponent/EmptyTabComponent';

const SupportBoard = () => {
    const { supportData } = useContext(AppContext);

    // States
    const [searchTerm, setSearchTerm] = useState('');
    const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setActiveModalIndex(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const getStatusClass = (status: string) => {
        switch (status) {
            case 'open':
                return classes.open;
            case 'closed':
                return classes.closed;
            case 'resolved':
                return classes.resolved;
            default:
                return '';
        }
    };

    const handleStatusClick = (index: number) => {
        setActiveModalIndex(activeModalIndex === index ? null : index);
    };

    const handleRetrySearch = () => {
        setSearchTerm('');
    };

    const filteredSupportTrackingData = supportData.filter(data => {
        return (
            data.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            data.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <div className={classes.container}>
            <HelloUser
                header='Support Board'
                paragraph='Review, resolve, and provide support efficiently.'
            />
            <div className={classes.subContainer}>
                <div className={classes.inputSection}>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        placeholder="Search by name or email"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                            stroke="#2E2E2E"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <div className={classes.content}>
                    <div className={classes.tableHeader}>
                        <span>Ticket ID</span>
                        <span>Submitted by</span>
                        <span>Subject</span>
                        <span>Status</span>
                        <span>Action</span>
                    </div>
                    {filteredSupportTrackingData.length === 0 ? (
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
                    ) : (
                        filteredSupportTrackingData.map((data, i) => {
                            const statusClassName = getStatusClass(data.status);
                            return (
                                <div key={i} className={classes.tableBody}>
                                    <span>#{data.id}</span>
                                    <span>{data.email}</span>
                                    <span>{data.subject}</span>
                                    <span className={`${statusClassName} ${classes.status}`} onClick={() => handleStatusClick(i)}><mark>{data.status}</mark></span>
                                    <span><Link to={`/support/${data.id}`}>View</Link></span>
                                    {activeModalIndex === i && (
                                        <div ref={modalRef}>
                                            <SupportActionModal />
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
};

export default SupportBoard;

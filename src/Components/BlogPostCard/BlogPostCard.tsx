import React, { useRef, useState, useEffect } from 'react';
import classes from './BlogPostCard.module.css';
import ellipse from '../../Assets/Images/ellipses.svg';
import ActionsModal from './ActionsModal/ActionsModal';
import { useNavigate } from 'react-router-dom';
import AcceptedModal from '../Modals/AcceptedModal/AcceptedModal';
import CancelSchoolCreationModal from '../../Containers/SchoolManagementPagesContainer/CreateSchoolPreview/PreviewModals/CancelSchoolCreationModal';
import CancelSchoolSuccessfulModal from '../../Containers/SchoolManagementPagesContainer/CreateSchoolPreview/PreviewModals/CancelSchoolSuccessfulModal';
import deleteSvg from "../../Assets/Images/deleteBlogPost.svg"
import SchoolCreatedSuccessfulModal from '../../Containers/SchoolManagementPagesContainer/CreateSchoolPreview/PreviewModals/SchoolCreatedSuccessfulModal';
import restoreImg from "../../Assets/Images/draftImg.svg"
import publishImg from "../../Assets/Images/activateSchool.svg"
import archivehImg from "../../Assets/Images/archivehImg.svg"
import ReportBlogPostModal from './Modals/ReportBlogPostModal/ReportBlogPostModal';
import ShareBlogPostModal from './Modals/ShareBlogPostModal/ShareBlogPostModal';

type BlogPostCardProps = {
    id: string;
    image: string;
    title: string;
    date?: string;
    postStatus: string;
    courses?: string;
    category?: string;
    onClick?: () => void;
}

const BlogPostCard = ({
    id,
    image,
    title,
    onClick,
    date,
    category,
    postStatus,
}: BlogPostCardProps) => {

    // Router
    const navigate = useNavigate();

    // State
    const [showOptions, setShowOptions] = useState(false);
    const [displayDeleteBlogPostModal, setDisplayDeleteBlogPostModal] = useState(false)
    const [displayRestoreBlogPostModal, setDisplayRestoreBlogPostModal] = useState(false)
    const [displayRestoreBlogPostSuccessfulModal, setDisplayRestoreBlogPostSuccessfulModal] = useState(false)
    const [displayPublishBlogPostModal, setDisplayPublishBlogPostModal] = useState(false)
    const [displayPublishBlogPostSuccessfulModal, setDisplayPublishBlogPostSuccessfulModal] = useState(false)
    const [displayArchiveBlogPostModal, setDisplayArchiveBlogPostModal] = useState(false)
    const [displayArchiveBlogPostSuccessfulModal, setDisplayArchiveBlogPostSuccessfulModal] = useState(false)
    const [displayDraftBlogPostModal, setDisplayDraftBlogPostModal] = useState(false)
    const [displayDraftBlogPostSuccessfulModal, setDisplayDraftBlogPostSuccessfulModal] = useState(false)
    const [displayReportBlogPostModal, setDisplayReportBlogPostModal] = useState(false)
    const [displayShareBlogPostModal, setDisplayShareBlogPostModal] = useState(false)


    // Refs
    const containerRef = useRef<HTMLDivElement>(null);
    const optionsRef = useRef<HTMLDivElement>(null);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const closeOptions = (event: MouseEvent) => {
        if (
            containerRef.current &&
            !containerRef.current.contains(event.target as Node) &&
            optionsRef.current &&
            !optionsRef.current.contains(event.target as Node)
        ) {
            setShowOptions(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', closeOptions);
        return () => {
            document.removeEventListener('mousedown', closeOptions);
        };
    }, []);

    return (
        <>
            {/* Delete BlogPost */}
            {displayDeleteBlogPostModal && (
                <AcceptedModal
                    onClick={() => { setDisplayDeleteBlogPostModal(false) }}
                    body={
                        <CancelSchoolCreationModal
                            imgSrc={deleteSvg}
                            button1="Cancel"
                            button2="Yes, Delete"
                            header="Delete blogpost?"
                            paragraph="This is a permanent action, All likes, views and comments will be lost."
                            onClick={() => {
                                setDisplayDeleteBlogPostModal(false)
                                navigate('/blogs')
                            }}
                            onClick2={() => {
                                setDisplayDeleteBlogPostModal(false)
                            }}
                        />
                    }
                />
            )}

            {/* Restore BlogPost */}
            {displayRestoreBlogPostModal && (
                <AcceptedModal
                    onClick={() => { setDisplayRestoreBlogPostModal(false) }}
                    body={
                        <SchoolCreatedSuccessfulModal
                            imgSrc={restoreImg}
                            buttonText2="Cancel"
                            header="Restore blogpost?"
                            buttonText="Yes, restore blogpost"
                            paragraph="Restoring a blog post will move it to drafts on the dashboard"
                            onClick={() => {
                                setDisplayRestoreBlogPostModal(false)
                                navigate('')
                            }}
                            onClick2={() => {
                                setDisplayRestoreBlogPostModal(false)
                                setDisplayRestoreBlogPostSuccessfulModal(true)
                            }}
                        />
                    }
                />
            )}
            {displayRestoreBlogPostSuccessfulModal && (
                <AcceptedModal
                    onClick={() => { setDisplayRestoreBlogPostSuccessfulModal(false) }}
                    body={
                        <CancelSchoolSuccessfulModal
                            buttonText="Done"
                            header="Blogpost in drafts"
                            onClick={() => {
                                setDisplayRestoreBlogPostSuccessfulModal(false)
                                navigate('')
                            }}
                        />
                    }
                />
            )}

            {/* Published BlogPost */}
            {displayPublishBlogPostModal && (
                <AcceptedModal
                    onClick={() => { setDisplayPublishBlogPostModal(false) }}
                    body={
                        <SchoolCreatedSuccessfulModal
                            imgSrc={publishImg}
                            buttonText2="Cancel"
                            header="Publish blogpost?"
                            buttonText="Publish blogpost"
                            paragraph="Once you publish, the blogpost will be live on iṣẹ́ blog"
                            onClick={() => {
                                setDisplayPublishBlogPostModal(false)
                                navigate('')
                            }}
                            onClick2={() => {
                                setDisplayPublishBlogPostModal(false)
                                setDisplayPublishBlogPostSuccessfulModal(true)
                            }}
                        />
                    }
                />
            )}
            {displayPublishBlogPostSuccessfulModal && (
                <AcceptedModal
                    onClick={() => { setDisplayPublishBlogPostSuccessfulModal(false) }}
                    body={
                        <CancelSchoolSuccessfulModal
                            buttonText="Close"
                            header="Blogpost published successfully!"
                            paragraph="Track blogpost performance on your dashboard."
                            onClick={() => {
                                setDisplayPublishBlogPostSuccessfulModal(false)
                                navigate('')
                            }}
                        />
                    }
                />
            )}

            {/* Archive BlogPost */}
            {displayArchiveBlogPostModal && (
                <AcceptedModal
                    onClick={() => { setDisplayArchiveBlogPostModal(false) }}
                    body={
                        <SchoolCreatedSuccessfulModal
                            imgSrc={archivehImg}
                            buttonText2="Cancel"
                            header="Archive blogpost?"
                            buttonText="Yes, archive blogpost"
                            paragraph="Archiving will remove this post from the website but keep it saved for future reference."
                            onClick={() => {
                                setDisplayArchiveBlogPostModal(false)
                                navigate('')
                            }}
                            onClick2={() => {
                                setDisplayArchiveBlogPostModal(false)
                                setDisplayArchiveBlogPostSuccessfulModal(true)
                            }}
                        />
                    }
                />
            )}
            {displayArchiveBlogPostSuccessfulModal && (
                <AcceptedModal
                    onClick={() => { setDisplayArchiveBlogPostSuccessfulModal(false) }}
                    body={
                        <CancelSchoolSuccessfulModal
                            buttonText="Done"
                            header="Blogpost archived successfully!"
                            onClick={() => {
                                setDisplayArchiveBlogPostSuccessfulModal(false)
                                navigate('')
                            }}
                        />
                    }
                />
            )}

            {/* Draft BlogPost */}
            {displayDraftBlogPostModal && (
                <AcceptedModal
                    onClick={() => { setDisplayDraftBlogPostModal(false) }}
                    body={
                        <SchoolCreatedSuccessfulModal
                            imgSrc={restoreImg}
                            buttonText2="Cancel"
                            header="Send to draft?"
                            buttonText="Yes, send to draft"
                            paragraph="This action will disable the blogpost temporarily.  Blogpost likes, views and comments will be lost."
                            onClick={() => {
                                setDisplayDraftBlogPostModal(false)
                                navigate('')
                            }}
                            onClick2={() => {
                                setDisplayDraftBlogPostModal(false)
                                setDisplayDraftBlogPostSuccessfulModal(true)
                            }}
                        />
                    }
                />
            )}
            {displayDraftBlogPostSuccessfulModal && (
                <AcceptedModal
                    onClick={() => { setDisplayDraftBlogPostSuccessfulModal(false) }}
                    body={
                        <CancelSchoolSuccessfulModal
                            buttonText="Done"
                            header="Blogpost in drafts"
                            onClick={() => {
                                setDisplayDraftBlogPostSuccessfulModal(false)
                                navigate('')
                            }}
                        />
                    }
                />
            )}

            {/* Report BlogPost */}
            {displayReportBlogPostModal && (
                <AcceptedModal
                    onClick={() => { setDisplayReportBlogPostModal(false) }}
                    body={
                        <ReportBlogPostModal
                            onClick={() => {
                                setDisplayReportBlogPostModal(false)
                            }}
                        />
                    }
                />
            )}

            {/* Share BlogPost */}
            {displayShareBlogPostModal && (
                <AcceptedModal
                    onClick={() => { setDisplayShareBlogPostModal(false) }}
                    body={
                        <ShareBlogPostModal
                            onClick={() => {
                                setDisplayShareBlogPostModal(false)
                            }}
                        />
                    }
                />
            )}

            <div className={classes.post} onClick={onClick}>
                <img src={image} alt={title} />
                <div className={classes.content}>
                    <div className={classes.postInfo}>
                        <h4>{title}</h4>
                        <p>{category}</p>
                        <span>{date}</span>
                    </div>
                    <div
                        ref={containerRef}
                        className={classes.ellipse}
                        onClick={toggleOptions}>
                        <img src={ellipse} alt="more options" />
                    </div>
                    <div>
                        {showOptions && (
                            <div className={classes.popover} ref={optionsRef}>
                                <ActionsModal
                                    status={postStatus}
                                    onClick={() => { navigate(`/blogs/${id}/edit-post?step=1`) }}
                                    onClick2={() => { navigate(`/blogs/${id}`) }}
                                    onClick3={() => { setDisplayShareBlogPostModal(true) }}
                                    onClick4={() => { setDisplayReportBlogPostModal(true) }}
                                    onClick5={() => { setDisplayDraftBlogPostModal(true) }}
                                    onClick6={() => { setDisplayPublishBlogPostModal(true) }}
                                    onClick7={() => { setDisplayArchiveBlogPostModal(true) }}
                                    onClick8={() => { setDisplayRestoreBlogPostModal(true) }}
                                    onClick9={() => { setDisplayDeleteBlogPostModal(true) }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPostCard;

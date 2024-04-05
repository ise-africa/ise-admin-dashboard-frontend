import React, { useRef, useState, useEffect } from 'react';
import classes from './BlogPostCard.module.css';
import ellipse from '../../Assets/Images/ellipses.svg';
import ActionsModal from './ActionsModal/ActionsModal';
import { useNavigate } from 'react-router-dom';
import AcceptedModal from '../Modals/AcceptedModal/AcceptedModal';
import CreateBlogCategoryModal from '../../Containers/BlogManagementPageContainer/CreateBlogUploadFile/CreateBlogCategoryModal';
import CancelSchoolCreationModal from '../../Containers/SchoolManagementPagesContainer/CreateSchoolPreview/PreviewModals/CancelSchoolCreationModal';
import CancelSchoolSuccessfulModal from '../../Containers/SchoolManagementPagesContainer/CreateSchoolPreview/PreviewModals/CancelSchoolSuccessfulModal';
import deleteSvg from "../../Assets/Images/deleteBlogPost.svg"

type BlogPostCardProps = {
    id: string;
    image: string;
    title: string;
    date?: string;
    postStatus: string; // Changed prop name to postStatus
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
    const [displayCancelSchoolCreationModal, setDisplayCancelSchoolCreationModal] = useState(false)
    const [displayCancelSchoolSuccessfulModal, setDisplayCancelSchoolSuccessfulModal] = useState(false)
    const [displayCreateBlogCategoryModal, setDisplayCreateBlogCategoryModal] = useState(false)
    const [displayCreateBlogCategorySuccessfulModal, setDisplayCreateBlogCategorySuccessfulModal] = useState(false)

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
            {displayCancelSchoolCreationModal && (
                <AcceptedModal
                    onClick={() => { setDisplayCancelSchoolCreationModal(false) }}
                    body={
                        <CancelSchoolCreationModal
                            imgSrc={deleteSvg}
                            button1="Cancel"
                            button2="Yes, Delete"
                            header="Delete blogpost?"
                            paragraph="This is a permanent action, All likes, views and comments will be lost."
                            onClick={() => {
                                setDisplayCancelSchoolCreationModal(false)
                                navigate('/blogs')
                            }}
                            onClick2={() => {
                                setDisplayCancelSchoolCreationModal(false)
                                setDisplayCancelSchoolSuccessfulModal(true)
                            }}
                        />
                    }
                />
            )}
            {displayCancelSchoolSuccessfulModal && (
                <AcceptedModal
                    onClick={() => { setDisplayCancelSchoolSuccessfulModal(false) }}
                    body={
                        <CancelSchoolSuccessfulModal
                            buttonText="Create blogpost"
                            header="Blogpost creation canceled"
                            paragraph="Select ‘Create blogpost’ to start all over."
                            onClick={() => {
                                setDisplayCancelSchoolSuccessfulModal(false)
                                navigate('/blogs/add-post?step=1')
                            }}
                        />
                    }
                />
            )}
            {displayCreateBlogCategoryModal && (
                <AcceptedModal
                    onClick={() => { setDisplayCreateBlogCategoryModal(false) }}
                    body={
                        <CreateBlogCategoryModal
                            onClick={() => {
                                setDisplayCreateBlogCategoryModal(false)
                            }}
                            onClick2={() => {
                                setDisplayCreateBlogCategoryModal(false)
                                setDisplayCreateBlogCategorySuccessfulModal(true)
                            }}
                        />
                    }
                />
            )}
            {displayCreateBlogCategorySuccessfulModal && (
                <AcceptedModal
                    onClick={() => { setDisplayCreateBlogCategorySuccessfulModal(false) }}
                    body={
                        <CancelSchoolSuccessfulModal
                            buttonText="Done"
                            header="Category created"
                            paragraph=""
                            onClick={() => {
                                setDisplayCreateBlogCategorySuccessfulModal(false)
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
                                    onClick2={() => { }}
                                    onClick3={() => { }}
                                    onClick4={() => { }}
                                    onClick5={() => { }}
                                    onClick6={() => { }}
                                    onClick7={() => { }}
                                    onClick8={() => { }}
                                    onClick9={() => { setDisplayCancelSchoolCreationModal(true) }}
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

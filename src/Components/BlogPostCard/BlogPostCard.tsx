import React, { useRef, useState, useEffect } from 'react';
import classes from './BlogPostCard.module.css';
import ellipse from '../../Assets/Images/ellipses.svg';
import ActionsModal from './ActionsModal/ActionsModal';
import { useNavigate } from 'react-router-dom';
import AcceptedModal from '../Modals/AcceptedModal/AcceptedModal';
import ActivateSchoolModal from './Modals/ActivateSchoolModal';
import DeactivateSchoolModal from './Modals/DeactivateSchoolModal';
import ActivateSchoolSuccessfulModal from './Modals/ActivateSchoolSuccessfulModal';
import DeactivateSchoolSuccessfulModal from './Modals/DeactivateSchoolSuccessfulModal';

type BlogPostCardProps = {
    id: string;
    image: string;
    title: string;
    date?: string;
    status: string;
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
}: BlogPostCardProps) => {

    const navigate = useNavigate();

    // State
    const [showOptions, setShowOptions] = useState(false);
    const [displayActivateSchoolModal, setDisplayActivateSchoolModal] = useState(false);
    const [displayActivateSchoolSuccessfulModal, setDisplayActivateSchoolSuccessfulModal] = useState(false);
    const [displayDeactivateSchoolModal, setDisplayDeactivateSchoolModal] = useState(false);
    const [displayDeactivateSchoolSuccessfulModal, setDisplayDeactivateSchoolSuccessfulModal] = useState(false);

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
            {displayActivateSchoolModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplayActivateSchoolModal(false);
                    }}
                    body={
                        <ActivateSchoolModal
                            onClick={() => {
                                setDisplayActivateSchoolModal(false);
                            }}
                            onClick2={() => {
                                setDisplayActivateSchoolModal(false);
                                setDisplayActivateSchoolSuccessfulModal(true);
                            }}
                        />
                    }
                />
            )}
            {displayActivateSchoolSuccessfulModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplayActivateSchoolSuccessfulModal(false);
                    }}
                    body={
                        <ActivateSchoolSuccessfulModal
                            onClick={() => {
                                setDisplayActivateSchoolSuccessfulModal(false);
                            }}
                        />
                    }
                />
            )}
            {displayDeactivateSchoolModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplayDeactivateSchoolModal(false);
                    }}
                    body={
                        <DeactivateSchoolModal
                            onClick={() => {
                                setDisplayDeactivateSchoolModal(false);
                            }}
                            onClick2={() => {
                                setDisplayDeactivateSchoolModal(false);
                                setDisplayDeactivateSchoolSuccessfulModal(true);
                            }}
                        />
                    }
                />
            )}
            {displayDeactivateSchoolSuccessfulModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplayDeactivateSchoolSuccessfulModal(false);
                        navigate('/schools')
                    }}
                    body={
                        <DeactivateSchoolSuccessfulModal
                            onClick={() => {
                                setDisplayDeactivateSchoolSuccessfulModal(false);
                                navigate('/schools')
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
                                    onClick={() => { navigate(`/schools/${id}`); }}
                                    onClick2={() => { navigate(`/schools/${id}/edit-school?step=1`) }}
                                    onClick3={() => { navigate(`/schools/${id}/add-course?step=1`) }}
                                    onClick4={() => { navigate(`/schools/${id}/courses`); }}
                                    onClick5={() => { setDisplayActivateSchoolModal(true); }}
                                    onClick6={() => { setDisplayDeactivateSchoolModal(true) }}
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

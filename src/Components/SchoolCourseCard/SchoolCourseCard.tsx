import React, { useRef, useState, useEffect } from 'react';
import classes from './SchoolCourseCard.module.css';
import ellipse from '../../Assets/Images/ellipses.svg';
import ActionsModal from './ActionsModal/ActionsModal';
import { useNavigate } from 'react-router-dom';
import AcceptedModal from '../Modals/AcceptedModal/AcceptedModal';
import ActivateSchoolModal from './Modals/ActivateSchoolModal';
import DeactivateSchoolModal from './Modals/DeactivateSchoolModal';
import ActivateSchoolSuccessfulModal from './Modals/ActivateSchoolSuccessfulModal';
import DeactivateSchoolSuccessfulModal from './Modals/DeactivateSchoolSuccessfulModal';

type SchoolCourseCardProps = {
    id: string;
    image: string;
    title: string;
    description: string;
    cohortNumber?: number;
}

const SchoolCourseCard = ({
    id,
    image,
    title,
    description,
    cohortNumber,
}: SchoolCourseCardProps) => {

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
            <div className={classes.school}>
                <img src={image} alt={title} />
                <div>
                    <h4>{title}</h4>
                    <div className={classes.schoolInfo}>
                        <div>
                            <span>Total cohort: </span> <span>{cohortNumber}</span>
                        </div>
                        <p>{description}</p>
                    </div>
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
                                onClick2={() => { }}
                                onClick3={() => { navigate(`/schools/${id}/add-course?step=1`) }}
                                onClick4={() => { navigate(`/schools/${id}/courses`); }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SchoolCourseCard;

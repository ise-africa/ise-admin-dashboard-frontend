import React, { useRef, useState, useEffect } from 'react';
import classes from './SchoolCard.module.css';
import ellipse from '../../Assets/Images/ellipses.svg';
import ActionsModal from './ActionsModal/ActionsModal';
import { useNavigate } from 'react-router-dom';

type SchoolCardProps = {
    image: string;
    title: string;
    description: string;
    status: string;
    className: string | undefined;
    courseNumber: number;
}

const SchoolCard = ({
    image,
    title,
    description,
    status,
    className,
    courseNumber,
}: SchoolCardProps) => {

    const [showOptions, setShowOptions] = useState(false);
    const navigate = useNavigate();

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
        <div className={classes.school}>
            <img src={image} alt={title} />
            <div>
                <h4>{title}</h4>
                <div className={classes.schoolInfo}>
                    <div>
                        <span>Courses:</span> <span>{courseNumber}</span>
                    </div>
                    <div>
                        <span>Status:</span> <span className={className}>{status}</span>
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
                            onClick={() => {
                                navigate('');
                            }}
                            onClick2={() => { }}
                            onClick3={() => { }}
                            onClick4={() => { }}
                            onClick5={() => { }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SchoolCard;

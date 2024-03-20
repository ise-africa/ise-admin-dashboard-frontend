import React from 'react'
import classes from './PreviewModals.module.css'
import Button from '../../../../Components/Button/Button';
import image from '../../../../Assets/Gifs/success.gif'

type SchoolCreatedSuccessfulModalProps = {
    onClick?: () => void;
    onClick2: () => void;
    header: string;
    paragraph: string;
    buttonText: string;
}

const SchoolCreatedSuccessfulModal = ({ onClick, onClick2, header, paragraph, buttonText }: SchoolCreatedSuccessfulModalProps) => {
    return (
        <div className={classes.container}>
            <img src={image} alt="Cancel School" />
            <h4>{header}</h4>
            <p>{paragraph}</p>
            <div className={classes.buttonContainer}>
                {onClick && (
                    <Button
                        type='secondary'
                        onClick={onClick}
                    >Done</Button>
                )}
                <Button
                    type='primary'
                    onClick={onClick2}
                >{buttonText}</Button>
            </div>
        </div>
    )
}

export default SchoolCreatedSuccessfulModal
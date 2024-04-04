import React from 'react'
import classes from './PreviewModals.module.css'
import Button from '../../../../Components/Button/Button';
import image from '../../../../Assets/Gifs/success.gif'

type CancelSchoolSuccessfulModalProps = {
    onClick: () => void;
    header: string;
    imgSrc?: string;
    paragraph: string;
    buttonText: string;
}

const CancelSchoolSuccessfulModal = ({
    onClick,
    header,
    imgSrc,
    paragraph,
    buttonText,
}: CancelSchoolSuccessfulModalProps) => {
    return (
        <div className={classes.container}>
            <img src={imgSrc || image} alt="Cancel School" />
            <h4>{header}</h4>
            <p>{paragraph}</p>
            <div className={classes.buttonContainer}>
                <Button
                    type='primary'
                    onClick={onClick}
                >{buttonText}</Button>
            </div>
        </div>
    )
}

export default CancelSchoolSuccessfulModal
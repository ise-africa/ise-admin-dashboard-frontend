import React from 'react'
import classes from './PreviewModals.module.css'
import Button from '../../../../Components/Button/Button';
import image from '../../../../Assets/Images/CancelSchoolCreationImage.svg'

type CancelSchoolCreationModalProps = {
    onClick: () => void;
    onClick2: () => void;
    header: string;
    paragraph: string;
}

const CancelSchoolCreationModal = ({ onClick, onClick2, header, paragraph }: CancelSchoolCreationModalProps) => {
    return (
        <div className={classes.container}>
            <img src={image} alt="Cancel School" />
            <h4>{header}</h4>
            <p>{paragraph}</p>
            <div className={classes.buttonContainer}>
                <Button
                    type='invalid'
                    onClick={onClick}
                >No, don't cancel</Button>
                <Button
                    type='delete'
                    onClick={onClick2}
                >Yes, discard</Button>
            </div>
        </div>
    )
}

export default CancelSchoolCreationModal
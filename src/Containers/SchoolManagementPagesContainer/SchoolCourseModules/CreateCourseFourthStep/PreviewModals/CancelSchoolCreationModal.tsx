import React from 'react'
import classes from './PreviewModals.module.css'
import Button from '../../../../../Components/Button/Button';
import image from '../../../../../Assets/Images/CancelSchoolCreationImage.svg'

type CancelSchoolCreationModalProps = {
    onClick: () => void;
    onClick2: () => void;
}

const CancelSchoolCreationModal = ({ onClick, onClick2 }: CancelSchoolCreationModalProps) => {
    return (
        <div className={classes.container}>
            <img src={image} alt="Cancel School" />
            <h4>Cancel school creation?</h4>
            <p>You'll lose all information and start over if you cancel.</p>
            <div className={classes.buttonContainer}>
                <Button
                    type='invalid'
                    onClick={onClick}
                >No, don't cancel</Button>
                <Button
                    type='delete'
                    onClick={onClick2}
                >Yes, cancel</Button>
            </div>
        </div>
    )
}

export default CancelSchoolCreationModal
import React from 'react'
import classes from './PreviewModals.module.css'
import Button from '../../../../../Components/Button/Button';
import image from '../../../../../Assets/Gifs/success.gif'

type SchoolCreatedSuccessfulModalProps = {
    onClick: () => void;
    onClick2: () => void;
}

const SchoolCreatedSuccessfulModal = ({ onClick, onClick2 }: SchoolCreatedSuccessfulModalProps) => {
    return (
        <div className={classes.container}>
            <img src={image} alt="Cancel School" />
            <h4>School created</h4>
            <p>You've created <strong>[School name]</strong> on <strong>iṣẹ́ School</strong>. You can now proceed to add courses and customise the learning environment.</p>
            <div className={classes.buttonContainer}>
                <Button
                    type='secondary'
                    onClick={onClick}
                >Done</Button>
                <Button
                    type='primary'
                    onClick={onClick2}
                >Add course</Button>
            </div>
        </div>
    )
}

export default SchoolCreatedSuccessfulModal
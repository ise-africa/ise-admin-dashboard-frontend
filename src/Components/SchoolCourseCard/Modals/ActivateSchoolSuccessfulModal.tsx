import React from 'react'
import classes from './Modals.module.css'
import image from '../../../Assets/Gifs/success.gif'
import Button from '../../Button/Button';

type ActivateSchoolSuccessfulModalProps = {
    onClick: () => void;
}

const ActivateSchoolSuccessfulModal = ({ onClick }: ActivateSchoolSuccessfulModalProps) => {
    return (
        <div className={classes.container}>
            <img src={image} alt="School activated successfully!" />
            <h4>School activated successfully!</h4>
            <p>Congratulations! [School Name] is now active and visible. Students can now start enrolling in this school.</p>
            <div className={classes.buttonContainer}>
                <Button
                    type='primary'
                    onClick={onClick}
                >Done</Button>
            </div>
        </div>
    )
}

export default ActivateSchoolSuccessfulModal
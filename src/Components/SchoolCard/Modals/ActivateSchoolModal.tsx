import React from 'react'
import classes from './Modals.module.css'
import Button from '../../Button/Button';
import image from '../../../Assets/Images/activateSchool.svg'

type ActivateSchoolModalProps = {
    onClick: () => void;
    onClick2: () => void;
}

const ActivateSchoolModal = ({ onClick, onClick2 }: ActivateSchoolModalProps) => {
    return (
        <div className={classes.container}>
            <img src={image} alt="Activate school" />
            <h4>Activate this school?</h4>
            <p>Activating a school makes it accessible to users, allowing them to explore courses and enroll in your educational programs.</p>
            <div className={classes.buttonContainer}>
                <Button
                    type='secondary'
                    onClick={onClick}
                >Close</Button>
                <Button
                    type='primary'
                    onClick={onClick2}
                >Activate school</Button>
            </div>
        </div>
    )
}

export default ActivateSchoolModal
import React from 'react'
import classes from './Modals.module.css'
import Button from '../../Button/Button';
import image from '../../../Assets/Images/deactivateSchool.svg'

type DeactivateSchoolModalProps = {
    onClick: () => void;
    onClick2: () => void;
}

const DeactivateSchoolModal = ({ onClick, onClick2 }: DeactivateSchoolModalProps) => {
    return (
        <div className={classes.container}>
            <img src={image} alt="Activate school" />
            <h4>Deactivate this school?</h4>
            <p>Deactivating a school will make it temporarily unavailable, and users won't be able to access its courses.</p>
            <div className={classes.buttonContainer}>
                <Button
                    type='invalid'
                    onClick={onClick}
                >Cancel</Button>
                <Button
                    type='delete'
                    onClick={onClick2}
                >Deactivate school</Button>
            </div>
        </div>
    )
}

export default DeactivateSchoolModal
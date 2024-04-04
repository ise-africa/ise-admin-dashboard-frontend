import React from 'react'
import classes from './Modals.module.css'
import image from '../../../Assets/Gifs/success.gif'
import Button from '../../Button/Button';

type DeactivateSchoolSuccessfulModalProps = {
    onClick: () => void;
}

const DeactivateSchoolSuccessfulModal = ({ onClick }: DeactivateSchoolSuccessfulModalProps) => {
    return (
        <div className={classes.container}>
            <img src={image} alt="School deactivated! " />
            <h4>School deactivated! </h4>
            <p>[School Name] is now deactivated and hidden from the platform.You can reactivate it later from the 'Inactive Schools' list.</p>
            <div className={classes.buttonContainer}>
                <Button
                    type='primary'
                    onClick={onClick}
                >Done</Button>
            </div>
        </div>
    )
}

export default DeactivateSchoolSuccessfulModal
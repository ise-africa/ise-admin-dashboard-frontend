import React from 'react'
import classes from './PreviewModals.module.css'
import Button from '../../../../Components/Button/Button';
import image from '../../../../Assets/Gifs/success.gif'

type CancelSchoolSuccessfulModalProps = {
    onClick: () => void;
}

const CancelSchoolSuccessfulModal = ({ onClick }: CancelSchoolSuccessfulModalProps) => {
    return (
        <div className={classes.container}>
            <img src={image} alt="Cancel School" />
            <h4>School creation canceled. </h4>
            <p>Click <strong>‘Create School'</strong> to start again.</p>
            <div className={classes.buttonContainer}>
                <Button
                    type='primary'
                    onClick={onClick}
                >Create school</Button>
            </div>
        </div>
    )
}

export default CancelSchoolSuccessfulModal
import React from 'react'
import classes from './SupportBoard.module.css'
type SupportActionModalProps = {
    onClick?: () => void,
    onClick2?: () => void,
    onClick3?: () => void,
}

const SupportActionModal = ({
    onClick,
    onClick2,
    onClick3
}: SupportActionModalProps) => {
    return (
        <div className={classes.modalContainer}>
            <h4>Select an option</h4>
            <div className={classes.options}>
                <button onClick={onClick}>Open</button>
                <button onClick={onClick2}>Resolved</button>
                <button onClick={onClick3}>Closed</button>
            </div>
        </div>
    )
}

export default SupportActionModal
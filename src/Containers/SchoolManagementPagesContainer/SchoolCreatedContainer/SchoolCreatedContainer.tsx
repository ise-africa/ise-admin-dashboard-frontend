import React from 'react'
import classes from './SchoolCreatedContainer.module.css'
import addButton from '../../../Assets/Images/addButtonWithPurpleBackgroundAndRoundedCorners.svg'

const SchoolCreatedContainer = () => {
    return (
        <div className={classes.container}>
            <div className={classes.emptyTab}>
                <img src={addButton} alt="add course" />
                <div>
                    <h2>Create a new school</h2>
                    <p>Set up and manage schools, courses and cohorts easily.</p>
                </div>
            </div>
        </div>
    )
}

export default SchoolCreatedContainer
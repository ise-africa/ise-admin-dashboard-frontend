import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../../Components/Button/Button';
import classes from './TutorsManagementModules.module.css'

const TutorsManagementModulesEmptyTab = () => {
    const navigate = useNavigate();

    return (
        <div className={classes.emptyTab}>
            <h2>No tutors found</h2>
            <p>No tutors are logged into the system. Add a tutor; their information will appear here.</p>
            <Button onClick={() => { navigate('/tutors/add-tutor') }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1V17M17 9L1 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>Add tutor</span>
            </Button>
        </div>
    )
}

export default TutorsManagementModulesEmptyTab
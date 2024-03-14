import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../../Components/Button/Button';
import classes from '../../TutorsManagementPagesContainer/TutorsManagementModules/TutorsManagementModules.module.css'

const StudentsManagementModulesEmptyTab = () => {
    const navigate = useNavigate();

    return (
        <div className={classes.emptyTab}>
            <h2>Welcome to student management!</h2>
            <p>In this section, you can track student activities and manage student profiles. Once students start engaging with their courses their information will appear here.</p>
            <Button onClick={() => { navigate('/users/students/add-student') }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1V17M17 9L1 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>Create student account</span>
            </Button>
        </div>
    )
}

export default StudentsManagementModulesEmptyTab
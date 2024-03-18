import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './SchoolCreatedContainer.module.css'
import addButton from '../../../Assets/Images/addButtonWithPurpleBackgroundAndRoundedCorners.svg'
import { AppContext } from '../../../Context/AppContext'
import ellipse from '../../../Assets/Images/ellipses.svg'
import ActionsModal from './ActionsModal/ActionsModal'

const SchoolCreatedContainer = () => {
    const navigate = useNavigate();
    // Context
    const { schools } = useContext(AppContext);

    const getStatusClass = (status: string) => {
        switch (status) {
            case 'Active':
                return classes.active
            case 'Inactive':
                return classes.inactive
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.emptyTab}>
                <img onClick={() => navigate('/schools/add-school?step=1')} src={addButton} alt="add course" />
                <div>
                    <h2>Create a new school</h2>
                    <p>Set up and manage schools, courses and cohorts easily.</p>
                </div>
            </div>
            <ActionsModal />
            {schools.map((data, i) => {
                const statusClassName = getStatusClass(data.status)
                return (
                    <div className={classes.school}>
                        <img src={data.schoolImage} alt={data.schoolName} />
                        <div>
                            <h4>{data.schoolName}</h4>
                            <div className={classes.schoolInfo}>
                                <div>
                                    <span>Courses:</span> <span>{data.totalCourse}</span>
                                </div>
                                <div>
                                    <span>Status:</span> <span className={statusClassName}>{data.status}</span>
                                </div>
                                <p>{data.schoolDescription}</p>
                            </div>
                        </div>
                        <div className={classes.ellipse}>
                            <img src={ellipse} alt="more options" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SchoolCreatedContainer
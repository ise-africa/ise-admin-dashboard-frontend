import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './SchoolCreatedContainer.module.css';
import addButton from '../../../Assets/Images/addButtonWithPurpleBackgroundAndRoundedCorners.svg';
import { AppContext } from '../../../Context/AppContext';
import SchoolCard from '../../../Components/SchoolCard/SchoolCard';

const SchoolCreatedContainer = () => {
    const navigate = useNavigate();
    // Context
    const { schools } = useContext(AppContext);

    const getStatusClass = (status: string) => {
        switch (status) {
            case 'Active':
                return classes.active;
            case 'Inactive':
                return classes.inactive;
            default:
                return '';
        }
    };

    return (
        <div className={classes.container}>
            <div className={classes.emptyTab}>
                <img onClick={() => navigate('/schools/add-school?step=1')} src={addButton} alt="add course" />
                <div>
                    <h2>Create a new school</h2>
                    <p>Set up and manage schools, courses and cohorts easily.</p>
                </div>
            </div>
            {schools.map((data, i) => {
                const statusClassName = getStatusClass(data.status);
                return (
                    <SchoolCard
                        key={i}
                        image={data.schoolImage}
                        title={data.schoolName}
                        description={data.schoolDescription}
                        status={data.status}
                        className={statusClassName}
                        courseNumber={data.totalCourse}
                    />
                );
            })}
        </div>
    );
};

export default SchoolCreatedContainer;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './SchoolCreatedContainer.module.css';
import addButton from '../../../Assets/Images/addButtonWithPurpleBackgroundAndRoundedCorners.svg';
import SchoolCard from '../../../Components/SchoolCard/SchoolCard';
import SchoolMangementModulesEmptyTab from '../SchoolMangementModules/SchoolMangementModulesEmptyTab';

type SchoolCreatedContainerProps = {
    schools: any[];
    notShowEmptyTab?: boolean;
}

const SchoolCreatedContainer = ({ schools, notShowEmptyTab }: SchoolCreatedContainerProps) => {
    const navigate = useNavigate();

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

    if (!notShowEmptyTab && schools.length === 0) {
        return (
            <SchoolMangementModulesEmptyTab
                header="No schools available"
                paragraph="Create a new school to begin managing courses and cohorts."
            />
        );
    }

    return (
        <div className={classes.container}>
            {!notShowEmptyTab && (
                <div className={classes.emptyTab}>
                    <img onClick={() => navigate('/schools/add-school?step=1')} src={addButton} alt="add course" />
                    <div>
                        <h2>Create a new school</h2>
                        <p>Set up and manage schools, courses and cohorts easily.</p>
                    </div>
                </div>
            )}
            {schools.map((data, i) => {
                const statusClassName = getStatusClass(data.status);
                return (
                    <SchoolCard
                        key={i}
                        showActionButton={true}
                        id={data.schoolId}
                        image={data.schoolImage}
                        title={data.schoolName}
                        status={data.status}
                        className={statusClassName}
                        courseNumber={data.courses.length}
                        description={data.schoolDescription}
                    />
                );
            })}
        </div>
    );
};

export default SchoolCreatedContainer;

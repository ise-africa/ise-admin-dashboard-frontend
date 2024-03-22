import React, { useContext, useState } from 'react'
import classes from './ContentBoardContainer.module.css'
import HelloUser from '../../../Components/HelloUser/HelloUser'
import SchoolCard from '../../../Components/SchoolCard/SchoolCard'
import { AppContext } from '../../../Context/AppContext'

const ContentBoardContainer = () => {
    const { schools } = useContext(AppContext)

    const [displaySchoolCoursesModal, setDisplaySchoolCoursesModal] = useState(false)
    return (
        <div className={classes.Container}>
            <HelloUser
                header="Content management"
                paragraph="Manage, edit and assign content for all iṣẹ́ Schools."
            />

            <div className={classes.schoolList}>
                {schools.map((data, i) => {
                    return (
                        <SchoolCard
                            key={i}
                            id={data.schoolId}
                            status={data.status}
                            title={data.schoolName}
                            showActionButton={false}
                            image={data.schoolImage}
                            courseNumber={data.courses.length}
                            description={data.schoolDescription}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default ContentBoardContainer
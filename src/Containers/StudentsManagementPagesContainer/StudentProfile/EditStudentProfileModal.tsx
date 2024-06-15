import React, { useContext } from 'react'
import Input from '../../../Components/Input/Input'
import { AppContext } from '../../../Context/AppContext'
import { useParams } from 'react-router-dom'
import TextArea from '../../../Components/TextArea/TextArea'
import classes from './StudentProfile.module.css'
import Button from '../../../Components/Button/Button'

type EditStudentProfileModalProps = {
    onClick: () => void
    onClick2: () => void
}

const EditStudentProfileModal = ({ onClick, onClick2 }: EditStudentProfileModalProps) => {

    // Context
    const { students } = useContext(AppContext)

    // Router
    const { StudentId } = useParams()

    const activeStudent = students.find((data) => {
        return data.studentName.replace(' ', '-').toLowerCase() === StudentId
    })
    return (
        <div className={classes.editModal}>
            <h3>Edit student profile</h3>
            <p>This is a more detailed  information about your student</p>
            <div>
                <Input
                    type="text"
                    label="Full Name"
                    placeholder={activeStudent?.studentName}
                />
                <Input
                    type="email"
                    label="Email address"
                    placeholder={activeStudent?.emailAddress}
                />
                <TextArea
                    label='About'
                    placeholder={activeStudent?.about}
                />
                <Input
                    type="url"
                    label="LinkedIn URL"
                    placeholder={activeStudent?.linkedinProfileUrl}
                />
            </div>
            <div className={classes.buttonContainer}>
                <Button type="secondary" onClick={onClick}>Cancel</Button>
                <Button type="primary" onClick={onClick2}>Save</Button>
            </div>
        </div>
    )
}

export default EditStudentProfileModal
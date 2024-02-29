import classes from './ProfileAdministrationRole.module.css'
import ProfileSectionContainer from '../../../Components/ProfileSectionContainer/ProfileSectionContainer';
import Button from '../../../Components/Button/Button';
import { useState } from 'react';
import AcceptedModal from '../../../Components/Modals/AcceptedModal/AcceptedModal';
import ModifyRoleFirstModal from './ModifyRoleModals/ModifyRoleFirstModal';
import ModifyRoleSecondModal from './ModifyRoleModals/ModifyRoleSecondModal';

const ProfileAdministrationRole = () => {

    const [displayModifyRoleFirstModal, setDisplayModifyRoleFirstModal] = useState(false)
    const [displayModifyRoleSecondModal, setDisplayModifyRoleSecondModal] = useState(false)

    const permissionsData = [
        {
            title: "User account management:",
            details: ["Creation, modification, and deletion of student and tutor accounts."]
        },
        {
            title: "Students' enrollment:",
            details: ["Manage the enrollment process for students."]
        },
        {
            title: "Data reports and insights:",
            details: ["Generate reports from the dashboard to support decision-making."]
        },
        {
            title: "Communication management:",
            details: [
                "Handle email notifications, messaging, and announcements.",
                "Manage user registration, account activation, and password resets."
            ]
        },
    ];

    return (
        <>
            {displayModifyRoleFirstModal && (
                <AcceptedModal
                    onClick={() => { setDisplayModifyRoleFirstModal(false) }}
                    body={
                        <ModifyRoleFirstModal
                            onClick={() => { setDisplayModifyRoleFirstModal(false) }}
                            onClick2={() => {
                                setDisplayModifyRoleFirstModal(false)
                                setDisplayModifyRoleSecondModal(true)
                            }}
                        />
                    }
                />
            )}
            {displayModifyRoleSecondModal && (
                <AcceptedModal
                    onClick={() => { setDisplayModifyRoleSecondModal(false) }}
                    body={
                        <ModifyRoleSecondModal
                            onClick={() => { setDisplayModifyRoleSecondModal(false) }}
                            onClick2={() => { setDisplayModifyRoleSecondModal(false) }}
                        />
                    }
                />
            )}
            <ProfileSectionContainer
                header="Administrator roles"
                paragraph="Learn about the responsibilities, and tasks of the user administrator."
            >
                <div className={classes.listContainer}>
                    <p>Role</p>
                    <h4>User admin</h4>
                    <p>Permissions</p>
                    <ol className={classes.numberList}>
                        {permissionsData.map((permission, index) => (
                            <li key={index}>
                                {permission.title}
                                <ul className={classes.discList}>
                                    {permission.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </div>
                <Button
                    type='null'
                    className={classes.modifyButton}
                    onClick={() => { setDisplayModifyRoleFirstModal(true) }}
                >Modify role</Button>
            </ProfileSectionContainer>
        </>

    )
}

export default ProfileAdministrationRole
import classes from './ProfileAdministrationRole.module.css'
import ProfileSectionContainer from '../../../Components/ProfileSectionContainer/ProfileSectionContainer';
import Button from '../../../Components/Button/Button';

const ProfileAdministrationRole = () => {
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
            <Button className={classes.modifyButton} type='null'>Modify role</Button>
        </ProfileSectionContainer>

    )
}

export default ProfileAdministrationRole
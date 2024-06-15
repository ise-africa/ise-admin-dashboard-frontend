import Button from '../../../../Components/Button/Button';
import classes from './ConfirmAdministratorDetailsModal.module.css'

type ConfirmAdministratorDetailsModalProps = {
    onClick: () => void;
    onClick2: () => void;
};

const ConfirmAdministratorDetailsModal = ({ onClick, onClick2 }: ConfirmAdministratorDetailsModalProps) => {
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
        <div className={classes.container}>
            <h3>Confirm administrator details </h3>
            <p>Please ensure all information is correct before creating the user account.</p>
            <ul>
                <li>
                    First Name:
                    <span>John</span>
                </li>
                <li>
                    Last Name:
                    <span>Doe</span>
                </li>
                <li>
                    Email:
                    <span> johndoe@gmail.com</span>
                </li>
            </ul>
            <div className={classes.role}>
                <p>Your Current Role:</p>
                <button>Super admin</button>
            </div>
            <div className={classes.listContainer}>
                <p>This user will be assigned the following permissions:</p>
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
            <div className={classes.buttonContainer}>
                <Button type="null" onClick={onClick}>Cancel</Button>
                <Button type="secondary" onClick={onClick}>Back to edit</Button>
                <Button onClick={onClick2}>Create account</Button>
            </div>
        </div>
    )
}

export default ConfirmAdministratorDetailsModal

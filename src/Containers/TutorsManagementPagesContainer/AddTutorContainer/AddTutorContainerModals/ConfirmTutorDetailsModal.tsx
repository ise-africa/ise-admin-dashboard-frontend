import Button from '../../../../Components/Button/Button';
import classes from './ConfirmTutorDetailsModal.module.css'

type ConfirmTutorDetailsModalProps = {
    onClick: () => void;
    onClick2: () => void;
};

const ConfirmTutorDetailsModal = ({ onClick, onClick2 }: ConfirmTutorDetailsModalProps) => {
    const permissionsData = [
        {
            title: "Tutor dashboard:",
            details: ["Access to a personalized dashboard that provides an overview of the tutor's courses, assignments, and other relevant information."]
        },
        {
            title: "Create, manage and grade assignments:",
            details: [
                "Permission to create new assignments, edit existing ones, and manage the assignment workflow.",
                " Permission to assess and grade assignments submitted by students."
            ]
        },
        {
            title: "Participate in communication and moderate discussions:",
            details: [
                "Permission to engage in course-related discussions with students or other tutors.",
                "Permission to send messages, announcements, or notifications to students."
            ]
        },
        {
            title: "Schedule and conduct sessions:",
            details: [
                "Authority to schedule and conduct virtual or in-person sessions, lectures, or tutorials.",
                "Manage user registration, account activation, and password resets."
            ]
        },
        {
            title: "Create and modify course content:",
            details: ["Permission to update or modify course content, including lecture materials and resources."]
        },
    ];

    return (
        <div className={classes.container}>
            <h3>Confirm tutor details </h3>
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
                <p>Role:</p>
                <h4>Tutor</h4>
            </div>
            <div className={classes.listContainer}>
                <p>Tutors have the following permissions:</p>
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
                <Button type="secondary" onClick={onClick}>Cancel</Button>
                <Button onClick={onClick2}>Create account</Button>
            </div>
        </div>
    )
}

export default ConfirmTutorDetailsModal

import Button from '../../../../Components/Button/Button';
import classes from './ViewPermissionModal.module.css'

type ViewPermissionModalProps = {
    onClick: () => void;
};

const ViewPermissionModal = ({ onClick }: ViewPermissionModalProps) => {
    const permissionsData = [
        {
            title: "Platform control and Administration",
            details: ["Total control over the entire platform."]
        },
        {
            title: "User account management",
            details: [
                "Assign roles and permissions to other admins.",
                "Oversee user management for both students and tutors."
            ]
        },
        {
            title: "School management",
            details: ["Create and manage schools within the platform."]
        },
        {
            title: "Payment management",
            details: ["Oversee platform payment processes and transactions."]
        },
        {
            title: "API integration and management",
            details: ["Supervise and set up third-party integrations and APIs."]
        },
        {
            title: "Platform settings and preference management",
            details: ["Configuration and maintenance of system settings and preferences."]
        }
    ];

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div>
                    <h2>View permissions</h2>
                    <svg onClick={onClick} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L13 1M1 1L13 13" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className={classes.role}>
                    <p>Your Current Role:</p>
                    <button>Super admin</button>
                </div>
            </div>

            <div className={classes.listContainer}>
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

            <div className={classes.footer}>
                <Button onClick={onClick} type="primary">
                    <span>Close</span>
                </Button>
            </div>
        </div>
    );
};

export default ViewPermissionModal
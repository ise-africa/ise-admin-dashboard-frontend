import Button from '../../../../Components/Button/Button';
import classes from './ViewPermissionModal.module.css'

type ViewPermissionModalProps = {
    onClick: () => void;
};

const ViewPermissionModal = ({ onClick }: ViewPermissionModalProps) => {

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
                    <li>
                        Platform control and Administration:
                        <ul className={classes.discList}>
                            <li>Total control over the entire platform.</li>
                        </ul>
                    </li>
                    <li>
                        User account management:
                        <ul className={classes.discList}>
                            <li>Assign roles and permissions to other admins.</li>
                            <li>Oversee user management for both students and tutors.</li>
                        </ul>
                    </li>
                    <li>
                        School management:
                        <ul className={classes.discList}>
                            <li>Create and manage schools within the platform.</li>
                        </ul>
                    </li>
                    <li>
                        Payment management:
                        <ul className={classes.discList}>
                            <li>Oversee platform payment processes and transactions.</li>
                        </ul>
                    </li>
                    <li>
                        API integration and management:
                        <ul className={classes.discList}>
                            <li>Supervise and set up third-party integrations and APIs.</li>
                        </ul>
                    </li>
                    <li>
                        Platform settings and preference management:
                        <ul className={classes.discList}>
                            <li>Configuration and maintenance of system settings and preferences.</li>
                        </ul>
                    </li>
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
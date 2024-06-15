import { useContext } from 'react';
import Button from '../../../../Components/Button/Button';
import classes from './ViewPermissionModal.module.css'
import { AppContext } from '../../../../Context/AppContext';

type ViewPermissionModalProps = {
    onClick: () => void;
};

const ViewPermissionModal = ({ onClick }: ViewPermissionModalProps) => {
    // Context
    const { adminData } = useContext(AppContext)

    const activeAdmin = adminData.find((data) => {
        return data.adminFullName
    })

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div>
                    <h2>View permissions</h2>
                    <svg onClick={onClick} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L13 1M1 1L13 13" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className={classes.role}>
                    <p>Your Current Role:</p>
                    <button>{activeAdmin?.adminRole}</button>
                </div>
            </div>

            <div className={classes.listContainer}>
                <p>Permissions</p>
                <ol className={classes.numberList}>
                    {activeAdmin?.permissionsData.map((permission, index) => (
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

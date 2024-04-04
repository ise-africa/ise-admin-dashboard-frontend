import { useNavigate } from "react-router-dom";
import classes from "./AdministratorBoard.module.css";
import HelloUser from "../../../Components/HelloUser/HelloUser";
import Button from "../../../Components/Button/Button";
import { useContext, useState } from "react";
import { AppContext } from "../../../Context/AppContext";
import ActionsModal from "./ActionsModal/ActionsModal";
import AcceptedModal from "../../../Components/Modals/AcceptedModal/AcceptedModal";
import ViewPermissionModal from "./ViewPermissionModal/ViewPermissionModal";
import SendInviteModal from "./SendInviteModal/SendInviteModal";
import SendInviteSuccessfulModal from "./SendInviteModal/SendInviteSuccessfulModal";
import ClosingAdminAccountModal from "./ClosingAdminAccountModal";

const AdministratorBoard = () => {
    const { adminData } = useContext(AppContext);
    const navigate = useNavigate();

    // States
    const [displayViewPermissionModal, setDisplayViewPermissionModal] = useState(false);
    const [displaySendInviteModal, setDisplaySendInviteModal] = useState(false);
    const [displaySendInviteSuccessfulModal, setDisplaySendInviteSuccessfulModal] = useState(false);
    const [displayClosingAdminAccountModal, setDisplayClosingAdminAccountModal] = useState(false);
    const [activeAdminIndex, setActiveAdminIndex] = useState<number | null>(null);

    const getStatusClass = (status: string) => {
        switch (status) {
            case 'pending':
                return classes.pending;
            default:
                return '';
        }
    };

    const handleOptionsToggle = (index: number) => {
        setActiveAdminIndex(activeAdminIndex === index ? null : index);
    };

    return (
        <>
            {displayViewPermissionModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplayViewPermissionModal(false);
                    }}
                    body={<ViewPermissionModal onClick={() => setDisplayViewPermissionModal(false)} />}
                />
            )}
            {displaySendInviteModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplaySendInviteModal(false);
                    }}
                    body={
                        <SendInviteModal
                            onClick={() => {
                                setDisplaySendInviteModal(false);
                            }}
                            onClick2={() => {
                                setDisplaySendInviteModal(false);
                                setDisplaySendInviteSuccessfulModal(true);
                            }}
                        />
                    }
                />
            )}
            {displaySendInviteSuccessfulModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplaySendInviteSuccessfulModal(false);
                    }}
                    body={<SendInviteSuccessfulModal onClick={() => setDisplaySendInviteSuccessfulModal(false)} />}
                />
            )}
            {displayClosingAdminAccountModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplayClosingAdminAccountModal(false);
                    }}
                    body={<ClosingAdminAccountModal onClick={() => setDisplayClosingAdminAccountModal(false)} />}
                />
            )}
            <div className={classes.container}>
                <HelloUser
                    includeButton={true}
                    header="Administrator board"
                    paragraph="Invite, assign, collaborate, and manage permissions for platform administrators."
                >
                    <Button onClick={() => navigate("/users/admins/add-admin")}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9 1V17M17 9L1 9"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span>Add administrator</span>
                    </Button>
                </HelloUser>

                <div className={classes.role}>
                    <p>Your Current Role:</p>
                    <button>Super admin</button>
                </div>

                <div className={classes.subContainer}>
                    <div className={classes.tableHeader}>
                        <span></span>
                        <span>Administrator</span>
                        <span>Role</span>
                        <span>Date Joined</span>
                        <span></span>
                    </div>

                    {adminData.map((data, index) => {
                        const statusClassName = getStatusClass(data.dateJoined);
                        return (
                            <div key={index} className={classes.tableBody}>
                                <div>
                                    <img src={data.adminImage} alt={data.adminFullName} />
                                </div>
                                <div className={classes.adminInfo}>
                                    <span>{data.adminFullName}</span>
                                    <span>{data.emailAddress}</span>
                                </div>
                                <div>
                                    <span>{data.adminRole}</span>
                                </div>
                                <div className={`${statusClassName} ${classes.status}`}>
                                    <mark>{data.dateJoined}</mark>
                                </div>
                                <div className={classes.moreOptionsContainer}>
                                    <svg
                                        onClick={() => handleOptionsToggle(index)}
                                        width="4"
                                        height="19"
                                        viewBox="0 0 4 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2 2.05859L2 2.06859M2 9.05859L2 9.06859M2 16.0586L2 16.0686M2 3.05859C1.44772 3.05859 1 2.61088 1 2.05859C1 1.50631 1.44772 1.05859 2 1.05859C2.55228 1.05859 3 1.50631 3 2.05859C3 2.61088 2.55228 3.05859 2 3.05859ZM2 10.0586C1.44771 10.0586 1 9.61088 1 9.05859C1 8.50631 1.44771 8.05859 2 10.05859C2.55228 8.05859 3 8.50631 3 9.05859C3 9.61088 2.55228 10.0586 2 10.0586ZM2 17.0586C1.44771 17.0586 0.999999 16.6109 0.999999 16.0586C0.999999 15.5063 1.44771 15.0586 2 15.0586C2.55228 15.0586 3 15.5063 3 16.0586C3 16.6109 2.55228 17.0586 2 17.0586Z"
                                            stroke="#2E2E2E"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    {activeAdminIndex === index && (
                                        <div className={classes.moreOptions}>
                                            <ActionsModal
                                                onClick={() => setDisplayViewPermissionModal(true)}
                                                onClick2={() => navigate(`/users/admins/${data.adminFullName.replaceAll(' ', '-').toLowerCase()}`)}
                                                onClick3={() => setDisplaySendInviteModal(true)}
                                                onClick4={() => setDisplayClosingAdminAccountModal(true)}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default AdministratorBoard;

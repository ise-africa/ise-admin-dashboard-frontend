import classes from "./AdministratorBoard.module.css"
import HelloUser from "../../../Components/HelloUser/HelloUser";
import Button from "../../../Components/Button/Button";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../../Context/AppContext";
import ActionsModal from "./ActionsModal/ActionsModal";
import { useNavigate, useParams } from "react-router-dom";
import AcceptedModal from "../../../Components/Modals/AcceptedModal/AcceptedModal";
import ViewPermissionModal from "./ViewPermissionModal/ViewPermissionModal";

const AdministratorBoard = () => {
    const { adminData } = useContext(AppContext)

    // States
    const [adminOptions, setAdminOptions] = useState(adminData)
    const [displayViewPermissionModal, setDisplayViewPermissionModal] = useState(false)
    const [displayReadyToSubmitModal, setDisplayReadyToSubmitModal] = useState(false)
    const [displaySubmissionSuccessfulModal, setDisplaySubmissionSuccessfulModal] = useState(false)

    // Router
    const navigate = useNavigate()

    // Refs
    const optionsRef = useRef<HTMLDivElement | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const optionsChangeHandler = (index: number) => {
        const adminOptionCopy = adminOptions.map((data, i) => {
            if (i === index) {
                return { ...data, displayOptions: !data.displayOptions };
            }
            return { ...data, displayOptions: false };
        });

        setAdminOptions(adminOptionCopy);
    };

    useEffect(() => {
        const removeOptions = (e: any) => {
            if (optionsRef && !optionsRef.current?.contains(e.target)) {
                const adminOptionCopy = adminOptions.map((data) => {
                    return { ...data, displayOptions: false }
                })
                setAdminOptions(adminOptionCopy)
            } else {
                const adminOptionCopy = adminOptions.map((data) => {
                    return { ...data }
                })
                setAdminOptions(adminOptionCopy)
            }
        }

        document.addEventListener('mousedown', removeOptions)

        return () => {
            document.removeEventListener('mousedown', removeOptions)
        }
    }, [adminOptions])

    const getStatusClass = (status: string) => {
        switch (status) {
            case 'pending':
                return classes.pending
        }
    }

    return (
        <>
            {displayViewPermissionModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplayViewPermissionModal(false)
                    }}
                    body={
                        <ViewPermissionModal
                            onClick={() => {
                                setDisplayViewPermissionModal(false)
                            }}
                        />
                    }
                />
            )}
            <div className={classes.container} ref={containerRef}>
                <HelloUser
                    includeButton={true}
                    header='Administrator board'
                    paragraph='Invite, assign, collaborate, and manage permissions for platform administrators.'
                >
                    <Button>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 1V17M17 9L1 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
                        const statusClassName = getStatusClass(data.joinedDate)
                        return (
                            <div key={index} className={classes.tableBody}>
                                <div>
                                    <img src={data.adminImage} alt={data.adminName} />
                                </div>
                                <div className={classes.adminInfo}>
                                    <span>{data.adminName}</span>
                                    <span>{data.emailAddress}</span>
                                </div>
                                <div>
                                    <span>{data.adminRole}</span>
                                </div>
                                <div className={`${statusClassName} ${classes.status}`}>
                                    <mark>{data.joinedDate}</mark>
                                </div>
                                <div className={classes.moreOptionsContainer}>
                                    <svg
                                        onClick={() => {
                                            optionsChangeHandler(index)
                                        }}
                                        width="4" height="19" viewBox="0 0 4 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 2.05859L2 2.06859M2 9.05859L2 9.06859M2 16.0586L2 16.0686M2 3.05859C1.44772 3.05859 1 2.61088 1 2.05859C1 1.50631 1.44772 1.05859 2 1.05859C2.55228 1.05859 3 1.50631 3 2.05859C3 2.61088 2.55228 3.05859 2 3.05859ZM2 10.0586C1.44771 10.0586 1 9.61088 1 9.05859C1 8.50631 1.44771 8.05859 2 8.05859C2.55228 8.05859 3 8.50631 3 9.05859C3 9.61088 2.55228 10.0586 2 10.0586ZM2 17.0586C1.44771 17.0586 0.999999 16.6109 0.999999 16.0586C0.999999 15.5063 1.44771 15.0586 2 15.0586C2.55228 15.0586 3 15.5063 3 16.0586C3 16.6109 2.55228 17.0586 2 17.0586Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    {data.displayOptions && (
                                        <div className={classes.moreOptions} ref={optionsRef}>
                                            <ActionsModal
                                                onClick={() => {
                                                    optionsChangeHandler(index);
                                                    setDisplayViewPermissionModal(true);
                                                }}
                                                onClick2={() => {
                                                    optionsChangeHandler(index);
                                                    // setDisplayViewPermissionModal(true);
                                                }}
                                                onClick3={() => {
                                                    optionsChangeHandler(index);
                                                    // setDisplayRejectSubmissionModal(true);
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
};

export default AdministratorBoard
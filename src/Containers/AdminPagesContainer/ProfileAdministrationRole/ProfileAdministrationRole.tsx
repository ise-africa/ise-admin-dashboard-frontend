import classes from './ProfileAdministrationRole.module.css'
import ProfileSectionContainer from '../../../Components/ProfileSectionContainer/ProfileSectionContainer';
import Button from '../../../Components/Button/Button';
import { useContext, useState } from 'react';
import AcceptedModal from '../../../Components/Modals/AcceptedModal/AcceptedModal';
import ModifyRoleFirstModal from './ModifyRoleModals/ModifyRoleFirstModal';
import ModifyRoleSecondModal from './ModifyRoleModals/ModifyRoleSecondModal';
import ModifyRoleThirdModal from './ModifyRoleModals/ModifyRoleThirdModal';
import { AppContext } from '../../../Context/AppContext';
import { useParams } from 'react-router-dom';

const ProfileAdministrationRole = () => {

    const [displayModifyRoleFirstModal, setDisplayModifyRoleFirstModal] = useState(false)
    const [displayModifyRoleSecondModal, setDisplayModifyRoleSecondModal] = useState(false)
    const [displayModifyRoleThirdModal, setDisplayModifyRoleThirdModal] = useState(false)

    // Context
    const { adminData } = useContext(AppContext)

    // Router
    const { AdminId } = useParams()

    const activeAdmin = adminData.find((data) => {
        return data.adminFullName.replace(' ', '-').toLowerCase() === AdminId
    })

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
                            onClick={() => {
                                setDisplayModifyRoleFirstModal(true)
                                setDisplayModifyRoleSecondModal(false)
                            }}
                            onClick2={() => {
                                setDisplayModifyRoleSecondModal(false)
                                setDisplayModifyRoleThirdModal(true)
                            }}
                        />
                    }
                />
            )}
            {displayModifyRoleThirdModal && (
                <AcceptedModal
                    onClick={() => { setDisplayModifyRoleThirdModal(false) }}
                    body={
                        <ModifyRoleThirdModal
                            onClick={() => { setDisplayModifyRoleThirdModal(false) }}
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
                    <h4>{activeAdmin?.adminRole}</h4>
                    <p>Permissions</p>
                    <ol className={classes.numberList}>
                        {activeAdmin && activeAdmin.permissionsData.map((permission, index) => (
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
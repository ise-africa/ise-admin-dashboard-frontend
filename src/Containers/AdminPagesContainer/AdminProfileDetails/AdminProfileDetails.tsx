import { useContext } from 'react'
import classes from './AdminProfileDetails.module.css'
import ProfileSectionContainer from '../../../Components/ProfileSectionContainer/ProfileSectionContainer'
import amdimImage from '../../../Assets/Images/johnDoeSenderAvatar.svg'
import emailIcon from '../../../Assets/Images/emailIconImage.png'
import linkedInIcon from '../../../Assets/Images/linkedInIconImage.png'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../../Context/AppContext'

const AdminProfileDetails = () => {
    // Context
    const { adminData } = useContext(AppContext)

    // Router
    const { AdminId } = useParams()

    const activeAdmin = adminData.find((data) => {
        return data.adminFullName.replace(' ', '-').toLowerCase() === AdminId
    })

    return (
        <ProfileSectionContainer
            header="Profile"
            paragraph="Edit administrator’s basic profile information"
        >
            <div className={classes.userDetails}>
                <div className={classes.userInfo}>
                    <img src={amdimImage} alt="User" />
                    <h3>{activeAdmin?.adminFullName}</h3>
                </div>
                <div className={classes.about}>
                    <h4>About</h4>
                    <p>{activeAdmin?.adminAbout}</p>
                </div>
                <div className={classes.links}>
                    <h4>Links</h4>
                    <div>
                        <a href={`mailto:${activeAdmin?.emailAddress}`} target="_blank" rel="noopener noreferrer">
                            <img src={emailIcon} alt="Email" />
                        </a>
                        <a href={activeAdmin?.linkedInUrl} target="_blank" rel="noopener noreferrer">
                            <img src={linkedInIcon} alt="Linkedin url" />
                        </a>
                    </div>
                </div>
            </div>
        </ProfileSectionContainer>
    )
}

export default AdminProfileDetails
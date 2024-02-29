import classes from './AdminProfileDetails.module.css'
import ProfileSectionContainer from '../../../Components/ProfileSectionContainer/ProfileSectionContainer'
import amdimImage from '../../../Assets/Images/johnDoeSenderAvatar.svg'
import emailIcon from '../../../Assets/Images/emailIconImage.png'
import linkedInIcon from '../../../Assets/Images/linkedInIconImage.png'

const AdminProfileDetails = () => {
    return (
        <ProfileSectionContainer
            header="Profile"
            paragraph="Edit administrator’s basic profile information"
        >
            <div className={classes.userDetails}>
                <div className={classes.userInfo}>
                    <img src={amdimImage} alt="User" />
                    <h3>Kenneth Uwakwe</h3>
                </div>
                <div className={classes.about}>
                    <h4>About</h4>
                    <p>I love helping people navigate the UX world – it can be tough out there, and we all need some guidance. Everyone deserves an opportunity to get a step closer to their dreams.</p>
                </div>
                <div className={classes.links}>
                    <h4>Links</h4>
                    <div>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <img src={emailIcon} alt="Email" />
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedInIcon} alt="Linkedin url" />
                        </a>
                    </div>
                </div>
            </div>
        </ProfileSectionContainer>
    )
}

export default AdminProfileDetails
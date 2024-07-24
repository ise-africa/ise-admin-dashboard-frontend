import classes from "./AdminProfileDetails.module.css";
import ProfileSectionContainer from "../../../Components/ProfileSectionContainer/ProfileSectionContainer";
import emailIcon from "../../../Assets/Images/emailIconImage.png";
import linkedInIcon from "../../../Assets/Images/linkedInIconImage.png";

type AdminProfileDetailsType = {
  data: any;
};

const AdminProfileDetails = ({ data }: AdminProfileDetailsType) => {
  return (
    <ProfileSectionContainer
      header="Profile"
      paragraph="Edit administrator’s basic profile information"
    >
      <div className={classes.userDetails}>
        <div className={classes.userInfo}>
          <h3>
            {data?.first_name} {data?.last_name}
          </h3>
        </div>
        <div className={classes.about}>
          <h4>About</h4>
          <p>{data?.description || "No description"}</p>
        </div>
        <div className={classes.links}>
          <h4>Links</h4>
          <div>
            <a
              href={`mailto:${data?.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={emailIcon} alt="Email" />
            </a>
            <a href={data?.linkedIn} target="_blank" rel="noopener noreferrer">
              <img src={linkedInIcon} alt="Linkedin url" />
            </a>
          </div>
        </div>
      </div>
    </ProfileSectionContainer>
  );
};

export default AdminProfileDetails;

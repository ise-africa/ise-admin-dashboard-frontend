import { useState } from 'react';
import Button from '../../../Components/Button/Button';
import Input from '../../../Components/Input/Input';
import ProfileSectionContainer from '../../../Components/ProfileSectionContainer/ProfileSectionContainer';
import classes from './AddAdminContainer.module.css'
import AcceptedModal from '../../../Components/Modals/AcceptedModal/AcceptedModal';
import RoleCreatedModal from './AddAdminContainerModals/RoleCreatedModal';
import ConfirmAdministratorDetailsModal from './AddAdminContainerModals/ConfirmAdministratorDetailsModal';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../../../Components/Checkbox/Checkbox';
const AddAdminContainer = () => {
  const navigate = useNavigate();
  const [displayConfirmAdministratorDetailsModal, setDisplayConfirmAdministratorDetailsModal] = useState(false)
  const [displayRoleCreatedModal, setDisplayRoleCreatedModal] = useState(false)

  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const newRole = [
    {
      isActive: true,
      title: "Content administrator",
      duties: [
        {
          title: "User account management:",
          details: ["Creation, modification, and deletion of student and tutor accounts."]
        },
        {
          title: "Students' enrollment:",
          details: ["Manage the enrollment process for students."]
        },
        {
          title: "Data reports and insights:",
          details: ["Generate reports from the dashboard to support decision-making."]
        },
        {
          title: "Communication management:",
          details: [
            "Handle email notifications, messaging, and announcements.",
            "Manage user registration, account activation, and password resets."
          ]
        },
      ]
    },
    {
      isActive: false,
      title: "Support administrator",
      duties: [
        {
          title: "User account management:",
          details: ["Creation, modification, and deletion of student and tutor accounts."]
        },
        {
          title: "Students' enrollment:",
          details: ["Manage the enrollment process for students."]
        },
        {
          title: "Data reports and insights:",
          details: ["Generate reports from the dashboard to support decision-making."]
        },
        {
          title: "Communication management:",
          details: [
            "Handle email notifications, messaging, and announcements.",
            "Manage user registration, account activation, and password resets."
          ]
        },
      ]
    },
    {
      isActive: false,
      title: "Community administrator",
      duties: [
        {
          title: "User account management:",
          details: ["Creation, modification, and deletion of student and tutor accounts."]
        },
        {
          title: "Students' enrollment:",
          details: ["Manage the enrollment process for students."]
        },
        {
          title: "Data reports and insights:",
          details: ["Generate reports from the dashboard to support decision-making."]
        },
        {
          title: "Communication management:",
          details: [
            "Handle email notifications, messaging, and announcements.",
            "Manage user registration, account activation, and password resets."
          ]
        },
      ]
    }
  ]
  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      {displayConfirmAdministratorDetailsModal && (
        <AcceptedModal
          onClick={() => { setDisplayConfirmAdministratorDetailsModal(false) }}
          body={
            <ConfirmAdministratorDetailsModal
              onClick={() => { setDisplayConfirmAdministratorDetailsModal(false) }}
              onClick2={() => {
                setDisplayConfirmAdministratorDetailsModal(false)
                setDisplayRoleCreatedModal(true)
              }}
            />
          }
        />
      )}
      {displayRoleCreatedModal && (
        <AcceptedModal
          onClick={() => { setDisplayRoleCreatedModal(false) }}
          body={
            <RoleCreatedModal
              onClick={() => {
                navigate('/users/admins')
                setDisplayRoleCreatedModal(false)
              }}
            />
          }
        />
      )}
      <section className={classes.container}>
        <div className={classes.header}>
          <h1>Add new administrator</h1>
          <p>Add new administrators to the platform. Input their details and assign roles for specific permissions.</p>
        </div>

        <div className={classes.body}>
          <ProfileSectionContainer
            header="Administrator information"
            paragraph="Add administrator details to create an account."
          >
            <Input
              isRequired
              type="text"
              label="First name"
              placeholder="E.g John"
            />
            <Input
              isRequired
              type="text"
              label="Last name"
              placeholder="E.g Doe"
            />
            <Input
              isRequired
              type="email"
              label="Email address"
              placeholder="E.g adminstratorname@gmail.com"
            />
          </ProfileSectionContainer>
          <ProfileSectionContainer
            header="Administrator roles"
            paragraph="Assign a role to specify access, responsibilities and tasks for each administrator."
          >
            {newRole.map((data, i) => (
              <div key={i} className={classes.selectRole}>
                <Checkbox
                  isChecked={data.isActive}
                  onChange={() => { }}
                />
                <p>{data.title}</p>
                {activeDropdown === i ? (
                  <svg
                    onClick={() => toggleDropdown(i)}
                    width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8L8 0.999999L15 8" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg
                    onClick={() => toggleDropdown(i)}
                    width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 14.5H10V10.5H9M10 6.5H10.01M19 10.5C19 15.4706 14.9706 19.5 10 19.5C5.02944 19.5 1 15.4706 1 10.5C1 5.52944 5.02944 1.5 10 1.5C14.9706 1.5 19 5.52944 19 10.5Z" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                <div
                  className={classes.listContainer}
                  style={{ maxHeight: activeDropdown === i ? "300px" : "0px", overflowY: "auto" }}
                >
                  <ol className={classes.numberList}>
                    {data.duties.map((datum, j) => (
                      <li key={j}>
                        {datum.title}
                        <ul className={classes.discList}>
                          {datum.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </ProfileSectionContainer>
          <div className={classes.buttonContainer}>
            <Button
              type='secondary'
              onClick={() => { navigate('/users/admins') }}>Cancel</Button>
            <Button
              type='primary'
              onClick={() => { setDisplayConfirmAdministratorDetailsModal(true) }}>Continue</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddAdminContainer;

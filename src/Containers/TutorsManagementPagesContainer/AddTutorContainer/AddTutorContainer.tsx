import { useState } from 'react';
import Button from '../../../Components/Button/Button';
import Input from '../../../Components/Input/Input';
import ProfileSectionContainer from '../../../Components/ProfileSectionContainer/ProfileSectionContainer';
import classes from './AddTutorContainer.module.css'
import AcceptedModal from '../../../Components/Modals/AcceptedModal/AcceptedModal';
import ConfirmAdministratorDetailsModal from './AddTutorContainerModals/ConfirmTutorDetailsModal';
import { useNavigate } from 'react-router-dom';
import TutorAccountCreatedModal from './AddTutorContainerModals/TutorAccountCreatedModal';

const AddTutorContainer = () => {
  const navigate = useNavigate();
  const [displayConfirmAdministratorDetailsModal, ConfirmTutorDetailsModal] = useState(false)
  const [displayTutorAccountCreatedModal, setDisplayTutorAccountCreatedModal] = useState(false)

  return (
    <>
      {displayConfirmAdministratorDetailsModal && (
        <AcceptedModal
          onClick={() => { ConfirmTutorDetailsModal(false) }}
          body={
            <ConfirmAdministratorDetailsModal
              onClick={() => { ConfirmTutorDetailsModal(false) }}
              onClick2={() => {
                ConfirmTutorDetailsModal(false)
                setDisplayTutorAccountCreatedModal(true)
              }}
            />
          }
        />
      )}
      {displayTutorAccountCreatedModal && (
        <AcceptedModal
          onClick={() => { setDisplayTutorAccountCreatedModal(false) }}
          body={
            <TutorAccountCreatedModal
              onClick={() => {
                setDisplayTutorAccountCreatedModal(false)
                navigate('/users/tutors')
              }}
            />
          }
        />
      )}
      <section className={classes.container}>
        <div className={classes.header}>
          <h1>Add new tutor</h1>
          <p>Add new tutor to the platform. Input their details and assign roles for specific permissions.</p>
        </div>

        <div className={classes.body}>
          <ProfileSectionContainer
            header="Tutor information"
            paragraph="Add personal details to create an account."
          >
            <Input
              type="text"
              label="First name *"
              placeholder="E.g John"
            />
            <Input
              type="text"
              label="Last name *"
              placeholder="E.g Doe"
            />
            <Input
              type="email"
              label="Email address *"
              placeholder="E.g name@gmail.com"
            />
          </ProfileSectionContainer>

          <div className={classes.buttonContainer}>
            <Button
              type='secondary'
              onClick={() => { navigate('/users/tutors') }}>Cancel</Button>
            <Button
              type='primary'
              onClick={() => { ConfirmTutorDetailsModal(true) }}>Continue</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddTutorContainer;

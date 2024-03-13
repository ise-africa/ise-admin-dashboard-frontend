import { useState } from 'react';
import Button from '../../../Components/Button/Button';
import Input from '../../../Components/Input/Input';
import ProfileSectionContainer from '../../../Components/ProfileSectionContainer/ProfileSectionContainer';
import classes from './AddStudentContainer.module.css'
import AcceptedModal from '../../../Components/Modals/AcceptedModal/AcceptedModal';
import { useNavigate } from 'react-router-dom';
import ConfirmStudentDetailsModal from './AddStudentContainerModals/ConfirmStudentDetailsModal';
import StudentAccountCreatedModal from './AddStudentContainerModals/StudentAccountCreatedModal';

const AddStudentContainer = () => {
  const navigate = useNavigate();
  const [displayConfirmAdministratorDetailsModal, setDisplayConfirmStudentDetailsModal] = useState(false)
  const [displayTutorAccountCreatedModal, setDisplayTutorAccountCreatedModal] = useState(false)

  return (
    <>
      {displayConfirmAdministratorDetailsModal && (
        <AcceptedModal
          onClick={() => { setDisplayConfirmStudentDetailsModal(false) }}
          body={
            <ConfirmStudentDetailsModal
              onClick={() => { setDisplayConfirmStudentDetailsModal(false) }}
              onClick2={() => {
                setDisplayConfirmStudentDetailsModal(false)
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
            <StudentAccountCreatedModal
              onClick={() => {
                setDisplayTutorAccountCreatedModal(false)
                navigate('/users/students')
              }}
            />
          }
        />
      )}
      <section className={classes.container}>
        <div className={classes.header}>
          <h1>Add new student</h1>
          <p> Input student details and assign a username and password to them.</p>
        </div>

        <div className={classes.body}>
          <ProfileSectionContainer
            header="Student information"
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
              onClick={() => { navigate('/users/students') }}>Cancel</Button>
            <Button
              type='primary'
              onClick={() => { setDisplayConfirmStudentDetailsModal(true) }}>Continue</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddStudentContainer;

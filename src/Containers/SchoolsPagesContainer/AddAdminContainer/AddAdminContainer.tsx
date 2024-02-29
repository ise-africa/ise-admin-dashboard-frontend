import Button from '../../../Components/Button/Button';
import Input from '../../../Components/Input/Input';
import ProfileSectionContainer from '../../../Components/ProfileSectionContainer/ProfileSectionContainer';
import classes from './AddAdminContainer.module.css'
const AddAdminContainer = () => {
  return (
    <>
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
              placeholder="E.g adminstratorname@gmail.com"
            />
          </ProfileSectionContainer>
          <ProfileSectionContainer
            header="Administrator roles"
            paragraph="Assign a role to specify access, responsibilities and tasks for each administrator."
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
              placeholder="E.g adminstratorname@gmail.com"
            />
          </ProfileSectionContainer>
          <div className={classes.buttonContainer}>
            <Button type='secondary'>Cancel</Button>
            <Button type='primary'>Continue</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddAdminContainer;

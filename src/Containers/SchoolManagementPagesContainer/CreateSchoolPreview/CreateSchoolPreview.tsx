import { useSearchParams } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import classes from "../CreateSchoolAddDetails/CreateSchoolAddDetails.module.css";
import SchoolCreatingLayout from "../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import schoolImage from '../../../Assets/Images/schoolImage.svg'
const CreateSchoolPreview = () => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <SchoolCreatingLayout>

      <section className={classes.container}>
        <h2>Review school information</h2>

        <div className={classes.textSection}>
          <div>
            <span>Name of school</span>
            <p>iṣẹ́ School of Business</p>
          </div>
          <div>
            <span>School tagline</span>
            <p>Help business grow</p>
          </div>
          <div>
            <span>School description</span>
            <p>Ignite your business potential with our resources at iṣẹ́ School of Business. Gain the knowledge and skills to thrive in the dynamic world of commerce. Lead and achieve greatness with essential business skills.</p>
          </div>
          <div>
            <span>School name</span>
            <p>School of Business</p>
          </div>
          <div>
            <span>School image</span>
            <img src={schoolImage} alt="School cover" />
          </div>
          <div>
            <span>Importance of joining the school</span>
            <p>Embark on a transformative learning journey with our courses in talent acquisition, customer success and project management.</p>
            <ul>
              <li>Master the art of talent acquisition for business success.</li>
              <li>Develop practical skills in managing customer expectations and supporting business goals.</li>
              <li>Acquire expertise in managing projects and delivering results.</li>
              <li>Gain valuable skills for real-world projects</li>
              <li>Choose between a free short course or a comprehensive paid program</li>
            </ul>
          </div>
        </div>

        <div className={`${classes.buttonSection} ${classes.buttonSectionThree}`}>
          <Button
            type="null"
            onClick={() => { }}
          >
            <span>Cancel</span>
          </Button>
          <Button
            type="secondary"
            onClick={() => { setSearchParams({ step: "2" }); }}
          >
            <span>Edit Information</span>
          </Button>
          <Button
            onClick={() => { }}
          >
            <span>Create School</span>
          </Button>
        </div>
      </section>
    </SchoolCreatingLayout>

  );
};

export default CreateSchoolPreview;

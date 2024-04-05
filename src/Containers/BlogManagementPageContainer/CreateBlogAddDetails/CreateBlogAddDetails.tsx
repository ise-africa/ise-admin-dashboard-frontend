import SchoolCreatingLayout from "../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import classes from "./CreateBlogAddDetails.module.css";
import Button from "../../../Components/Button/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import Input from "../../../Components/Input/Input";

type CreateBlogAddDetailsProps = {
  title?: string;
}

const CreateBlogAddDetails = ({
  title,
}: CreateBlogAddDetailsProps) => {
  // Navigate
  const navigate = useNavigate();

  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <SchoolCreatingLayout steps={[1, 2, 3]}>
      <section className={classes.container}>
        <h2>Create blogpost content</h2>
        <p>Start blogposts with suitable titles and create your content here</p>

        <div>
          <Input
            isRequired
            value={title}
            maxLength={100}
            label="Blogpost title (Maximum character count: 100)"
            placeholder="E.g 5 ways to document your website codes"
          />

          <h1>Text Editor</h1>
        </div>

        <div className={classes.buttonSection}>
          <Button
            type="secondary"
            onClick={() => {
              navigate("/blogs");
            }}
          >
            <span>Cancel</span>
          </Button>
          <Button
            onClick={() => {
              setSearchParams({ step: "2" });
            }}
          >
            <span>Next</span>
          </Button>
        </div>
      </section>
    </SchoolCreatingLayout>
  );
};

export default CreateBlogAddDetails;

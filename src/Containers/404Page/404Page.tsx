import classes from "./404Page.module.css";
import errorImage from "../../Assets/Images/404Image.svg"
import Layout from "../../Components/Layout/Layout";


const ErrorPage = () => {
  return (
    <Layout>
      <section className={classes.container}>
        <img src={errorImage} alt="Page not found" />
        <h4>Coming soon!</h4>
        <p>
          We are developing this feature and it’ll be available soon. Thank you for waiting patiently. We’re working to give you the best experience.
        </p>
      </section>
    </Layout>
  );
};

export default ErrorPage;

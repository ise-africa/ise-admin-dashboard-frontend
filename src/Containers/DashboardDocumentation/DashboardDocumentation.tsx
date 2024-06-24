import Button from "../../Components/Button/Button";
import classes from "./DashboardDocumentation.module.css";
import videoThumbnail from "../../Assets/Images/videoThumbnail.svg";

const DashboardDocumentation = () => {
  return (
    <section className={classes.container}>
      <div>
        <div>
          <h4>Watch our demo video</h4>
          <p>
            Learn how to navigate your dashboard features and work efficiently
          </p>
          <Button type="secondary">
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 5L17.5528 2.72361C18.2177 2.39116 19 2.87465 19 3.61803V10.382C19 11.1253 18.2177 11.6088 17.5528 11.2764L13 9M3 13H11C12.1046 13 13 12.1046 13 11V3C13 1.89543 12.1046 1 11 1H3C1.89543 1 1 1.89543 1 3V11C1 12.1046 1.89543 13 3 13Z"
                stroke="#664EFE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Watch video</span>
          </Button>
        </div>

        <img src={videoThumbnail} alt="Tutorial video" />
      </div>

      <div>
        <div>
          <h4>Documentation</h4>
          <p>
            Read more about how the platform works from our knowledge base
            records
          </p>
          <Button type="null">
            <span>Read documentation</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z"
                stroke="#664EFE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DashboardDocumentation;

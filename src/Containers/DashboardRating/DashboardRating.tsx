import DropdownWithSearch from "../../Components/DropdownWithSearch/DropdownWithSearch";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import classes from "./DashboardRating.module.css";

type RatingStarsProps = {
  rating: number;
  size?: string;
};

export const RatingStars = ({ rating, size }: RatingStarsProps) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((data, i) => {
        if (data <= rating) {
          return (
            <svg
              width={size}
              height={size}
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              key={i}
            >
              <path
                d="M6.04895 2.42664C6.34833 1.50538 7.65167 1.50538 7.95105 2.42664L8.57175 4.33672C8.70563 4.74872 9.08956 5.02766 9.52276 5.02767L11.5312 5.02775C12.4998 5.02778 12.9026 6.26733 12.1189 6.83674L10.4942 8.01732C10.1437 8.27196 9.99705 8.72329 10.1309 9.13529L10.7515 11.0454C11.0508 11.9667 9.99634 12.7328 9.21264 12.1634L7.58775 10.983C7.23728 10.7284 6.76272 10.7284 6.41225 10.983L4.78736 12.1634C4.00366 12.7328 2.94924 11.9667 3.24854 11.0454L3.8691 9.13529C4.00295 8.72329 3.8563 8.27196 3.50585 8.01732L1.88106 6.83674C1.0974 6.26733 1.50015 5.02778 2.46884 5.02775L4.47724 5.02767C4.91044 5.02766 5.29437 4.74872 5.42825 4.33672L6.04895 2.42664Z"
                fill="#FDC500"
                stroke="#FDC500"
                strokeWidth="1.5"
              />
            </svg>
          );
        } else {
          return (
            <svg
              width={size}
              height={size}
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              key={i}
            >
              <path
                d="M6.04895 2.42664C6.34833 1.50538 7.65167 1.50538 7.95104 2.42664L8.57175 4.33672C8.70563 4.74872 9.08956 5.02766 9.52276 5.02767L11.5312 5.02775C12.4998 5.02778 12.9026 6.26733 12.1189 6.83674L10.4942 8.01732C10.1437 8.27196 9.99705 8.72329 10.1309 9.13529L10.7515 11.0454C11.0508 11.9667 9.99634 12.7328 9.21264 12.1634L7.58775 10.983C7.23728 10.7284 6.76272 10.7284 6.41225 10.983L4.78736 12.1634C4.00366 12.7328 2.94924 11.9667 3.24854 11.0454L3.8691 9.13529C4.00295 8.72329 3.8563 8.27196 3.50585 8.01732L1.88106 6.83674C1.0974 6.26733 1.50015 5.02778 2.46884 5.02775L4.47724 5.02767C4.91044 5.02766 5.29437 4.74872 5.42825 4.33672L6.04895 2.42664Z"
                stroke="#FDC500"
                strokeWidth="1.5"
              />
            </svg>
          );
        }
      })}
    </div>
  );
};

const DashboardRating = () => {
  // Utils
  const rating = [
    { title: 5, rating: 50 },
    { title: 4, rating: 25 },
    { title: 3, rating: 75 },
    { title: 2, rating: 15 },
    { title: 1, rating: 3 },
  ];

  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <h4>Overall course rating</h4>
        <DropdownWithSearch
          title="Choose course"
          options={["Overall", "Average"]}
        />
      </div>

      <div className={classes.overall}>
        <h2>4.6</h2>
        <div>
          <RatingStars rating={4} size={"25"} />
        </div>
        <p>Overall course ratings</p>
      </div>

      <div className={classes.rateSection}>
        {rating.map((data, i) => {
          return (
            <div className={classes.rate} key={i}>
              <div>
                <RatingStars rating={data.title} size={"16"} />
              </div>
              <div>
                <ProgressBar percentage={data.rating} notShowPercentage />
              </div>
              <p>{data.rating}%</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DashboardRating;

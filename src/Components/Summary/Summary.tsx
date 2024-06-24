import DropdownWithSearch from "../DropdownWithSearch/DropdownWithSearch";
import classes from "./Summary.module.css";

type SummaryProps = {
  data: { title: string; value: string; infoTip?: string }[];
  showDropdown?: boolean;
  title: string;
};

const Summary = ({ data, showDropdown, title }: SummaryProps) => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <h4>{title || "Title"}</h4>
        {showDropdown && (
          <DropdownWithSearch
            options={["Yesterday", "Last 7 days"]}
            title="Last 7 days"
          />
        )}
      </div>

      <div className={classes.analyticsSection}>
        {data?.map((data, i) => {
          return (
            <div className={classes.overview}>
              <h4>{data.value}</h4>
              <p>{data.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Summary;

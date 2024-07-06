import DropdownWithSearch from "../../Components/DropdownWithSearch/DropdownWithSearch";
import Input from "../../Components/Input/Input";
import classes from "./RevenueDateAndCurrency.module.css";

const RevenueDateAndCurrency = () => {
  return (
    <section className={classes.container}>
      <Input label="Date" type="date" />
      <DropdownWithSearch
        title="NGN"
        options={["NGN", "USD"]}
        label="Currency"
      />
    </section>
  );
};

export default RevenueDateAndCurrency;

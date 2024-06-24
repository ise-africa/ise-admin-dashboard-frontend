import classes from "./RadioButton.module.css";
import { ChangeEventHandler } from "react";

type RadioButtonProps = {
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  readonly?: boolean;
  id?: string;
};

const RadioButton = ({ checked, onChange, readonly, id }: RadioButtonProps) => {
  return (
    <label className={classes.container}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        readOnly={readonly}
      />
      <span className={classes.checkmark}></span>
    </label>
  );
};

export default RadioButton;

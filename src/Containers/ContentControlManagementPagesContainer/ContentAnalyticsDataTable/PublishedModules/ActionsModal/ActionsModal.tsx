import Loader from "../../../../../Components/Loader/Loader";
import classes from "./ActionsModal.module.css";

type ActionsModalProps = {
  onClick?: () => void;
  onClick2?: () => void;
  onClick3?: () => void;
  isLoading: boolean;
  isPublished?: boolean;
};

const ActionsModal = ({
  onClick,
  onClick2,
  onClick3,
  isLoading,
  isPublished,
}: ActionsModalProps) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={classes.container}>
      <span onClick={onClick}>View details</span>
      <span onClick={onClick2}>
        {isPublished ? "Reverse submission" : "Publish"}
      </span>
      <span onClick={onClick3}>Delete module</span>
    </div>
  );
};

export default ActionsModal;

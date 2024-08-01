import Button from "../../../../Components/Button/Button";
import classes from "./ViewPermissionModal.module.css";
import { capitalize } from "../../../../HelperFunctions/capitalize";
import { roles } from "../../AddAdminContainer/AddAdminContainer";

type ViewPermissionModalProps = {
  onClick: () => void;
  admins: any[];
  activeAdminId: string | null;
};

const ViewPermissionModal = ({
  onClick,
  admins,
  activeAdminId,
}: ViewPermissionModalProps) => {
  const activeAdmin = admins?.find((data) => {
    return data.id === activeAdminId;
  });

  const permissions = roles.find((data) => {
    return data?.slug === activeAdmin?.role;
  });

  console.log(permissions, activeAdmin);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div>
          <h2>View permissions</h2>
          <svg
            onClick={onClick}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 13L13 1M1 1L13 13"
              stroke="#2E2E2E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={classes.role}>
          <p>Your Current Role:</p>
          <button>{capitalize(activeAdmin?.role)}</button>
        </div>
      </div>

      <div className={classes.listContainer}>
        <p>Permissions</p>
        <div className={classes.numberList}>
          {permissions && (
            <ul className={classes.discList}>
              {permissions?.duties?.map((detail, idx) => (
                <div key={idx} className={classes.duties}>
                  <h4>{detail?.title}</h4>

                  <ul>
                    {detail?.details?.map((data) => {
                      return <li key={data}>{data}</li>;
                    })}
                  </ul>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className={classes.footer}>
        <Button onClick={onClick} type="primary">
          <span>Close</span>
        </Button>
      </div>
    </div>
  );
};

export default ViewPermissionModal;

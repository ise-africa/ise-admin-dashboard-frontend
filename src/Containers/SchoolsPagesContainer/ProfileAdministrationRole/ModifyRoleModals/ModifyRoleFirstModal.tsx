import Button from "../../../../Components/Button/Button";
import classes from "./ModifyRoleModals.module.css"
import Checkbox from "../../../../Components/Checkbox/Checkbox";

type ModifyRoleFirstModalProps = {
    onClick: () => void;
    onClick2: () => void;
};

const ModifyRoleFirstModal = ({
    onClick,
    onClick2,
}: ModifyRoleFirstModalProps) => {
    const newRole = [
        {
            isActive: true,
            title: "Content administrator",
            svg: <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 14.5H10V10.5H9M10 6.5H10.01M19 10.5C19 15.4706 14.9706 19.5 10 19.5C5.02944 19.5 1 15.4706 1 10.5C1 5.52944 5.02944 1.5 10 1.5C14.9706 1.5 19 5.52944 19 10.5Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
        {
            isActive: false,
            title: "Support administrator",
            svg: <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 14.5H10V10.5H9M10 6.5H10.01M19 10.5C19 15.4706 14.9706 19.5 10 19.5C5.02944 19.5 1 15.4706 1 10.5C1 5.52944 5.02944 1.5 10 1.5C14.9706 1.5 19 5.52944 19 10.5Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
        {
            isActive: false,
            title: "Community administrator",
            svg: <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 14.5H10V10.5H9M10 6.5H10.01M19 10.5C19 15.4706 14.9706 19.5 10 19.5C5.02944 19.5 1 15.4706 1 10.5C1 5.52944 5.02944 1.5 10 1.5C14.9706 1.5 19 5.52944 19 10.5Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        }
    ]
    return (
        <div className={classes.container}>
            <h3>Modify Role</h3>
            <p> Reassign administrator roles and refine as needed</p>
            <div className={classes.role}>
                <p>Your Current Role:</p>
                <button>Super admin</button>
            </div>
            <div>
                <p>Select new role</p>
                {newRole.map((data, i) => (
                    <div key={i} className={classes.selectRole}>
                        <Checkbox
                            isChecked={data.isActive}
                            onChange={() => { }}
                        />
                        <p>{data.title}</p>
                        {data.svg}
                    </div>
                ))}
            </div>
            <div className={classes.buttonContainer}>
                <Button type="secondary" onClick={onClick}>Cancel</Button>
                <Button onClick={onClick2}>Continue</Button>
            </div>
        </div>
    )
}

export default ModifyRoleFirstModal
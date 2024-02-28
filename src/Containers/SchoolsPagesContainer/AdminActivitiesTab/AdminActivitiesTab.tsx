import classes from "./AdminActivitiesTab.module.css"

const AdminActivitiesTab = () => {
    const activitiesData = [
        {
            time: "11:01AM",
            date: "12 Oct, 2023",
            action: `Modified roles and permissions for "Bob Johnson"`,
        },
        {
            time: "11:01AM",
            date: "12 Oct, 2023",
            action: `Modified roles and permissions for "Bob Johnson"`,
        },
        {
            time: "11:01AM",
            date: "12 Oct, 2023",
            action: `Modified roles and permissions for "Bob Johnson"`,
        },
    ]
    return (
        <div className={classes.container}>
            <div className={classes.tableHeader}>
                <span>Date</span>
                <span>Time</span>
                <span>Actions</span>
            </div>
            {activitiesData.map((data, i) => (
                <div className={classes.tableBody}>
                    <span>
                        <p>{data.date}</p>
                        <p>{data.time}</p>
                    </span>
                    <span>{data.time}</span>
                    <span>{data.action}</span>
                </div>
            ))}
        </div>
    )
}

export default AdminActivitiesTab
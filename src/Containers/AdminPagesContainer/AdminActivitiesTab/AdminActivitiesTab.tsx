import { useContext } from "react"
import classes from "./AdminActivitiesTab.module.css"
import { AppContext } from "../../../Context/AppContext"
import { useParams } from "react-router-dom"

const AdminActivitiesTab = () => {
    // Context
    const { adminData } = useContext(AppContext)

    // Router
    const { AdminId } = useParams()

    const activeAdmin = adminData.find((data) => {
        return data.adminFullName.replace(' ', '-').toLowerCase() === AdminId
    })

    return (
        <div className={classes.container}>
            <div className={classes.tableHeader}>
                <span>Date</span>
                <span>Time</span>
                <span>Actions</span>
            </div>
            {activeAdmin?.activitiesData.map((data, i) => (
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
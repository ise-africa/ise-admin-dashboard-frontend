import { useState } from 'react'
import HelloUser from '../../../Components/HelloUser/HelloUser'
import classes from './SupportBoard.module.css'
import { Link } from 'react-router-dom'
import { SupportTrackingData } from '../SupportTrackingData'

const SupportBoard = () => {

    // const { SupportTrackingId } = useParams();

    // States 
    const [searchTerm, setSearchTerm] = useState('')

    const getStatusClass = (status: string) => {
        switch (status) {
            case 'open':
                return classes.open
            case 'closed':
                return classes.closed
            case 'resolved':
                return classes.resolved
        }
    }

    const filteredSupportTrackingData = SupportTrackingData.filter(data => {
        return (
            data.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            data.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    });


    return (
        <div className={classes.container}>
            <HelloUser
                header='Support Board'
                paragraph='Review, resolve, and provide support efficiently.'
            />
            <div className={classes.subContainer}>
                <div className={classes.inputSection}>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        placeholder="Search by name or email"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                            stroke="#2E2E2E"
                            strokeWidth="2"
                            stroke-linecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <div className={classes.content}>
                    <div className={classes.tableHeader}>
                        <span>Ticket ID</span>
                        <span>Submitted by</span>
                        <span>Subject</span>
                        <span>Status</span>
                        <span>Action</span>
                    </div>
                    {filteredSupportTrackingData.length === 0 ? (
                        <div className={classes.noResult}>No search results for the user "{searchTerm}" available</div>
                    ) : (
                        filteredSupportTrackingData.map((data, i) => {
                            const statusClassName = getStatusClass(data.status)
                            return (
                                <div key={i} className={classes.tableBody}>
                                    <span>{data.id}</span>
                                    <span>{data.email}</span>
                                    <span>{data.subject}</span>
                                    <span className={`${statusClassName} ${classes.status}`}>{data.status}</span>
                                    <span><Link to={`/support/:SupportTrackingId`}>View</Link></span>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        </div>
    )
}

export default SupportBoard
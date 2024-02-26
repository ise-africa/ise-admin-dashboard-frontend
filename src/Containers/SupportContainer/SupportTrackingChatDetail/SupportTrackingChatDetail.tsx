import React, { useContext } from 'react';
import classes from './SupportTrackingChatDetail.module.css';
import Breadcrumbs from '../../../Components/Breadcrumbs/Breadcrumbs';
import breadcrumbsBack from "../../../Assets/Images/breadcrumbsBack.svg";
import { AppContext } from '../../../Context/AppContext';
import { useParams } from 'react-router-dom';

const SupportTrackingChatDetail = () => {
    // Context
    const { supportData } = useContext(AppContext);

    // Router
    const { SupportTrackingId } = useParams();

    const activeSupportTracking = supportData.find((data) => {
        return data.id === SupportTrackingId;
    });

    // Utils
    const breadCrumbs = {
        image: breadcrumbsBack,
        array: [
            {
                title: "Back to support",
                route: "/support",
            },
            {
                title: `#${SupportTrackingId}`,
                route: `/support/${SupportTrackingId}`,
            },
        ],
    };

    const getStatusClass = (status: string | undefined) => {
        switch (status) {
            case 'open':
                return classes.open
            case 'closed':
                return classes.closed
            case 'resolved':
                return classes.resolved
        }
    }

    return (
        <div className={classes.body}>
            <div className={classes.breadCrumbs}>
                <Breadcrumbs {...breadCrumbs} />
            </div>

            <div className={classes.container}>
                <div className={classes.header}>
                    <h3>{activeSupportTracking?.subject}</h3>
                    <span className={`${classes.status} ${getStatusClass(activeSupportTracking?.status)}`}>
                        {activeSupportTracking?.status}
                    </span>
                </div>

                {activeSupportTracking?.supportChat.map((chatMessage, index) => (
                    <div key={index} className={classes.chatMessage}>
                        <div className={classes.topInfo}>
                            <img src={chatMessage.avatar} alt={chatMessage.name} />
                            <div>
                                <span>{chatMessage.name}</span>
                                <span>{chatMessage.date}</span>
                            </div>
                        </div>
                        <blockquote className={classes.bottomInfo}>
                            {chatMessage.message}
                        </blockquote>
                        {chatMessage.attachmentFile && (
                            <div className={classes.attachment}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.58333 18.3333C8.30556 18.3333 7.22222 17.8889 6.33333 17C5.44444 16.1111 5 15.0278 5 13.75V4.99999C5 4.08332 5.32639 3.2986 5.97917 2.64582C6.63194 1.99305 7.41667 1.66666 8.33333 1.66666C9.25 1.66666 10.0347 1.99305 10.6875 2.64582C11.3403 3.2986 11.6667 4.08332 11.6667 4.99999V12.9167C11.6667 13.5 11.4653 13.993 11.0625 14.3958C10.6597 14.7986 10.1667 15 9.58333 15C9 15 8.50694 14.7986 8.10417 14.3958C7.70139 13.993 7.5 13.5 7.5 12.9167V4.99999H8.75V12.9167C8.75 13.1528 8.82986 13.3507 8.98958 13.5104C9.14931 13.6701 9.34722 13.75 9.58333 13.75C9.81944 13.75 10.0174 13.6701 10.1771 13.5104C10.3368 13.3507 10.4167 13.1528 10.4167 12.9167V4.99999C10.4167 4.41666 10.2153 3.9236 9.8125 3.52082C9.40972 3.11805 8.91667 2.91666 8.33333 2.91666C7.75 2.91666 7.25694 3.11805 6.85417 3.52082C6.45139 3.9236 6.25 4.41666 6.25 4.99999V13.75C6.25 14.6667 6.57639 15.4514 7.22917 16.1042C7.88194 16.7569 8.66667 17.0833 9.58333 17.0833C10.5 17.0833 11.2847 16.7569 11.9375 16.1042C12.5903 15.4514 12.9167 14.6667 12.9167 13.75V4.99999H14.1667V13.75C14.1667 15.0278 13.7222 16.1111 12.8333 17C11.9444 17.8889 10.8611 18.3333 9.58333 18.3333Z" fill="#2E2E2E" />
                                </svg>
                                <span>Attachment</span>
                                <a href="#0">{chatMessage.attachmentFile}</a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SupportTrackingChatDetail;

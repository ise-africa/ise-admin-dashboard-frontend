import React from 'react';
// import { SupportTrackingData } from '../SupportTrackingData';
import classes from './SupportTrackingChatDetail.module.css';
import Breadcrumbs from '../../../Components/Breadcrumbs/Breadcrumbs';
import breadcrumbsBack from "../../../Assets/Images/breadcrumbsBack.svg";

import senderAvatar from '../../../Assets/Images/johnDoeSenderAvatar.svg'
import responderAvatar from '../../../Assets/Images/iseResponderAvatar.svg'

const SupportTrackingChatDetail = () => {
    // Utils
    const breadCrumbs = {
        image: breadcrumbsBack,
        array: [
            {
                title: "Back to support",
                route: "/support",
            },
            {
                title: "#001",
                route: "/support/:SupportTrackingId",
            },
        ],
    };

    return (
        <div className={classes.body}>
            <div className={classes.breadCrumbs}>
                <Breadcrumbs {...breadCrumbs} />
            </div>

            <div className={classes.container}>
                <div className={classes.header}>
                    <h3>The subject of support should go here</h3>
                    <span>open</span>
                </div>
                <div>
                    <div className={classes.topInfo}>
                        <img src={responderAvatar} alt="Ise Support Team" />
                        <div>
                            <span>ise Susport team</span>
                            <span>Aug 26, 2023, 4:06 PM GMT+3</span>
                        </div>
                    </div>
                    <blockquote className={classes.bottomInfo}>
                        Hi there,<br />
                        Thank you for reaching out about your Gig, Gigs shift their position daily and we cannot guarantee search positions and impressions. Gigs may also be removed from our Search feature due to poor performance. You can continue working with your existing buyers. We are here if you have additional questions.
                    </blockquote>
                </div>
                <div>
                    <div className={classes.topInfo}>
                        <img src={senderAvatar} alt="John Doe" />
                        <div>
                            <span>John Doe</span>
                            <span>Aug 26, 2023, 4:06 PM GMT+3</span>
                        </div>
                    </div>
                    <blockquote className={classes.bottomInfo}>
                        Hi there,<br />
                        Thank you for reaching out about your Gig, Gigs shift their position daily and we cannot guarantee search positions and impressions. Gigs may also be removed from our Search feature due to poor performance. You can continue working with your existing buyers. We are here if you have additional questions.
                    </blockquote>
                    <div className={classes.attachment}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.58333 18.3333C8.30556 18.3333 7.22222 17.8889 6.33333 17C5.44444 16.1111 5 15.0278 5 13.75V4.99999C5 4.08332 5.32639 3.2986 5.97917 2.64582C6.63194 1.99305 7.41667 1.66666 8.33333 1.66666C9.25 1.66666 10.0347 1.99305 10.6875 2.64582C11.3403 3.2986 11.6667 4.08332 11.6667 4.99999V12.9167C11.6667 13.5 11.4653 13.993 11.0625 14.3958C10.6597 14.7986 10.1667 15 9.58333 15C9 15 8.50694 14.7986 8.10417 14.3958C7.70139 13.993 7.5 13.5 7.5 12.9167V4.99999H8.75V12.9167C8.75 13.1528 8.82986 13.3507 8.98958 13.5104C9.14931 13.6701 9.34722 13.75 9.58333 13.75C9.81944 13.75 10.0174 13.6701 10.1771 13.5104C10.3368 13.3507 10.4167 13.1528 10.4167 12.9167V4.99999C10.4167 4.41666 10.2153 3.9236 9.8125 3.52082C9.40972 3.11805 8.91667 2.91666 8.33333 2.91666C7.75 2.91666 7.25694 3.11805 6.85417 3.52082C6.45139 3.9236 6.25 4.41666 6.25 4.99999V13.75C6.25 14.6667 6.57639 15.4514 7.22917 16.1042C7.88194 16.7569 8.66667 17.0833 9.58333 17.0833C10.5 17.0833 11.2847 16.7569 11.9375 16.1042C12.5903 15.4514 12.9167 14.6667 12.9167 13.75V4.99999H14.1667V13.75C14.1667 15.0278 13.7222 16.1111 12.8333 17C11.9444 17.8889 10.8611 18.3333 9.58333 18.3333Z" fill="#2E2E2E" />
                        </svg>
                        <span>Attachment</span>
                        <a href="#0">Screen Shot 2023-12-12 at 4.01.22 PM.png</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupportTrackingChatDetail;

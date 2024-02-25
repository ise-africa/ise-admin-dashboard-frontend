import senderAvatar from '../Assets/Images/johnDoeSenderAvatar.svg'
import responderAvatar from '../Assets/Images/iseResponderAvatar.svg'

export type SupportChatMessageType = {
    avatar: string;
    name: string;
    date: string;
    message: string;
    attachmentFile?: string;
};

export type SupportTrackingDataType = {
    id: string;
    status: string;
    email: string;
    name: string;
    subject: string;
    supportChat: SupportChatMessageType[];
};

export const SupportTrackingData: SupportTrackingDataType[] = [
    {
        id: "005",
        status: 'open',
        email: 'jamessmith@gmail.com',
        name: 'James Smith',
        subject: 'Issue with Gig Position',
        supportChat: [
            {
                avatar: responderAvatar,
                name: 'ise Support team',
                date: 'Aug 26, 2023, 4:06 PM GMT+3',
                message: `Hi there,
                    Thank you for reaching out about your Gig, Gigs shift their position daily and we cannot guarantee search positions and impressions. Gigs may also be removed from our Search feature due to poor performance. You can continue working with your existing buyers. We are here if you have additional questions.`
            },
            {
                avatar: senderAvatar,
                name: 'John Doe',
                date: 'Aug 26, 2023, 4:06 PM GMT+3',
                attachmentFile: "Screen Shot 2023-12-12 at 4.01.22 PM.png",
                message: `Hi there,
                    Thank you for reaching out about your Gig, Gigs shift their position daily and we cannot guarantee search positions and impressions. Gigs may also be removed from our Search feature due to poor performance. You can continue working with your existing buyers. We are here if you have additional questions.`
            },
            {
                avatar: senderAvatar,
                name: 'John Doe',
                date: 'Aug 26, 2023, 4:06 PM GMT+3',
                message: `Hi there,
                    Hi there, Thank you for reaching out about your Gig, Gigs shift their position daily and we cannot guarantee search positions and impressions. `
            },
            {
                avatar: senderAvatar,
                name: 'John Doe',
                date: 'Aug 26, 2023, 4:06 PM GMT+3',
                message: `Hi there,
                    Hi there, Thank you for reaching out about your Gig, Gigs shift their position daily and we cannot guarantee search positions and impressions. `
            },
        ],
    },
    {
        id: "004",
        status: 'resolved',
        email: 'ginnalacell@gmail.com',
        name: 'Ginna Lacell',
        subject: 'Not seeing my videos1, The course progress is not updated',
        supportChat: [
            {
                avatar: responderAvatar,
                name: 'ise Support team',
                date: 'Aug 26, 2023, 4:06 PM GMT+3',
                message: `Hi Ginna,
                    Thank you for contacting us. We've reviewed your issue, and it seems to be related to a temporary server glitch. Our technical team has resolved the problem, and you should now be able to view your videos and see updated course progress without any further issues. If you encounter any more problems, feel free to reach out to us.`
            },
            {
                avatar: senderAvatar,
                name: 'Ginna Lacell',
                date: 'Aug 26, 2023, 4:15 PM GMT+3',
                attachmentFile: "Screen Shot 2023-12-12 at 4.01.22 PM.png",
                message: `Thank you for your prompt response. I can now see my videos and the course progress has been updated correctly. I appreciate your help!`
            },
        ],
    },
    {
        id: "003",
        status: 'closed',
        email: 'sarahgreen@gmail.com',
        name: 'Sarah Green',
        subject: 'Not seeing my videos2, The course progress is not updated',
        supportChat: [
            {
                avatar: responderAvatar,
                name: 'ise Support team',
                date: 'Aug 25, 2023, 3:30 PM GMT+3',
                message: `Hello Sarah,
                    Thank you for reaching out. We apologize for the inconvenience you're experiencing. Our technical team is currently investigating the issue with video visibility and course progress. We'll get back to you shortly with an update and a resolution.`
            },
            {
                avatar: responderAvatar,
                name: 'ise Support team',
                date: 'Aug 25, 2023, 5:45 PM GMT+3',
                attachmentFile: "Screen Shot 2023-12-12 at 4.01.22 PM.png",
                message: `Sarah,
                    We've identified the problem causing the issue with video visibility and course progress. A fix has been implemented, and you should now be able to access your videos and see the updated course progress. Please check and let us know if everything is working as expected.`
            },
            {
                avatar: senderAvatar,
                name: 'Sarah Green',
                date: 'Aug 25, 2023, 6:00 PM GMT+3',
                message: `Thank you for your assistance! Everything is working perfectly now. I appreciate your prompt attention to this matter.`
            },
        ],
    },
    {
        id: "002",
        status: 'closed',
        email: 'willliamsbrown@gmail.com',
        name: 'Willliams Brown',
        subject: 'Not seeing my videos3, The course progress is not updated',
        supportChat: [
            {
                avatar: responderAvatar,
                name: 'ise Support team',
                date: 'Aug 24, 2023, 2:00 PM GMT+3',
                message: `Hello Willliams,
                    We've received your inquiry regarding video visibility and course progress. Our technical team is currently investigating the issue. We'll keep you updated on the progress and provide a solution as soon as possible.`
            },
            {
                avatar: responderAvatar,
                name: 'ise Support team',
                date: 'Aug 25, 2023, 12:30 PM GMT+3',
                message: `Willliams,
                    We've resolved the issue causing the problem with video visibility and course progress. You should now be able to access your videos and track your course progress without any further trouble. If you encounter any more issues, please don't hesitate to contact us.`
            },
        ],
    },
    {
        id: "001",
        status: 'closed',
        email: 'dennistoughly@gmail.com',
        name: 'Dennis Toughly',
        subject: 'Not seeing my videos, The course progress is not updated',
        supportChat: [
            {
                avatar: responderAvatar,
                name: 'ise Support team',
                date: 'Aug 23, 2023, 4:45 PM GMT+3',
                message: `Hi Dennis,
                    Thank you for bringing this to our attention. We're aware of the issue with video visibility and course progress. Our team is actively working on a resolution and will update you as soon as the problem is resolved. We appreciate your patience and understanding.`
            },

            {
                avatar: responderAvatar,
                name: 'ise Support team',
                date: 'Aug 24, 2023, 3:30 PM GMT+3',
                attachmentFile: "Screen Shot 2023-12-12 at 4.01.22 PM.png",
                message: `Dennis,
                    We've successfully fixed the issue causing the problem with video visibility and course progress. Please check your account now, and everything should be functioning as expected. If you need any further assistance, feel free to reach out to us.`
            },
            {
                avatar: senderAvatar,
                name: 'Dennis Toughly',
                date: 'Aug 24, 2023, 3:45 PM GMT+3',
                message: `Thank you for your help! I've checked, and everything is working perfectly now. I really appreciate your prompt response and resolution of the issue.`
            },
        ],
    },
];



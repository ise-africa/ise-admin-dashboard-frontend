export type supportTrackingDataType = {
    id: string;
    name: string;
    email: string;
    status: string;
    subject: string;
}[];

export const supportTrackingData: supportTrackingDataType = [
    {
        id: "#005",
        status: 'open',
        email: 'johndoe@gmail.com',
        name: 'James Smith',
        subject: '',
    },
    {
        id: "#004",
        status: 'resolved',
        email: 'johndoe@gmail.com',
        name: 'Ginna Lacell',
        subject: 'Not seeing my videos1, The course progress is not updated',
    },
    {
        id: "#003",
        status: 'closed',
        email: 'johndoe@gmail.com',
        name: 'Sarah Green',
        subject: 'Not seeing my videos2, The course progress is not updated',
    },
    {
        id: "#002",
        status: 'closed',
        email: 'johndoe@gmail.com',
        name: 'Willliams Brown',
        subject: 'Not seeing my videos3, The course progress is not updated',
    },
    {
        id: "#001",
        status: 'closed',
        email: 'johndoe@gmail.com',
        name: 'Dennis Toughly',
        subject: 'Not seeing my videos, The course progress is not updated',
    },
];

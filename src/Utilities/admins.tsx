import amirahTemi from '../Assets/Images/amirahTemi.svg';

export type adminsDataType = {
    adminImage: string;
    adminName: string;
    adminRole: string;
    emailAddress: string;
    joinedDate: string;
    displayOptions: boolean;
};

export const adminsData: adminsDataType[] = [
    {
        adminImage: amirahTemi,
        adminName: "John Doe",
        adminRole: "Owner/super administrator",
        emailAddress: "john.doe@example.com",
        joinedDate: "02 Aug, 2022",
        displayOptions: true
    },
    {
        adminImage: amirahTemi,
        adminName: "Jane Smith",
        adminRole: "User administrator",
        emailAddress: "jane.smith@example.com",
        joinedDate: "02 Aug, 2022",
        displayOptions: false
    },
    {
        adminImage: amirahTemi,
        adminName: "Alice Johnson",
        adminRole: "Support administrator",
        emailAddress: "alice.johnson@example.com",
        joinedDate: "02 Aug, 2022",
        displayOptions: true
    },
    {
        adminImage: amirahTemi,
        adminName: "Michael Brown",
        adminRole: "Community manager",
        emailAddress: "michael.brown@example.com",
        joinedDate: "pending",
        displayOptions: true
    },
    {
        adminImage: amirahTemi,
        adminName: "Emily Williams",
        adminRole: "Course/content administrator",
        emailAddress: "emily.williams@example.com",
        joinedDate: "pending",
        displayOptions: false
    }
];

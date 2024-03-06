import amirahTemi from '../Assets/Images/amirahTemi.svg';

export type adminsDataType = {
    adminImage: string;
    adminFullName: string;
    adminFirstName: string;
    adminLastName: string;
    adminRole: string;
    adminAbout: string;
    password: string;
    linkedInUrl: string;
    emailAddress: string;
    dateJoined: string;
    displayOptions: boolean;
    permissionsData: {
        title: string;
        details: string[];
    }[];
    activitiesData: {
        time: string;
        date: string;
        action: string;
    }[];
};

export const userAdminData = [
    {
        title: "User account management:",
        details: ["Creation, modification, and deletion of student and tutor accounts."]
    },
    {
        title: "Students' enrollment:",
        details: ["Manage the enrollment process for students."]
    },
    {
        title: "Data reports and insights:",
        details: ["Generate reports from the dashboard to support decision-making."]
    },
    {
        title: "Communication management:",
        details: [
            "Handle email notifications, messaging, and announcements.",
            "Manage user registration, account activation, and password resets."
        ]
    },
];

export const superAdminData = [
    {
        title: "Platform control and Administration",
        details: ["Total control over the entire platform."]
    },
    {
        title: "User account management",
        details: [
            "Assign roles and permissions to other admins.",
            "Oversee user management for both students and tutors."
        ]
    },
    {
        title: "School management",
        details: ["Create and manage schools within the platform."]
    },
    {
        title: "Payment management",
        details: ["Oversee platform payment processes and transactions."]
    },
    {
        title: "API integration and management",
        details: ["Supervise and set up third-party integrations and APIs."]
    },
    {
        title: "Platform settings and preference management",
        details: ["Configuration and maintenance of system settings and preferences."]
    }
];

export const adminsData: adminsDataType[] = [
    {
        adminImage: amirahTemi,
        adminFullName: "John Doe",
        adminFirstName: "John",
        adminLastName: "Doe",
        adminRole: "Owner/super administrator",
        adminAbout: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        password: "password123",
        linkedInUrl: "https://www.linkedin.com/in/johndoe/",
        emailAddress: "john.doe@example.com",
        dateJoined: "02 Aug, 2022",
        displayOptions: true,
        permissionsData: superAdminData,
        activitiesData: [
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
    },
    {
        adminImage: amirahTemi,
        adminFullName: "Jane Smith",
        adminFirstName: "Jane",
        adminLastName: "Smith",
        adminRole: "User administrator",
        adminAbout: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        password: "password123",
        linkedInUrl: "https://www.linkedin.com/in/janesmith/",
        emailAddress: "jane.smith@example.com",
        dateJoined: "02 Aug, 2022",
        displayOptions: true,
        permissionsData: userAdminData,
        activitiesData: [
            {
                time: "10:00AM",
                date: "10 Oct, 2023",
                action: `Modified user account settings`,
            },
            {
                time: "11:30AM",
                date: "12 Oct, 2023",
                action: `Analyzed data reports`,
            }
        ]
    },
    {
        adminImage: amirahTemi,
        adminFullName: "Alice Johnson",
        adminFirstName: "Alice",
        adminLastName: "Johnson",
        adminRole: "Support administrator",
        adminAbout: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        password: "password123",
        linkedInUrl: "https://www.linkedin.com/in/alicejohnson/",
        emailAddress: "alice.johnson@example.com",
        dateJoined: "02 Aug, 2022",
        displayOptions: false,
        permissionsData: userAdminData,
        activitiesData: [
            {
                time: "11:01AM",
                date: "12 Oct, 2023",
                action: `Modified roles and permissions for "Bob Johnson"`,
            },
            {
                time: "12:15PM",
                date: "15 Oct, 2023",
                action: `Reviewed user enrollment data`,
            }
        ]
    },
    {
        adminImage: amirahTemi,
        adminFullName: "Michael Brown",
        adminFirstName: "Michael",
        adminLastName: "Brown",
        adminRole: "Community manager",
        adminAbout: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        password: "password123",
        linkedInUrl: "https://www.linkedin.com/in/michaelbrown/",
        emailAddress: "michael.brown@example.com",
        dateJoined: "pending",
        displayOptions: true,
        permissionsData: userAdminData,
        activitiesData: [
            {
                time: "11:01AM",
                date: "12 Oct, 2023",
                action: `Modified roles and permissions for "Bob Johnson"`,
            },
            {
                time: "12:15PM",
                date: "15 Oct, 2023",
                action: `Reviewed user enrollment data`,
            }
        ]
    },
    {
        adminImage: amirahTemi,
        adminFullName: "Emily Williams",
        adminFirstName: "Emily",
        adminLastName: "Williams",
        adminRole: "Course/content administrator",
        adminAbout: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        password: "password123",
        linkedInUrl: "https://www.linkedin.com/in/emilywilliams/",
        emailAddress: "emily.williams@example.com",
        dateJoined: "pending",
        displayOptions: false,
        permissionsData: userAdminData,
        activitiesData: [
            {
                time: "10:00AM",
                date: "10 Oct, 2023",
                action: `Modified user account settings`,
            },
            {
                time: "11:30AM",
                date: "12 Oct, 2023",
                action: `Analyzed data reports`,
            }
        ]
    }
];

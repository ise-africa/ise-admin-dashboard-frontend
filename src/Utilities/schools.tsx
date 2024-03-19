import image from '../Assets/Images/schoolImage.svg';

export type SchoolDataType = {
    isActive: boolean;
    schoolId: string;
    schoolName: string;
    schoolImage: string;
    schoolTagline: string;
    schoolDescription: string;
    schoolImportance: {
        list: string
    }[];
    nameOfSchool: string;
    status: string;
    totalCourse: number;
    displayOptions: boolean;
};

export const schoolsData: SchoolDataType[] = [
    {
        isActive: true,
        schoolId: '0001',
        schoolName: 'School of Business',
        schoolImage: image,
        schoolTagline: 'Help business grow',
        schoolDescription: 'Ignite your business potential with our resources at ise School of Business. Gain the knowledge and skills to thrive',
        schoolImportance: [
            { list: "Embark on a transformative learning journey with our courses in talent acquisition, customer success and project management." },
            { list: "Master the art of talent acquisition for business success." },
            { list: "Develop practical skills in managing customer expectations and supporting business goals." },
            { list: "Acquire expertise in managing projects and delivering results." },
            { list: "Gain valuable skills for real-world projects" },
            { list: "Choose between a free short course or a comprehensive paid program" },
        ],
        nameOfSchool: 'iṣẹ́ School of Business',
        status: 'Active',
        totalCourse: 1,
        displayOptions: false
    },
    {
        isActive: false,
        schoolId: '002',
        schoolName: 'School of Software Development',
        schoolImage: image,
        schoolTagline: 'Unlock the world of software',
        schoolDescription: 'Ignite your Software Development potential with our resources at ise School of Software Development. Gain the knowledge and skills to thrive.',
        schoolImportance: [
            { list: "Learn fundamental programming concepts and techniques." },
            { list: "Explore advanced topics such as software architecture and design patterns." },
            { list: "Gain hands-on experience through real-world projects and case studies." },
            { list: "Collaborate with industry professionals and fellow learners." },
            { list: "Stay updated with the latest technologies and industry trends." }
        ],
        nameOfSchool: 'iṣẹ́ School of Software Development',
        status: 'Inactive',
        totalCourse: 0,
        displayOptions: false
    },
    {
        isActive: true,
        schoolId: '003',
        schoolName: 'School of Design',
        schoolImage: image,
        schoolTagline: 'Create with imagination',
        schoolDescription: 'Explore your creativity and design skills at the School of Design. Develop innovative solutions and bring your ideas to life.',
        schoolImportance: [
            { list: "Learn design principles and techniques from industry experts." },
            { list: "Gain hands-on experience using industry-standard design tools and software." },
            { list: "Collaborate with peers on design projects and challenges." },
            { list: "Receive feedback and guidance from experienced designers." },
            { list: "Build a portfolio showcasing your design projects and achievements." }
        ],
        nameOfSchool: 'iṣẹ́ School of Design',
        status: 'Active',
        totalCourse: 2,
        displayOptions: true
    },
    {
        isActive: true,
        schoolId: '004',
        schoolName: 'School of Medicine',
        schoolImage: image,
        schoolTagline: 'Heal with compassion',
        schoolDescription: 'Join us at the School of Medicine to embark on a journey of healing and discovery. Learn from top medical professionals and make a difference in people\'s lives.',
        schoolImportance: [
            { list: "Study anatomy, physiology, and medical sciences to understand the human body." },
            { list: "Gain practical clinical experience through internships and rotations." },
            { list: "Develop communication and empathy skills essential for patient care." },
            { list: "Conduct research to advance medical knowledge and treatments." },
            { list: "Join a community dedicated to promoting health and well-being." }
        ],
        nameOfSchool: 'iṣẹ́ School of Medicine',
        status: 'Active',
        totalCourse: 4,
        displayOptions: true
    },
    {
        isActive: true,
        schoolId: '005',
        schoolName: 'School of Engineering',
        schoolImage: image,
        schoolTagline: 'Innovate for tomorrow',
        schoolDescription: 'Explore the frontiers of technology and innovation at the School of Engineering. Develop groundbreaking solutions to real-world problems and shape the future.',
        schoolImportance: [
            { list: "Master core engineering principles and methodologies." },
            { list: "Participate in hands-on projects and engineering challenges." },
            { list: "Collaborate with industry partners on research and development initiatives." },
            { list: "Gain practical skills in designing and implementing engineering solutions." },
            { list: "Be part of a community driving technological advancements and societal impact." }
        ],
        nameOfSchool: 'iṣẹ́ School of Engineering',
        status: 'Inactive',
        totalCourse: 3,
        displayOptions: true
    },
];

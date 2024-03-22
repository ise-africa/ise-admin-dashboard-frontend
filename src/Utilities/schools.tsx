import schoolImage from '../Assets/Images/schoolImage.svg';
import courseImage from '../Assets/Images/courseImage.svg';

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
    courses: {
        courseId: string;
        courseName: string;
        courseDescription: string;
        courseImage: string;
        difficultyLevel: string;
        cohortName: string;
        applicationDeadLine: string;
        startDate: string;
        cohortDuration: string;
        cohortTutor: string;
        cohortPrice: string;
        cohortCapacity: string;
        objectives: {
            list: string
        }[];
        cohorts: {
            cohortId: string;
            cohortName: string;
            dateCreated: string;
            status: string;
        }[];
    }[];
};

export const schoolsData: SchoolDataType[] = [
    {
        isActive: true,
        schoolId: '0001',
        schoolName: 'School of Business',
        schoolImage: schoolImage,
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
        displayOptions: false,
        courses: [
            {
                courseId: '1',
                courseName: 'Talent Acquisition Course',
                courseDescription: 'Our Introduction to Talent Acquisition course is designed for beginners. This course covers fundamental principles, strategies, and best practices in recruiting top talent. Learn how to create effective job postings, conduct interviews, and make informed hiring decisions. Acquire the essential knowledge and tools to excel in your talent acquisition journey.',
                courseImage: courseImage,
                difficultyLevel: 'Beginner level course',
                cohortName: 'Talent Acquisition May Cohort',
                applicationDeadLine: '12 Feb, 2024',
                startDate: '12 May, 2024',
                cohortDuration: '4 months',
                cohortTutor: 'Olawuyi Justus',
                cohortPrice: '₦110,000',
                cohortCapacity: '55',
                objectives: [
                    { list: "Develop a deep understanding of Talent Acquisition strategies and practices" },
                    { list: "Beginner-friendly program- no experience needed" },
                    { list: "Receive personalised one-on-one mentorship and guidance sessions" },
                    { list: "Gain practical skills to source, assess, and hire top talent effectively" },
                    { list: "Gain valuable skills for real-world projects" },
                    { list: "Complete course in 4 months at 10hrs/week" },
                ],
                cohorts: [
                    {
                        cohortId: "01",
                        cohortName: "Frontend Jan Cohort",
                        dateCreated: "Jan 1, 2024",
                        status: "upcoming",
                    },
                    {
                        cohortId: "02",
                        cohortName: "Frontend Jan Cohort",
                        dateCreated: "Jan 1, 2024",
                        status: "closed",
                    },
                    {
                        cohortId: "03",
                        cohortName: "Frontend Jan Cohort",
                        dateCreated: "Jan 1, 2024",
                        status: "active",
                    },
                ]
            }
        ]
    },
    {
        isActive: false,
        schoolId: '002',
        schoolName: 'School of Software Development',
        schoolImage: schoolImage,
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
        displayOptions: false,
        courses: []
    },
    {
        isActive: true,
        schoolId: '003',
        schoolName: 'School of Design',
        schoolImage: schoolImage,
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
        displayOptions: true,
        courses: [
            {
                courseId: '2',
                courseName: 'Graphic Design Course',
                courseDescription: 'Our Graphic Design course is designed for individuals who want to explore their creativity and develop practical design skills. Learn how to use industry-standard tools and software to create stunning visual compositions. From typography to color theory, this course covers essential design principles and techniques. Start your journey in graphic design and unleash your creative potential.',
                courseImage: courseImage,
                difficultyLevel: 'Intermediate level course',
                cohortName: 'Graphic Design May Cohort',
                applicationDeadLine: '15 Feb, 2024',
                startDate: '15 May, 2024',
                cohortDuration: '6 months',
                cohortTutor: 'Adeleke Oluwaseun',
                cohortPrice: '₦150,000',
                cohortCapacity: '45',
                objectives: [
                    { list: "Develop a strong foundation in graphic design principles and techniques" },
                    { list: "Hands-on experience with industry-standard design tools and software" },
                    { list: "Create visually compelling designs for various media platforms" },
                    { list: "Collaborate with peers ondesign projects and receive constructive feedback" },
                    { list: "Build a professional portfolio showcasing your graphic design skills" },
                    { list: "Complete course in 6 months at 8hrs/week" }
                ],
                cohorts: [
                    {
                        cohortId: "04",
                        cohortName: "Graphic Design April Cohort",
                        dateCreated: "Apr 1, 2024",
                        status: "active",
                    },
                    {
                        cohortId: "05",
                        cohortName: "Graphic Design February Cohort",
                        dateCreated: "Feb 1, 2024",
                        status: "closed",
                    },
                    {
                        cohortId: "06",
                        cohortName: "Graphic Design December Cohort",
                        dateCreated: "Dec 1, 2023",
                        status: "closed",
                    },
                ]
            },
            {
                courseId: '3',
                courseName: 'Web Design Course',
                courseDescription: 'Our Web Design course is designed to equip you with the skills and knowledge needed to create dynamic and responsive websites. Learn HTML, CSS, and JavaScript, along with design principles and best practices. Build a portfolio of projects that demonstrate your proficiency in web design and launch your career as a professional web designer.',
                courseImage: courseImage,
                difficultyLevel: 'Intermediate level course',
                cohortName: 'Web Design June Cohort',
                applicationDeadLine: '20 Mar, 2024',
                startDate: '20 Jun, 2024',
                cohortDuration: '6 months',
                cohortTutor: 'Olumide Ajala',
                cohortPrice: '₦150,000',
                cohortCapacity: '50',
                objectives: [
                    { list: "Learn HTML, CSS, and JavaScript to build interactive and responsive websites" },
                    { list: "Explore design principles and best practices for effective web design" },
                    { list: "Hands-on experience with industry-standard web development tools and frameworks" },
                    { list: "Create a portfolio of web design projects to showcase your skills to potential employers" },
                    { list: "Complete course in 6 months at 8hrs/week" }
                ],
                cohorts: [
                    {
                        cohortId: "07",
                        cohortName: "Web Design April Cohort",
                        dateCreated: "Apr 1, 2024",
                        status: "upcoming",
                    },
                    {
                        cohortId: "08",
                        cohortName: "Web Design January Cohort",
                        dateCreated: "Jan 1, 2024",
                        status: "closed",
                    },
                    {
                        cohortId: "09",
                        cohortName: "Web Design October Cohort",
                        dateCreated: "Oct 1, 2023",
                        status: "closed",
                    },
                ]
            }
        ]
    },
    {
        isActive: true,
        schoolId: '004',
        schoolName: 'School of Medicine',
        schoolImage: schoolImage,
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
        displayOptions: true,
        courses: [
            {
                courseId: '4',
                courseName: 'Introduction to Anatomy',
                courseDescription: 'Our Introduction to Anatomy course provides an overview of the structure and function of the human body. Learn about the major organ systems, tissues, and cells that make up the human anatomy. Gain a foundational understanding of anatomy to support further studies in medicine, biology, and related fields.',
                courseImage: courseImage,
                difficultyLevel: 'Beginner level course',
                cohortName: 'Anatomy May Cohort',
                applicationDeadLine: '10 Mar, 2024',
                startDate: '10 May, 2024',
                cohortDuration: '3 months',
                cohortTutor: 'Dr. Adebayo Adekunle',
                cohortPrice: '₦120,000',
                cohortCapacity: '40',
                objectives: [
                    { list: "Learn the basic terminology and concepts of human anatomy" },
                    { list: "Understand the structure and function of major organ systems" },
                    { list: "Identify the anatomical structures and their locations in the body" },
                    { list: "Explore the relationship between anatomy and physiology" },
                    { list: "Complete course in 3 months at 6hrs/week" }
                ],
                cohorts: [
                    {
                        cohortId: "10",
                        cohortName: "Anatomy April Cohort",
                        dateCreated: "Apr 1, 2024",
                        status: "upcoming",
                    },
                    {
                        cohortId: "11",
                        cohortName: "Anatomy February Cohort",
                        dateCreated: "Feb 1, 2024",
                        status: "active",
                    },
                    {
                        cohortId: "12",
                        cohortName: "Anatomy November Cohort",
                        dateCreated: "Nov 1, 2023",
                        status: "closed",
                    },
                ]
            },
            {
                courseId: '5',
                courseName: 'Clinical Medicine',
                courseDescription: 'Our Clinical Medicine course offers hands-on training in diagnosing and treating medical conditions. Learn from experienced clinicians and gain practical experience in patient care. Develop the skills and knowledge needed to excel in clinical practice and make a positive impact on patient outcomes.',
                courseImage: courseImage,
                difficultyLevel: 'Intermediate level course',
                cohortName: 'Clinical Medicine June Cohort',
                applicationDeadLine: '15 Mar, 2024',
                startDate: '15 Jun, 2024',
                cohortDuration: '6 months',
                cohortTutor: 'Dr. Ifeoluwa Olamide',
                cohortPrice: '₦150,000',
                cohortCapacity: '35',
                objectives: [
                    { list: "Learn to perform medical history taking and physical examinations" },
                    { list: "Understand the principles of diagnosis and treatment of common medical conditions" },
                    { list: "Develop clinical reasoning and decision-making skills" },
                    { list: "Gain hands-on experience in clinical settings through internships and rotations" },
                    { list: "Complete course in 6 months at 8hrs/week" }
                ],
                cohorts: [
                    {
                        cohortId: "13",
                        cohortName: "Clinical Medicine April Cohort",
                        dateCreated: "Apr 1, 2024",
                        status: "upcoming",
                    },
                    {
                        cohortId: "14",
                        cohortName: "Clinical Medicine January Cohort",
                        dateCreated: "Jan 1, 2024",
                        status: "closed",
                    },
                    {
                        cohortId: "15",
                        cohortName: "Clinical Medicine October Cohort",
                        dateCreated: "Oct 1, 2023",
                        status: "closed",
                    },
                ]
            },
            {
                courseId: '6',
                courseName: 'Public Health',
                courseDescription: 'Our Public Health course explores the principles and practices of public health to address global health challenges. Learn about epidemiology, biostatistics, health policy, and environmental health. Gain the skills and knowledge needed to promote health, prevent diseases, and improve healthcare systems.',
                courseImage: courseImage,
                difficultyLevel: 'Intermediate level course',
                cohortName: 'Public Health June Cohort',
                applicationDeadLine: '20 Mar, 2024',
                startDate: '20 Jun, 2024',
                cohortDuration: '6 months',
                cohortTutor: 'Dr. Temitope Adeleke',
                cohortPrice: '₦150,000',
                cohortCapacity: '30',
                objectives: [
                    { list: "Understand the core concepts and principles of public health" },
                    { list: "Explore the role of epidemiology and biostatistics in public health research and practice" },
                    { list: "Examine health policy and its impact on population health outcomes" },
                    { list: "Address environmental health issues and promote sustainable practices" },
                    { list: "Complete course in 6 months at 8hrs/week" }
                ],
                cohorts: [
                    {
                        cohortId: "16",
                        cohortName: "Public Health April Cohort",
                        dateCreated: "Apr 1, 2024",
                        status: "upcoming",
                    },
                    {
                        cohortId: "17",
                        cohortName: "Public Health January Cohort",
                        dateCreated: "Jan 1, 2024",
                        status: "closed",
                    },
                    {
                        cohortId: "18",
                        cohortName: "Public Health October Cohort",
                        dateCreated: "Oct 1, 2023",
                        status: "closed",
                    },
                ]
            },
            {
                courseId: '7',
                courseName: 'Medical Research Methods',
                courseDescription: 'Our Medical Research Methods course provides an introduction to research methodologies used in medical and health sciences. Learn how to design research studies, collect and analyze data, and communicate research findings. Gain the skills and knowledge needed to contribute to evidence-based practice and advance medical knowledge.',
                courseImage: courseImage,
                difficultyLevel: 'Advanced level course',
                cohortName: 'Research Methods May Cohort',
                applicationDeadLine: '25 Feb, 2024',
                startDate: '25 May, 2024',
                cohortDuration: '6 months',
                cohortTutor: 'Dr. Adeola Adeyemi',
                cohortPrice: '₦180,000',
                cohortCapacity: '25',
                objectives: [
                    { list: "Understand the principles of research design and methodology" },
                    { list: "Learn to critically evaluate scientific literature and research studies" },
                    { list: "Gain hands-on experience in designing and conducting research projects" },
                    { list: "Develop skills in data analysis using statistical software" },
                    { list: "Communicate research findings effectively through oral and written presentations" },
                    { list: "Complete course in 6 months at 8hrs/week" }
                ],
                cohorts: [
                    {
                        cohortId: "19",
                        cohortName: "Research Methods April Cohort",
                        dateCreated: "Apr 1, 2024",
                        status: "upcoming",
                    },
                    {
                        cohortId: "20",
                        cohortName: "Research Methods January Cohort",
                        dateCreated: "Jan 1, 2024",
                        status: "closed",
                    },
                    {
                        cohortId: "21",
                        cohortName: "Research Methods October Cohort",
                        dateCreated: "Oct 1, 2023",
                        status: "closed",
                    },
                ]
            }
        ]
    },
    {
        isActive: true,
        schoolId: '005',
        schoolName: 'School of Engineering',
        schoolImage: schoolImage,
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
        displayOptions: true,
        courses: [
            {
                courseId: '8',
                courseName: 'Introduction to Mechanical Engineering',
                courseDescription: 'Our Introduction to Mechanical Engineering course provides an overview of basic engineering principles and concepts. Learn about mechanics, thermodynamics, and materials science. Gain hands-on experience through design projects and simulations. Prepare yourself for further studies in mechanical engineering and related fields.',
                courseImage: courseImage,
                difficultyLevel: 'Beginner level course',
                cohortName: 'Mechanical Engineering June Cohort',
                applicationDeadLine: '20 Mar, 2024',
                startDate: '20 Jun, 2024',
                cohortDuration: '6 months',
                cohortTutor: 'Engr. Michael Adeyemi',
                cohortPrice: '₦150,000',
                cohortCapacity: '30',
                objectives: [
                    { list: "Understand the fundamental principles of mechanics and thermodynamics" },
                    { list: "Learn to apply engineering principles to solve real-world problems" },
                    { list: "Gain hands-on experience with engineering software and tools" },
                    { list: "Develop critical thinking and problem-solving skills" },
                    { list: "Complete course in 6 months at 8hrs/week" }
                ],
                cohorts: [
                    {
                        cohortId: "22",
                        cohortName: "Mechanical Engineering April Cohort",
                        dateCreated: "Apr 1, 2024",
                        status: "upcoming",
                    },
                    {
                        cohortId: "23",
                        cohortName: "Mechanical Engineering January Cohort",
                        dateCreated: "Jan 1, 2024",
                        status: "closed",
                    },
                    {
                        cohortId: "24",
                        cohortName: "Mechanical Engineering October Cohort",
                        dateCreated: "Oct 1, 2023",
                        status: "closed",
                    },
                ]
            },
            {
                courseId: '9',
                courseName: 'Electrical Engineering Fundamentals',
                courseDescription: 'Our Electrical Engineering Fundamentals course covers the basic principles and concepts of electrical engineering. Learn about circuits, electronics, and electromagnetism. Gain practical skills through hands-on experiments and projects. Prepare yourself for further studies in electrical engineering and related fields.',
                courseImage: courseImage,
                difficultyLevel: 'Intermediate level course',
                cohortName: 'Electrical Engineering May Cohort',
                applicationDeadLine: '15 Feb, 2024',
                startDate: '15 May, 2024',
                cohortDuration: '6 months',
                cohortTutor: 'Engr. Funmi Adekunle',
                cohortPrice: '₦150,000',
                cohortCapacity: '25',
                objectives: [
                    { list: "Understand the principles of electricity and magnetism" },
                    { list: "Learn to analyze and design electrical circuits" },
                    { list: "Gain practical experience with electronic components and devices" },
                    { list: "Explore applications of electrical engineering in various industries" },
                    { list: "Complete course in 6 months at 8hrs/week" }
                ],
                cohorts: [
                    {
                        cohortId: "25",
                        cohortName: "Electrical Engineering April Cohort",
                        dateCreated: "Apr 1, 2024",
                        status: "upcoming",
                    },
                    {
                        cohortId: "26",
                        cohortName: "Electrical Engineering January Cohort",
                        dateCreated: "Jan 1, 2024",
                        status: "closed",
                    },
                    {
                        cohortId: "27",
                        cohortName: "Electrical Engineering October Cohort",
                        dateCreated: "Oct 1, 2023",
                        status: "closed",
                    },
                ]
            },
            {
                courseId: '10',
                courseName: 'Introduction to Civil Engineering',
                courseDescription: 'Our Introduction to Civil Engineering course provides an overview of the principles and practices of civil engineering. Learn about structural engineering, transportation engineering, and environmental engineering. Gain hands-on experience through design projects and simulations. Prepare yourself for further studies in civil engineering and related fields.',
                courseImage: courseImage,
                difficultyLevel: 'Intermediate level course',
                cohortName: 'Civil Engineering June Cohort',
                applicationDeadLine: '20 Mar, 2024',
                startDate: '20 Jun, 2024',
                cohortDuration: '6 months',
                cohortTutor: 'Engr. Tolu Ajayi',
                cohortPrice: '₦150,000',
                cohortCapacity: '30',
                objectives: [
                    { list: "Understand the principles of structural analysis and design" },
                    { list: "Learn about transportation systems and infrastructure" },
                    { list: "Explore environmental considerations in civil engineering projects" },
                    { list: "Gain hands-on experience with engineering software and tools" },
                    { list: "Complete course in 6 months at 8hrs/week" }
                ],
                cohorts: [
                    {
                        cohortId: "28",
                        cohortName: "Civil Engineering April Cohort",
                        dateCreated: "Apr 1, 2024",
                        status: "upcoming",
                    },
                    {
                        cohortId: "29",
                        cohortName: "Civil Engineering January Cohort",
                        dateCreated: "Jan 1, 2024",
                        status: "closed",
                    },
                    {
                        cohortId: "30",
                        cohortName: "Civil Engineering October Cohort",
                        dateCreated: "Oct 1, 2023",
                        status: "closed",
                    },
                ]
            }
        ]
    },
];


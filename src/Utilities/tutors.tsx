import amirahTemi from '../Assets/Images/amirahTemi.svg';

export type courseAssignedType = {
  course: string;
  school: string;
};

export type tutorsDataType = {
  isActive: boolean;
  tutorImage: string;
  tutorFullName: string;
  tutorFirstName: string;
  tutorLastName: string;
  password: string;
  emailAddress: string;
  about: string;
  country: string;
  schoolLevel: string;
  linkedinProfileUrl: string;
  profileImage: string;
  courseAssigned: courseAssignedType[];
  displayOptions: boolean;
}[];

export const tutorsData: tutorsDataType = [
  {
    isActive: false,
    tutorImage: amirahTemi,
    tutorFullName: 'Olivia Davis',
    tutorFirstName: 'Olivia',
    tutorLastName: 'Davis',
    password: 'password1',
    emailAddress: 'olivia.davis@example.com',
    about:
      'Future entrepreneur with a passion for business and innovation. Always looking for opportunities to learn and create.',
    country: 'South Africa',
    schoolLevel: 'Postgraduate',
    linkedinProfileUrl: 'https://www.linkedin.com/in/oliviadavis',
    profileImage: 'https://example.com/images/oliviadavis.jpg',
    courseAssigned: [
      {
        course: "Not assigned",
        school: "Nil",
      },
    ],
    displayOptions: false,
  },
  {
    isActive: false,
    tutorImage: amirahTemi,
    tutorFullName: 'Daniel Wilson',
    tutorFirstName: 'Daniel',
    tutorLastName: 'Wilson',
    password: 'password2',
    emailAddress: 'daniel.wilson@example.com',
    about:
      'Art enthusiast exploring the world of digital art and design. Striving to bring creativity and imagination to life through visual storytelling.',
    country: 'Kenya',
    schoolLevel: 'Undergraduate',
    linkedinProfileUrl: 'https://www.linkedin.com/in/danielwilson',
    profileImage: 'https://example.com/images/danielwilson.jpg',
    courseAssigned: [
      {
        course: "Frontend development",
        school: "School of Engineering",
      },
      {
        course: "Frontend development",
        school: "School of Engineering",
      },
    ],
    displayOptions: false,
  },
  {
    isActive: false,
    tutorImage: amirahTemi,
    tutorFullName: 'Sophia Moore',
    tutorFirstName: 'Sophia',
    tutorLastName: 'Moore',
    password: 'password3',
    emailAddress: 'sophia.moore@example.com',
    about:
      'Advocate for social justice and equality. Committed to making a positive impact in the community through activism and awareness.',
    country: 'Nigeria',
    schoolLevel: 'Undergraduate',
    linkedinProfileUrl: 'https://www.linkedin.com/in/sophiamoore',
    profileImage: 'https://example.com/images/sophiamoore.jpg',
    courseAssigned: [
      {
        course: "Backend development",
        school: "School of Engineering",
      },
      {
        course: "Frontend development",
        school: "School of Engineering",
      },
    ],
    displayOptions: false,
  },
  {
    isActive: false,
    tutorImage: amirahTemi,
    tutorFullName: 'Liam Taylor',
    tutorFirstName: 'Liam',
    tutorLastName: 'Taylor',
    password: 'password4',
    emailAddress: 'liam.taylor@example.com',
    about:
      'Sports enthusiast with a love for soccer. Whether playing or watching, the passion for the game is always at the forefront.',
    country: 'Ghana',
    schoolLevel: 'Postgraduate',
    linkedinProfileUrl: 'https://www.linkedin.com/in/liamtaylor',
    profileImage: 'https://example.com/images/liamtaylor.jpg',
    courseAssigned: [
      {
        course: "Not assigned",
        school: "Nil",
      },
    ],
    displayOptions: false,
  },
  {
    isActive: false,
    tutorImage: amirahTemi,
    tutorFullName: 'Ava Jackson',
    tutorFirstName: 'Ava',
    tutorLastName: 'Jackson',
    password: 'password5',
    emailAddress: 'ava.jackson@example.com',
    about:
      'Science and technology enthusiast. Eager to explore the frontiers of knowledge and contribute to advancements in the field.',
    country: 'South Africa',
    schoolLevel: 'Undergraduate',
    linkedinProfileUrl: 'https://www.linkedin.com/in/avajackson',
    profileImage: 'https://example.com/images/avajackson.jpg',
    courseAssigned: [
      {
        course: "Backend development",
        school: "School of Engineering",
      },
      {
        course: "Frontend development",
        school: "School of Engineering",
      },
      {
        course: "Backend development",
        school: "School of Engineering",
      },
      {
        course: "Frontend development",
        school: "School of Engineering",
      },
    ],
    displayOptions: false,
  },
  {
    isActive: false,
    tutorImage: amirahTemi,
    tutorFullName: 'Sophie Adams',
    tutorFirstName: 'Sophie',
    tutorLastName: 'Adams',
    password: 'password6',
    emailAddress: 'sophie.adams@example.com',
    about:
      'Tech enthusiast with a focus on artificial intelligence. Constantly exploring ways to apply AI to solve real-world problems.',
    country: 'United Kingdom',
    schoolLevel: 'Undergraduate',
    linkedinProfileUrl: 'https://www.linkedin.com/in/sophieadams',
    profileImage: 'https://example.com/images/sophieadams.jpg',
    courseAssigned: [
      {
        course: "Not assigned",
        school: "Nil",
      },
    ],
    displayOptions: false,
  },
  {
    isActive: false,
    tutorImage: amirahTemi,
    tutorFullName: 'Ryan Carter',
    tutorFirstName: 'Ryan',
    tutorLastName: 'Carter',
    password: 'password7',
    emailAddress: 'ryan.carter@example.com',
    about:
      'Passionate about data science and analytics. Aspiring to make data-driven decisions and uncover meaningful insights.',
    country: 'United States',
    schoolLevel: 'Postgraduate',
    linkedinProfileUrl: 'https://www.linkedin.com/in/ryancarter',
    profileImage: 'https://example.com/images/ryancarter.jpg',
    courseAssigned: [
      {
        course: "Frontend development",
        school: "School of Engineering",
      },
      {
        course: "Frontend development",
        school: "School of Engineering",
      },
    ],
    displayOptions: false,
  },
  {
    isActive: false,
    tutorImage: amirahTemi,
    tutorFullName: 'Zara Patel',
    tutorFirstName: 'Zara',
    tutorLastName: 'Patel',
    password: 'password8',
    emailAddress: 'zara.patel@example.com',
    about:
      'Entrepreneurial spirit with a focus on startups and innovation. Dedicated to creating positive change through business ventures.',
    country: 'India',
    schoolLevel: 'Undergraduate',
    linkedinProfileUrl: 'https://www.linkedin.com/in/zarapatel',
    profileImage: 'https://example.com/images/zarapatel.jpg',
    courseAssigned: [
      {
        course: "Frontend development",
        school: "School of Engineering",
      },
      {
        course: "Frontend development",
        school: "School of Engineering",
      },
    ],
    displayOptions: false,
  },
  {
    isActive: false,
    tutorImage: amirahTemi,
    tutorFullName: 'Lucas Rodriguez',
    tutorFirstName: 'Lucas',
    tutorLastName: 'Rodriguez',
    password: 'password9',
    emailAddress: 'lucas.rodriguez@example.com',
    about:
      'Passionate about sustainable energy and environmental conservation. Striving to make a positive impact on the planet.',
    country: 'Brazil',
    schoolLevel: 'Postgraduate',
    linkedinProfileUrl: 'https://www.linkedin.com/in/lucasrodriguez',
    profileImage: 'https://example.com/images/lucasrodriguez.jpg',
    courseAssigned: [
      {
        course: "Not assigned",
        school: "Nil",
      },
    ],
    displayOptions: false,
  },
  {
    isActive: false,
    tutorImage: amirahTemi,
    tutorFullName: 'Mia Kim',
    tutorFirstName: 'Mia',
    tutorLastName: 'Kim',
    password: 'password10',
    emailAddress: 'mia.kim@example.com',
    about:
      'Aspiring UX/UI designer with a passion for creating user-centric and visually appealing digital experiences.',
    country: 'South Korea',
    schoolLevel: 'Undergraduate',
    linkedinProfileUrl: 'https://www.linkedin.com/in/miakim',
    profileImage: 'https://example.com/images/miakim.jpg',
    courseAssigned: [
      {
        course: "Frontend development",
        school: "School of Engineering",
      },
      {
        course: "Frontend development",
        school: "School of Engineering",
      },
      {
        course: "Frontend development",
        school: "School of Engineering",
      },
    ],
    displayOptions: false,
  },
  {
    isActive: false,
    tutorImage: amirahTemi,
    tutorFullName: 'Elijah Wright',
    tutorFirstName: 'Elijah',
    tutorLastName: 'Wright',
    password: 'password11',
    emailAddress: 'elijah.wright@example.com',
    about:
      'Sports enthusiast and fitness advocate. Believes in maintaining a healthy lifestyle and inspiring others to do the same.',
    country: 'Australia',
    schoolLevel: 'Postgraduate',
    linkedinProfileUrl: 'https://www.linkedin.com/in/elijahwright',
    profileImage: 'https://example.com/images/elijahwright.jpg',
    courseAssigned: [
      {
        course: "Not assigned",
        school: "Nil",
      },
    ],
    displayOptions: false,
  },
];

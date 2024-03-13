import courseImg1 from '../Assets/Images/CoursesSubmittedForReviewImage1.png';
import courseImg2 from '../Assets/Images/CoursesSubmittedForReviewImage2.png';

export type studentCoursesType = {
  id: string;
  status: string;
  totalAmount: number;
  paymentData: string;
  accontStatus: string;
  paymentStatus: string;
  enrollProgressPercent: string;
  enrollProgressStatus: string;
  courseImage: string;
  courseTitle: string;
  courseDescription: string;
}[];

export const studentCourses: studentCoursesType = [
  {
    id: "1",
    status: 'Paid',
    totalAmount: 20.00,
    paymentData: "19th Oct 2023",
    accontStatus: 'closed',
    paymentStatus: '1st installment paid 2nd upcoming',
    enrollProgressPercent: '50',
    enrollProgressStatus: 'withdrawn',
    courseImage: courseImg1,
    courseTitle: 'Machine Learning',
    courseDescription: 'Ignite your business potential with our resources at ise School of Business. Gain the knowledge and skills to thrive in the dynamic world of commerce. Lead and achieve greatness with essential business skills.',
  },
  {
    id: "1",
    status: 'Paid',
    totalAmount: 75.00,
    paymentData: "19th Oct 2023",
    accontStatus: 'closed',
    paymentStatus: '1st installment paid 2nd upcoming',
    enrollProgressPercent: '75',
    enrollProgressStatus: 'withdrawn',
    courseImage: courseImg2,
    courseTitle: 'Customer Success Management',
    courseDescription: 'Ignite your business potential with our resources at ise School of Business. Gain the knowledge and skills to thrive in the dynamic world of commerce. Lead and achieve greatness with essential business skills.',
  },
  {
    id: "1",
    status: 'Free',
    totalAmount: 25.55,
    paymentData: "19th Oct 2023",
    accontStatus: 'closed',
    paymentStatus: '1st installment paid 2nd upcoming',
    enrollProgressPercent: '100',
    enrollProgressStatus: 'withdrawn',
    courseImage: courseImg1,
    courseTitle: 'Frontend Development',
    courseDescription: 'Ignite your business potential with our resources at ise School of Business. Gain the knowledge and skills to thrive in the dynamic world of commerce. Lead and achieve greatness with essential business skills.',
  },
];

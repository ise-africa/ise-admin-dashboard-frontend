import image from '../Assets/Images/schoolImage.svg'

export type schoolsDataType = {
    isActive: boolean
    schoolId: string
    schoolName: string
    schoolImage: string
    schoolDescription: string
    status: string
    totalCourse: number
};

export const schoolsData: schoolsDataType[] = [
    {
        isActive: true,
        schoolId: '001',
        schoolName: 'School of Business',
        schoolImage: image,
        schoolDescription: 'Ignite your business potential with our resources at ise School of Business. Gain the knowledge and skills to thrive',
        status: 'Active',
        totalCourse: 1,
    },
    {
        isActive: false,
        schoolId: '002',
        schoolName: 'School of Software Development',
        schoolImage: image,
        schoolDescription: 'Ignite your Software Development potential with our resources at ise School of Software Development. Gain the knowledge and skills to thrive, Gain the knowledge and skills to thrive',
        status: 'Inactive',
        totalCourse: 0,
    },
]
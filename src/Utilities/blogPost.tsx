import postImage from '../Assets/Images/postImage.svg';

export type BlogPostDataType = {
    isActive: boolean;
    status: string;
    postId: string;
    postTitle: string;
    postImage: string;
    postDate: string;
    postCategory: string;
    postTag: string[];
};

export const blogsPostData: BlogPostDataType[] = [
    {
        isActive: true,
        postId: '0001',
        status: "Published",
        postImage: postImage,
        postTitle: 'Cybersecurity Trends: Safeguarding Digital Spaces',
        postCategory: 'Tech stories',
        postDate: '02 Aug, 2024',
        postTag: [
            "EdTech",
            "Free",
            "Technology"
        ],
    },
    {
        isActive: true,
        postId: '0002',
        status: "Draft",
        postImage: postImage,
        postTitle: 'The Future of Renewable Energy: Innovations and Challenges',
        postCategory: 'Science stories',
        postDate: '15 Sep, 2024',
        postTag: [
            "Science",
            "Research",
            "Renewable Energy"
        ],
    },
    {
        isActive: true,
        postId: '0003',
        status: "Archive",
        postImage: postImage,
        postTitle: 'Navigating the Stock Market: Tips for Beginners',
        postCategory: 'Business',
        postDate: '30 Nov, 2024',
        postTag: [
            "Business",
            "Finance",
            "Stock Market"
        ],
    },
    {
        isActive: true,
        postId: '0004',
        status: "Published",
        postImage: postImage,
        postTitle: 'The Impact of Artificial Intelligence on Healthcare',
        postCategory: 'Healthcare',
        postDate: '10 Jan, 2025',
        postTag: [
            "Healthcare",
            "Artificial Intelligence",
            "Innovation"
        ],
    },
    {
        isActive: true,
        postId: '0005',
        status: "Published",
        postImage: postImage,
        postTitle: 'Exploring Mars: Recent Discoveries and Future Missions',
        postCategory: 'Space Exploration',
        postDate: '25 Mar, 2025',
        postTag: [
            "Space",
            "Mars",
            "Exploration"
        ],
    }
];

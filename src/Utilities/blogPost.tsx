import postImage from '../Assets/Images/postImage.svg';

export type BlogPostDataType = {
    isActive: boolean;
    status: string;
    postId: string;
    postTitle: string;
    postImage: string;
    postDate: string;
    postContent: string;
    postCategory: string;
    postTag: string[];
};

export const blogsPostData: BlogPostDataType[] = [
    {
        isActive: true,
        postId: '00001',
        status: "Publish",
        postImage: postImage,
        postTitle: 'Cybersecurity Trends: Safeguarding Digital Spaces',
        postContent: "Are you an aspiring techie eager to make your mark in the tech industry? Whether you're a recent graduate, career changer, or self-taught enthusiast, the path to success may seem daunting. Fear not; we've compiled a concise guide to help you navigate the tech landscape and thrive in.....",
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
        postId: '00002',
        status: "Draft",
        postImage: postImage,
        postTitle: 'The Future of Renewable Energy: Innovations and Challenges',
        postContent: "Are you an aspiring techie eager to make your mark in the tech industry? Whether you're a recent graduate, career changer, or self-taught enthusiast, the path to success may seem daunting. Fear not; we've compiled a concise guide to help you navigate the tech landscape and thrive in.....",
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
        postId: '00003',
        status: "Archive",
        postImage: postImage,
        postTitle: 'Navigating the Stock Market: Tips for Beginners',
        postContent: "Are you an aspiring techie eager to make your mark in the tech industry? Whether you're a recent graduate, career changer, or self-taught enthusiast, the path to success may seem daunting. Fear not; we've compiled a concise guide to help you navigate the tech landscape and thrive in.....",
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
        postId: '00004',
        status: "Publish",
        postImage: postImage,
        postTitle: 'The Impact of Artificial Intelligence on Healthcare',
        postContent: "Are you an aspiring techie eager to make your mark in the tech industry? Whether you're a recent graduate, career changer, or self-taught enthusiast, the path to success may seem daunting. Fear not; we've compiled a concise guide to help you navigate the tech landscape and thrive in.....",
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
        postId: '00005',
        status: "Publish",
        postImage: postImage,
        postTitle: 'Exploring Mars: Recent Discoveries and Future Missions',
        postContent: "Are you an aspiring techie eager to make your mark in the tech industry? Whether you're a recent graduate, career changer, or self-taught enthusiast, the path to success may seem daunting. Fear not; we've compiled a concise guide to help you navigate the tech landscape and thrive in.....",
        postCategory: 'Space Exploration',
        postDate: '25 Mar, 2025',
        postTag: [
            "Space",
            "Mars",
            "Exploration"
        ],
    }
];

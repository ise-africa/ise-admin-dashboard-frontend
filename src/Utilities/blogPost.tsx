import postImage from '../Assets/Images/postImage.svg';
import postImage2 from '../Assets/Images/postImage2.svg';
import postImage3 from '../Assets/Images/postImage3.svg';

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
        postContent: "In today's interconnected world, cybersecurity is more important than ever. As technology advances, so do the threats against digital spaces. This blog explores the latest trends in cybersecurity and offers insights on how individuals and organizations can protect themselves from cyber attacks.",
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
        postContent: "Renewable energy holds the promise of a sustainable future, but it also presents unique challenges. This blog explores the latest innovations in renewable energy technology and discusses the challenges that must be overcome to achieve widespread adoption.",
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
        postContent: "The stock market can be intimidating for beginners, but with the right knowledge and strategies, anyone can become a successful investor. This blog offers practical tips for navigating the stock market, from understanding basic terminology to building a diversified portfolio.",
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
        postImage: postImage2,
        postTitle: 'The Impact of Artificial Intelligence on Healthcare',
        postContent: "Artificial intelligence is revolutionizing healthcare, from diagnosis and treatment to patient care and administrative tasks. This blog explores the transformative impact of AI on healthcare and discusses the opportunities and challenges it presents for patients, healthcare providers, and policymakers.",
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
        postImage: postImage3,
        postTitle: 'Exploring Mars: Recent Discoveries and Future Missions',
        postContent: "Mars has long captured the imagination of scientists and space enthusiasts alike. In recent years, there have been exciting discoveries about the Red Planet, from evidence of past water to the potential for microbial life. This blog explores recent discoveries about Mars and discusses future missions that will further our understanding of the planet.",
        postCategory: 'Space Exploration',
        postDate: '25 Mar, 2025',
        postTag: [
            "Space",
            "Mars",
            "Exploration"
        ],
    }
];

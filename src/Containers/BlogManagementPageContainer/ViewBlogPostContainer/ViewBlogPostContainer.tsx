import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../../Components/Button/Button';
import classes from "./ViewBlogPostContainer.module.css"
import { AppContext } from '../../../Context/AppContext';

const ViewBlogPostContainer = () => {
    // Router
    const navigate = useNavigate();
    const { PostId } = useParams();

    // Context
    const { blogPost } = useContext(AppContext);

    const activeBlogPost = blogPost.find(data => data.postId === PostId)
    const blogList = [
        `Start with the Basics: Begin your journey by mastering the fundamental concepts. Dive into coding languages like Python, JavaScript, or Java. Familiarize yourself with data structures, algorithms, and software development methodologies. Solidify your understanding of essential tech concepts to build a strong foundation.`,

        `Embrace Lifelong Learning: In tech, learning never stops. Stay curious and keep up with the latest trends, tools, and technologies. Engage in online courses, attend workshops, and join tech communities. Embrace continuous learning to adapt to the ever-evolving tech landscape.`,

        `Build Projects and Showcase Your Skills: Put theory into practice by working on real-world projects. Create apps, websites, or software solutions that showcase your skills. A portfolio of projects demonstrates your abilities to potential employers and clients. Share your projects on platforms like GitHub to gain visibility in the tech community.`,

        `Network, Network, Network: Building connections is vital in the tech industry. Attend tech events, conferences, and meetups to meet like-minded professionals—network with industry experts and potential mentors who can guide you on your tech journey. Networking can open doors to exciting opportunities and collaborations.`,

        `Seek Internships and Entry-Level Opportunities: Gaining hands-on experience is invaluable. Seek internships or entry-level positions in tech companies. Even if it's a small role, it exposes the industry's dynamics and provides growth opportunities. Work hard, show initiative, and leave a positive impression to make the most of these opportunities.`,

        `Develop Soft Skills: Tech professionals need more than technical expertise. Cultivate essential soft skills like communication, teamwork, and problem-solving. Effective communication is critical to collaborating with diverse teams and clients. Emphasize the value of your soft skills alongside your technical prowess.`,

        `Embrace Challenges and Learn from Failures: The tech industry is ever-changing and can be challenging. Embrace failure as a stepping stone to growth. Learn from your mistakes, adapt, and persevere. When you face challenges head-on, it fosters resilience and makes you a stronger techie.`,
    ]

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <p>You are previewing blogpost content</p>
                <Button
                    type='primary'
                    onClick={() => { navigate('/blogs') }}
                >
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.00073 1L5.58989 4.58916M20.0007 19L16.4119 15.4112M12.8756 16.8246C12.2684 16.9398 11.6419 17 11.0012 17C6.52354 17 2.73324 14.0571 1.45898 9.99997C1.80588 8.8955 2.33924 7.87361 3.02217 6.97118M8.87941 7.87868C9.4223 7.33579 10.1723 7 11.0007 7C12.6576 7 14.0007 8.34315 14.0007 10C14.0007 10.8284 13.6649 11.5784 13.1221 12.1213M8.87941 7.87868L13.1221 12.1213M8.87941 7.87868L5.58989 4.58916M13.1221 12.1213L5.58989 4.58916M13.1221 12.1213L16.4119 15.4112M5.58989 4.58916C7.14971 3.58354 9.0073 3 11.0012 3C15.4788 3 19.2691 5.94291 20.5434 10C19.8365 12.2507 18.3553 14.1585 16.4119 15.4112" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Leave preview</span>
                </Button>
            </div>
            <div className={classes.body}>
                <div className={classes.intro}>
                    <img src={activeBlogPost?.postImage} alt={activeBlogPost?.postTitle} />
                    <div>
                        {activeBlogPost?.postTag.map((tag, i) => (
                            <span key={i}>{tag}</span>
                        ))}
                        <h1>{activeBlogPost?.postTitle}</h1>
                        <p>{activeBlogPost?.postDate}, 3mins read</p>
                    </div>
                </div>
                <div className={classes.content}>
                    <p>{activeBlogPost?.postContent}</p>
                    <ol>
                        {blogList.slice(0, 2).map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ol>
                    <img src={activeBlogPost?.postImage2} alt={activeBlogPost?.postTitle} />
                    <p>Tips to help you start your pro journey</p>
                    <ol>
                        {blogList.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ol>
                    <p>The tech industry offers boundless opportunities for growth and innovation. By following these simple steps and staying committed to your goals, you'll be well on your way to becoming a pro in the tech world. Keep learning, stay curious, and remember that every step you take brings you closer to success in this exciting field. Happy tech journey.</p>
                </div>
            </div>
        </div>
    )
}

export default ViewBlogPostContainer
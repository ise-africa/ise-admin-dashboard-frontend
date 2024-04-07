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
        </div>
    )
}

export default ViewBlogPostContainer